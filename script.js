(function () {
  'use strict';

  /* ===================== i18n ===================== */

  var STR = {
    en: {
      appTitle: 'Daily Quest',
      subtitle: 'Pick a card. Do the thing. Make today count.',
      newDayBadge: '🌅 A new day, a new quest awaits',
      drawBtnLabel: 'DRAW TODAY’S CARD',
      hintText: 'You only get one quest today.',
      eyebrowActive: 'Today’s Quest',
      eyebrowCompleted: 'Quest Completed',
      qcMark: '?',
      doneStamp: '✓ Completed',
      doneBtn: '✓ I did it',
      redrawBtn: 'Draw again',
      redrawNote1: '1 redraw left today',
      redrawNote2: '2 redraws left today',
      redrawNoteNone: 'No redraws left — make it count 💫',
      celebrateHeading: 'Quest completed! ✨',
      celebrateSub: 'Nice work — enjoy the rest of your day.',
      questsCompleted: 'Quests completed:',
      viewHistoryBtn: 'View My Quests',
      historyBtnLabel: 'My Quests',
      historyTitle: 'My Quests',
      drawerClose: 'Close',
      emptyHistoryLine1: 'No quests completed yet.',
      emptyHistoryLine2: 'Draw your first card to begin!',
      footerNote: 'made for a little daily spark ✦',
      announceShaking: 'Shaking the jar…',
      announceToday: function (task) { return 'Today’s quest: ' + task; },
      announceNew: function (task) { return 'New quest: ' + task; },
      announceCompleted: 'Quest completed!',
      durationUnit: 'min',
      dateLocale: 'en-u-nu-latn',
      langToggleLabel: 'AR',
      htmlLangTag: 'en'
    },
    ar: {
      appTitle: 'المهمة اليومية',
      subtitle: 'اختر بطاقة. نفّذ المهمة. اجعل يومك يستحق.',
      newDayBadge: '🌅 يوم جديد، ومهمة جديدة بانتظارك',
      drawBtnLabel: 'اسحب بطاقة اليوم',
      hintText: 'لديك مهمة واحدة فقط اليوم.',
      eyebrowActive: 'مهمة اليوم',
      eyebrowCompleted: 'تم إنجاز المهمة',
      qcMark: '؟',
      doneStamp: '✓ تم الإنجاز',
      doneBtn: '✓ أنجزتها',
      redrawBtn: 'اسحب بطاقة أخرى',
      redrawNote1: 'لديك إعادة سحب واحدة متبقية اليوم',
      redrawNote2: 'لديك إعادتا سحب متبقيتان اليوم',
      redrawNoteNone: 'لا مزيد من إعادة السحب — اجعلها تستحق 💫',
      celebrateHeading: 'تم إنجاز المهمة! ✨',
      celebrateSub: 'عمل رائع — استمتع بباقي يومك.',
      questsCompleted: 'المهام المُنجزة:',
      viewHistoryBtn: 'عرض مهامّي',
      historyBtnLabel: 'مهامّي',
      historyTitle: 'مهامّي',
      drawerClose: 'إغلاق',
      emptyHistoryLine1: 'لم تُنجز أي مهمة بعد.',
      emptyHistoryLine2: 'اسحب أول بطاقة لتبدأ!',
      footerNote: 'صُنع لإضفاء لمسة يومية صغيرة ✦',
      announceShaking: 'الجرة تهتز…',
      announceToday: function (task) { return 'مهمة اليوم: ' + task; },
      announceNew: function (task) { return 'مهمة جديدة: ' + task; },
      announceCompleted: 'تم إنجاز المهمة!',
      durationUnit: 'دقيقة',
      dateLocale: 'ar-u-nu-latn',
      langToggleLabel: 'EN',
      htmlLangTag: 'ar'
    }
  };

  var CATEGORY_LABELS = {
    en: {
      creative: 'Creative', home: 'Home', tech: 'Tech', learning: 'Learning',
      adventure: 'Adventure', career: 'Career', lifestyle: 'Lifestyle'
    },
    ar: {
      creative: 'إبداعي', home: 'منزلي', tech: 'تقنية', learning: 'تعلم',
      adventure: 'مغامرة', career: 'مهنة', lifestyle: 'نمط الحياة'
    }
  };

  /* ===================== Data ===================== */
  /* durationMin/durationMax are in minutes; formatDuration() renders them per language */

  var TASKS = [
    // Creative
    { id: 'c1', category: 'creative', durationMin: 30, durationMax: 45, task: { en: 'Create a bookmark by hand and decorate it.', ar: 'اصنع فاصل كتاب بيدك وزيّنه.' } },
    { id: 'c2', category: 'creative', durationMin: 45, durationMax: 90, task: { en: 'Make a 30-second cinematic video with your phone.', ar: 'صوّر فيديو سينمائيا ً مدته 30 ثانية بهاتفك.' } },
    { id: 'c3', category: 'creative', durationMin: 45, durationMax: 90, task: { en: 'Design a poster for a fictional event.', ar: 'صمّم ملصقًا لحدث خيالي.' } },
    { id: 'c4', category: 'creative', durationMin: 20, durationMax: 30, task: { en: 'Redesign your phone wallpaper.', ar: 'أعد تصميم خلفية هاتفك.' } },
    { id: 'c5', category: 'creative', durationMin: 20, durationMax: 35, task: { en: 'Draw a small doodle for every letter of your name.', ar: 'ارسم رسمة بسيطة تعبّر عن كل حرف من حروف اسمك.' } },
    { id: 'c6', category: 'creative', durationMin: 15, durationMax: 20, task: { en: 'Write a short poem about your day.', ar: 'اكتب قصيدة قصيرة عن يومك.' } },
    { id: 'c7', category: 'creative', durationMin: 45, durationMax: 90, task: { en: 'Create a small handmade gift for someone.', ar: 'اصنع هدية صغيرة يدوية الصنع لشخص ما.' } },
    { id: 'c8', category: 'creative', durationMin: 30, durationMax: 60, task: { en: 'Make a collage from old photos or magazine clippings.', ar: 'اصنع كولاجًا من صور قديمة أو قصاصات مجلات.' } },
    { id: 'c9', category: 'creative', durationMin: 45, durationMax: 60, task: { en: 'Write a one-page short story with a twist ending.', ar: 'اكتب قصة قصيرة من صفحة واحدة بنهاية مفاجئة.' } },
    { id: 'c10', category: 'creative', durationMin: 30, durationMax: 45, task: { en: 'Design your own logo or personal symbol.', ar: 'صمّم شعارًا خاصًا بك أو رمزًا شخصيًا.' } },

    // Home
    { id: 'h1', category: 'home', durationMin: 20, durationMax: 30, task: { en: 'Organize one drawer completely.', ar: 'رتّب درجًا واحدًا بالكامل.' } },
    { id: 'h2', category: 'home', durationMin: 45, durationMax: 90, task: { en: 'Cook a recipe you have never tried before.', ar: 'اطبخ وصفة لم تجرّبها من قبل.' } },
    { id: 'h3', category: 'home', durationMin: 30, durationMax: 60, task: { en: 'Turn something old in your room into something useful.', ar: 'حوّل شيئًا قديمًا في غرفتك إلى شيء مفيد.' } },
    { id: 'h4', category: 'home', durationMin: 30, durationMax: 90, task: { en: 'Fix one unfinished thing you have been postponing.', ar: 'أنجز أمرًا واحدًا ناقصًا كنت تؤجّله.' } },
    { id: 'h5', category: 'home', durationMin: 20, durationMax: 40, task: { en: 'Deep clean your desk or workspace.', ar: 'نظّف مكتبك أو مساحة عملك تنظيفًا عميقًا.' } },
    { id: 'h6', category: 'home', durationMin: 30, durationMax: 45, task: { en: 'Declutter one shelf and set aside items to donate.', ar: 'رتّب رفًا واحدًا وجهّز أغراضًا للتبرّع بها.' } },
    { id: 'h7', category: 'home', durationMin: 45, durationMax: 90, task: { en: 'Rearrange the furniture in one room.', ar: 'أعد ترتيب أثاث غرفة واحدة.' } },
    { id: 'h8', category: 'home', durationMin: 45, durationMax: 90, task: { en: 'Bake something simple from scratch.', ar: 'اخبز شيئًا بسيطًا من الصفر.' } },
    { id: 'h9', category: 'home', durationMin: 15, durationMax: 25, task: { en: 'Wash and reorganize your bag or backpack.', ar: 'اغسل حقيبتك ورتّبها من جديد.' } },
    { id: 'h10', category: 'home', durationMin: 15, durationMax: 30, task: { en: 'Give one houseplant a proper care session (or start one).', ar: 'اعتنِ بنبتة منزلية عناية جيّدة (أو ابدأ بزراعة واحدة).' } },

    // Tech
    { id: 't1', category: 'tech', durationMin: 90, durationMax: 180, task: { en: 'Create a simple webpage in one day.', ar: 'أنشئ صفحة ويب بسيطة في يوم واحد.' } },
    { id: 't2', category: 'tech', durationMin: 20, durationMax: 30, task: { en: 'Organize your computer Downloads folder.', ar: 'رتّب مجلد التنزيلات في جهازك.' } },
    { id: 't3', category: 'tech', durationMin: 20, durationMax: 30, task: { en: 'Back up your phone photos to one folder.', ar: 'احفظ نسخة احتياطية من صور هاتفك في مجلد واحد.' } },
    { id: 't4', category: 'tech', durationMin: 15, durationMax: 20, task: { en: 'Unsubscribe from 10 emails you never read.', ar: 'ألغِ اشتراكك في 10 نشرات بريدية لا تقرأها أبدًا.' } },
    { id: 't5', category: 'tech', durationMin: 15, durationMax: 25, task: { en: 'Customize your phone’s home screen layout.', ar: 'خصّص تخطيط الشاشة الرئيسية لهاتفك.' } },
    { id: 't6', category: 'tech', durationMin: 45, durationMax: 60, task: { en: 'Set up a simple budget spreadsheet.', ar: 'أنشئ جدول ميزانية بسيطًا.' } },
    { id: 't7', category: 'tech', durationMin: 20, durationMax: 30, task: { en: 'Delete duplicate or blurry photos from your gallery.', ar: 'احذف الصور المكررة أو غير الواضحة من معرض هاتفك.' } },
    { id: 't8', category: 'tech', durationMin: 20, durationMax: 30, task: { en: 'Clean up and rename the files on your desktop.', ar: 'رتّب ملفات سطح المكتب وأعد تسميتها.' } },

    // Learning
    { id: 'l1', category: 'learning', durationMin: 30, durationMax: 45, task: { en: 'Read 30 pages of a book.', ar: 'اقرأ 30 صفحة من كتاب.' } },
    { id: 'l2', category: 'learning', durationMin: 30, durationMax: 45, task: { en: 'Watch one documentary segment and write down 3 things you learned.', ar: 'شاهد جزءًا من فيلم وثائقي واكتب 3 أشياء تعلّمتها.' } },
    { id: 'l3', category: 'learning', durationMin: 20, durationMax: 40, task: { en: 'Learn one small practical skill and demonstrate it today.', ar: 'تعلّم مهارة عملية صغيرة وطبّقها اليوم.' } },
    { id: 'l4', category: 'learning', durationMin: 20, durationMax: 30, task: { en: 'Learn 10 new words in a foreign language and use them in sentences.', ar: 'تعلّم 10 كلمات جديدة بلغة أجنبية واستخدمها في جمل.' } },
    { id: 'l5', category: 'learning', durationMin: 20, durationMax: 30, task: { en: 'Solve 5 puzzles or brain teasers.', ar: 'حلّ 5 ألغاز أو تمارين ذهنية.' } },
    { id: 'l6', category: 'learning', durationMin: 20, durationMax: 30, task: { en: 'Teach someone one thing you already know.', ar: 'علّم شخصًا شيئًا تعرفه بالفعل.' } },
    { id: 'l7', category: 'learning', durationMin: 20, durationMax: 30, task: { en: 'Learn a new fold, knot, or stitch and make one with it.', ar: 'تعلّم طيّة ورق أو عقدة أو غرزة خياطة جديدة واصنع بها شيئًا.' } },

    // Adventure
    { id: 'a1', category: 'adventure', durationMin: 60, durationMax: 120, task: { en: 'Visit a place in your city you have never visited.', ar: 'زر مكانًا في مدينتك لم تزره من قبل.' } },
    { id: 'a2', category: 'adventure', durationMin: 30, durationMax: 45, task: { en: 'Take 10 interesting photos around you.', ar: 'التقط 10 صور مثيرة للاهتمام من حولك.' } },
    { id: 'a3', category: 'adventure', durationMin: 30, durationMax: 60, task: { en: 'Take a walk in a direction you’ve never gone before.', ar: 'امشِ في اتجاه لم تسلكه من قبل.' } },
    { id: 'a4', category: 'adventure', durationMin: 20, durationMax: 40, task: { en: 'Try a food you’ve never eaten before.', ar: 'جرّب طعامًا لم تأكله من قبل.' } },
    { id: 'a5', category: 'adventure', durationMin: 20, durationMax: 20, task: { en: 'Find a spot outside and people-watch for 20 minutes.', ar: 'اجلس في مكان خارجي وراقب المارة لمدة 20 دقيقة.' } },
    { id: 'a6', category: 'adventure', durationMin: 30, durationMax: 45, task: { en: 'Explore one new street in your neighborhood.', ar: 'استكشف شارعًا جديدًا في حيّك.' } },

    // Career
    { id: 'k1', category: 'career', durationMin: 45, durationMax: 90, task: { en: 'Find one opportunity or hackathon and apply.', ar: 'ابحث عن فرصة أو هاكاثون وقدّم طلبك.' } },
    { id: 'k2', category: 'career', durationMin: 30, durationMax: 60, task: { en: 'Update one section of your resume or portfolio.', ar: 'حدّث قسمًا واحدًا من سيرتك الذاتية أو معرض أعمالك.' } },
    { id: 'k3', category: 'career', durationMin: 15, durationMax: 30, task: { en: 'Reach out to one person for advice or a short chat.', ar: 'تواصل مع شخص لطلب نصيحة أو لحديث قصير.' } },
    { id: 'k4', category: 'career', durationMin: 20, durationMax: 30, task: { en: 'Write a short post about something you learned recently.', ar: 'اكتب منشورًا قصيرًا عن شيء تعلّمته مؤخرًا.' } },
    { id: 'k5', category: 'career', durationMin: 30, durationMax: 45, task: { en: 'Research one company or role you’re curious about.', ar: 'ابحث عن شركة أو وظيفة تثير فضولك.' } },
    { id: 'k6', category: 'career', durationMin: 15, durationMax: 20, task: { en: 'Polish your email signature or professional bio.', ar: 'حسّن توقيع بريدك الإلكتروني أو سيرتك المهنية المختصرة.' } },

    // Lifestyle
    { id: 'y1', category: 'lifestyle', durationMin: 15, durationMax: 15, task: { en: 'Write down 3 things you’re grateful for and why.', ar: 'اكتب 3 أشياء تشعر بالامتنان لها وسبب ذلك.' } },
    { id: 'y2', category: 'lifestyle', durationMin: 20, durationMax: 30, task: { en: 'Do a 20-minute workout you’ve never tried.', ar: 'مارس تمرينًا رياضيًا لم تجرّبه من قبل لمدة 20 دقيقة.' } },
    { id: 'y3', category: 'lifestyle', durationMin: 30, durationMax: 45, task: { en: 'Cook a healthy meal using only 5 ingredients.', ar: 'اطبخ وجبة صحية باستخدام 5 مكوّنات فقط.' } },
    { id: 'y4', category: 'lifestyle', durationMin: 15, durationMax: 20, task: { en: 'Call or message someone you haven’t talked to in a while.', ar: 'اتصل أو راسل شخصًا لم تتحدّث معه منذ فترة.' } },
    { id: 'y5', category: 'lifestyle', durationMin: 20, durationMax: 30, task: { en: 'Plan a mini one-day adventure for this weekend.', ar: 'خطّط لمغامرة صغيرة ليوم واحد في نهاية هذا الأسبوع.' } },
    { id: 'y6', category: 'lifestyle', durationMin: 20, durationMax: 30, task: { en: 'Write a letter to your future self.', ar: 'اكتب رسالة إلى نفسك في المستقبل.' } },
    { id: 'y7', category: 'lifestyle', durationMin: 10, durationMax: 15, task: { en: 'Try a 10-minute guided meditation or breathing exercise.', ar: 'جرّب تأملًا موجّهًا أو تمرين تنفّس لمدة 10 دقائق.' } }
  ];

  var TASKS_BY_ID = {};
  TASKS.forEach(function (t) { TASKS_BY_ID[t.id] = t; });

  var MAX_REDRAWS = 2;
  var STORAGE_KEY = 'dailyQuestJar.v1';
  var POP_MS = 380;
  var FLIP_MS = 380;
  var SHAKE_MS = 480;

  /* ===================== State ===================== */

  function detectDefaultLang() {
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.indexOf('ar') === 0 ? 'ar' : 'en';
  }

  function defaultState() {
    return {
      lang: null,
      totalCompleted: 0,
      history: [],
      recentTaskIds: [],
      today: { date: null, cardId: null, completed: false, redrawsUsed: 0 }
    };
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var parsed = JSON.parse(raw);
      var base = defaultState();
      var merged = Object.assign(base, parsed);
      merged.today = Object.assign({ date: null, cardId: null, completed: false, redrawsUsed: 0 }, parsed.today || {});
      if (!Array.isArray(merged.history)) merged.history = [];
      if (!Array.isArray(merged.recentTaskIds)) merged.recentTaskIds = [];
      return merged;
    } catch (e) {
      return defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) { /* localStorage unavailable — app still works for this session */ }
  }

  function todayStr() {
    var d = new Date();
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  function ensureFreshDay() {
    if (appState.today.date !== todayStr()) {
      appState.today = { date: null, cardId: null, completed: false, redrawsUsed: 0 };
      saveState();
    }
  }

  function pickTask() {
    var excluded = {};
    appState.recentTaskIds.forEach(function (id) { excluded[id] = true; });
    var pool = TASKS.filter(function (t) { return !excluded[t.id]; });
    if (pool.length === 0) {
      appState.recentTaskIds = [];
      pool = TASKS.slice();
    }
    var chosen = pool[Math.floor(Math.random() * pool.length)];
    appState.recentTaskIds.push(chosen.id);
    var maxRecent = Math.min(TASKS.length - 3, 20);
    while (appState.recentTaskIds.length > maxRecent) appState.recentTaskIds.shift();
    return chosen;
  }

  var appState = loadState();
  if (!appState.lang) appState.lang = detectDefaultLang();
  ensureFreshDay();
  var isAnimating = false;

  /* ===================== DOM refs ===================== */

  var htmlEl = document.documentElement;
  var appTitleEl = document.getElementById('appTitle');
  var jarSubtitleEl = document.getElementById('jarSubtitle');
  var drawBtnLabelEl = document.getElementById('drawBtnLabel');
  var hintTextEl = document.getElementById('hintText');
  var footerNoteEl = document.getElementById('footerNote');
  var qcMarkEl = document.getElementById('qcMark');
  var langToggle = document.getElementById('langToggle');
  var historyBtnLabelEl = document.getElementById('historyBtnLabel');
  var historyTitleEl = document.getElementById('historyTitle');
  var drawerCounterLabelEl = document.getElementById('drawerCounterLabel');

  var jarView = document.getElementById('jarView');
  var cardView = document.getElementById('cardView');
  var jarWrap = document.getElementById('jarWrap');
  var newDayBadge = document.getElementById('newDayBadge');
  var drawBtn = document.getElementById('drawBtn');

  var cardEyebrow = document.getElementById('cardEyebrow');
  var cardInner = document.getElementById('questCardInner');
  var cardCategoryEl = document.getElementById('cardCategory');
  var cardTaskEl = document.getElementById('cardTask');
  var cardDurationEl = document.getElementById('cardDuration');
  var doneStampEl = document.getElementById('doneStamp');
  var cardActions = document.getElementById('cardActions');

  var headerCount = document.getElementById('headerCount');
  var historyBtn = document.getElementById('historyBtn');
  var drawerBackdrop = document.getElementById('drawerBackdrop');
  var historyDrawer = document.getElementById('historyDrawer');
  var drawerClose = document.getElementById('drawerClose');
  var drawerCount = document.getElementById('drawerCount');
  var historyList = document.getElementById('historyList');
  var srAnnounce = document.getElementById('srAnnounce');
  var confettiLayer = document.getElementById('confettiLayer');

  /* ===================== Helpers ===================== */

  function t() { return STR[appState.lang]; }

  function wait(ms) { return new Promise(function (resolve) { setTimeout(resolve, ms); }); }

  function announce(text) { srAnnounce.textContent = text; }

  function formatDuration(min, max) {
    var unit = t().durationUnit;
    if (max && max !== min) return min + '–' + max + ' ' + unit;
    return min + ' ' + unit;
  }

  function formatDate(iso) {
    var parts = iso.split('-').map(Number);
    var dt = new Date(parts[0], parts[1] - 1, parts[2]);
    return dt.toLocaleDateString(t().dateLocale, { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function setCardContent(card, completed) {
    cardCategoryEl.textContent = CATEGORY_LABELS[appState.lang][card.category] || card.category;
    cardCategoryEl.className = 'quest-category-chip cat-' + card.category;
    cardTaskEl.textContent = card.task[appState.lang];
    cardDurationEl.textContent = '⏱ ' + formatDuration(card.durationMin, card.durationMax);
    doneStampEl.textContent = t().doneStamp;
    doneStampEl.classList.toggle('show', !!completed);
  }

  function refreshActionsAnimation() {
    cardActions.classList.remove('card-actions');
    void cardActions.offsetWidth; // force reflow to restart the CSS animation
    cardActions.classList.add('card-actions');
  }

  function updateHeaderCount() {
    headerCount.textContent = String(appState.totalCompleted);
    drawerCount.textContent = String(appState.totalCompleted);
  }

  /* ===================== Language ===================== */

  function applyLanguage() {
    var s = t();
    htmlEl.lang = s.htmlLangTag;
    htmlEl.dir = appState.lang === 'ar' ? 'rtl' : 'ltr';
    htmlEl.classList.toggle('lang-ar', appState.lang === 'ar');

    appTitleEl.textContent = s.appTitle;
    jarSubtitleEl.textContent = s.subtitle;
    newDayBadge.textContent = s.newDayBadge;
    drawBtnLabelEl.textContent = s.drawBtnLabel;
    hintTextEl.textContent = s.hintText;
    footerNoteEl.textContent = s.footerNote;
    qcMarkEl.textContent = s.qcMark;
    langToggle.textContent = s.langToggleLabel;
    historyBtnLabelEl.textContent = s.historyBtnLabel;
    historyBtn.setAttribute('aria-label', s.historyBtnLabel);
    historyTitleEl.textContent = s.historyTitle;
    drawerCounterLabelEl.textContent = s.questsCompleted;
    drawerClose.setAttribute('aria-label', s.drawerClose);

    // re-render whatever dynamic content is currently visible, in the new language
    if (appState.today.cardId) {
      var card = TASKS_BY_ID[appState.today.cardId];
      if (card) {
        cardEyebrow.textContent = appState.today.completed ? s.eyebrowCompleted : s.eyebrowActive;
        setCardContent(card, appState.today.completed);
        if (appState.today.completed) renderCardActionsCompleted();
        else renderCardActionsActive();
      }
    }
    renderHistoryList();
  }

  /* ===================== Card actions rendering ===================== */

  function renderCardActionsActive() {
    var s = t();
    var remaining = MAX_REDRAWS - appState.today.redrawsUsed;
    var note = remaining === 2 ? s.redrawNote2 : remaining === 1 ? s.redrawNote1 : s.redrawNoteNone;

    cardActions.innerHTML =
      '<button class="btn btn-primary" id="doneBtn" type="button">' + s.doneBtn + '</button>' +
      '<button class="btn btn-secondary" id="redrawBtn" type="button"' + (remaining <= 0 ? ' disabled' : '') + '>' + s.redrawBtn + '</button>' +
      '<p class="redraw-note" id="redrawNote">' + note + '</p>';

    document.getElementById('doneBtn').addEventListener('click', handleComplete);
    document.getElementById('redrawBtn').addEventListener('click', handleRedraw);
    refreshActionsAnimation();
  }

  function renderCardActionsCompleted() {
    var s = t();
    cardActions.innerHTML =
      '<p class="celebrate-heading">' + s.celebrateHeading + '</p>' +
      '<p class="celebrate-sub">' + s.celebrateSub + '</p>' +
      '<p class="counter-pill">' + s.questsCompleted + ' <strong>' + appState.totalCompleted + '</strong></p>' +
      '<button class="btn btn-secondary" id="viewHistoryBtn" type="button">' + s.viewHistoryBtn + '</button>';

    document.getElementById('viewHistoryBtn').addEventListener('click', openDrawer);
    refreshActionsAnimation();
  }

  /* ===================== Draw / redraw / complete ===================== */

  function handleDraw() {
    if (isAnimating) return;
    isAnimating = true;
    drawBtn.disabled = true;

    var card = pickTask();
    appState.today.cardId = card.id;
    appState.today.completed = false;
    appState.today.redrawsUsed = 0;
    appState.today.date = todayStr();
    saveState();

    jarWrap.classList.add('shaking');
    announce(t().announceShaking);

    wait(SHAKE_MS)
      .then(function () {
        jarWrap.classList.remove('shaking');
        drawBtn.disabled = false;
        jarView.hidden = true;
        cardView.hidden = false;
        cardEyebrow.textContent = t().eyebrowActive;
        cardInner.classList.remove('popped', 'flipped');
        void cardInner.offsetWidth;
        cardInner.classList.add('popped');
        return wait(POP_MS);
      })
      .then(function () {
        setCardContent(card, false);
        cardInner.classList.add('flipped');
        return wait(FLIP_MS);
      })
      .then(function () {
        renderCardActionsActive();
        announce(t().announceToday(card.task[appState.lang]));
        isAnimating = false;
      });
  }

  function handleRedraw() {
    if (isAnimating) return;
    if (appState.today.redrawsUsed >= MAX_REDRAWS) return;
    isAnimating = true;

    var redrawBtn = document.getElementById('redrawBtn');
    var doneBtn = document.getElementById('doneBtn');
    if (redrawBtn) redrawBtn.disabled = true;
    if (doneBtn) doneBtn.disabled = true;

    cardInner.classList.remove('flipped');

    wait(POP_MS)
      .then(function () {
        var card = pickTask();
        appState.today.cardId = card.id;
        appState.today.redrawsUsed += 1;
        saveState();
        setCardContent(card, false);
        cardInner.classList.add('flipped');
        return wait(FLIP_MS).then(function () { return card; });
      })
      .then(function (card) {
        renderCardActionsActive();
        announce(t().announceNew(card.task[appState.lang]));
        isAnimating = false;
      });
  }

  function handleComplete() {
    if (isAnimating) return;
    if (!appState.today.cardId || appState.today.completed) return;

    appState.today.completed = true;
    appState.totalCompleted += 1;

    var card = TASKS_BY_ID[appState.today.cardId];
    appState.history.unshift({
      id: card.id + '-' + todayStr() + '-' + Date.now(),
      taskId: card.id,
      category: card.category,
      durationMin: card.durationMin,
      durationMax: card.durationMax,
      dateCompleted: todayStr()
    });

    saveState();
    cardEyebrow.textContent = t().eyebrowCompleted;
    doneStampEl.textContent = t().doneStamp;
    doneStampEl.classList.add('show');
    burstConfetti();
    renderCardActionsCompleted();
    updateHeaderCount();
    renderHistoryList();
    announce(t().announceCompleted);
  }

  /* ===================== Confetti ===================== */

  function burstConfetti() {
    var emojis = ['✨', '⭐', '🎉', '💫', '🌟', '♡'];
    var frag = document.createDocumentFragment();
    var pieces = [];
    for (var i = 0; i < 16; i++) {
      var span = document.createElement('span');
      span.className = 'confetti-piece';
      span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      var angle = Math.random() * Math.PI * 2;
      var dist = 90 + Math.random() * 110;
      var tx = Math.cos(angle) * dist;
      var ty = Math.sin(angle) * dist - 40;
      var rot = (Math.random() * 240 - 120) + 'deg';
      span.style.setProperty('--tx', tx.toFixed(0) + 'px');
      span.style.setProperty('--ty', ty.toFixed(0) + 'px');
      span.style.setProperty('--rot', rot);
      span.style.animationDelay = (Math.random() * 0.12) + 's';
      frag.appendChild(span);
      pieces.push(span);
    }
    confettiLayer.appendChild(frag);
    setTimeout(function () {
      pieces.forEach(function (p) { p.remove(); });
    }, 1100);
  }

  /* ===================== History drawer ===================== */

  function renderHistoryList() {
    var s = t();
    if (appState.history.length === 0) {
      historyList.innerHTML =
        '<div class="empty-history"><span class="emoji">🫙</span>' + s.emptyHistoryLine1 + '<br>' + s.emptyHistoryLine2 + '</div>';
      return;
    }
    historyList.innerHTML = appState.history.map(function (entry) {
      var taskDef = TASKS_BY_ID[entry.taskId];
      var taskText = taskDef ? taskDef.task[appState.lang] : (entry.task || '');
      var catLabel = CATEGORY_LABELS[appState.lang][entry.category] || entry.category;
      var duration = (entry.durationMin != null) ? formatDuration(entry.durationMin, entry.durationMax) : (entry.duration || '');
      return (
        '<div class="history-item">' +
          '<div class="history-item-top">' +
            '<span class="history-item-chip cat-' + entry.category + '">' + catLabel + '</span>' +
            '<span class="history-item-date">' + formatDate(entry.dateCompleted) + '</span>' +
          '</div>' +
          '<p class="history-item-task">' + taskText + '</p>' +
        '</div>'
      );
    }).join('');
  }

  function onDrawerKeydown(e) { if (e.key === 'Escape') closeDrawer(); }

  function openDrawer() {
    renderHistoryList();
    drawerBackdrop.hidden = false;
    historyDrawer.hidden = false;
    requestAnimationFrame(function () {
      drawerBackdrop.classList.add('show');
      historyDrawer.classList.add('show');
    });
    document.addEventListener('keydown', onDrawerKeydown);
  }

  function closeDrawer() {
    drawerBackdrop.classList.remove('show');
    historyDrawer.classList.remove('show');
    document.removeEventListener('keydown', onDrawerKeydown);
    setTimeout(function () {
      drawerBackdrop.hidden = true;
      historyDrawer.hidden = true;
    }, 350);
  }

  /* ===================== Main render (initial load) ===================== */

  function render() {
    updateHeaderCount();

    var card = appState.today.cardId ? TASKS_BY_ID[appState.today.cardId] : null;

    if (!card) {
      jarView.hidden = false;
      cardView.hidden = true;
      newDayBadge.hidden = !(appState.history.length > 0);
    } else {
      jarView.hidden = true;
      cardView.hidden = false;
      cardInner.classList.add('popped', 'flipped');
      setCardContent(card, appState.today.completed);
      if (appState.today.completed) {
        cardEyebrow.textContent = t().eyebrowCompleted;
        renderCardActionsCompleted();
      } else {
        cardEyebrow.textContent = t().eyebrowActive;
        renderCardActionsActive();
      }
    }
    renderHistoryList();
  }

  /* ===================== Wire up events ===================== */

  drawBtn.addEventListener('click', handleDraw);
  historyBtn.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);
  langToggle.addEventListener('click', function () {
    appState.lang = appState.lang === 'ar' ? 'en' : 'ar';
    saveState();
    applyLanguage();
  });

  applyLanguage();
  render();
})();
