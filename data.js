const dailyVerses = [
  { verse: "你們是世上的鹽。鹽若失了味，怎能叫它再鹹呢？", ref: "馬太福音 5:13" },
  { verse: "你們是世上的光。城造在山上，是不能隱藏的。", ref: "馬太福音 5:14" },
  { verse: "在世上你們有苦難，但你們可以放心，我已經勝了世界。", ref: "約翰福音 16:33" },
  { verse: "因為神賜給我們不是膽怯的心，乃是剛強、仁愛、謹守的心。", ref: "提摩太後書 1:7" },
  { verse: "你要專心仰賴耶和華，不可倚靠自己的聰明，在你一切所行的事上都要認定他，他必指引你的路。", ref: "箴言 3:5-6" },
  { verse: "我靠著那加給我力量的，凡事都能做。", ref: "腓立比書 4:13" },
  { verse: "耶和華是我的牧者，我必不致缺乏。", ref: "詩篇 23:1" },
  { verse: "神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。", ref: "約翰福音 3:16" },
  { verse: "不要為明天憂慮，因為明天自有明天的憂慮；一天的難處一天當就夠了。", ref: "馬太福音 6:34" },
  { verse: "你們祈求，就給你們；尋找，就尋見；叩門，就給你們開門。", ref: "馬太福音 7:7" },
  { verse: "凡勞苦擔重擔的人，可以到我這裡來，我就使你們得安息。", ref: "馬太福音 11:28" },
  { verse: "耶穌說：「我就是道路、真理、生命；若不藉著我，沒有人能到父那裡去。」", ref: "約翰福音 14:6" },
  { verse: "如今常存的有信，有望，有愛這三樣，其中最大的是愛。", ref: "哥林多前書 13:13" },
  { verse: "愛是恆久忍耐，又有恩慈；愛是不嫉妒；愛是不自誇，不張狂。", ref: "哥林多前書 13:4" },
  { verse: "我已經與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著。", ref: "加拉太書 2:20" },
  { verse: "若有人在基督裡，他就是新造的人，舊事已過，都變成新的了。", ref: "哥林多後書 5:17" },
  { verse: "耶和華是我的力量、是我的盾牌；我心裡倚靠他就得幫助。", ref: "詩篇 28:7" },
  { verse: "應當一無掛慮，只要凡事藉著禱告、祈求，和感謝，將你們所要的告訴神。", ref: "腓立比書 4:6" },
  { verse: "我要向山舉目；我的幫助從何而來？我的幫助從造天地的耶和華而來。", ref: "詩篇 121:1-2" },
  { verse: "但那等候耶和華的必重新得力。他們必如鷹展翅上騰；他們奔跑卻不困倦，行走卻不疲乏。", ref: "以賽亞書 40:31" },
  { verse: "萬事都互相效力，叫愛神的人得益處。", ref: "羅馬書 8:28" },
  { verse: "所以，你們要彼此接納，如同基督接納你們一樣，使榮耀歸與神。", ref: "羅馬書 15:7" },
  { verse: "喜樂的心乃是良藥；憂傷的靈使骨枯乾。", ref: "箴言 17:22" },
  { verse: "耶和華所賜的福使人富足，並不加上憂慮。", ref: "箴言 10:22" },
  { verse: "草必枯乾，花必凋殘，惟有我們神的話必永遠立定。", ref: "以賽亞書 40:8" },
  { verse: "因我們行事為人是憑著信心，不是憑著眼見。", ref: "哥林多後書 5:7" },
  { verse: "你們要將一切的憂慮卸給神，因為他顧念你們。", ref: "彼得前書 5:7" },
  { verse: "看哪，我站在門外叩門，若有聽見我聲音就開門的，我要進到他那裡去，我與他，他與我一同坐席。", ref: "啟示錄 3:20" },
  { verse: "不從惡人的計謀，不站罪人的道路，不坐褻慢人的座位，惟喜愛耶和華的律法，晝夜思想，這人便為有福！", ref: "詩篇 1:1-2" },
  { verse: "少年人用什麼潔淨他的行為呢？是要遵行你的話！", ref: "詩篇 119:9" },
  { verse: "你們要嘗嘗主恩的滋味，便知道他是美善，投靠他的人有福了！", ref: "詩篇 34:8" }
];

