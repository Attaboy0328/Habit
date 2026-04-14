const STORAGE_KEY = "habit-mobile-v3";
const SETTINGS_KEY = "habit-mobile-settings-v3";
const REMINDER_KEY = "habit-mobile-reminders-v1";
const BIO_CRED_KEY = "habit-mobile-bio-cred-v1";
const WEBDAV_KEY = "habit-mobile-webdav-v1";
const PROXY_PRIMARY = "https://dav.282913.xyz";
const PROXY_FALLBACK = "https://www.dav.282913.xyz";

const PRESET_CATEGORIES = [
  { id: "study", name: "学习" },
  { id: "health", name: "健康" },
  { id: "life", name: "生活" },
  { id: "work", name: "工作" }
];

const THEME_COLORS = [
  "#d48462", "#c98f7b", "#b9906f", "#9a9f75", "#7fa38d",
  "#6f9ea2", "#7394b7", "#8b88b6", "#9b84a9", "#ad809b",
  "#d98da6", "#e7a7ba", "#e7b2b5", "#c7a9a0", "#a59b93",
  "#8e9b9a", "#6f9090", "#6f8da5", "#8d8d8d", "#c4a26f"
];

const PRESET_HABITS = [
  { id: "vocab", name: "背单词", goal: "积累 30 个", icon: "📝", category: "study" },
  { id: "read", name: "阅读", goal: "阅读 20 分钟", icon: "📖", category: "study" },
  { id: "listen-en", name: "听英语", goal: "听力 15 分钟", icon: "🎧", category: "study" },
  { id: "podcast", name: "听播客", goal: "吸收新知识", icon: "🎙️", category: "study" },
  { id: "writing", name: "写作", goal: "输出 300 字", icon: "✍️", category: "study" },
  { id: "calligraphy", name: "练字", goal: "练字 1 页", icon: "🖌️", category: "study" },
  { id: "exam", name: "刷题", goal: "完成 30 题", icon: "📚", category: "study" },
  { id: "review", name: "复盘", goal: "复盘今天", icon: "🧠", category: "study" },
  { id: "course", name: "网课学习", goal: "完成 1 课", icon: "💻", category: "study" },
  { id: "memorize", name: "记忆训练", goal: "10 分钟", icon: "🧩", category: "study" },
  { id: "run", name: "跑步", goal: "跑步 3 公里", icon: "🏃", category: "health" },
  { id: "yoga", name: "瑜伽", goal: "拉伸 20 分钟", icon: "🧘", category: "health" },
  { id: "moxa", name: "艾灸", goal: "温灸 15 分钟", icon: "🔥", category: "health" },
  { id: "bathroom", name: "排便", goal: "保持规律", icon: "🚽", category: "health" },
  { id: "nap", name: "午睡", goal: "午休 20 分钟", icon: "😴", category: "health" },
  { id: "water", name: "喝水", goal: "每天 8 杯", icon: "💧", category: "health" },
  { id: "walk", name: "起身走动", goal: "每小时走动", icon: "🚶", category: "health" },
  { id: "stretch", name: "定时拉伸", goal: "3 组拉伸", icon: "🤸", category: "health" },
  { id: "sleep-early", name: "早睡", goal: "23:00 前入睡", icon: "🌙", category: "health" },
  { id: "wake-early", name: "早起", goal: "7:00 前起床", icon: "🌅", category: "health" },
  { id: "meditate", name: "冥想", goal: "冥想 10 分钟", icon: "🧘‍♂️", category: "health" },
  { id: "eye", name: "护眼", goal: "远眺 5 分钟", icon: "👀", category: "health" },
  { id: "sugar", name: "控糖", goal: "不喝含糖饮料", icon: "🍬", category: "health" },
  { id: "weight", name: "体重记录", goal: "晨起称重", icon: "⚖️", category: "health" },
  { id: "bath", name: "泡脚", goal: "睡前泡脚", icon: "🛁", category: "health" },
  { id: "switch", name: "玩Switch", goal: "放松 30 分钟", icon: "🎮", category: "life" },
  { id: "clean", name: "搞卫生", goal: "打扫 20 分钟", icon: "🧹", category: "life" },
  { id: "room", name: "整理房间", goal: "收纳整洁", icon: "🧺", category: "life" },
  { id: "desk", name: "整理桌面", goal: "保持清爽", icon: "🗂️", category: "life" },
  { id: "account", name: "记账", goal: "记录消费", icon: "💰", category: "life" },
  { id: "skin", name: "护肤", goal: "晚间护肤", icon: "🧴", category: "life" },
  { id: "mask", name: "敷面膜", goal: "每周 3 次", icon: "😌", category: "life" },
  { id: "laundry", name: "洗衣", goal: "及时清洗", icon: "🫧", category: "life" },
  { id: "shower", name: "洗澡", goal: "睡前清洁", icon: "🚿", category: "life" },
  { id: "hair", name: "洗头", goal: "规律清洁", icon: "🧼", category: "life" },
  { id: "phone", name: "少刷短视频", goal: "控制 30 分钟", icon: "📱", category: "life" },
  { id: "toilet-water", name: "饮水排便规律", goal: "记录日常", icon: "🗒️", category: "life" },
  { id: "cook", name: "做饭", goal: "至少一餐", icon: "🍳", category: "life" },
  { id: "family", name: "陪伴家人", goal: "30 分钟", icon: "👨‍👩‍👧", category: "life" },
  { id: "pomodoro", name: "番茄钟专注", goal: "4 轮专注", icon: "🍅", category: "work" },
  { id: "task", name: "完成任务清单", goal: "清空待办", icon: "✅", category: "work" },
  { id: "no-delay", name: "不拖延", goal: "今日事今日毕", icon: "⏱️", category: "work" },
  { id: "mail", name: "处理邮件", goal: "清空重要邮件", icon: "📩", category: "work" },
  { id: "meeting", name: "会议纪要", goal: "会后 10 分钟内完成", icon: "🗒️", category: "work" },
  { id: "focus", name: "深度工作", goal: "90 分钟", icon: "🎯", category: "work" },
  { id: "plan", name: "计划明日", goal: "写明日三件事", icon: "🗓️", category: "work" },
  { id: "code", name: "代码练习", goal: "提交 1 次", icon: "⌨️", category: "work" },
  { id: "doc", name: "文档整理", goal: "更新 1 份文档", icon: "📄", category: "work" },
  { id: "chat-clean", name: "消息清理", goal: "及时回复", icon: "💬", category: "work" },
  { id: "learn-tool", name: "工具学习", goal: "学习 20 分钟", icon: "🛠️", category: "work" },
  { id: "brainstorm", name: "创意记录", goal: "记录 3 条点子", icon: "💡", category: "work" },
  { id: "presentation", name: "演讲练习", goal: "练习 10 分钟", icon: "🎤", category: "work" }
];

