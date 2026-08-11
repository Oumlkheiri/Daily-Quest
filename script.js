(function () {
  'use strict';

  /* ===================== Data ===================== */

  var CATEGORY_LABELS = {
    creative: 'Creative',
    home: 'Home',
    tech: 'Tech',
    learning: 'Learning',
    adventure: 'Adventure',
    career: 'Career',
    lifestyle: 'Lifestyle'
  };

  var TASKS = [
    // Creative
    { id: 'c1', category: 'creative', duration: '30–45 min', task: 'Create a bookmark by hand and decorate it.' },
    { id: 'c2', category: 'creative', duration: '45–90 min', task: 'Make a 30-second cinematic video with your phone.' },
    { id: 'c3', category: 'creative', duration: '45–90 min', task: 'Design a poster for a fictional event.' },
    { id: 'c4', category: 'creative', duration: '20–30 min', task: 'Redesign your phone wallpaper.' },
    { id: 'c5', category: 'creative', duration: '20–35 min', task: 'Draw a small doodle for every letter of your name.' },
    { id: 'c6', category: 'creative', duration: '15–20 min', task: 'Write a short poem about your day.' },
    { id: 'c7', category: 'creative', duration: '45–90 min', task: 'Create a small handmade gift for someone.' },
    { id: 'c8', category: 'creative', duration: '30–60 min', task: 'Make a collage from old photos or magazine clippings.' },
    { id: 'c9', category: 'creative', duration: '45–60 min', task: 'Write a one-page short story with a twist ending.' },
    { id: 'c10', category: 'creative', duration: '30–45 min', task: 'Design your own logo or personal symbol.' },

    // Home
    { id: 'h1', category: 'home', duration: '20–30 min', task: 'Organize one drawer completely.' },
    { id: 'h2', category: 'home', duration: '45–90 min', task: 'Cook a recipe you have never tried before.' },
    { id: 'h3', category: 'home', duration: '30–60 min', task: 'Turn something old in your room into something useful.' },
    { id: 'h4', category: 'home', duration: '30–90 min', task: 'Fix one unfinished thing you have been postponing.' },
    { id: 'h5', category: 'home', duration: '20–40 min', task: 'Deep clean your desk or workspace.' },
    { id: 'h6', category: 'home', duration: '30–45 min', task: 'Declutter one shelf and set aside items to donate.' },
    { id: 'h7', category: 'home', duration: '45–90 min', task: 'Rearrange the furniture in one room.' },
    { id: 'h8', category: 'home', duration: '45–90 min', task: 'Bake something simple from scratch.' },
    { id: 'h9', category: 'home', duration: '15–25 min', task: 'Wash and reorganize your bag or backpack.' },
    { id: 'h10', category: 'home', duration: '15–30 min', task: 'Give one houseplant a proper care session (or start one).' },

    // Tech
    { id: 't1', category: 'tech', duration: '90–180 min', task: 'Create a simple webpage in one day.' },
    { id: 't2', category: 'tech', duration: '20–30 min', task: 'Organize your computer Downloads folder.' },
    { id: 't3', category: 'tech', duration: '20–30 min', task: 'Back up your phone photos to one folder.' },
    { id: 't4', category: 'tech', duration: '15–20 min', task: 'Unsubscribe from 10 emails you never read.' },
    { id: 't5', category: 'tech', duration: '15–25 min', task: "Customize your phone's home screen layout." },
    { id: 't6', category: 'tech', duration: '45–60 min', task: 'Set up a simple budget spreadsheet.' },
    { id: 't7', category: 'tech', duration: '20–30 min', task: 'Delete duplicate or blurry photos from your gallery.' },
    { id: 't8', category: 'tech', duration: '20–30 min', task: 'Clean up and rename the files on your desktop.' },

    // Learning
    { id: 'l1', category: 'learning', duration: '30–45 min', task: 'Read 30 pages of a book.' },
    { id: 'l2', category: 'learning', duration: '30–45 min', task: 'Watch one documentary segment and write down 3 things you learned.' },
    { id: 'l3', category: 'learning', duration: '20–40 min', task: 'Learn one small practical skill and demonstrate it today.' },
    { id: 'l4', category: 'learning', duration: '20–30 min', task: 'Learn 10 new words in a foreign language and use them in sentences.' },
    { id: 'l5', category: 'learning', duration: '20–30 min', task: 'Solve 5 puzzles or brain teasers.' },
    { id: 'l6', category: 'learning', duration: '20–30 min', task: 'Teach someone one thing you already know.' },
    { id: 'l7', category: 'learning', duration: '20–30 min', task: 'Learn a new fold, knot, or stitch and make one with it.' },

    // Adventure
    { id: 'a1', category: 'adventure', duration: '60–120 min', task: 'Visit a place in your city you have never visited.' },
    { id: 'a2', category: 'adventure', duration: '30–45 min', task: 'Take 10 interesting photos around you.' },
    { id: 'a3', category: 'adventure', duration: '30–60 min', task: "Take a walk in a direction you've never gone before." },
    { id: 'a4', category: 'adventure', duration: '20–40 min', task: "Try a food you've never eaten before." },
    { id: 'a5', category: 'adventure', duration: '20 min', task: 'Find a spot outside and people-watch for 20 minutes.' },
    { id: 'a6', category: 'adventure', duration: '30–45 min', task: 'Explore one new street in your neighborhood.' },

    // Career
    { id: 'k1', category: 'career', duration: '45–90 min', task: 'Find one opportunity or hackathon and apply.' },
    { id: 'k2', category: 'career', duration: '30–60 min', task: 'Update one section of your resume or portfolio.' },
    { id: 'k3', category: 'career', duration: '15–30 min', task: 'Reach out to one person for advice or a short chat.' },
    { id: 'k4', category: 'career', duration: '20–30 min', task: 'Write a short post about something you learned recently.' },
    { id: 'k5', category: 'career', duration: '30–45 min', task: "Research one company or role you're curious about." },
    { id: 'k6', category: 'career', duration: '15–20 min', task: 'Polish your email signature or professional bio.' },

    // Lifestyle
    { id: 'y1', category: 'lifestyle', duration: '15 min', task: "Write down 3 things you're grateful for and why." },
    { id: 'y2', category: 'lifestyle', duration: '20–30 min', task: "Do a 20-minute workout you've never tried." },
    { id: 'y3', category: 'lifestyle', duration: '30–45 min', task: 'Cook a healthy meal using only 5 ingredients.' },
    { id: 'y4', category: 'lifestyle', duration: '15–20 min', task: "Call or message someone you haven't talked to in a while." },
    { id: 'y5', category: 'lifestyle', duration: '20–30 min', task: 'Plan a mini one-day adventure for this weekend.' },
    { id: 'y6', category: 'lifestyle', duration: '20–30 min', task: 'Write a letter to your future self.' },
    { id: 'y7', category: 'lifestyle', duration: '10–15 min', task: 'Try a 10-minute guided meditation or breathing exercise.' }
  ];

  var MAX_REDRAWS = 2;
  var STORAGE_KEY = 'dailyQuestJar.v1';
  var POP_MS = 380;
  var FLIP_MS = 380;
  var SHAKE_MS = 480;

  /* ===================== State ===================== */

  function defaultState() {
    return {
      totalCompleted: 0,
      history: [],
      recentTaskIds: [],
      today: { date: null, card: null, completed: false, redrawsUsed: 0 }
    };
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var parsed = JSON.parse(raw);
      var base = defaultState();
      var merged = Object.assign(base, parsed);
      merged.today = Object.assign({ date: null, card: null, completed: false, redrawsUsed: 0 }, parsed.today || {});
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
      appState.today = { date: null, card: null, completed: false, redrawsUsed: 0 };
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
  ensureFreshDay();
  var isAnimating = false;

  /* ===================== DOM refs ===================== */

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

  function wait(ms) { return new Promise(function (resolve) { setTimeout(resolve, ms); }); }

  function announce(text) { srAnnounce.textContent = text; }

  function formatDate(iso) {
    var parts = iso.split('-').map(Number);
    var dt = new Date(parts[0], parts[1] - 1, parts[2]);
    return dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function setCardContent(card, completed) {
    cardCategoryEl.textContent = CATEGORY_LABELS[card.category] || card.category;
    cardCategoryEl.className = 'quest-category-chip cat-' + card.category;
    cardTaskEl.textContent = card.task;
    cardDurationEl.textContent = '⏱ ' + card.duration;
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

  /* ===================== Card actions rendering ===================== */

  function renderCardActionsActive() {
    var remaining = MAX_REDRAWS - appState.today.redrawsUsed;
    var note = remaining > 0
      ? (remaining + ' redraw' + (remaining === 1 ? '' : 's') + ' left today')
      : 'No redraws left — make it count 💫';

    cardActions.innerHTML =
      '<button class="btn btn-primary" id="doneBtn" type="button">✓ I did it</button>' +
      '<button class="btn btn-secondary" id="redrawBtn" type="button"' + (remaining <= 0 ? ' disabled' : '') + '>Draw again</button>' +
      '<p class="redraw-note" id="redrawNote">' + note + '</p>';

    document.getElementById('doneBtn').addEventListener('click', handleComplete);
    document.getElementById('redrawBtn').addEventListener('click', handleRedraw);
    refreshActionsAnimation();
  }

  function renderCardActionsCompleted() {
    cardActions.innerHTML =
      '<p class="celebrate-heading">Quest completed! ✨</p>' +
      '<p class="celebrate-sub">Nice work — enjoy the rest of your day.</p>' +
      '<p class="counter-pill">Quests completed: <strong>' + appState.totalCompleted + '</strong></p>' +
      '<button class="btn btn-secondary" id="viewHistoryBtn" type="button">View My Quests</button>';

    document.getElementById('viewHistoryBtn').addEventListener('click', openDrawer);
    refreshActionsAnimation();
  }

  /* ===================== Draw / redraw / complete ===================== */

  function handleDraw() {
    if (isAnimating) return;
    isAnimating = true;
    drawBtn.disabled = true;

    var card = pickTask();
    appState.today.card = card;
    appState.today.completed = false;
    appState.today.redrawsUsed = 0;
    appState.today.date = todayStr();
    saveState();

    jarWrap.classList.add('shaking');
    announce('Shaking the jar…');

    wait(SHAKE_MS)
      .then(function () {
        jarWrap.classList.remove('shaking');
        drawBtn.disabled = false;
        jarView.hidden = true;
        cardView.hidden = false;
        cardEyebrow.textContent = "Today’s Quest";
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
        announce('Today’s quest: ' + card.task);
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
        appState.today.card = card;
        appState.today.redrawsUsed += 1;
        saveState();
        setCardContent(card, false);
        cardInner.classList.add('flipped');
        return wait(FLIP_MS).then(function () { return card; });
      })
      .then(function (card) {
        renderCardActionsActive();
        announce('New quest: ' + card.task);
        isAnimating = false;
      });
  }

  function handleComplete() {
    if (isAnimating) return;
    if (!appState.today.card || appState.today.completed) return;

    appState.today.completed = true;
    appState.totalCompleted += 1;

    var card = appState.today.card;
    appState.history.unshift({
      id: card.id + '-' + todayStr() + '-' + Date.now(),
      task: card.task,
      category: card.category,
      duration: card.duration,
      dateCompleted: todayStr()
    });

    saveState();
    cardEyebrow.textContent = 'Quest Completed';
    doneStampEl.classList.add('show');
    burstConfetti();
    renderCardActionsCompleted();
    updateHeaderCount();
    renderHistoryList();
    announce('Quest completed!');
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
    if (appState.history.length === 0) {
      historyList.innerHTML =
        '<div class="empty-history"><span class="emoji">🫙</span>No quests completed yet.<br>Draw your first card to begin!</div>';
      return;
    }
    historyList.innerHTML = appState.history.map(function (entry) {
      return (
        '<div class="history-item">' +
          '<div class="history-item-top">' +
            '<span class="history-item-chip cat-' + entry.category + '">' + (CATEGORY_LABELS[entry.category] || entry.category) + '</span>' +
            '<span class="history-item-date">' + formatDate(entry.dateCompleted) + '</span>' +
          '</div>' +
          '<p class="history-item-task">' + entry.task + '</p>' +
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

    if (!appState.today.card) {
      jarView.hidden = false;
      cardView.hidden = true;
      newDayBadge.hidden = !(appState.history.length > 0);
    } else {
      jarView.hidden = true;
      cardView.hidden = false;
      cardInner.classList.add('popped', 'flipped');
      setCardContent(appState.today.card, appState.today.completed);
      if (appState.today.completed) {
        cardEyebrow.textContent = 'Quest Completed';
        renderCardActionsCompleted();
      } else {
        cardEyebrow.textContent = "Today’s Quest";
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

  render();
})();