const games = [
  {
    id: 1, name: "殺手遊戲（狼人殺）",
    description: "經典推理遊戲，考驗觀察力和表達能力。很適合一群人聚在一起的時候玩！",
    minPlayers: 8, maxPlayers: 18, duration: "20-40 分鐘",
    materials: "角色牌或紙條", category: "推理",
    rules: ["每人抽取一張身份牌（殺手、平民、警察等）","遊戲分為黑夜和白天兩個階段","黑夜時殺手選擇要淘汰的人，警察可以查驗一人身份","白天所有人討論並投票淘汰一人","當殺手全部被淘汰，平民獲勝；反之殺手獲勝"]
  },
  {
    id: 2, name: "比手畫腳",
    description: "用肢體語言表達指定詞彙，不能說話！訓練創意表達和團隊默契。",
    minPlayers: 4, maxPlayers: 30, duration: "15-30 分鐘",
    materials: "題目卡、計時器", category: "表演",
    rules: ["分成兩隊或多隊","每隊輪流派一人上台比劃","比劃者看題目後用動作表達，不能說話、不能用嘴型","隊友在限定時間內猜出答案得分","可以加入各種有趣的主題詞彙"]
  },
  {
    id: 3, name: "誰是臥底",
    description: "每個人拿到一個詞，其中有人拿到不同的詞。透過描述找出誰是臥底！",
    minPlayers: 5, maxPlayers: 12, duration: "10-20 分鐘",
    materials: "手機 App 或自製詞卡", category: "推理",
    rules: ["大部分人拿到同一個詞（例如：聖誕節），臥底拿到相似的詞（例如：新年）","每人輪流用一句話描述自己的詞","描述要夠模糊讓臥底不知道正確詞，但夠明確讓隊友認出你","每輪描述後投票淘汰一人","臥底存活到最後或猜出正確詞即獲勝"]
  },
  {
    id: 4, name: "信任跌倒",
    description: "建立彼此信任的經典活動，閉上眼睛向後倒，由夥伴接住你。很好的破冰體驗！",
    minPlayers: 2, maxPlayers: 30, duration: "10-15 分鐘",
    materials: "無", category: "信任",
    rules: ["兩人一組，一人站在前方閉眼","向後倒下，由後方的夥伴接住","可以逐漸增加距離","結束後分享感受：信任別人是什麼感覺？","延伸思考：生活中我們信任什麼？"]
  },
  {
    id: 5, name: "支援前線",
    description: "考驗團隊合作和反應速度的大團體遊戲，超適合大型聚會破冰！",
    minPlayers: 10, maxPlayers: 50, duration: "15-25 分鐘",
    materials: "無（可準備一些道具如鞋子、筆等）", category: "活動",
    rules: ["分成多隊，每隊圍成一圈","主持人喊出指令：「前線需要支援！需要 3 隻鞋子！」","各隊要最快收集到指定物品跑到台前","最快到達的隊伍得分","可以出創意題目如：「5 個擁抱」「一首歌的歌詞」"]
  },
  {
    id: 6, name: "蘿蔔蹲",
    description: "考驗反應力和記憶力的經典遊戲，簡單好玩，馬上炒熱氣氛！",
    minPlayers: 5, maxPlayers: 15, duration: "10-15 分鐘",
    materials: "無", category: "反應",
    rules: ["每人取一個代號（例如用顏色、水果命名）","被點到名的人要蹲下並喊：「XX 蹲，XX 蹲，XX 蹲完 OO 蹲」","被叫到的人（OO）接著重複動作並點名下一位","反應太慢、做錯動作、或叫到已淘汰的人就出局","最後存活的人獲勝"]
  },
  {
    id: 7, name: "傳聲筒",
    description: "一個人傳一個人，看看訊息到最後會變成什麼樣子！超好笑又能省思溝通的重要。",
    minPlayers: 6, maxPlayers: 20, duration: "10-15 分鐘",
    materials: "準備好的句子", category: "溝通",
    rules: ["所有人排成一列","第一個人看到一段話","用耳語傳給下一個人，每人只能聽一次","最後一個人大聲說出聽到的內容","和原文對比，通常會非常爆笑！"]
  },
  {
    id: 8, name: "心臟病（撲克牌）",
    description: "反應力大考驗！簡單的撲克牌遊戲，任何人都能馬上加入。",
    minPlayers: 3, maxPlayers: 8, duration: "10-20 分鐘",
    materials: "撲克牌一副", category: "反應",
    rules: ["平均分配撲克牌給所有玩家","輪流出牌並報數（1, 2, 3...13 循環）","當喊的數字和出的牌一樣時，所有人要拍牌堆","最慢拍的人要收走所有的牌","最先出完所有牌的人獲勝"]
  },
  {
    id: 9, name: "猜猜我是誰",
    description: "寫下自己的小秘密，讓大家猜猜是誰寫的！很適合初次見面彼此認識。",
    minPlayers: 5, maxPlayers: 20, duration: "15-25 分鐘",
    materials: "紙條、筆", category: "認識",
    rules: ["每人在紙條上寫下 2-3 個別人不知道的事","收集所有紙條放在一起","主持人隨機抽出一張唸出來","大家猜猜是誰寫的","猜對得分，也藉此更認識彼此"]
  },
  {
    id: 10, name: "報紙島",
    description: "全組站在一張報紙上，報紙越折越小！考驗團隊合作和創意。",
    minPlayers: 4, maxPlayers: 20, duration: "10-15 分鐘",
    materials: "報紙數張", category: "合作",
    rules: ["分成多組，每組一張全開報紙","所有組員要站在報紙上","每輪把報紙對折一次，面積減半","組員必須想辦法全部站上去（可以背、抱、單腳站）","有人踩出報紙外的那組淘汰，存活最久的獲勝"]
  },
  {
    id: 11, name: "默契大考驗",
    description: "兩人一組回答問題，看看默契有多好！拉近彼此距離的好遊戲。",
    minPlayers: 4, maxPlayers: 20, duration: "15-20 分鐘",
    materials: "白板或紙、筆", category: "認識",
    rules: ["兩人一組（可以抽籤配對）","主持人出題（例如：對方最喜歡的顏色？最愛吃什麼？）","兩人各自寫下答案","同時亮出，答案一樣得分","最高分的組別獲勝"]
  },
  {
    id: 12, name: "聖經大挑戰",
    description: "趣味知識問答遊戲！一邊玩一邊認識這本全世界最暢銷的書📖",
    minPlayers: 4, maxPlayers: 30, duration: "15-30 分鐘",
    materials: "題目卡或投影片", category: "知識",
    rules: ["分成多隊","主持人出與聖經有關的題目（人物故事、冷知識等）","各隊搶答或輪流答題","可以設計不同難度等級和分數","答對最多的隊伍獲勝"]
  },
  {
    id: 13, name: "急轉彎故事接龍",
    description: "每人接一句話，一起創造一個瘋狂的故事！無門檻，超歡樂。",
    minPlayers: 4, maxPlayers: 15, duration: "10-15 分鐘",
    materials: "無", category: "創意",
    rules: ["所有人圍成一圈","第一個人說一句話開頭（例如：從前有一個人...）","每人依序接一句話，讓故事繼續發展","主持人可以隨時喊「急轉彎！」，下一個人要讓劇情大轉折","故事越離奇越好笑，最後一人做結尾"]
  },
  {
    id: 14, name: "真心話大冒險",
    description: "選真心話或大冒險，更深入認識你的朋友們！",
    minPlayers: 3, maxPlayers: 15, duration: "15-30 分鐘",
    materials: "真心話和大冒險題庫", category: "認識",
    rules: ["輪流或用轉瓶子/抽籤決定誰被問","被選中者選擇「真心話」或「大冒險」","真心話：必須誠實回答一個問題","大冒險：執行一個有趣的挑戰","注意：題目要適當，讓大家都能舒服地參與"]
  },
  {
    id: 15, name: "人體乒乓球",
    description: "用桌子當球桌、用手當球拍！超歡樂的團體遊戲。",
    minPlayers: 8, maxPlayers: 20, duration: "10-20 分鐘",
    materials: "長桌、乒乓球", category: "活動",
    rules: ["每組站在桌子的一側，模擬乒乓球賽","用嘴巴吹或用手拍球過網（用書本當網）","球掉落對方桌面外得分","每人只能碰一次球就要換下一位","率先拿到 11 分的隊伍獲勝"]
  }
];