const elements = {
  screens: Array.from(document.querySelectorAll(".screen")),
  navItems: Array.from(document.querySelectorAll(".mobile-nav__item")),
  todayLabel: document.querySelector("#todayLabel"),
  welcomeSub: document.querySelector("#welcomeSub"),
  todayProgress: document.querySelector("#todayProgress"),
  progressRate: document.querySelector("#progressRate"),
  progressRing: document.querySelector("#progressRing"),
  progressMessage: document.querySelector("#progressMessage"),
  streakSummary: document.querySelector("#streakSummary"),
  habitList: document.querySelector("#habitList"),
  categoryTabs: document.querySelector("#categoryTabs"),
  presetSections: document.querySelector("#presetSections"),
  addCustomHabit: document.querySelector("#addCustomHabit"),
  habitItemTemplate: document.querySelector("#habitItemTemplate"),
  rangeBtns: Array.from(document.querySelectorAll("[data-range]")),
  timerModeBtns: Array.from(document.querySelectorAll("[data-timer-mode]")),
  timerPanels: Array.from(document.querySelectorAll(".timer-panel")),
  overallHeatmapTitle: document.querySelector("#overallHeatmapTitle"),
  overallHeatmapHint: document.querySelector("#overallHeatmapHint"),
  focusHabitTitle: document.querySelector("#focusHabitTitle"),
  focusHabitMeta: document.querySelector("#focusHabitMeta"),
  weekRangeLabel: document.querySelector("#weekRangeLabel"),
  weekStrip: document.querySelector("#weekStrip"),
  overallHeatmap: document.querySelector("#overallHeatmap"),
  statDaysDone: document.querySelector("#statDaysDone"),
  statRate2: document.querySelector("#statRate2"),
  statRate: document.querySelector("#statRate"),
  statCheckins: document.querySelector("#statCheckins"),
  statActiveHabits: document.querySelector("#statActiveHabits"),
  statStreak: document.querySelector("#statStreak"),
  pomoDisplay: document.querySelector("#pomoDisplay"),
  pomoStart: document.querySelector("#pomoStart"),
  pomoPause: document.querySelector("#pomoPause"),
  pomoReset: document.querySelector("#pomoReset"),
  pomoApply: document.querySelector("#pomoApply"),
  immerseToggle: document.querySelector("#immerseToggle"),
  pomoMinus: document.querySelector("#pomoMinus"),
  pomoPlus: document.querySelector("#pomoPlus"),
  pomoCustomMinutes: document.querySelector("#pomoCustomMinutes"),
  ringtoneSelect: document.querySelector("#ringtoneSelect"),
  ringtonePreviewBtn: document.querySelector("#ringtonePreviewBtn"),
  pomoQuickBtns: Array.from(document.querySelectorAll("[data-pomo-minutes]")),
  stopwatchDisplay: document.querySelector("#stopwatchDisplay"),
  stopwatchHint: document.querySelector("#stopwatchHint"),
  lapList: document.querySelector("#lapList"),
  swStart: document.querySelector("#swStart"),
  swPause: document.querySelector("#swPause"),
  swReset: document.querySelector("#swReset"),
  themeSwatches: document.querySelector("#themeSwatches"),
  darkModeToggle: document.querySelector("#darkModeToggle"),
  webdavUrl: document.querySelector("#webdavUrl"),
  webdavUser: document.querySelector("#webdavUser"),
  webdavPass: document.querySelector("#webdavPass"),
  webdavTestBtn: document.querySelector("#webdavTestBtn"),
  webdavUploadBtn: document.querySelector("#webdavUploadBtn"),
  webdavDownloadBtn: document.querySelector("#webdavDownloadBtn"),
  silentSyncToggle: document.querySelector("#silentSyncToggle"),
  syncStatusText: document.querySelector("#syncStatusText"),
  downloadBackupBtn: document.querySelector("#downloadBackupBtn"),
  importBackupInput: document.querySelector("#importBackupInput"),
  registerBioBtn: document.querySelector("#registerBioBtn"),
  removeBioBtn: document.querySelector("#removeBioBtn"),
  unlockNowBtn: document.querySelector("#unlockNowBtn"),
  lockNowBtn: document.querySelector("#lockNowBtn"),
  privacyLock: document.querySelector("#privacyLock"),
  privacyUnlockBtn: document.querySelector("#privacyUnlockBtn"),
  privacyFallbackBtn: document.querySelector("#privacyFallbackBtn")
};

const state = loadState();
const settings = loadSettings();
const reminderState = loadReminders();
const webdavConfig = loadWebdavConfig();
let soundContext = null;

