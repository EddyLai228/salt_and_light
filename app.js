// ===== 鹽光青年 Salt & Light Youth — 應用邏輯 =====

(function () {
  "use strict";

  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll(".nav-link");
  const quickCards = document.querySelectorAll(".quick-card");

  function navigateTo(pageId) {
    pages.forEach((p) => p.classList.remove("active"));
    navLinks.forEach((l) => l.classList.remove("active"));
    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add("active");
      target.style.animation = "none";
      target.offsetHeight;
      target.style.animation = "";
    }
    navLinks.forEach((l) => {
      if (l.dataset.page === pageId) l.classList.add("active");
    });
    document.getElementById("navLinks").classList.remove("open");
    document.getElementById("navToggle").classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRoute() {
    const hash = window.location.hash.replace("#", "") || "home";
    navigateTo(hash);
  }
  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("load", handleRoute);

  [...navLinks, ...quickCards].forEach((el) => {
    el.addEventListener("click", (e) => {
      const page = el.dataset.page || el.getAttribute("href")?.replace("#", "");
      if (page) { e.preventDefault(); window.location.hash = page; }
    });
  });

  const navToggle = document.getElementById("navToggle");
  const navLinksEl = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinksEl.classList.toggle("open");
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#navbar")) {
      navToggle.classList.remove("open");
      navLinksEl.classList.remove("open");
    }
  });

  const navbar = document.getElementById("navbar");
  const scrollTopBtn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
    scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
  });
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  function showDailyVerse() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const v = dailyVerses[dayOfYear % dailyVerses.length];
    document.getElementById("dailyVerseText").textContent = `「${v.verse}」`;
    document.getElementById("dailyVerseRef").textContent = `— ${v.ref}`;
  }
  showDailyVerse();


  const GAMES_COLLECTION = "community_games";
  const SONGS_COLLECTION = "community_songs";
  const POSTS_COLLECTION = "community_posts";

  let customGames = [];
  let customSongs = [];
  let customPosts = [];
  let serverPostUpdates = {}; // Store updates (likes/comments) for default posts
  let allGames = [...games, ...customGames];
  let allSongs = [...songs, ...customSongs];
  let allPosts = [...defaultPosts, ...customPosts];
  let db = null;

  function rebuildCollections() {
    allGames = [...games, ...customGames];
    allSongs = [...songs, ...customSongs];
    // Merge default posts with server updates
    const mergedDefaultPosts = defaultPosts.map(p => {
        const update = serverPostUpdates[String(p.id)];
        if (update) {
            return { 
                ...p, 
                likes: (update.likes !== undefined) ? update.likes : p.likes,
                comments: (update.comments !== undefined) ? update.comments : p.comments
            };
        }
        return p;
    });
    allPosts = [...mergedDefaultPosts, ...customPosts];
  }

  function hasFirebaseConfig(config) {
    return Boolean(
      config &&
      config.apiKey &&
      config.authDomain &&
      config.projectId &&
      config.appId
    );
  }

  async function initFirebase() {
    if (db) return db;

    const firebaseConfig = window.FIREBASE_CONFIG;
    if (!hasFirebaseConfig(firebaseConfig) || !window.firebase) {
      return null;
    }

    try {
      if (!window.firebase.apps.length) {
        window.firebase.initializeApp(firebaseConfig);
      }
      db = window.firebase.firestore();
      return db;
    } catch {
      return null;
    }
  }

  async function loadCommunityData() {
    const firestore = await initFirebase();
    if (!firestore) return;
    try {
      const [gamesSnap, songsSnap, postsSnap] = await Promise.all([
        firestore.collection(GAMES_COLLECTION).get(),
        firestore.collection(SONGS_COLLECTION).get(),
        firestore.collection(POSTS_COLLECTION).get()
      ]);

      customGames = gamesSnap.docs.map((doc) => {
        const data = doc.data() || {};
        return {
          id: doc.id,
          name: data.name || "",
          category: data.category || "",
          description: data.description || "",
          minPlayers: Number(data.minPlayers) || 1,
          maxPlayers: Number(data.maxPlayers) || 1,
          duration: data.duration || "",
          materials: data.materials || "",
          rules: Array.isArray(data.rules) ? data.rules : []
        };
      });

      customSongs = songsSnap.docs.map((doc) => {
        const data = doc.data() || {};
        return {
          id: doc.id,
          name: data.name || "",
          artist: data.artist || "",
          type: data.type || "slow",
          link: data.link || "",
          tags: Array.isArray(data.tags) ? data.tags : [],
          chorus: data.chorus || ""
        };
      });

      customPosts = []; 
      serverPostUpdates = {}; // Clear old updates
      const defaultPostIds = new Set(defaultPosts.map(p => String(p.id)));

      postsSnap.docs.forEach((doc) => {
        const data = doc.data() || {};
        const id = doc.id;
        const postData = {
          id: id,
          title: data.title || "",
          content: data.content || "",
          author: data.author || "匿名",
          category: data.category || "心情分享",
          timestamp: data.timestamp || Date.now(),
          likes: Number(data.likes) || 0,
          comments: Array.isArray(data.comments) ? data.comments : []
        };

        if (defaultPostIds.has(id)) {
            // Update for default post
            serverPostUpdates[id] = { likes: postData.likes, comments: postData.comments };
        } else {
            // New custom post
            customPosts.push(postData);
        }
      });

      rebuildCollections();
      const activeFilterBtn = document.querySelector("#playerFilter .filter-btn.active");
      renderGames(activeFilterBtn?.dataset.filter || "all");
      renderSongs();
      renderPosts();
    } catch (err) {
      console.error(err);
      showToast("雲端資料讀取失敗");
    }
  }

  async function saveCommunityItem(type, item) {
    const firestore = await initFirebase();
    if (!firestore) throw new Error("尚未設定 Firebase，請先填 firebase-config.js");

    let collectionName;
    if (type === "game") collectionName = GAMES_COLLECTION;
    else if (type === "song") collectionName = SONGS_COLLECTION;
    else if (type === "post") collectionName = POSTS_COLLECTION;
    
    // Use regular timestamp since we mix with dummy timestamps on FE
    const payload = { ...item, timestamp: Date.now(), createdAt: window.firebase.firestore.FieldValue.serverTimestamp() };
    delete payload.id;
    await firestore.collection(collectionName).add(payload);
  }

  async function deleteCommunityPost(id) {
    const firestore = await initFirebase();
    if (!firestore) return;
    await firestore.collection(POSTS_COLLECTION).doc(id).delete();
  }

  function getPlayerCategory(min, max) {
    const cats = [];
    if (min <= 5) cats.push("small");
    if ((min <= 10 && max >= 5) || (min >= 5 && min <= 10)) cats.push("medium");
    if ((min <= 20 && max >= 10) || (min >= 10 && min <= 20)) cats.push("large");
    if (max > 20) cats.push("xlarge");
    return cats;
  }

  function renderGames(filter = "all") {
    const grid = document.getElementById("gamesGrid");
    const filtered = filter === "all" ? allGames : allGames.filter((g) => getPlayerCategory(g.minPlayers, g.maxPlayers).includes(filter));
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><p>沒有符合此人數的遊戲</p></div>`;
      return;
    }
    grid.innerHTML = filtered.map((g) => `
      <div class="game-card animate-in">
        <div class="game-card-header">
          <h3>${escapeHtml(g.name)}</h3>
          <div class="game-meta">
            <span class="game-tag">👥 ${g.minPlayers}-${g.maxPlayers} 人</span>
            <span class="game-tag accent">⏱ ${escapeHtml(g.duration)}</span>
            <span class="game-tag">${escapeHtml(g.category)}</span>
          </div>
        </div>
        <p class="game-description">${escapeHtml(g.description)}</p>
        <button class="game-rules-toggle" data-game-id="${g.id}">▼ 展開遊戲規則</button>
        <div class="game-rules" id="rules-${g.id}">
          <ol>${g.rules.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ol>
          <p class="materials">📦 所需材料：${escapeHtml(g.materials)}</p>
        </div>
      </div>`).join("");
    observeAnimations();
  }

  document.getElementById("playerFilter").addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter-btn")) return;
    document.querySelectorAll("#playerFilter .filter-btn").forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    renderGames(e.target.dataset.filter);
  });

  document.getElementById("gamesGrid").addEventListener("click", (e) => {
    const toggle = e.target.closest(".game-rules-toggle");
    if (!toggle) return;
    const rules = document.getElementById(`rules-${toggle.dataset.gameId}`);
    const isOpen = rules.classList.toggle("open");
    toggle.textContent = isOpen ? "▲ 收合遊戲規則" : "▼ 展開遊戲規則";
  });
  
  // Toggle Game Form
  document.getElementById("showGameFormBtn").addEventListener("click", () => {
    document.getElementById("gameFormCard").style.display = "block";
    document.getElementById("showGameFormBtn").style.display = "none";
  });
  document.getElementById("closeGameFormBtn").addEventListener("click", () => {
    document.getElementById("gameFormCard").style.display = "none";
    document.getElementById("showGameFormBtn").style.display = "inline-block";
  });

  renderGames();

  document.getElementById("gameAddForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("gameName").value.trim();
    const category = document.getElementById("gameCategory").value.trim();
    const description = document.getElementById("gameDescription").value.trim();
    const minPlayers = Number(document.getElementById("gameMinPlayers").value);
    const maxPlayers = Number(document.getElementById("gameMaxPlayers").value);
    const duration = document.getElementById("gameDuration").value.trim();
    const materials = document.getElementById("gameMaterials").value.trim();
    const rules = document.getElementById("gameRules").value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (!name || !category || !description || !duration || !materials || rules.length === 0) return;
    if (!Number.isFinite(minPlayers) || !Number.isFinite(maxPlayers) || minPlayers < 1 || maxPlayers < minPlayers) {
      showToast("請確認人數範圍（最多人數需大於等於最少人數）");
      return;
    }

    const newGame = { name, category, description, minPlayers, maxPlayers, duration, materials, rules };

    const btn = document.querySelector('#gameAddForm button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "新增中...";

    try {
      await saveCommunityItem("game", newGame);
      await loadCommunityData();
      
      // Reset and close form
      document.getElementById("gameAddForm").reset();
      document.getElementById("gameFormCard").style.display = "none";
      document.getElementById("showGameFormBtn").style.display = "inline-block";
      showToast("遊戲新增成功！");
    } catch (error) {
      showToast(error.message || "遊戲新增失敗");
    } finally {
      btn.disabled = false;
      btn.textContent = "新增遊戲";
    }
  });

  let currentSongFilter = "all";
  let currentSearchQuery = "";

  function getTypeLabel(type) {
    if (type === "fast") return "🔥 快歌";
    if (type === "slow") return "🕊️ 慢歌";
    if (type === "light") return "🎹 輕音樂";
    return type;
  }

  function renderSongs() {
    const grid = document.getElementById("songsGrid");
    let filtered = allSongs;
    if (currentSongFilter !== "all") filtered = filtered.filter((s) => s.type === currentSongFilter);
    if (currentSearchQuery) {
      const q = currentSearchQuery.toLowerCase();
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q) || s.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🎵</div><p>沒有符合的歌曲</p></div>`;
      return;
    }
    grid.innerHTML = filtered.map((s) => `
      <div class="song-card animate-in">
        <div class="song-card-header">
          <div class="song-info">
            <h3>${escapeHtml(s.name)}</h3>
            <span class="song-artist">${escapeHtml(s.artist)}</span>
          </div>
          <span class="song-type-badge ${s.type}">${getTypeLabel(s.type)}</span>
        </div>
        <div class="song-tags">
          ${s.tags.map((t) => `<span class="song-tag">${escapeHtml(t)}</span>`).join("")}
        </div>
        <div class="song-chorus">${escapeHtml(s.chorus)}</div>
        <div class="song-actions">
          <a class="btn-song" href="${s.link || 'https://www.youtube.com/results?search_query=' + encodeURIComponent(s.name + ' ' + s.artist)}" target="_blank" rel="noopener noreferrer">
            ${s.link ? '🎵 直接收聽' : '↗ 前往 YouTube'}
          </a>
        </div>
      </div>`).join("");
    observeAnimations();
  }

  document.getElementById("songTabs").addEventListener("click", (e) => {
    if (!e.target.classList.contains("tab-btn")) return;
    document.querySelectorAll("#songTabs .tab-btn").forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    currentSongFilter = e.target.dataset.tab;
    renderSongs();
  });

  document.getElementById("songSearch").addEventListener("input", (e) => {
    currentSearchQuery = e.target.value.trim();
    renderSongs();
  });
  
  // Toggle Song Form
  document.getElementById("showSongFormBtn").addEventListener("click", () => {
    document.getElementById("songFormCard").style.display = "block";
    document.getElementById("showSongFormBtn").style.display = "none";
  });
  document.getElementById("closeSongFormBtn").addEventListener("click", () => {
    document.getElementById("songFormCard").style.display = "none";
    document.getElementById("showSongFormBtn").style.display = "inline-block";
  });

  renderSongs();

  document.getElementById("songAddForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("songName").value.trim();
    const artist = document.getElementById("songArtist").value.trim();
    const type = document.getElementById("songType").value;
    const link = document.getElementById("songLink").value.trim();
    const chorus = document.getElementById("songChorus").value.trim();
    const tagsRaw = document.getElementById("songTags").value.trim();
    const tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);

    if (!name || !artist || !type || !chorus || tags.length === 0) return;

    const newSong = { name, artist, type, link, tags, chorus };

    const btn = document.querySelector('#songAddForm button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "新增中...";

    try {
      await saveCommunityItem("song", newSong);
      await loadCommunityData();
      
      // Reset and close form
      e.target.reset();
      document.getElementById("songFormCard").style.display = "none";
      document.getElementById("showSongFormBtn").style.display = "inline-block";
      showToast("詩歌新增成功！");
    } catch (error) {
      showToast(error.message || "詩歌新增失敗");
    } finally {
      btn.disabled = false;
      btn.textContent = "新增詩歌";
    }
  });

  loadCommunityData();

  let currentForumCategory = "所有";

  function renderForumTabs() {
    document.getElementById("forumTabs").innerHTML = forumCategories
      .map((cat) => `<button class="tab-btn ${cat === currentForumCategory ? "active" : ""}" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`)
      .join("");
  }

  const openCommentSections = new Set();


  function renderPosts() {
    const list = document.getElementById("postsList");
    let filtered = currentForumCategory === "所有" ? allPosts : allPosts.filter((p) => p.category === currentForumCategory);
    filtered = [...filtered].sort((a, b) => b.timestamp - a.timestamp);
    if (filtered.length === 0) {
      list.innerHTML = `<div class="empty-state"><div class="empty-icon">📝</div><p>還沒有分享，來當第一個吧！</p></div>`;
      return;
    }
    list.innerHTML = filtered.map((p) => {
      const isLiked = localStorage.getItem(`liked_${p.id}`);
      const isOpen = openCommentSections.has(String(p.id));
      const commentsHtml = (p.comments || []).map(c => `
        <div class="comment-item">
          <div class="comment-header">
            <span class="comment-author">${escapeHtml(c.author)}</span>
            <span>${formatTime(c.timestamp)}</span>
          </div>
          <div>${escapeHtml(c.content)}</div>
        </div>
      `).join("");

      return `
      <div class="post-card animate-in" data-id="${p.id}">
        <div class="post-header">
          <span class="post-title">${escapeHtml(p.title)}</span>
          <span class="post-category-badge ${p.category}">${escapeHtml(p.category)}</span>
        </div>
        <div class="post-content">${escapeHtml(p.content.replace(/\n/g, '<br>'))}</div>
        
        <div class="post-actions">
          <button class="btn-action btn-like ${isLiked ? 'liked' : ''}" onclick="toggleLike('${p.id}')">
            <span>${isLiked ? '❤️' : '🤍'}</span>
            <span class="action-count">${p.likes || 0}</span>
          </button>
          <button class="btn-action btn-comment-toggle" onclick="toggleComments('${p.id}')">
            <span>💬</span>
            <span class="action-count">${(p.comments || []).length}</span>
          </button>
        </div>

        <div class="post-comments-section ${isOpen ? 'open' : ''}" id="comments-${p.id}">
          <div class="comment-list">
            ${commentsHtml}
          </div>
          <form class="comment-form" onsubmit="submitComment(event, '${p.id}')">
            <input type="text" class="comment-input" placeholder="寫下你的回應..." required>
            <button type="submit" class="btn-comment-submit">送出</button>
          </form>
        </div>

        <div class="post-footer" style="border-top:none; margin-top:0; padding-top:8px;">
          <span><span class="post-author">${escapeHtml(p.author || "匿名")}</span> ・${formatTime(p.timestamp)}</span>
          ${typeof p.id === 'string' ? `<button class="post-delete" data-post-id="${p.id}">刪除</button>` : ''}
        </div>
      </div>`;
    }).join("");
    
    observeAnimations();
  }
  
  // Make functions available globally for onclick handlers
  window.toggleLike = async function(postId) {
    const isLiked = localStorage.getItem(`liked_${postId}`);
    const post = allPosts.find((p) => String(p.id) === String(postId));
    if (!post) return;

    if (isLiked) {
      // Unlike
      post.likes = Math.max(0, (post.likes || 0) - 1);
      localStorage.removeItem(`liked_${postId}`);
    } else {
      // Like
      post.likes = (post.likes || 0) + 1;
      localStorage.setItem(`liked_${postId}`, "true");
    }
    
    // Update DOM directly instead of re-rendering
    const card = document.querySelector(`.post-card[data-id="${postId}"]`);
    if (card) {
        const btn = card.querySelector('.btn-like');
        if (btn) {
           const countSpan = btn.querySelector('.action-count');
           const heartSpan = btn.querySelector('span:first-child');
           
           // Note: isLiked is the state BEFORE the toggle
           if (isLiked) {
               btn.classList.remove('liked');
               heartSpan.textContent = '🤍';
           } else {
               btn.classList.add('liked');
               heartSpan.textContent = '❤️';
           }
           countSpan.textContent = post.likes || 0;
        }
    }

    try {
      const db = await initFirebase();
      if (!db) return;

      const increment = window.firebase.firestore.FieldValue.increment(isLiked ? -1 : 1);
      
      // Use set with merge to create doc if it doesn't exist (important for default posts)
      await db.collection(POSTS_COLLECTION).doc(String(postId)).set(
        { likes: increment },
        { merge: true }
      );
    } catch (e) {
      console.error("Failed to update like", e);
      // Revert UI on error
      if (isLiked) {
        post.likes++;
        localStorage.setItem(`liked_${postId}`, "true");
      } else {
        post.likes--;
        localStorage.removeItem(`liked_${postId}`);
      }
      renderPosts();
      showToast("按讚失敗，請稍後再試");
    }
  };

  window.toggleComments = function(postId) {
    const id = String(postId);
    const el = document.getElementById(`comments-${id}`);
    if (el) {
        const isOpen = el.classList.toggle("open");
        if (isOpen) openCommentSections.add(id);
        else openCommentSections.delete(id);
    }
  };

  window.submitComment = async function(e, postId) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const content = input.value.trim();
    if (!content) return;

    const post = allPosts.find(p => String(p.id) === String(postId));
    if (!post) return;

    const newComment = {
      author: "訪客", // Or prompts user name
      content: content,
      timestamp: Date.now()
    };

    // Optimistic update
    if (!post.comments) post.comments = [];
    post.comments.push(newComment);
    input.value = "";
    
    // Direct DOM update instead of renderPosts()
    const section = document.getElementById(`comments-${postId}`);
    if (section) {
        const commentList = section.querySelector('.comment-list');
        const div = document.createElement("div");
        div.className = "comment-item";
        div.innerHTML = `
          <div class="comment-header">
            <span class="comment-author">${escapeHtml(newComment.author)}</span>
            <span>${formatTime(newComment.timestamp)}</span>
          </div>
          <div>${escapeHtml(newComment.content)}</div>
        `;
        commentList.appendChild(div);
        section.classList.add('open');
        openCommentSections.add(String(postId));
        
        // Update count badge
        const card = section.closest('.post-card');
        const countSpan = card.querySelector('.btn-comment-toggle .action-count');
        if (countSpan) countSpan.textContent = post.comments.length;
    }

    try {
      const db = await initFirebase();
      if (!db) return;

      const commentUpdate = window.firebase.firestore.FieldValue.arrayUnion(newComment);
      
      // Use set with merge to create doc if doesn't exist
      await db.collection(POSTS_COLLECTION).doc(String(postId)).set(
        { comments: commentUpdate }, 
        { merge: true }
      );
    } catch (e) {
      console.error("Failed to add comment", e);
      post.comments.pop(); 
      showToast("留言儲存失敗");
    }
  };

  document.getElementById("forumTabs").addEventListener("click", (e) => {
    if (!e.target.classList.contains("tab-btn")) return;
    document.querySelectorAll("#forumTabs .tab-btn").forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    currentForumCategory = e.target.dataset.cat;
    renderPosts();
  });

  // Toggle Post Form
  document.getElementById("showPostFormBtn").addEventListener("click", () => {
    document.getElementById("postFormCard").style.display = "block";
    document.getElementById("showPostFormBtn").style.display = "none";
  });
  document.getElementById("closePostFormBtn").addEventListener("click", () => {
    document.getElementById("postFormCard").style.display = "none";
    document.getElementById("showPostFormBtn").style.display = "inline-block";
  });

  document.getElementById("postForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const title = document.getElementById("postTitle").value.trim();
    const content = document.getElementById("postContent").value.trim();
    const author = document.getElementById("postAuthor").value.trim();
    const category = document.getElementById("postCategory").value;
    
    if (!title || !content) return;
    
    btn.disabled = true;
    btn.textContent = "發表中...";
    try {
      await saveCommunityItem("post", { title, content, author: author || "匿名", category });
      await loadCommunityData();
      
      document.getElementById("postTitle").value = "";
      document.getElementById("postContent").value = "";
      document.getElementById("postAuthor").value = "";
      
      document.getElementById("postFormCard").style.display = "none";
      document.getElementById("showPostFormBtn").style.display = "inline-block";
      showToast("分享發表成功！");
    } catch (err) {
      alert("新增失敗：" + err.message);
    } finally {
      btn.disabled = false;
      btn.textContent = "發表";
    }
  });

  document.getElementById("postsList").addEventListener("click", async (e) => {
    const btn = e.target.closest(".post-delete");
    if (!btn) return;
    const id = btn.dataset.postId;
    if (!confirm("確定要刪除這篇分享嗎？")) return;
    
    btn.disabled = true;
    btn.textContent = "刪除中...";
    try {
      await deleteCommunityPost(id);
      await loadCommunityData();
      showToast("已刪除");
    } catch (err) {
      alert("刪除失敗：" + err.message);
      btn.disabled = false;
      btn.textContent = "刪除";
    }
  });

  renderForumTabs();
  renderPosts();

  function escapeHtml(text) {
    if (!text) return "";
    const div = document.createElement("div");
    div.textContent = String(text);
    return div.innerHTML;
  }

  function formatTime(ts) {
    const d = new Date(ts);
    const diff = Date.now() - d;
    if (diff < 60000) return "剛剛";
    if (diff < 3600000) return `${Math.floor(diff / 60000)} 分鐘前`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} 小時前`;
    if (diff < 604800000) return `${Math.floor(diff / 86400000)} 天前`;
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
  }

  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) { toast = document.createElement("div"); toast.className = "toast"; document.body.appendChild(toast); }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
  }

  function observeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll(".animate-in:not(.visible)").forEach((el) => observer.observe(el));
  }
  observeAnimations();

  // ── 聖經故事渲染 ──
  function renderStories() {
    const container = document.getElementById("storiesGrid");
    if (!container || typeof bibleStories === 'undefined') return;
    
    container.innerHTML = "";
    bibleStories.forEach(story => {
      const article = document.createElement("article");
      article.className = "story-card";
      
      const tagsHtml = story.tags.map(tag => `<span>${tag}</span>`).join("");
      const contentHtml = story.paragraphs.map(p => `<p>${p}</p>`).join("");
      
      article.innerHTML = `
        <div class="story-icon">${story.icon}</div>
        <h3>${story.title}</h3>
        <p class="story-tags">${tagsHtml}</p>
        <div class="story-content">
          ${contentHtml}
          <p><strong>💡 想對你說：</strong>${story.takeaway}</p>
        </div>
      `;
      container.appendChild(article);
    });
  }
  renderStories();

})();