const songs = [
  { id: 1, name: "Alive", artist: "Hillsong Young & Free", type: "fast", link: "https://www.youtube.com/watch?v=qEvEVALLjNQ&list=RDqEvEVALLjNQ&start_radio=1", tags: ["Hillsong", "活力"], chorus: "經典 Y&F 敬拜快歌" },
  { id: 2, name: "Battle Belongs", artist: "Phil Wickham", type: "fast", link: "https://www.youtube.com/watch?v=qtvQNzPHn-w&list=RDqtvQNzPHn-w&start_radio=1", tags: ["爭戰", "得勝"], chorus: "宣告爭戰屬於神" },
  { id: 3, name: "This Is Living", artist: "Hillsong Young & Free", type: "fast", link: "https://www.youtube.com/watch?v=tsJEmLkphrI&list=RDtsJEmLkphrI&start_radio=1", tags: ["Hillsong", "生命"], chorus: "ft. Lecrae，充滿活力" },
  { id: 4, name: "Our God", artist: "Chris Tomlin", type: "fast", link: "https://www.youtube.com/watch?v=NJpt1hSYf2o&list=RDNJpt1hSYf2o&start_radio=1", tags: ["經典", "宣告"], chorus: "Our God is greater, our God is stronger" },
  { id: 5, name: "This Is Amazing Grace", artist: "Phil Wickham", type: "fast", link: "https://www.youtube.com/watch?v=XFRjr_x-yxU&list=RDXFRjr_x-yxU&start_radio=1", tags: ["恩典", "讚美"], chorus: "傳唱度超高的恩典之歌" },
  { id: 6, name: "One Way", artist: "Hillsong Worship", type: "fast", link: "https://www.youtube.com/watch?v=yAJnHGoo44E&list=RDyAJnHGoo44E&start_radio=1", tags: ["Hillsong", "跟隨"], chorus: "One way, Jesus, You're the only one that I could live for" },
  { id: 7, name: "Wake", artist: "Hillsong Young & Free", type: "fast", link: "https://www.youtube.com/watch?v=e33zCUm1ZnY&list=RDe33zCUm1ZnY&start_radio=1", tags: ["Hillsong", "甦醒"], chorus: "充滿節奏感的甦醒之歌" },
  { id: 8, name: "We Praise You", artist: "Bethel Music / Brandon Lake", type: "fast", link: "https://www.youtube.com/watch?v=vVVXeKCg9w4&list=RDvVVXeKCg9w4&start_radio=1", tags: ["Bethel", "讚美"], chorus: "大聲讚美，充滿能量" },
  { id: 9, name: "Praise", artist: "Elevation Worship", type: "fast", link: "https://www.youtube.com/watch?v=f2oxGYpuLkw&list=RDf2oxGYpuLkw&start_radio=1", tags: ["Elevation", "讚美"], chorus: "ft. Brandon Lake, Chris Brown & Chandler Moore" },
  { id: 10, name: "Joy", artist: "Planetshakers", type: "fast", link: "https://www.youtube.com/watch?v=V9aJOCpRuxk&list=RDV9aJOCpRuxk&start_radio=1", tags: ["Planetshakers", "喜樂"], chorus: "Planetshakers 經典喜樂敬拜" },
  { id: 11, name: "All the Lights", artist: "Heart of God Church", type: "fast", link: "https://www.youtube.com/watch?v=OtSG9be3Y0M&list=RDOtSG9be3Y0M&start_radio=1", tags: ["HOGC", "光"], chorus: "新加坡教會的活力敬拜" },
  { id: 12, name: "Nothing is Impossible", artist: "Planetshakers", type: "fast", link: "https://www.youtube.com/watch?v=lbSPw7f3FxI&list=RDlbSPw7f3FxI&start_radio=1", tags: ["Planetshakers", "信心"], chorus: "在神沒有不可能的事" },
  { id: 13, name: "Freedom", artist: "Jesus Culture", type: "fast", link: "https://www.youtube.com/watch?v=dKxeZsZvp7E&list=RDdKxeZsZvp7E&start_radio=1", tags: ["自由", "釋放"], chorus: "ft. Kim Walker-Smith，自由的敬拜" },
  { id: 14, name: "Sold Out", artist: "Hawk Nelson", type: "fast", link: "https://www.youtube.com/watch?v=GspDybPhOeY", tags: ["委身", "搖滾"], chorus: "為主全然擺上！" },
  { id: 15, name: "God Is For Us", artist: "CityAlight", type: "fast", link: "https://www.youtube.com/watch?v=xxl1EOhJiRA", tags: ["CityAlight", "信心"], chorus: "若神幫助我們，誰能敵擋我們" },
  { id: 16, name: "Phenomena (DA DA)", artist: "Hillsong Young & Free", type: "fast", link: "https://www.youtube.com/watch?v=6UQRYaKLQZo", tags: ["Hillsong", "活力"], chorus: "超嗨的 Y&F 敬拜" },
  { id: 17, name: "Echo", artist: "Elevation Worship", type: "fast", link: "https://www.youtube.com/watch?v=Z8agqyGIaD8", tags: ["Elevation", "回聲"], chorus: "ft. Tauren Wells" },
  { id: 18, name: "Back to Life", artist: "Hillsong Young & Free", type: "fast", link: "https://www.youtube.com/watch?v=LDn5GX1m1lU", tags: ["Hillsong", "復活"], chorus: "從死裡復活的宣告" },
  { id: 19, name: "House Of The Lord", artist: "Hillsong Young & Free", type: "fast", link: "https://www.youtube.com/watch?v=5IsHCZmLGRY", tags: ["Hillsong", "喜樂"], chorus: "There's joy in the house of the Lord" },
  { id: 20, name: "I'm So Blessed", artist: "CAIN", type: "fast", link: "https://www.youtube.com/watch?v=Q4exKwB0WRk", tags: ["感恩", "祝福"], chorus: "數算恩典的歡樂之歌" },
  { id: 21, name: "Real Love", artist: "Hillsong Young & Free", type: "fast", link: "https://www.youtube.com/watch?v=DjPR9KlAgbw", tags: ["Hillsong", "愛"], chorus: "真實的愛" },
  { id: 22, name: "One Name", artist: "Heart of God Church", type: "fast", link: "https://www.youtube.com/watch?v=wq6V0eZOn9Q", tags: ["HOGC", "耶穌"], chorus: "Live in Hong Kong 版本" },
  { id: 23, name: "LEMME TELLYA", artist: "planetboom", type: "fast", link: "https://www.youtube.com/watch?v=LBttjIgodw0", tags: ["planetboom", "活力"], chorus: "年輕世代的嗨歌" },
  { id: 24, name: "Turn It Up", artist: "Planetshakers", type: "fast", link: "https://www.youtube.com/watch?v=gaOV-TH8G20", tags: ["Planetshakers", "讚美"], chorus: "把讚美的聲音開到最大" },
  { id: 25, name: "Electric Atmosphere", artist: "Planetshakers", type: "fast", link: "https://www.youtube.com/watch?v=o_zWljs6qhk", tags: ["Planetshakers", "氣氛"], chorus: "LIVE in Melbourne" },
  { id: 26, name: "歡欣 歡欣", artist: "新店行道會 TopWorship", type: "fast", link: "https://www.youtube.com/watch?v=pBHywXqmMkU", tags: ["TopWorship", "歡欣"], chorus: "充滿喜樂的中文敬拜" },
  { id: 27, name: "10000 Armies", artist: "Radical Worship", type: "fast", link: "https://www.youtube.com/watch?v=ZbYU17srf1Y", tags: ["爭戰", "得勝"], chorus: "萬軍之耶和華" },
  { id: 28, name: "Last Battle", artist: "新店行道會 TopWorship", type: "fast", link: "https://www.youtube.com/watch?v=2lztNKb26wY", tags: ["TopWorship", "爭戰"], chorus: "無名的傳道者 IV" },
  { id: 29, name: "Upside Down", artist: "新店行道會 TopWorship", type: "fast", link: "https://www.youtube.com/watch?v=0nKXkBzD7SE", tags: ["TopWorship", "翻轉"], chorus: "翻轉世界的信仰" },
  { id: 30, name: "復興之火", artist: "好歌分享", type: "fast", link: "https://www.youtube.com/watch?v=sqxJ9JasFpA", tags: ["復興", "火熱"], chorus: "點燃復興的渴望" },

  // — 讚美之泉 —
  { id: 31, name: "這一生最美的祝福", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=tPf7Ig1ebL4&list=RDtPf7Ig1ebL4&start_radio=1", tags: ["經典", "祝福"], chorus: "這一生最美的祝福，就是能認識主耶穌" },
  { id: 32, name: "被愛", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=Vg7qLy4LxhU&list=RDVg7qLy4LxhU&start_radio=1", tags: ["愛", "平安"], chorus: "專輯23《平安 Peace》" },
  { id: 33, name: "奇異恩典", artist: "傳統聖詩", type: "slow", link: "https://www.youtube.com/watch?v=v6EoqZB58f8&list=RDv6EoqZB58f8&start_radio=1", tags: ["經典", "恩典"], chorus: "Amazing Grace, how sweet the sound" },
  { id: 34, name: "如鹿切慕溪水", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=MIyqgVvX2rw&list=RDMIyqgVvX2rw&start_radio=1", tags: ["渴慕", "安靜"], chorus: "如鹿切慕溪水，我的心渴慕祢" },
  { id: 35, name: "回家", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=te2M8oWej80&list=RDte2M8oWej80&start_radio=1", tags: ["回家", "溫暖"], chorus: "Coming Home" },
  { id: 36, name: "深不見底的愛", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=H4MeSR_ilyY&list=RDH4MeSR_ilyY&start_radio=1", tags: ["愛", "深情"], chorus: "Endless Love" },
  { id: 37, name: "禱告", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=5SRbnxAX0Aw&list=RD5SRbnxAX0Aw&start_radio=1", tags: ["禱告", "安靜"], chorus: "I Pray" },
  { id: 38, name: "我選擇喜樂", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=f9TS-YfY-I8", tags: ["喜樂", "選擇"], chorus: "I Will Be Joyful" },
  { id: 39, name: "深深地敬拜", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=O_vAPfJNBpo&list=RDO_vAPfJNBpo&start_radio=1", tags: ["敬拜", "深沉"], chorus: "Deeply, I Worship" },
  { id: 40, name: "君王就在這裡", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=m1rx3I67UNc&list=RDm1rx3I67UNc&start_radio=1", tags: ["君王", "同在"], chorus: "Worthy Is the King" },
  { id: 41, name: "我要看見", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=kYHmfN8tXPM&list=RDkYHmfN8tXPM&start_radio=1", tags: ["渴望", "異象"], chorus: "I Want to See" },
  { id: 42, name: "展開清晨的翅膀", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=xugw9VE0pjc", tags: ["盼望", "清新"], chorus: "Wings of the Dawn" },
  { id: 43, name: "每一天我需要祢", artist: "讚美之泉", type: "slow", link: "https://www.youtube.com/watch?v=aCrjhEkNcpc&list=RDaCrjhEkNcpc&start_radio=1", tags: ["需要", "倚靠"], chorus: "I Need You" },
  // — 火把音樂 —
  { id: 44, name: "當我抬頭仰望", artist: "火把音樂", type: "slow", link: "https://www.youtube.com/watch?v=FqS_X_fVb7A", tags: ["火把", "仰望"], chorus: "當我抬頭仰望 祢手造的天" },
  { id: 45, name: "祢是我的救主", artist: "火把音樂", type: "slow", link: "https://www.youtube.com/watch?v=tIeE3r5C8fU", tags: ["火把", "救恩"], chorus: "祢是我的救主 祢是我的君王" },
  { id: 46, name: "為我而來", artist: "火把音樂", type: "slow", link: "https://www.youtube.com/watch?v=R0_t85Uo8r0", tags: ["火把", "愛"], chorus: "祢為我而來 為了愛我而來" },
  { id: 47, name: "全然得勝", artist: "火把音樂", type: "slow", link: "https://www.youtube.com/watch?v=pG-99yO2R3o", tags: ["火把", "得勝"], chorus: "在祢愛裡 我全然得勝" },
  { id: 48, name: "唯獨倚靠祢", artist: "火把音樂", type: "slow", link: "https://www.youtube.com/watch?v=sfVFR_UCXtM", tags: ["火把", "倚靠"], chorus: "唯獨倚靠祢 唯獨依靠祢" },
  { id: 49, name: "祢真美好", artist: "火把音樂", type: "slow", link: "https://www.youtube.com/watch?v=nFBfMWmjGQ0", tags: ["火把", "美好"], chorus: "Amazing 祢真美好" },
  { id: 50, name: "永恆閃耀", artist: "火把音樂", type: "slow", link: "https://www.youtube.com/watch?v=IZi7eOVgdOo", tags: ["火把", "永恆"], chorus: "抬頭看前方 永恆閃耀" },
  { id: 51, name: "器皿", artist: "火把音樂", type: "slow", link: "https://www.youtube.com/watch?v=8q-Y8i0X9rU", tags: ["火把", "器皿"], chorus: "我要潔淨我自己 預備成為祢器皿" },
  // — KUA Music —
  { id: 52, name: "專心來愛祢", artist: "陳奇恩", type: "slow", link: "https://www.youtube.com/watch?v=xcrKG4UYDTE", tags: ["KUA", "愛"], chorus: "Set My Heart on You" },
  { id: 53, name: "更多尋求祢", artist: "林道遠", type: "slow", link: "https://www.youtube.com/watch?v=-LGdFH5lWMA", tags: ["KUA", "尋求"], chorus: "The More I Seek You" },
  { id: 54, name: "愛是不保留", artist: "陽詠存 & 何俊鴻", type: "slow", link: "https://www.youtube.com/watch?v=dDoqu6pUi4M", tags: ["KUA", "愛"], chorus: "Unreserved Love" },
  { id: 55, name: "何等榮美的名", artist: "李玖哲", type: "slow", link: "https://www.youtube.com/watch?v=epZYVDNPEPk", tags: ["KUA", "耶穌"], chorus: "What A Beautiful Name" },
  { id: 56, name: "純潔的心", artist: "張榮怡", type: "slow", link: "https://www.youtube.com/watch?v=nqWCsvbJDhY", tags: ["KUA", "純潔"], chorus: "A Pure Heart" },
  { id: 57, name: "美哉主耶穌", artist: "楊蒨時", type: "slow", link: "https://www.youtube.com/watch?v=2QdD6nfr-qo", tags: ["KUA", "經典"], chorus: "Fairest Lord Jesus" },
  { id: 58, name: "祢愛永不變", artist: "謝淳雅", type: "slow", link: "https://www.youtube.com/watch?v=mVfd3ez9Abs", tags: ["KUA", "愛"], chorus: "Your Steadfast Love" },
  { id: 59, name: "祢同在如天堂降臨", artist: "林道遠", type: "slow", link: "https://www.youtube.com/watch?v=D2VeFsH1RXo", tags: ["KUA", "同在"], chorus: "Your Presence Is Heaven" },
  // — 約書亞樂團 / 大衛帳幕 —
  { id: 60, name: "重來的力量", artist: "約書亞樂團、林道遠", type: "slow", link: "https://www.youtube.com/watch?v=7jac0ri7x3A", tags: ["約書亞", "力量"], chorus: "The Power To Start Over" },
  { id: 61, name: "我願降服", artist: "約書亞樂團、吳宇婕", type: "slow", link: "https://www.youtube.com/watch?v=WULSuGS167I", tags: ["約書亞", "降服"], chorus: "Here I Bow" },
  { id: 62, name: "安靜", artist: "約書亞樂團、璽恩", type: "slow", link: "https://www.youtube.com/watch?v=-YRgF25YBIg", tags: ["約書亞", "安息"], chorus: "Still" },
  { id: 63, name: "如祢", artist: "約書亞樂團、璽恩", type: "slow", link: "https://www.youtube.com/watch?v=kMOg8x7ptz4", tags: ["約書亞", "效法"], chorus: "Like You" },
  { id: 64, name: "敬畏的心", artist: "約書亞樂團、璽恩", type: "slow", link: "https://www.youtube.com/watch?v=YuRVfDPSUj4", tags: ["約書亞", "敬畏"], chorus: "A Reverent Heart" },
  { id: 65, name: "守護者", artist: "約書亞樂團、璽恩", type: "slow", link: "https://www.youtube.com/watch?v=wfcCrn-IYyY", tags: ["約書亞", "保護"], chorus: "Defender" },
  { id: 66, name: "簡單呼吸", artist: "約書亞樂團、馬永蒂", type: "slow", link: "https://www.youtube.com/watch?v=YScPG4Ap0GM", tags: ["約書亞", "安息"], chorus: "Simply Breathing" },
  { id: 67, name: "降服", artist: "約書亞樂團 ft. ZEcho", type: "slow", link: "https://www.youtube.com/watch?v=XYoj7ReNHFo", tags: ["約書亞", "降服"], chorus: "Surrender" },
  { id: 68, name: "信靠跟隨", artist: "約書亞樂團、璽恩", type: "slow", link: "https://www.youtube.com/watch?v=9RH92wohZqM", tags: ["約書亞", "信靠"], chorus: "Trust and Follow" },
  { id: 69, name: "祢使我勇敢", artist: "約書亞樂團", type: "slow", link: "https://www.youtube.com/watch?v=jZsShaDwpx8", tags: ["約書亞", "勇氣"], chorus: "You Make Me Courageous" },
  { id: 70, name: "求充滿這地", artist: "大衛帳幕的榮耀", type: "slow", link: "https://www.youtube.com/watch?v=xj7daezGohs", tags: ["大衛帳幕", "聖靈"], chorus: "Come and Fill This Land" },
  { id: 71, name: "我安然居住", artist: "大衛帳幕的榮耀", type: "slow", link: "https://www.youtube.com/watch?v=kNOuWvdPgiA", tags: ["大衛帳幕", "平安"], chorus: "Dwelling In Peace" },
  { id: 72, name: "牽手", artist: "大衛帳幕的榮耀、璽恩", type: "slow", link: "https://www.youtube.com/watch?v=ZCVR_elf17c&list=RDZCVR_elf17c&start_radio=1", tags: ["大衛帳幕", "同行"], chorus: "Hand in Hand" },
  { id: 73, name: "耶和華拯救", artist: "約書亞樂團", type: "slow", link: "https://www.youtube.com/watch?v=oO4WzERyb1w&list=RDoO4WzERyb1w&start_radio=1", tags: ["約書亞", "拯救"], chorus: "Jehovah Saves" },
  // — The Hope —
  { id: 74, name: "在祢光中", artist: "The Hope Music", type: "slow", link: "https://www.youtube.com/watch?v=wOV72jXsE6M&list=RDwOV72jXsE6M&start_radio=1", tags: ["The Hope", "光"], chorus: "Live Acoustic Sessions" },
  { id: 75, name: "成為祢的器皿", artist: "The Hope Music", type: "slow", link: "https://www.youtube.com/watch?v=sumsH3r5USM&list=RDsumsH3r5USM&start_radio=1", tags: ["The Hope", "器皿"], chorus: "願被神使用" },
  { id: 76, name: "聖靈請你來", artist: "The Hope", type: "slow", link: "https://www.youtube.com/watch?v=Is33_IFSM7E&list=RDIs33_IFSM7E&start_radio=1", tags: ["The Hope", "聖靈"], chorus: "Worship Cover" },
  { id: 77, name: "深深愛祢", artist: "The Hope", type: "slow", link: "https://www.youtube.com/watch?v=9LX51yHhbMc&list=RD9LX51yHhbMc&start_radio=1", tags: ["The Hope", "愛"], chorus: "Deeper in Love" },
  // — 其他 —
  { id: 78, name: "不變的應許", artist: "SON Music", type: "slow", link: "https://www.youtube.com/watch?v=JnXaTrJtbUA&list=RDJnXaTrJtbUA&start_radio=1", tags: ["應許", "信實"], chorus: "ft. Brenda Li" },
  { id: 79, name: "超越萬物的愛", artist: "611 Worship", type: "slow", link: "https://www.youtube.com/watch?v=d-q5XMQMix0&list=RDd-q5XMQMix0&start_radio=1", tags: ["611", "愛"], chorus: "超越一切的愛" },
  { id: 80, name: "讓我", artist: "新店行道會", type: "slow", link: "https://www.youtube.com/watch?v=0SDpQxoLS64&list=RD0SDpQxoLS64&start_radio=1", tags: ["TopWorship", "奉獻"], chorus: "Let Me" },
  { id: 81, name: "不再有黑夜", artist: "約書亞樂團、陳雅玲", type: "slow", link: "https://www.youtube.com/watch?v=HaiDujpsPWM", tags: ["約書亞", "盼望"], chorus: "다시 밤이 없겠고" },
  { id: 82, name: "微小的聲音", artist: "約書亞樂團、陳州邦", type: "slow", link: "https://www.youtube.com/watch?v=UsZ3U40hav0", tags: ["約書亞", "安靜"], chorus: "Gentle Whisper" },
  { id: 83, name: "求主賜我憐憫的心", artist: "約書亞樂團、璽恩", type: "slow", link: "https://www.youtube.com/watch?v=Yf16P6w3h44", tags: ["約書亞", "憐憫"], chorus: "Give Me A Heart Of Compassion" },
  { id: 84, name: "和平君王", artist: "新店行道會 TopWorship", type: "slow", link: "https://www.youtube.com/watch?v=vZGjTpOsIN8", tags: ["TopWorship", "和平"], chorus: "聖誕詩歌" },
  { id: 85, name: "平安平安", artist: "新店行道會 TopWorship", type: "slow", link: "https://www.youtube.com/watch?v=qFogSaE8UL0", tags: ["TopWorship", "平安"], chorus: "平安的祝福" },
  { id: 86, name: "祢未曾放棄過", artist: "旌旗音樂", type: "slow", link: "https://www.youtube.com/watch?v=Ss-PdxI77IY", tags: ["旌旗", "信實"], chorus: "神從未放棄我們" },
  { id: 87, name: "大山你算什麼", artist: "新店行道會 TopWorship", type: "slow", link: "https://www.youtube.com/watch?v=qg4POKm6kBw", tags: ["TopWorship", "信心"], chorus: "面對困難的宣告" },
  { id: 88, name: "我願是無名的傳道者", artist: "新店行道會 TopWorship", type: "slow", link: "https://www.youtube.com/watch?v=hkAndsm42lA", tags: ["TopWorship", "奉獻"], chorus: "願為主擺上一切" },
  { id: 89, name: "即或不然的生命", artist: "約書亞樂團", type: "slow", link: "https://www.youtube.com/watch?v=gGVfA4QKWeo&list=RDgGVfA4QKWeo&start_radio=1", tags: ["尋求"], chorus: "即或不然的生命" },
  // — 韓文詩歌 —
  { id: 90, name: "Those Who Seek the Lord", artist: "KOSTA WORLD", type: "slow", link: "https://www.youtube.com/watch?v=Fi2waeWY18g&list=RDFi2waeWY18g&start_radio=1", tags: ["韓文", "尋求"], chorus: "주를 찾는 모든 자들이" },
  { id: 91, name: "Walking With The Lord", artist: "Korean Worship", type: "slow", link: "https://www.youtube.com/watch?v=8tNNAsa2S1U&list=RD8tNNAsa2S1U&start_radio=1", tags: ["韓文", "同行"], chorus: "주와 함께 걸어가네" },
  { id: 92, name: "Sachindano", artist: "WELOVE", type: "slow", link: "https://www.youtube.com/watch?v=V4qIiT5tWis&list=RDV4qIiT5tWis&start_radio=1", tags: ["韓文", "WELOVE"], chorus: "ft. 아넌딜라이트 (Anandelight)" },
  { id: 93, name: "Good in His Sight", artist: "WELOVE", type: "slow", link: "https://www.youtube.com/watch?v=uBHtK95UAcw&list=RDuBHtK95UAcw&start_radio=1", tags: ["韓文", "WELOVE"], chorus: "Live 現場敬拜" },
  { id: 94, name: "Radiant Name of Jesus", artist: "Korean Worship", type: "slow", link: "https://www.youtube.com/watch?v=yRyCiLZ0fAU&list=RDyRyCiLZ0fAU&start_radio=1", tags: ["韓文", "耶穌"], chorus: "Live 現場敬拜" },
  { id: 95, name: "주의 자녀로 산다는 것은", artist: "Korean Worship", type: "slow", link: "https://www.youtube.com/watch?v=h_Dswc8-y0c&list=RDh_Dswc8-y0c&start_radio=1", tags: ["韓文", "尋求"], chorus: "주여 내가 주를 찾으리" },

  { id: 96, name: "天父的喜悅（靈修鋼琴）", artist: "曾祥怡", type: "light", link: "https://www.youtube.com/watch?v=G43H8uk633A&list=RDQcunXPt6ZzM&index=2", tags: ["鋼琴", "靈修"], chorus: "♪ 一小時沈浸式鋼琴音樂" },
  { id: 97, name: "神側耳聽我的禱告", artist: "等候神音樂", type: "light", link: "https://www.youtube.com/watch?v=xwipz37YD5U&list=RDxwipz37YD5U&start_radio=1&t=3580s", tags: ["等候神", "禱告"], chorus: "♪ God Has Heard My Prayer" },
  { id: 98, name: "指引道路的神", artist: "等候神音樂", type: "light", link: "https://www.youtube.com/watch?v=1Rvtnx5ZJ5A&list=RD1Rvtnx5ZJ5A&start_radio=1&t=7s", tags: ["等候神", "引導"], chorus: "♪ God Will Make Your Paths Straight" },
  { id: 99, name: "全然的愛", artist: "等候神音樂", type: "light", link: "https://www.youtube.com/watch?v=FLXZrTHRjvI&list=RDFLXZrTHRjvI&start_radio=1&t=223s", tags: ["等候神", "愛"], chorus: "♪ God's Perfect Love" },
  { id: 100, name: "我的一生在神手中", artist: "等候神音樂", type: "light", link: "https://youtu.be/R1nZ6LKjX4Q?si=TPcwZFlspkLIYVl6", tags: ["等候神", "信靠"], chorus: "♪ My Life Is In God's Hands" },
  { id: 101, name: "平安充滿我心", artist: "等候神音樂", type: "light", link: "https://www.youtube.com/watch?v=ObjBoCLruZg&list=RDObjBoCLruZg&start_radio=1&t=4737s", tags: ["等候神", "平安"], chorus: "♪ Peace Fills My Heart" },
  { id: 102, name: "舒壓純音樂 RELAX", artist: "讚美之泉", type: "light", link: "https://www.youtube.com/watch?v=XzEyBseS0PM&list=RDXzEyBseS0PM&start_radio=1&t=14s", tags: ["讚美之泉", "放鬆"], chorus: "♪ 兩小時放鬆、沉澱、默想" },
  { id: 103, name: "在祢的愛中得安慰", artist: "Soaking Music", type: "light", link: "https://www.youtube.com/watch?v=JfR2717aNwg&list=RDJfR2717aNwg&start_radio=1&t=3429s", tags: ["Soaking", "安慰"], chorus: "♪ Comforted in His Love" },
  { id: 104, name: "從乾涸進到豐盛的生命", artist: "Soaking Music", type: "light", link: "https://www.youtube.com/watch?v=nXPMeF-VtxA&list=RDnXPMeF-VtxA&start_radio=1", tags: ["Soaking", "豐盛"], chorus: "♪ From Drought to Abundance" },
  { id: 105, name: "放心放手交給神", artist: "Soaking Music", type: "light", link: "https://www.youtube.com/watch?v=bo0a84CxSsc&list=RDbo0a84CxSsc&start_radio=1&t=2427s", tags: ["Soaking", "交託"], chorus: "♪ Let Go and Surrender to You" },
  { id: 106, name: "深處相遇", artist: "Soaking Music", type: "light", link: "https://www.youtube.com/watch?v=I0I62RmS6WI&list=RDI0I62RmS6WI&start_radio=1&t=20s", tags: ["Soaking", "相遇"], chorus: "♪ Meeting in the Deep" },
  { id: 107, name: "PEACE", artist: "Soaking Worship", type: "light", link: "https://www.youtube.com/watch?v=yhFccHgf_FQ&list=RDyhFccHgf_FQ&start_radio=1&t=20s", tags: ["Soaking", "平安"], chorus: "♪ Prayer and Devotional" },
  { id: 108, name: "用讚美穿越生命的陰霾", artist: "Soaking Music", type: "light", link: "https://www.youtube.com/watch?v=TtkBxtRLVdY&list=RDTtkBxtRLVdY&start_radio=1&t=1s", tags: ["Soaking", "讚美"], chorus: "♪ Praising through the Shadows" },
  { id: 109, name: "脫去疲憊重新得力", artist: "Soaking Music", type: "light", link: "https://www.youtube.com/watch?v=UNuq6_5x_XE&list=RDUNuq6_5x_XE&start_radio=1", tags: ["Soaking", "得力"], chorus: "♪ Soar Like an Eagle" },
  { id: 110, name: "Be Still With The Lord", artist: "Instrumental Worship", type: "light", link: "https://www.youtube.com/watch?v=gRdEnEueCDU&list=RDgRdEnEueCDU&start_radio=1&t=45s", tags: ["純音樂", "安靜"], chorus: "♪ 1 Hour Prayer Music" },
  { id: 111, name: "Jesus Saves", artist: "Instrumental Worship", type: "light", link: "https://www.youtube.com/watch?v=78IDZyWFIvI&list=RD78IDZyWFIvI&start_radio=1&t=12s", tags: ["純音樂", "敬拜"], chorus: "♪ While You Pray" },
  { id: 112, name: "平安夜｜為我降臨的愛", artist: "等候神音樂", type: "light", link: "https://www.youtube.com/watch?v=t_usPpj-s-E&list=RDt_usPpj-s-E&start_radio=1", tags: ["等候神", "聖誕"], choruss: "♪ Peaceful Christmas Music" }
];

const defaultPosts = [
  {
    id: 1,
    title: "推薦一種很棒的早晨習慣",
    content: "最近開始每天早上花五分鐘讀一段有智慧的文字☀️\n\n做法很簡單：\n1. 起床後先安靜一分鐘\n2. 讀一小段文章或句子\n3. 想想這句話跟今天有什麼關聯\n4. 帶著這句話出門\n\n聖經裡有很多充滿智慧的話，就算你不是基督徒，也會覺得很有收穫。推薦從「箴言」開始讀，每天一章剛好一個月！",
    author: "匿名",
    category: "好文推薦",
    timestamp: new Date("2026-03-12").getTime()
  },
  {
    id: 2,
    title: "大學壓力大的時候怎麼辦？",
    content: "期中考那陣子真的壓力爆大😩\n\n後來學到一個方法：把擔心的事情一條條寫下來，然後想想哪些是你能控制的、哪些不能。不能控制的就放手。\n\n聖經裡有一句話讓我很有感：「應當一無掛慮，只要凡事藉著禱告，將你們所要的告訴神。」意思是放下那些你扛不動的重擔。\n\n如果你也正在壓力中，歡迎來聊聊 💪",
    author: "匿名",
    category: "心情分享",
    timestamp: new Date("2026-03-13").getTime()
  },
  {
    id: 3,
    title: "好玩的聚會破冰遊戲推薦",
    content: "最近辦了幾場聚會，試了不同的破冰遊戲，效果超好：\n\n✅ 5人以下：誰是臥底、心臟病\n✅ 5-10人：蘿蔔蹲、猜猜我是誰\n✅ 10人以上：支援前線、比手畫腳\n\n每個遊戲在本站的「破冰遊戲」區都有完整規則，歡迎取用！不管是社團、系活動、朋友聚會都很適合～",
    author: "匿名",
    category: "資源推薦",
    timestamp: new Date("2026-03-14").getTime()
  },
  {
    id: 4,
    title: "我是怎麼在大學找到方向的",
    content: "大一時超級迷惘，不知道讀這個科系到底對不對。每天都很焦慮。\n\n後來有個朋友邀我去一個聚會，那裡的人都很友善，讓我感覺被接納。慢慢地我開始認識基督信仰，讀到一句話：「我知道我向你們所懷的意念是賜平安的意念，不是降災禍的意念，要叫你們末後有指望。」\n\n那一刻我突然覺得，也許有人比我更了解我的人生。\n\n現在我不一定什麼都想通了，但至少不再焦慮。如果你也在迷惘中，歡迎來聊。這裡每個人都走過類似的路 🙂",
    author: "匿名",
    category: "生活故事",
    timestamp: new Date("2026-03-14").getTime()
  }
];

const forumCategories = ["所有", "心情分享", "生活故事", "好文推薦", "資源推薦"];

const bibleStories = [
  {
    id: "healing",
    icon: "✨",
    title: "在絕望中看見光：醫治的神蹟",
    tags: ["醫治", "神蹟", "盼望"],
    paragraphs: [
      "在聖經裡，有許多關於「醫治」的故事。有一次，幾個人帶著他們癱瘓的朋友，因為人太多擠不進屋子，他們竟然把屋頂拆了，把朋友垂降到耶穌面前。",
      "耶穌看到他們的信心，不僅醫治了他的身體，讓他能站起來行走，更醫治了他的心靈。",
      "還有一次，一個名叫巴底買的盲人在路邊乞討。當他聽說耶穌經過時，他不顧別人的阻止，大聲呼喊求救。耶穌停下腳步問他：「你要我為你做什麼？」他說：「我想看見！」就在那一刻，他的眼睛奇蹟般地恢復了光明。"
    ],
    takeaway: "人生有時候會遇到好像「無解」的困境，但有時候，只要我們願意發出求救的聲音，奇蹟往往就在轉角處發生。"
  },
  {
    id: "stephen",
    icon: "🕊️",
    title: "最溫柔的堅強：司提反的故事",
    tags: ["勇氣", "寬恕", "司提反"],
    paragraphs: [
      "司提反是早期教會的一個年輕人，他充滿智慧和愛心，經常幫助有需要的人。但也因為他勇敢說出真理，引來了當時宗教領袖的嫉妒和憤怒。",
      "那些人捏造罪名，把他抓起來，甚至用石頭砸他。在這樣痛苦和充滿仇恨的時刻，司提反沒有咒罵，也沒有還擊。",
      "相反地，他在生命的最後一刻，看著天空，平靜地向上帝祈禱：「主啊，不要將這罪歸給他們。」他就這樣帶著愛和寬恕，安詳地離開了世界。"
    ],
    takeaway: "真正的強大不是用拳頭打倒別人，而是在面對惡意時，依然能保守自己內心那份善良與寬恕的溫柔。"
  },
  {
    id: "david",
    icon: "🎸",
    title: "牧羊童與巨人：大衛的故事",
    tags: ["自信", "突破極限", "大衛"],
    paragraphs: [
      "大衛本來只是一個不起眼的牧羊少年。有一天，他的國家正面臨敵軍的威脅，對方派出了一個名叫「歌利亞」的巨人，身高將近三公尺，全副武裝，沒有人敢出去迎戰。",
      "當大衛來到軍營時，看到大家都在退縮。雖然他沒有穿過盔甲，也沒有當過兵，但他相信上帝會與他同在。他只拿著一根牧羊的杖和幾顆光滑的石頭，就勇敢地走向巨人。",
      "結果，他用甩石機弦精準地擊中了巨人的額頭，贏得了這場不可能的勝利。後來，這個牧羊少年成為了以色列最偉大的國王。"
    ],
    takeaway: "別人的眼光不能定義你的價值。面對生活中的「巨人」時，你不需要擁有全世界最厲害的武器，只要善用你現在擁有的，並保持勇敢。"
  },
  {
    id: "joseph",
    icon: "🌈",
    title: "從谷底逆襲：約瑟的故事",
    tags: ["逆境", "堅持", "約瑟"],
    paragraphs: [
      "約瑟是一個深受父親疼愛的孩子，卻也因此遭到哥哥們的嫉妒。哥哥們居然把他賣到了外國當奴隸。",
      "在異鄉，約瑟努力工作，卻因為拒絕了主人的妻子的誘惑而被誣陷，關進了監獄。從寵兒到奴隸，再到階下囚，他的人生似乎跌到了谷底。",
      "但他沒有因此放棄或怨天尤人。幾年後，因為他能解開夢境的特殊天賦，幫助了當時的國王度過國家危機。一夜之間，他從囚犯變成了國家的宰相。最後，他甚至原諒了當年賣掉他的哥哥們，拯救了全家人免於飢荒。"
    ],
    takeaway: "低谷不會是人生的終點。只要我們在黑暗中不放棄發光，過去的傷痕，有一天會成為你幫助別人的力量。"
  },
  {
    id: "noah",
    icon: "🚢",
    title: "在晴天造船的傻子：挪亞方舟",
    tags: ["相信", "順服", "挪亞"],
    paragraphs: [
      "在一個沒有人見過大雨的時代，上帝告訴挪亞即將有一場大洪水，並要他造一艘巨大的木船。這在當時的人眼中，簡直是徹底的瘋子行為。",
      "挪亞忍受著身邊人的嘲笑和不解，長年累月地在晴天裡堅持造船。他沒有因為別人的異樣眼光而動搖，只是默默地按照上帝的吩咐去完成。",
      "當大雨真的降臨，洪水淹沒大地時，這艘方舟不僅拯救了挪亞的一家，也保全了地球上各種動物的生命。他的「傻」，最後成為了延續希望的關鍵。"
    ],
    takeaway: "做對的事，有時候會讓你顯得跟別人格格不入。但當你清楚自己的方向時，別人的眼光都不重要了。"
  },
  {
    id: "moses",
    icon: "🌊",
    title: "當無路可退時：摩西分紅海",
    tags: ["奇蹟", "帶領", "摩西"],
    paragraphs: [
      "摩西帶領著無數的人民逃離了奴役他們多年的國家，但很快就面臨到了絕境。前面是波濤洶湧的紅海，後面是全副武裝的追兵。",
      "人民開始絕望和抱怨，覺得死定了。但摩西沒有放棄，他向上帝禱告。奇蹟發生了——海面突然從中間分開，露出了一條乾地，讓幾百萬人安全地走到了對岸。",
      "當追兵試圖跟著過海時，海水又重新合攏，徹底解除了他們的危機。這是歷史上最著名的奇蹟之一。"
    ],
    takeaway: "有時候生活會把你逼到無路可退的角落。不要害怕，往往在最絕望的時候，會看見意想不到的出路。"
  },
  {
    id: "daniel",
    icon: "🦁",
    title: "與獅子共度一夜：但以理的故事",
    tags: ["堅持", "平安", "但以理"],
    paragraphs: [
      "但以理是一個非常有才幹的年輕人，在異國擔任高官。他每天堅持向上帝禱告三次。但他的優秀卻引來了其他官員的嫉妒。",
      "他們設下陷阱，讓國王頒布一條法令：任何向國王以外的神禱告的人，都要被丟進獅子洞。但以理明明知道這個規定，卻依然保持他每天禱告的習慣，毫不退縮。",
      "最終他被扔進了飢餓的獅群中。但在洞裡的那一夜，上帝封住了獅子的口，牠們就像貓咪一樣溫馴。第二天清晨，當國王焦急地來看他時，發現他毫髮無傷。"
    ],
    takeaway: "不要為了迎合環境而妥協自己的原則。即使身處在像獅子洞一樣充滿威脅的環境中，內心的平安是任何人都奪不走的。"
  },
  {
    id: "prodigal-son",
    icon: "🫂",
    title: "無論如何都等著你：浪子回頭",
    tags: ["接納", "親情", "耶穌的比喻"],
    paragraphs: [
      "從前有個小兒子，要求父親提前把財產分給他。拿到錢後，他跑到了遠方，每天吃喝玩樂，很快就把錢揮霍一空。後來當地發生了饑荒，他甚至淪落到要去跟豬搶食物吃。",
      "在最落魄的時候，他想起了自己的家。他原本打算回去求父親讓他當個雇工就好，沒臉再做兒子了。",
      "沒想到，當他還在遠處時，父親就看見了他，不但沒有責罵，反而跑過去抱住他、親吻他，甚至為他舉辦了盛大的宴會慶祝他的歸來。"
    ],
    takeaway: "我們有時候會搞砸事情，覺得自己不值得被愛。但這份毫無保留的愛一直都在等待著我們，只要你願意轉身回家。"
  }
];