const uiState = {
  activeScreen: "home",
  activeCategory: "study",
  statsRange: "week",
  timerMode: "pomo",
  immersiveTimer: false,
  pomoMinutes: 25,
  pomoLeftSec: 25 * 60,
  pomoTimer: null,
  swElapsedMs: 0,
  swTimer: null,
  swStartedAt: 0,
  laps: [],
  reminderTick: null,
  silentSyncTick: null
};

bootstrap();

function bootstrap() {
  bindEvents();
  initCategoryTabs();
  initThemeSwatches();
  applySettings();
  renderAll();
  startReminderTicker();
  startSilentSyncTicker();
  if (settings.privacyEnabled) showPrivacyLock();
}

function bindEvents() {
  elements.navItems.forEach((button) => {
    button.addEventListener("click", () => switchScreen(button.dataset.screen || "home"));
  });

  elements.rangeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      uiState.statsRange = button.dataset.range || "week";
      renderStats();
    });
  });

  elements.timerModeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      uiState.timerMode = button.dataset.timerMode || "pomo";
      renderTimerMode();
    });
  });

  elements.pomoQuickBtns.forEach((button) => {
    button.addEventListener("click", () => {
      applyPomodoroMinutes(Number(button.dataset.pomoMinutes || 25));
    });
  });

  elements.pomoApply.addEventListener("click", () => {
    applyPomodoroMinutes(Number(elements.pomoCustomMinutes.value || 25));
  });
  elements.pomoMinus.addEventListener("click", () => applyPomodoroMinutes(uiState.pomoMinutes - 1));
  elements.pomoPlus.addEventListener("click", () => applyPomodoroMinutes(uiState.pomoMinutes + 1));
  elements.immerseToggle.addEventListener("click", () => {
    uiState.immersiveTimer = !uiState.immersiveTimer;
    renderImmersiveTimer();
  });
  elements.ringtoneSelect.addEventListener("change", () => {
    saveSettings();
    playRingtone(settings.ringtone, 1.2);
  });
  elements.ringtonePreviewBtn.addEventListener("click", () => playRingtone(settings.ringtone, 1.3));

  elements.pomoStart.addEventListener("click", startPomodoro);
  elements.pomoPause.addEventListener("click", pausePomodoro);
  elements.pomoReset.addEventListener("click", () => {
    pausePomodoro();
    uiState.pomoLeftSec = uiState.pomoMinutes * 60;
    renderPomodoro();
  });

  elements.swStart.addEventListener("click", startStopwatch);
  elements.swPause.addEventListener("click", pauseStopwatch);
  elements.swReset.addEventListener("click", () => {
    pauseStopwatch();
    uiState.swElapsedMs = 0;
    uiState.laps = [];
    renderLaps();
    renderStopwatch();
    elements.stopwatchHint.textContent = "准备开始专注";
  });

  elements.darkModeToggle.addEventListener("change", () => {
    settings.darkMode = elements.darkModeToggle.checked;
    saveSettings();
    applySettings();
  });
  elements.addCustomHabit.addEventListener("click", addCustomHabit);
  if (elements.downloadBackupBtn) elements.downloadBackupBtn.addEventListener("click", downloadBackupJson);
  if (elements.importBackupInput) elements.importBackupInput.addEventListener("change", importBackupJson);
  if (elements.webdavTestBtn) elements.webdavTestBtn.addEventListener("click", webdavTestConnection);
  if (elements.webdavUploadBtn) elements.webdavUploadBtn.addEventListener("click", webdavUploadBackup);
  if (elements.webdavDownloadBtn) elements.webdavDownloadBtn.addEventListener("click", webdavDownloadBackup);
  if (elements.webdavUrl) elements.webdavUrl.addEventListener("change", saveWebdavConfig);
  if (elements.webdavUser) elements.webdavUser.addEventListener("change", saveWebdavConfig);
  if (elements.webdavPass) elements.webdavPass.addEventListener("change", saveWebdavConfig);
  if (elements.silentSyncToggle) {
    elements.silentSyncToggle.addEventListener("change", () => {
      saveWebdavConfig();
      startSilentSyncTicker();
      updateSyncStatus();
    });
  }
  if (elements.registerBioBtn) elements.registerBioBtn.addEventListener("click", registerBiometric);
  if (elements.removeBioBtn) elements.removeBioBtn.addEventListener("click", removeBiometric);
  if (elements.unlockNowBtn) elements.unlockNowBtn.addEventListener("click", biometricUnlock);
  if (elements.lockNowBtn) elements.lockNowBtn.addEventListener("click", showPrivacyLock);
  if (elements.privacyUnlockBtn) elements.privacyUnlockBtn.addEventListener("click", biometricUnlock);
  if (elements.privacyFallbackBtn) elements.privacyFallbackBtn.addEventListener("click", fallbackUnlock);
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { habits: [] };
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed.habits) ? parsed : { habits: [] };
  } catch {
    return { habits: [] };
  }
}

function loadSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (!raw) return { accent: THEME_COLORS[0], darkMode: false, ringtone: "soft", privacyEnabled: false };
  try {
    const parsed = JSON.parse(raw);
    return {
      accent: parsed.accent || THEME_COLORS[0],
      darkMode: Boolean(parsed.darkMode),
      ringtone: parsed.ringtone || "soft",
      privacyEnabled: Boolean(parsed.privacyEnabled)
    };
  } catch {
    return { accent: THEME_COLORS[0], darkMode: false, ringtone: "soft", privacyEnabled: false };
  }
}

function loadReminders() {
  const raw = localStorage.getItem(REMINDER_KEY);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function loadWebdavConfig() {
  const raw = localStorage.getItem(WEBDAV_KEY);
  if (!raw) return { url: "", user: "", pass: "", silentSync: false, lastSync: "", proxyBase: PROXY_PRIMARY };
  try {
    const parsed = JSON.parse(raw);
    return {
      url: parsed.url || "",
      user: parsed.user || "",
      pass: parsed.pass || "",
      silentSync: Boolean(parsed.silentSync),
      lastSync: parsed.lastSync || "",
      proxyBase: parsed.proxyBase || PROXY_PRIMARY
    };
  } catch {
    return { url: "", user: "", pass: "", silentSync: false, lastSync: "", proxyBase: PROXY_PRIMARY };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (webdavConfig.silentSync) silentSyncUpload();
}

function saveSettings() {
  settings.ringtone = elements.ringtoneSelect.value;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  if (webdavConfig.silentSync) silentSyncUpload();
}

function saveReminders() {
  localStorage.setItem(REMINDER_KEY, JSON.stringify(reminderState));
  if (webdavConfig.silentSync) silentSyncUpload();
}

function saveWebdavConfig() {
  webdavConfig.url = (elements.webdavUrl?.value || "").trim();
  webdavConfig.user = (elements.webdavUser?.value || "").trim();
  webdavConfig.pass = elements.webdavPass?.value || "";
  webdavConfig.silentSync = Boolean(elements.silentSyncToggle?.checked ?? webdavConfig.silentSync);
  localStorage.setItem(WEBDAV_KEY, JSON.stringify(webdavConfig));
}

function initCategoryTabs() {
  elements.categoryTabs.innerHTML = "";
  PRESET_CATEGORIES.forEach((cat) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab-btn${cat.id === uiState.activeCategory ? " is-active" : ""}`;
    button.textContent = cat.name;
    button.addEventListener("click", () => {
      uiState.activeCategory = cat.id;
      renderPresetGrid();
    });
    elements.categoryTabs.appendChild(button);
  });
}

function initThemeSwatches() {
  elements.themeSwatches.innerHTML = "";
  THEME_COLORS.forEach((color) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "swatch";
    btn.dataset.accent = color;
    btn.style.setProperty("--sw", color);
    if (color === settings.accent) btn.classList.add("is-active");
    btn.addEventListener("click", () => {
      settings.accent = color;
      saveSettings();
      applySettings();
      renderAll();
    });
    elements.themeSwatches.appendChild(btn);
  });
}

function renderAll() {
  renderNav();
  renderHome();
  renderPresetGrid();
  renderStats();
  renderPomodoro();
  renderStopwatch();
  renderLaps();
  renderTimerMode();
  renderImmersiveTimer();
}

function renderNav() {
  elements.screens.forEach((section) => {
    section.classList.toggle("is-active", section.dataset.screen === uiState.activeScreen);
  });
  elements.navItems.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screen === uiState.activeScreen);
  });
}

function switchScreen(screen) {
  uiState.activeScreen = screen;
  renderNav();
  renderImmersiveTimer();
}

function renderHome() {
  const today = new Date();
  const todayKey = formatDateKey(today);
  const doneCount = state.habits.filter((habit) => Boolean(habit.history[todayKey])).length;
  const total = state.habits.length;
  const rate = total ? Math.round((doneCount / total) * 100) : 0;

  elements.todayLabel.textContent = new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(today);

  elements.welcomeSub.textContent = total === 0 ? "今日任务为空，可从下方添加" : "继续保持，今天也会很稳";
  elements.todayProgress.textContent = `${doneCount}/${total}`;
  elements.progressRate.textContent = `${rate}%`;
  elements.progressRing.style.strokeDashoffset = `${264 - (264 * rate) / 100}`;
  elements.progressMessage.textContent = getProgressMessage(rate, total);
  elements.streakSummary.textContent = `连续 ${getMaxStreak()} 天`;

  elements.habitList.innerHTML = "";
  if (total === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-box";
    empty.textContent = "今日任务为空，请从下方快速添加习惯。";
    elements.habitList.appendChild(empty);
    return;
  }

  state.habits.forEach((habit) => {
    const node = elements.habitItemTemplate.content.cloneNode(true);
    const item = node.querySelector(".habit-item");
    const icon = node.querySelector(".habit-item__icon");
    const title = node.querySelector(".habit-item__title");
    const goal = node.querySelector(".habit-item__goal");
    const edit = node.querySelector(".habit-item__edit");
    const remind = node.querySelector(".habit-item__remind");
    const del = node.querySelector(".habit-item__delete");
    const check = node.querySelector(".habit-item__check");
    const isDone = Boolean(habit.history[todayKey]);
    const remindConf = reminderState[habit.id] || { enabled: false, time: "09:00", lastSent: "" };

    icon.textContent = habit.icon;
    title.textContent = habit.name;
    goal.textContent = habit.goal;
    item.classList.toggle("is-done", isDone);
    check.classList.toggle("is-done", isDone);
    remind.classList.toggle("is-active", remindConf.enabled);

    edit.addEventListener("click", () => {
      const nextGoal = (window.prompt(`修改「${habit.name}」目标`, habit.goal) || "").trim();
      if (!nextGoal) return;
      habit.goal = nextGoal;
      saveState();
      renderAll();
    });

    remind.addEventListener("click", () => {
      requestNotificationPermission();
      const enabled = window.confirm(`是否开启「${habit.name}」每日提醒？\n当前：${remindConf.enabled ? `已开启 ${remindConf.time}` : "未开启"}`);
      if (!enabled) {
        reminderState[habit.id] = { ...remindConf, enabled: false };
      } else {
        const nextTime = (window.prompt("输入提醒时间（HH:MM）", remindConf.time || "09:00") || "").trim();
        if (!/^\d{2}:\d{2}$/.test(nextTime)) {
          alert("时间格式无效，请使用 HH:MM（如 09:30）");
          return;
        }
        reminderState[habit.id] = { ...remindConf, enabled: true, time: nextTime };
      }
      saveReminders();
      renderHome();
    });

    del.addEventListener("click", () => {
      state.habits = state.habits.filter((h) => h.id !== habit.id);
      delete reminderState[habit.id];
      saveState();
      saveReminders();
      renderAll();
    });

    check.addEventListener("click", () => {
      if (isDone) {
        delete habit.history[todayKey];
      } else {
        habit.history[todayKey] = true;
      }
      item.classList.add("pulse");
      setTimeout(() => item.classList.remove("pulse"), 240);
      saveState();
      renderAll();
    });

    elements.habitList.appendChild(node);
  });
}

function renderPresetGrid() {
  elements.categoryTabs.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.textContent === PRESET_CATEGORIES.find((c) => c.id === uiState.activeCategory)?.name);
  });

  elements.presetSections.innerHTML = "";
  PRESET_CATEGORIES.forEach((category) => {
    const section = document.createElement("section");
    section.className = `preset-section${category.id === uiState.activeCategory ? " is-active" : ""}`;
    const title = document.createElement("h3");
    title.textContent = category.name;
    const grid = document.createElement("div");
    grid.className = "preset-grid";

    PRESET_HABITS.filter((item) => item.category === category.id).forEach((preset) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "preset-chip";
      button.innerHTML = `<span>${preset.icon}</span><span>${preset.name}</span>`;
      button.addEventListener("click", () => addPresetHabit(preset));
      grid.appendChild(button);
    });

    section.appendChild(title);
    section.appendChild(grid);
    elements.presetSections.appendChild(section);
  });
}

function addCustomHabit() {
  const name = (window.prompt("习惯名称（例如：晚间拉伸）") || "").trim();
  if (!name) return;
  const goal = (window.prompt("目标描述（例如：15 分钟）") || "").trim();
  const icon = (window.prompt("图标（输入emoji，例如 ✅）") || "✨").trim() || "✨";
  state.habits.unshift({
    id: `custom-${Date.now()}`,
    name,
    goal: goal || "自定义目标",
    icon,
    history: {}
  });
  saveState();
  renderAll();
}

function renderImmersiveTimer() {
  document.body.classList.toggle("timer-immersive", uiState.immersiveTimer && uiState.activeScreen === "timer");
  elements.immerseToggle.textContent = `沉浸模式：${uiState.immersiveTimer ? "开" : "关"}`;
}

function addPresetHabit(preset) {
  const exists = state.habits.some((habit) => habit.id === preset.id);
  if (!exists) {
    state.habits.unshift({
      id: preset.id,
      name: preset.name,
      goal: preset.goal,
      icon: preset.icon,
      history: {}
    });
  }
  saveState();
  renderAll();
}

function renderStats() {
  const focusHabit = state.habits[0] || null;
  const periodDates =
    uiState.statsRange === "week"
      ? getCurrentWeekDays()
      : uiState.statsRange === "month"
        ? getCurrentMonthDays()
        : getCurrentYearDays();
  const periodKeys = periodDates.map(formatDateKey);

  let checkins = 0;
  let activeHabits = 0;

  state.habits.forEach((habit) => {
    let hasAny = false;
    periodKeys.forEach((key) => {
      if (habit.history[key]) {
        checkins += 1;
        hasAny = true;
      }
    });
    if (hasAny) activeHabits += 1;
  });

  const totalSlots = Math.max(1, state.habits.length * periodKeys.length);
  const rate = Math.round((checkins / totalSlots) * 100);

  elements.statRate.textContent = `${rate}%`;
  elements.statCheckins.textContent = String(checkins);
  elements.statActiveHabits.textContent = String(activeHabits);
  elements.statStreak.textContent = String(getMaxStreak());
  elements.statDaysDone.textContent = `🏆 ${countDoneDays(focusHabit)} 天`;
  elements.statRate2.textContent = `🔥 ${rate}%`;
  elements.focusHabitTitle.textContent = focusHabit ? `${focusHabit.icon} ${focusHabit.name}` : "习惯统计";
  elements.focusHabitMeta.textContent = focusHabit ? focusHabit.goal : "添加习惯后可查看";

  elements.rangeBtns.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.range === uiState.statsRange);
  });

  if (uiState.statsRange === "week") {
    elements.overallHeatmapTitle.textContent = "周热力图";
    elements.overallHeatmapHint.textContent = "展示本周每天完成情况";
  } else if (uiState.statsRange === "month") {
    elements.overallHeatmapTitle.textContent = "月热力图";
    elements.overallHeatmapHint.textContent = "展示本月每天完成情况";
  } else {
    elements.overallHeatmapTitle.textContent = "年热力图";
    elements.overallHeatmapHint.textContent = "按月份查看当年完成分布";
  }

  renderWeekStrip(focusHabit);
  renderOverallHeatmap(focusHabit);
}

function renderWeekStrip(focusHabit) {
  const week = getCurrentWeekDays();
  elements.weekRangeLabel.textContent = `${formatShort(week[0])}-${formatShort(week[6])}`;
  elements.weekStrip.innerHTML = "";
  week.forEach((day) => {
    const key = formatDateKey(day);
    const done = focusHabit ? Boolean(focusHabit.history[key]) : false;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `week-strip__day${done ? " is-done" : ""}`;
    btn.innerHTML = `<span>周${weekdayLabels()[((day.getDay() + 6) % 7)]}</span><strong>${day.getMonth() + 1}/${day.getDate()}</strong><em>${done ? "✓" : "·"}</em>`;
    if (focusHabit) {
      btn.addEventListener("click", () => {
        if (focusHabit.history[key]) delete focusHabit.history[key];
        else focusHabit.history[key] = true;
        saveState();
        renderStats();
        renderHome();
      });
    } else {
      btn.disabled = true;
    }
    elements.weekStrip.appendChild(btn);
  });
}

function renderOverallHeatmap(focusHabit) {
  elements.overallHeatmap.innerHTML = "";

  if (uiState.statsRange === "week") {
    const week = getCurrentWeekDays();
    renderHeatRangeBlock(week, `本周 ${formatShort(week[0])}-${formatShort(week[6])}`, false, focusHabit);
    return;
  }

  if (uiState.statsRange === "month") {
    const monthDays = getCurrentMonthDays();
    const d = new Date();
    renderHeatRangeBlock(monthDays, `${d.getMonth() + 1}月 ${d.getFullYear()}`, false, focusHabit);
    return;
  }

  for (let month = 0; month < 12; month += 1) {
    const year = new Date().getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));
    renderHeatRangeBlock(days, `${month + 1}月`, true, focusHabit);
  }
}

function renderHeatRangeBlock(days, label, compact, focusHabit) {
  const block = document.createElement("article");
  block.className = "range-block";
  const heading = document.createElement("h4");
  heading.textContent = label;
  const weekday = document.createElement("div");
  weekday.className = "range-weekdays";
  weekday.innerHTML = `<span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span>`;
  const grid = document.createElement("div");
  grid.className = compact ? "range-grid compact" : "range-grid";

  const first = days[0];
  const firstOffset = first ? (first.getDay() + 6) % 7 : 0;
  const maxCells = 42;
  for (let i = 0; i < maxCells; i += 1) {
    const cell = document.createElement("div");
    cell.className = "heat-cell";

    const dayIndex = i - firstOffset;
    if (dayIndex >= 0 && dayIndex < days.length) {
      const date = days[dayIndex];
      const key = formatDateKey(date);
      const count = focusHabit ? (focusHabit.history[key] ? 1 : 0) : state.habits.filter((habit) => habit.history[key]).length;
      if (count > 0 && count <= 2) cell.classList.add("lv1");
      if (count > 2 && count <= 4) cell.classList.add("lv2");
      if (count > 4) cell.classList.add("lv3");
      cell.title = `${formatDateKey(date)}：${count} 次`;
      if (!compact) cell.textContent = String(date.getDate());
      if (count === 0) cell.classList.add("is-empty");
    }

    grid.appendChild(cell);
  }

  block.appendChild(heading);
  block.appendChild(weekday);
  block.appendChild(grid);
  elements.overallHeatmap.appendChild(block);
}

function renderTimerMode() {
  elements.timerModeBtns.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.timerMode === uiState.timerMode);
  });
  elements.timerPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.timerPanel === uiState.timerMode);
  });
}

function applyPomodoroMinutes(minutes) {
  if (!Number.isFinite(minutes) || minutes < 1) return;
  const safe = Math.min(180, Math.max(1, Math.round(minutes)));
  uiState.pomoMinutes = safe;
  uiState.pomoLeftSec = safe * 60;
  elements.pomoCustomMinutes.value = String(safe);
  pausePomodoro();
  renderPomodoro();
}

function startPomodoro() {
  if (uiState.pomoTimer) return;
  ensureAudioReady();
  uiState.pomoTimer = setInterval(() => {
    uiState.pomoLeftSec -= 1;
    if (uiState.pomoLeftSec <= 0) {
      uiState.pomoLeftSec = 0;
      pausePomodoro();
      playRingtone(settings.ringtone);
      vibrateOnTimerDone();
    }
    renderPomodoro();
  }, 1000);
}

function pausePomodoro() {
  if (!uiState.pomoTimer) return;
  clearInterval(uiState.pomoTimer);
  uiState.pomoTimer = null;
}

function renderPomodoro() {
  const min = Math.floor(uiState.pomoLeftSec / 60);
  const sec = uiState.pomoLeftSec % 60;
  elements.pomoDisplay.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function playRingtone(type, seconds = 1.8) {
  if (type === "none") return;
  const ctx = ensureAudioReady();
  if (!ctx) return;
  const safeStop = ctx.currentTime + seconds;
  const addTone = (freq, wave = "sine", gainLevel = 0.08, delay = 0) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = freq;
    osc.type = wave;
    osc.connect(gain);
    gain.connect(ctx.destination);
    const start = ctx.currentTime + delay;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(gainLevel, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, safeStop);
    osc.start(start);
    osc.stop(safeStop);
  };

  if (type === "soft") [660, 550].forEach((f, i) => addTone(f, "sine", 0.07, i * 0.16));
  else if (type === "bright") [880, 988, 1175].forEach((f, i) => addTone(f, "triangle", 0.09, i * 0.12));
  else if (type === "chime") [523, 659, 784].forEach((f, i) => addTone(f, "sine", 0.08, i * 0.2));
}

function vibrateOnTimerDone() {
  if ("vibrate" in navigator) navigator.vibrate([120, 60, 120, 60, 180]);
}

function ensureAudioReady() {
  if (!soundContext) soundContext = new (window.AudioContext || window.webkitAudioContext)();
  if (soundContext.state === "suspended") soundContext.resume();
  return soundContext;
}

function startStopwatch() {
  if (uiState.swTimer) return;
  uiState.swStartedAt = Date.now();
  uiState.laps.unshift({ label: "开始", value: elements.stopwatchDisplay.textContent });
  uiState.laps = uiState.laps.slice(0, 8);
  renderLaps();
  uiState.swTimer = setInterval(renderStopwatch, 200);
  elements.stopwatchHint.textContent = "专注中...";
}

function pauseStopwatch() {
  if (!uiState.swTimer) return;
  clearInterval(uiState.swTimer);
  uiState.swTimer = null;
  uiState.swElapsedMs += Date.now() - uiState.swStartedAt;
  uiState.laps.unshift({ label: "暂停", value: formatElapsed(uiState.swElapsedMs) });
  uiState.laps = uiState.laps.slice(0, 8);
  renderLaps();
  renderStopwatch();
  elements.stopwatchHint.textContent = "已暂停";
}

function renderStopwatch() {
  const elapsed = uiState.swTimer ? uiState.swElapsedMs + (Date.now() - uiState.swStartedAt) : uiState.swElapsedMs;
  elements.stopwatchDisplay.textContent = formatElapsed(elapsed);
}

function renderLaps() {
  elements.lapList.innerHTML = "";
  if (!uiState.laps.length) {
    elements.lapList.innerHTML = '<div class="empty-box">暂无记录</div>';
    return;
  }
  uiState.laps.forEach((lap) => {
    const row = document.createElement("div");
    row.className = "lap-item";
    row.innerHTML = `<span>${lap.label}</span><strong>${lap.value}</strong>`;
    elements.lapList.appendChild(row);
  });
}

function formatElapsed(elapsed) {
  const hh = Math.floor(elapsed / 3600000);
  const mm = Math.floor((elapsed % 3600000) / 60000);
  const ss = Math.floor((elapsed % 60000) / 1000);
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

function applySettings() {
  document.documentElement.style.setProperty("--accent", settings.accent);
  document.documentElement.style.setProperty("--accent-strong", settings.accent);
  document.documentElement.dataset.theme = settings.darkMode ? "dark" : "light";
  elements.darkModeToggle.checked = settings.darkMode;
  elements.ringtoneSelect.value = settings.ringtone || "soft";
  if (elements.webdavUrl) elements.webdavUrl.value = webdavConfig.url || "";
  if (elements.webdavUser) elements.webdavUser.value = webdavConfig.user || "";
  if (elements.webdavPass) elements.webdavPass.value = webdavConfig.pass || "";
  if (elements.silentSyncToggle) elements.silentSyncToggle.checked = Boolean(webdavConfig.silentSync);
  updateSyncStatus();
  elements.themeSwatches.querySelectorAll(".swatch").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.accent === settings.accent);
  });
}

function startReminderTicker() {
  if (uiState.reminderTick) clearInterval(uiState.reminderTick);
  uiState.reminderTick = setInterval(checkReminders, 30000);
}

function checkReminders() {
  if (Notification.permission !== "granted") return;
  const now = new Date();
  const hhmm = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  const today = formatDateKey(now);
  state.habits.forEach((habit) => {
    const conf = reminderState[habit.id];
    if (!conf || !conf.enabled || conf.time !== hhmm || conf.lastSent === today) return;
    new Notification(`Habit 提醒：${habit.name}`, { body: `该打卡了：${habit.goal}` });
    conf.lastSent = today;
    reminderState[habit.id] = conf;
  });
  saveReminders();
}

function requestNotificationPermission() {
  if (!("Notification" in window)) {
    alert("当前浏览器不支持系统通知。");
    return;
  }
  Notification.requestPermission().then((result) => {
    alert(result === "granted" ? "通知权限已开启" : "通知权限未开启");
  });
}

function buildBackupPayload() {
  return {
    exportedAt: new Date().toISOString(),
    state,
    settings,
    reminders: reminderState
  };
}

function downloadBackupJson() {
  const blob = new Blob([JSON.stringify(buildBackupPayload(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `habit-backup-${formatDateKey(new Date())}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function getWebdavRequestConfig(method, body) {
  saveWebdavConfig();
  if (!webdavConfig.url) throw new Error("请先填写 WebDAV 地址");
  const headers = { "Content-Type": "application/json" };
  const payload = {
    targetUrl: webdavConfig.url,
    username: webdavConfig.user,
    password: webdavConfig.pass,
    method,
    body: body || ""
  };
  return { headers, body: JSON.stringify(payload) };
}

async function proxyWebdavFetch(method, body) {
  const cfg = getWebdavRequestConfig(method, body);
  const bases = [webdavConfig.proxyBase || PROXY_PRIMARY, PROXY_FALLBACK];
  let lastError = null;

  for (const base of bases) {
    try {
      const endpoint = `${base.replace(/\/+$/, "")}/proxy/webdav`;
      const res = await fetch(endpoint, { method: "POST", headers: cfg.headers, body: cfg.body });
      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || `代理返回 HTTP ${res.status}`);
      }
      const text = await res.text();
      return { text, base };
    } catch (err) {
      lastError = err;
      webdavConfig.proxyBase = base === PROXY_PRIMARY ? PROXY_FALLBACK : PROXY_PRIMARY;
    }
  }
  throw lastError || new Error("代理不可用");
}

async function webdavTestConnection() {
  try {
    const { base } = await proxyWebdavFetch("PROPFIND");
    webdavConfig.proxyBase = base;
    localStorage.setItem(WEBDAV_KEY, JSON.stringify(webdavConfig));
    alert(`坚果云连接正常，当前代理：${base}`);
  } catch (err) {
    alert(`连接失败：${err.message}`);
  }
}

async function webdavUploadBackup() {
  try {
    const body = JSON.stringify(buildBackupPayload(), null, 2);
    const { base } = await proxyWebdavFetch("PUT", body);
    webdavConfig.proxyBase = base;
    webdavConfig.lastSync = new Date().toISOString();
    localStorage.setItem(WEBDAV_KEY, JSON.stringify(webdavConfig));
    updateSyncStatus();
    alert("已手动同步上传到坚果云。");
  } catch (err) {
    alert(`上传失败：${err.message}`);
  }
}

async function webdavDownloadBackup() {
  try {
    const { text, base } = await proxyWebdavFetch("GET");
    webdavConfig.proxyBase = base;
    const parsed = JSON.parse(text);
    applyBackupPayload(parsed);
    webdavConfig.lastSync = new Date().toISOString();
    localStorage.setItem(WEBDAV_KEY, JSON.stringify(webdavConfig));
    updateSyncStatus();
    alert("已从坚果云下载并恢复。");
  } catch (err) {
    alert(`下载失败：${err.message}`);
  }
}

function updateSyncStatus() {
  if (!elements.syncStatusText) return;
  const mode = webdavConfig.silentSync ? "静默同步已开启" : "静默同步未开启";
  const last = webdavConfig.lastSync ? `，上次：${new Date(webdavConfig.lastSync).toLocaleString("zh-CN")}` : "";
  elements.syncStatusText.textContent = `${mode}${last}`;
}

function startSilentSyncTicker() {
  if (uiState.silentSyncTick) clearInterval(uiState.silentSyncTick);
  if (!webdavConfig.silentSync) return;
  uiState.silentSyncTick = setInterval(() => {
    silentSyncUpload();
  }, 5 * 60 * 1000);
}

async function silentSyncUpload() {
  if (!webdavConfig.url) return;
  try {
    const body = JSON.stringify(buildBackupPayload(), null, 2);
    const { base } = await proxyWebdavFetch("PUT", body);
    webdavConfig.proxyBase = base;
    webdavConfig.lastSync = new Date().toISOString();
    localStorage.setItem(WEBDAV_KEY, JSON.stringify(webdavConfig));
    updateSyncStatus();
  } catch {
    // keep silent
  }
}

function importBackupJson(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  file.text().then((text) => {
    try {
      const parsed = JSON.parse(text);
      applyBackupPayload(parsed);
      alert("备份导入成功");
    } catch {
      alert("导入失败：文件格式不正确");
    }
  });
}

function applyBackupPayload(parsed) {
  if (parsed.state?.habits) {
    state.habits = parsed.state.habits;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
  if (parsed.settings) {
    Object.assign(settings, parsed.settings);
    saveSettings();
  }
  if (parsed.reminders) {
    Object.keys(reminderState).forEach((k) => delete reminderState[k]);
    Object.assign(reminderState, parsed.reminders);
    saveReminders();
  }
  applySettings();
  renderAll();
}

function randomBuffer(len = 32) {
  const arr = new Uint8Array(len);
  crypto.getRandomValues(arr);
  return arr;
}

function toBase64Url(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(base64url) {
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const pad = "=".repeat((4 - (base64.length % 4)) % 4);
  const bin = atob(base64 + pad);
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

async function registerBiometric() {
  if (!window.PublicKeyCredential) {
    alert("当前浏览器不支持生物识别 WebAuthn。");
    return;
  }
  try {
    const cred = await navigator.credentials.create({
      publicKey: {
        challenge: randomBuffer(32),
        rp: { name: "Habit App" },
        user: { id: randomBuffer(32), name: "habit-user", displayName: "Habit User" },
        pubKeyCredParams: [{ type: "public-key", alg: -7 }, { type: "public-key", alg: -257 }],
        authenticatorSelection: { authenticatorAttachment: "platform", userVerification: "required" },
        timeout: 60000,
        attestation: "none"
      }
    });
    localStorage.setItem(BIO_CRED_KEY, toBase64Url(cred.rawId));
    settings.privacyEnabled = true;
    saveSettings();
    alert("生物识别已注册，可用于 FaceID / 指纹解锁。");
  } catch (err) {
    alert(`注册失败：${err.message || "请重试"}`);
  }
}

function removeBiometric() {
  localStorage.removeItem(BIO_CRED_KEY);
  settings.privacyEnabled = false;
  saveSettings();
  hidePrivacyLock();
  alert("已解除生物解锁。");
}

async function biometricUnlock() {
  if (!window.PublicKeyCredential) {
    alert("当前浏览器不支持生物识别 WebAuthn。");
    return;
  }
  const stored = localStorage.getItem(BIO_CRED_KEY);
  if (!stored) {
    alert("请先在设置中注册生物识别。");
    return;
  }
  try {
    await navigator.credentials.get({
      publicKey: {
        challenge: randomBuffer(32),
        timeout: 60000,
        userVerification: "required",
        allowCredentials: [{ type: "public-key", id: fromBase64Url(stored) }]
      }
    });
    hidePrivacyLock();
  } catch (err) {
    alert(`解锁失败：${err.message || "请重试"}`);
  }
}

function showPrivacyLock() {
  if (!settings.privacyEnabled) return;
  elements.privacyLock.classList.remove("is-hidden");
}

function hidePrivacyLock() {
  elements.privacyLock.classList.add("is-hidden");
}

function fallbackUnlock() {
  const token = prompt("输入临时口令：HABIT-UNLOCK");
  if (token === "HABIT-UNLOCK") hidePrivacyLock();
}


function getMaxStreak() {
  return Math.max(0, ...state.habits.map((habit) => {
    let streak = 0;
    const cursor = new Date();
    while (habit.history[formatDateKey(cursor)]) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }));
}

function countDoneDays(habit) {
  if (!habit) return 0;
  return Object.keys(habit.history || {}).length;
}

function getProgressMessage(rate, total) {
  if (total === 0) return "先从下方添加你要坚持的习惯。";
  if (rate === 100) return "今天全完成，太棒了。";
  if (rate >= 60) return "进度过半，再冲一下。";
  if (rate > 0) return "已经有进展，继续保持。";
  return "从最容易的一项开始。";
}

function getRecentDays(count) {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (count - index - 1));
    return date;
  });
}

function getCurrentMonthDays() {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => new Date(y, m, i + 1));
}

function getCurrentYearDays() {
  const now = new Date();
  const y = now.getFullYear();
  const start = new Date(y, 0, 1);
  const end = new Date(y, 11, 31);
  const days = [];
  const c = new Date(start);
  while (c <= end) {
    days.push(new Date(c));
    c.setDate(c.getDate() + 1);
  }
  return days;
}

function getCurrentWeekDays() {
  const now = new Date();
  const day = now.getDay() || 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - day + 1);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatShort(date) {
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function weekdayLabels() {
  return ["一", "二", "三", "四", "五", "六", "日"];
}
