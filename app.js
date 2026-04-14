const STORAGE_KEY = "habit-mobile-v3";
const SETTINGS_KEY = "habit-mobile-settings-v3";
const REMINDER_KEY = "habit-mobile-reminders-v1";
const BIO_CRED_KEY = "habit-mobile-bio-cred-v1";

const PRESET_CATEGORIES = [
  { id: "study", name: "学习" },
  { id: "health", name: "健康" },
  { id: "life", name: "生活" },
  { id: "work", name: "工作" },
  { id: "ritual", name: "晨晚仪式" },
  { id: "mind", name: "心理健康" }
];

function makeThemePalette({
  id,
  name,
  swatch,
  accent,
  strong,
  deep,
  deeper,
  soft,
  bg,
  surface = "#fffffb",
  surfaceSoft,
  highlight,
  rgb,
  orb,
  warm
}) {
  return {
    id,
    name,
    swatch,
    vars: {
      "--bg": bg,
      "--surface": surface,
      "--surface-soft": surfaceSoft,
      "--text": "#0b1728",
      "--muted": "#657386",
      "--accent": accent,
      "--accent-strong": strong,
      "--brand-deep": deep,
      "--brand-deeper": deeper,
      "--brand-soft": soft,
      "--highlight": highlight,
      "--line": `rgba(${rgb}, 0.13)`,
      "--shadow": `0 24px 70px rgba(${rgb}, 0.10)`,
      "--card-shadow": `0 16px 38px rgba(${rgb}, 0.08)`,
      "--nav-bg": "rgba(250, 255, 251, 0.92)",
      "--bg-orb": orb,
      "--bg-warm-orb": warm
    },
    darkVars: {
      "--bg": "#0b1110",
      "--surface": "#121918",
      "--surface-soft": "#182321",
      "--text": "#f7fffb",
      "--muted": "#a6b7b1",
      "--line": "rgba(255, 255, 255, 0.14)",
      "--shadow": `0 24px 70px rgba(${rgb}, 0.20)`,
      "--card-shadow": "0 16px 38px rgba(0, 0, 0, 0.24)",
      "--nav-bg": "rgba(13, 19, 18, 0.92)",
      "--bg-orb": `rgba(${rgb}, 0.28)`,
      "--bg-warm-orb": "rgba(255, 255, 255, 0.04)"
    }
  };
}

const THEME_PALETTES = [
  makeThemePalette({ id: "jade", name: "松石绿", swatch: "#087c68", accent: "#087c68", strong: "#075d52", deep: "#075d52", deeper: "#04483f", soft: "#dff3ec", bg: "#f3faf6", surfaceSoft: "#ecf6f1", highlight: "#f4e887", rgb: "7, 93, 82", orb: "rgba(190, 240, 225, 0.78)", warm: "rgba(246, 241, 197, 0.52)" }),
  makeThemePalette({ id: "sakura", name: "樱花粉", swatch: "#e9a8bb", accent: "#df8ea8", strong: "#c16f8d", deep: "#a84f72", deeper: "#843653", soft: "#fde8ef", bg: "#fff7f9", surfaceSoft: "#fbeef2", highlight: "#f8d987", rgb: "193, 111, 141", orb: "rgba(250, 211, 223, 0.82)", warm: "rgba(255, 232, 209, 0.54)" }),
  makeThemePalette({ id: "rose", name: "豆沙玫瑰", swatch: "#c98f9f", accent: "#bd7d91", strong: "#9a6073", deep: "#75475a", deeper: "#563343", soft: "#f5e3e8", bg: "#fcf6f7", surfaceSoft: "#f3e9ec", highlight: "#f3d38a", rgb: "154, 96, 115", orb: "rgba(231, 196, 205, 0.76)", warm: "rgba(245, 223, 195, 0.48)" }),
  makeThemePalette({ id: "coral", name: "雾珊瑚", swatch: "#d6907f", accent: "#cf806b", strong: "#a96050", deep: "#7b4037", deeper: "#5a2e29", soft: "#f8e4df", bg: "#fff8f5", surfaceSoft: "#f6ebe6", highlight: "#f4dd91", rgb: "169, 96, 80", orb: "rgba(241, 199, 189, 0.78)", warm: "rgba(254, 229, 190, 0.52)" }),
  makeThemePalette({ id: "clay", name: "陶土橙", swatch: "#c98d67", accent: "#c68055", strong: "#9d6240", deep: "#754a32", deeper: "#543424", soft: "#f4e4d8", bg: "#fbf6ef", surfaceSoft: "#f2eadf", highlight: "#e7d77c", rgb: "157, 98, 64", orb: "rgba(225, 190, 163, 0.74)", warm: "rgba(245, 228, 178, 0.52)" }),
  makeThemePalette({ id: "apricot", name: "杏仁奶", swatch: "#d4aa71", accent: "#c99a58", strong: "#9b743d", deep: "#755932", deeper: "#554025", soft: "#f5ead8", bg: "#fbf8ef", surfaceSoft: "#f2eddf", highlight: "#dbe18a", rgb: "155, 116, 61", orb: "rgba(235, 210, 170, 0.72)", warm: "rgba(238, 232, 186, 0.48)" }),
  makeThemePalette({ id: "honey", name: "蜂蜜黄", swatch: "#d2bd68", accent: "#c4aa45", strong: "#947c2d", deep: "#6f5c24", deeper: "#50431d", soft: "#f3eed0", bg: "#fbfaf0", surfaceSoft: "#f0eedc", highlight: "#b7df93", rgb: "148, 124, 45", orb: "rgba(239, 226, 156, 0.70)", warm: "rgba(213, 231, 178, 0.45)" }),
  makeThemePalette({ id: "sage", name: "鼠尾草", swatch: "#97ad8b", accent: "#879f7a", strong: "#687f5d", deep: "#4e6146", deeper: "#394836", soft: "#e9f1e5", bg: "#f6faf3", surfaceSoft: "#edf3e9", highlight: "#ebe18a", rgb: "104, 127, 93", orb: "rgba(213, 235, 202, 0.76)", warm: "rgba(241, 232, 184, 0.44)" }),
  makeThemePalette({ id: "olive", name: "橄榄灰", swatch: "#8f9e77", accent: "#819263", strong: "#637449", deep: "#4b5738", deeper: "#373f2c", soft: "#ebf0de", bg: "#f8faf2", surfaceSoft: "#eef1e4", highlight: "#dcd987", rgb: "99, 116, 73", orb: "rgba(219, 229, 190, 0.70)", warm: "rgba(236, 226, 176, 0.42)" }),
  makeThemePalette({ id: "eucalyptus", name: "尤加利", swatch: "#7db3a4", accent: "#68a998", strong: "#4f8679", deep: "#3b655d", deeper: "#2c4b45", soft: "#e1f2ed", bg: "#f3faf8", surfaceSoft: "#e9f4f1", highlight: "#f1e48b", rgb: "79, 134, 121", orb: "rgba(199, 237, 228, 0.74)", warm: "rgba(246, 238, 190, 0.46)" }),
  makeThemePalette({ id: "cyan", name: "雾蓝青", swatch: "#7fb7bf", accent: "#68aab4", strong: "#4f8690", deep: "#3b646d", deeper: "#2b4a51", soft: "#e3f3f5", bg: "#f2f9fa", surfaceSoft: "#e8f3f5", highlight: "#efe18c", rgb: "79, 134, 144", orb: "rgba(199, 236, 240, 0.72)", warm: "rgba(242, 231, 185, 0.42)" }),
  makeThemePalette({ id: "sky", name: "晴空蓝", swatch: "#8daed4", accent: "#789fc9", strong: "#5c7fa5", deep: "#435f7f", deeper: "#30455d", soft: "#e6eef8", bg: "#f5f8fd", surfaceSoft: "#ebf0f7", highlight: "#f0db8a", rgb: "92, 127, 165", orb: "rgba(208, 225, 246, 0.76)", warm: "rgba(244, 228, 189, 0.42)" }),
  makeThemePalette({ id: "denim", name: "牛仔蓝", swatch: "#7d91b7", accent: "#6e83ac", strong: "#56678b", deep: "#3f4e69", deeper: "#2d394f", soft: "#e5eaf4", bg: "#f5f7fb", surfaceSoft: "#eceff5", highlight: "#e7d886", rgb: "86, 103, 139", orb: "rgba(205, 215, 236, 0.72)", warm: "rgba(237, 226, 184, 0.40)" }),
  makeThemePalette({ id: "iris", name: "鸢尾紫", swatch: "#9b8bc4", accent: "#8b7abb", strong: "#6e5f99", deep: "#524772", deeper: "#3c3455", soft: "#eee9f7", bg: "#f8f6fd", surfaceSoft: "#f0ecf7", highlight: "#e8d783", rgb: "110, 95, 153", orb: "rgba(224, 215, 246, 0.75)", warm: "rgba(240, 226, 184, 0.40)" }),
  makeThemePalette({ id: "lavender", name: "薰衣草", swatch: "#b5a4cf", accent: "#a491c7", strong: "#816ca5", deep: "#614f7c", deeper: "#46395d", soft: "#f1eaf8", bg: "#faf6fd", surfaceSoft: "#f2edf7", highlight: "#eadb8b", rgb: "129, 108, 165", orb: "rgba(230, 218, 247, 0.75)", warm: "rgba(240, 229, 194, 0.42)" }),
  makeThemePalette({ id: "mauve", name: "灰紫粉", swatch: "#b894aa", accent: "#aa819a", strong: "#886277", deep: "#65475a", deeper: "#4b3443", soft: "#f3e7ef", bg: "#fbf6fa", surfaceSoft: "#f2eaf0", highlight: "#e8d483", rgb: "136, 98, 119", orb: "rgba(229, 205, 219, 0.76)", warm: "rgba(239, 224, 184, 0.42)" }),
  makeThemePalette({ id: "plum", name: "梅子紫", swatch: "#9c7890", accent: "#916a84", strong: "#744f68", deep: "#57394e", deeper: "#402a3a", soft: "#efe2eb", bg: "#faf5f8", surfaceSoft: "#f0e8ed", highlight: "#e1d382", rgb: "116, 79, 104", orb: "rgba(217, 195, 209, 0.72)", warm: "rgba(236, 223, 186, 0.40)" }),
  makeThemePalette({ id: "mocha", name: "摩卡棕", swatch: "#9f8b78", accent: "#927b67", strong: "#75604f", deep: "#57473a", deeper: "#40342c", soft: "#eee8e1", bg: "#f8f5f1", surfaceSoft: "#eeeae4", highlight: "#d8d17c", rgb: "117, 96, 79", orb: "rgba(221, 211, 200, 0.76)", warm: "rgba(233, 225, 180, 0.42)" }),
  makeThemePalette({ id: "slate", name: "雾石灰", swatch: "#8f9c9a", accent: "#7f8f8d", strong: "#647472", deep: "#4b5756", deeper: "#384140", soft: "#e7eeee", bg: "#f5f8f7", surfaceSoft: "#ebf0ef", highlight: "#e3d884", rgb: "100, 116, 114", orb: "rgba(214, 226, 225, 0.70)", warm: "rgba(233, 225, 184, 0.38)" }),
  makeThemePalette({ id: "graphite", name: "石墨黑", swatch: "#6f7777", accent: "#667272", strong: "#505c5c", deep: "#3c4545", deeper: "#2e3535", soft: "#e5e9e9", bg: "#f4f6f6", surfaceSoft: "#eaeeee", highlight: "#d7d080", rgb: "80, 92, 92", orb: "rgba(208, 216, 216, 0.68)", warm: "rgba(230, 223, 184, 0.36)" })
];

const DEFAULT_THEME_ID = THEME_PALETTES[0].id;
const LEGACY_THEME_IDS = {
  "#d48462": "clay",
  "#c98f7b": "coral",
  "#b9906f": "mocha",
  "#9a9f75": "sage",
  "#7fa38d": "eucalyptus",
  "#6f9ea2": "cyan",
  "#7394b7": "denim",
  "#8b88b6": "iris",
  "#9b84a9": "lavender",
  "#ad809b": "mauve",
  "#d98da6": "sakura",
  "#e7a7ba": "sakura",
  "#e7b2b5": "rose",
  "#c7a9a0": "mocha",
  "#a59b93": "slate",
  "#8e9b9a": "slate",
  "#6f9090": "cyan",
  "#6f8da5": "sky",
  "#8d8d8d": "graphite",
  "#c4a26f": "apricot"
};

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
  { id: "toilet-water", name: "排便", goal: "记录规律", icon: "🚽", category: "life" },
  { id: "cook", name: "做饭", goal: "至少一餐", icon: "🍳", category: "life" },
  { id: "family", name: "陪伴家人", goal: "30 分钟", icon: "👨‍👩‍👧", category: "life" },
  { id: "pomodoro", name: "专注", goal: "4 轮专注", icon: "🍅", category: "work" },
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
  { id: "presentation", name: "演讲练习", goal: "练习 10 分钟", icon: "🎤", category: "work" },
  { id: "make-bed", name: "整理床铺", goal: "起床后 2 分钟", icon: "🛏️", category: "ritual" },
  { id: "night-review", name: "睡前复盘", goal: "记录 3 条总结", icon: "🌃", category: "ritual" },
  { id: "eye-warm", name: "眼部热敷", goal: "10 分钟", icon: "🫶", category: "health" },
  { id: "slow-eat", name: "慢食咀嚼", goal: "每口咀嚼 20 次", icon: "🥗", category: "health" },
  { id: "self-praise", name: "夸奖自己", goal: "写下 1 条肯定", icon: "🌟", category: "mind" },
  { id: "mind-3min", name: "3分钟冥想", goal: "静坐 3 分钟", icon: "🧠", category: "mind" }
];

const elements = {
  screens: Array.from(document.querySelectorAll(".screen")),
  navItems: Array.from(document.querySelectorAll(".mobile-nav__item")),
  todayLabel: document.querySelector("#todayLabel"),
  welcomeSub: document.querySelector("#welcomeSub"),
  todayProgress: document.querySelector("#todayProgress"),
  streakSummary: document.querySelector("#streakSummary"),
  habitList: document.querySelector("#habitList"),
  categoryTabs: document.querySelector("#categoryTabs"),
  presetSections: document.querySelector("#presetSections"),
  addCustomHabit: document.querySelector("#addCustomHabit"),
  habitItemTemplate: document.querySelector("#habitItemTemplate"),
  timerModeBtns: Array.from(document.querySelectorAll("[data-timer-mode]")),
  timerPanels: Array.from(document.querySelectorAll(".timer-panel")),
  unifiedTimerDisplay: document.querySelector("#unifiedTimerDisplay"),
  pomoControls: document.querySelector("#pomoControls"),
  stopwatchControls: document.querySelector("#stopwatchControls"),
  statDays: document.querySelector("#statDays"),
  statCheckins: document.querySelector("#statCheckins"),
  statPersist: document.querySelector("#statPersist"),
  statStartDate: document.querySelector("#statStartDate"),
  weekRangeLabel: document.querySelector("#weekRangeLabel"),
  weekPrevBtn: document.querySelector("#weekPrevBtn"),
  weekNextBtn: document.querySelector("#weekNextBtn"),
  weekCircleRow: document.querySelector("#weekCircleRow"),
  yearPrevBtn: document.querySelector("#yearPrevBtn"),
  yearNextBtn: document.querySelector("#yearNextBtn"),
  yearLabel: document.querySelector("#yearLabel"),
  yearMonthLabels: document.querySelector("#yearMonthLabels"),
  yearHeatmapGrid: document.querySelector("#yearHeatmapGrid"),
  yearDoneDays: document.querySelector("#yearDoneDays"),
  yearRate: document.querySelector("#yearRate"),
  timerStart: document.querySelector("#timerStart"),
  timerPause: document.querySelector("#timerPause"),
  timerReset: document.querySelector("#timerReset"),
  pomoCustomMinutes: document.querySelector("#pomoCustomMinutes"),
  pomoCustomValue: document.querySelector("#pomoCustomValue"),
  ringtoneSelect: document.querySelector("#ringtoneSelect"),
  ringtonePreviewBtn: document.querySelector("#ringtonePreviewBtn"),
  pomoQuickBtns: Array.from(document.querySelectorAll("[data-pomo-minutes]")),
  stopwatchHint: document.querySelector("#stopwatchHint"),
  lapList: document.querySelector("#lapList"),
  themeSwatches: document.querySelector("#themeSwatches"),
  darkModeToggle: document.querySelector("#darkModeToggle"),
  clearLocalDataBtn: document.querySelector("#clearLocalDataBtn"),
  registerBioBtn: document.querySelector("#registerBioBtn"),
  removeBioBtn: document.querySelector("#removeBioBtn"),
  unlockNowBtn: document.querySelector("#unlockNowBtn"),
  lockNowBtn: document.querySelector("#lockNowBtn"),
  privacyLock: document.querySelector("#privacyLock"),
  privacyUnlockBtn: document.querySelector("#privacyUnlockBtn"),
  privacyFallbackBtn: document.querySelector("#privacyFallbackBtn")
};

const state = migrateState(loadState());
const settings = loadSettings();
const reminderState = loadReminders();
let soundContext = null;

const uiState = {
  activeScreen: "home",
  activeCategory: "study",
  statsWeekStart: startOfWeek(new Date()),
  statsYear: new Date().getFullYear(),
  timerMode: "pomo",
  pomoMinutes: 25,
  pomoLeftSec: 25 * 60,
  pomoTimer: null,
  swElapsedMs: 0,
  swTimer: null,
  swStartedAt: 0,
  laps: [],
  reminderTick: null
};

bootstrap();

function bootstrap() {
  bindEvents();
  initCategoryTabs();
  initThemeSwatches();
  applySettings();
  renderAll();
  startReminderTicker();
  if (settings.privacyEnabled) showPrivacyLock();
}

function bindEvents() {
  elements.navItems.forEach((button) => {
    button.addEventListener("click", () => switchScreen(button.dataset.screen || "home"));
  });

  if (elements.weekPrevBtn) {
    elements.weekPrevBtn.addEventListener("click", () => {
      uiState.statsWeekStart = addDays(uiState.statsWeekStart, -7);
      renderStats();
    });
  }
  if (elements.weekNextBtn) {
    elements.weekNextBtn.addEventListener("click", () => {
      uiState.statsWeekStart = addDays(uiState.statsWeekStart, 7);
      renderStats();
    });
  }
  if (elements.yearPrevBtn) {
    elements.yearPrevBtn.addEventListener("click", () => {
      uiState.statsYear -= 1;
      renderStats();
    });
  }
  if (elements.yearNextBtn) {
    elements.yearNextBtn.addEventListener("click", () => {
      uiState.statsYear += 1;
      renderStats();
    });
  }

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

  elements.pomoCustomMinutes.addEventListener("input", () => {
    applyPomodoroMinutes(Number(elements.pomoCustomMinutes.value || 25));
  });
  elements.ringtoneSelect.addEventListener("change", () => {
    saveSettings();
    playRingtone(settings.ringtone, 1.2);
  });
  elements.ringtonePreviewBtn.addEventListener("click", () => playRingtone(settings.ringtone, 1.3));

  elements.timerStart.addEventListener("click", () => {
    if (uiState.timerMode === "pomo") startPomodoro();
    else startStopwatch();
  });
  elements.timerPause.addEventListener("click", () => {
    if (uiState.timerMode === "pomo") pausePomodoro();
    else pauseStopwatch();
  });
  elements.timerReset.addEventListener("click", () => {
    if (uiState.timerMode === "pomo") {
      pausePomodoro();
      uiState.pomoLeftSec = uiState.pomoMinutes * 60;
      renderPomodoro();
    } else {
      pauseStopwatch();
      uiState.swElapsedMs = 0;
      uiState.laps = [];
      renderLaps();
      renderStopwatch();
      elements.stopwatchHint.textContent = "准备开始专注";
    }
  });

  elements.darkModeToggle.addEventListener("change", () => {
    settings.darkMode = elements.darkModeToggle.checked;
    saveSettings();
    applySettings();
  });
  elements.addCustomHabit.addEventListener("click", addCustomHabit);
  if (elements.clearLocalDataBtn) elements.clearLocalDataBtn.addEventListener("click", clearLocalData);
  if (elements.registerBioBtn) elements.registerBioBtn.addEventListener("click", registerBiometric);
  if (elements.removeBioBtn) elements.removeBioBtn.addEventListener("click", removeBiometric);
  if (elements.unlockNowBtn) elements.unlockNowBtn.addEventListener("click", biometricUnlock);
  if (elements.lockNowBtn) elements.lockNowBtn.addEventListener("click", showPrivacyLock);
  if (elements.privacyUnlockBtn) elements.privacyUnlockBtn.addEventListener("click", biometricUnlock);
  if (elements.privacyFallbackBtn) elements.privacyFallbackBtn.addEventListener("click", fallbackUnlock);
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { habits: [], backfill: {} };
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.habits)) return { habits: [], backfill: {} };
    return {
      habits: parsed.habits,
      backfill: parsed.backfill && typeof parsed.backfill === "object" ? parsed.backfill : {}
    };
  } catch {
    return { habits: [], backfill: {} };
  }
}

function migrateState(nextState) {
  let changed = false;
  if (!nextState.backfill || typeof nextState.backfill !== "object") {
    nextState.backfill = {};
    changed = true;
  }
  const updates = {
    pomodoro: { name: "专注" },
    "toilet-water": { name: "排便", goal: "记录规律", icon: "🚽" },
    "self-praise": { name: "夸奖自己" }
  };

  nextState.habits.forEach((habit) => {
    const update = updates[habit.id];
    if (!update) return;
    Object.entries(update).forEach(([key, value]) => {
      if (habit[key] !== value) {
        habit[key] = value;
        changed = true;
      }
    });
  });

  if (changed) localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  return nextState;
}

function loadSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (!raw) return { themeId: DEFAULT_THEME_ID, darkMode: false, ringtone: "soft", privacyEnabled: false };
  try {
    const parsed = JSON.parse(raw);
    const legacyAccent = parsed.accent;
    const legacyThemeId = LEGACY_THEME_IDS[legacyAccent];
    const matchedTheme = THEME_PALETTES.find((palette) => {
      return palette.id === parsed.themeId || palette.id === legacyThemeId || palette.swatch === legacyAccent || palette.vars["--accent"] === legacyAccent;
    });
    return {
      themeId: matchedTheme?.id || DEFAULT_THEME_ID,
      darkMode: Boolean(parsed.darkMode),
      ringtone: parsed.ringtone || "soft",
      privacyEnabled: Boolean(parsed.privacyEnabled)
    };
  } catch {
    return { themeId: DEFAULT_THEME_ID, darkMode: false, ringtone: "soft", privacyEnabled: false };
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


function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveSettings() {
  settings.ringtone = elements.ringtoneSelect.value;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function saveReminders() {
  localStorage.setItem(REMINDER_KEY, JSON.stringify(reminderState));
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
  THEME_PALETTES.forEach((palette) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "swatch";
    btn.dataset.themeId = palette.id;
    btn.title = palette.name;
    btn.setAttribute("aria-label", `切换到${palette.name}主题`);
    btn.style.setProperty("--sw", palette.swatch);
    if (palette.id === settings.themeId) btn.classList.add("is-active");
    btn.addEventListener("click", () => {
      settings.themeId = palette.id;
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
}

function renderHome() {
  const today = new Date();
  const todayKey = formatDateKey(today);
  const doneCount = state.habits.filter((habit) => Boolean(habit.history[todayKey])).length;
  const total = state.habits.length;

  elements.todayLabel.textContent = new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(today);

  elements.welcomeSub.textContent = total === 0 ? "今日任务为空，可从下方添加" : "继续保持，今天也会很稳";
  elements.todayProgress.textContent = `${doneCount}/${total}`;
  elements.streakSummary.textContent = `连续 ${getMaxStreak()} 天`;

  elements.habitList.innerHTML = "";
  if (total === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-box empty-box--focus";
    empty.innerHTML = `<div class="empty-box__icon">🗂️</div><div>今日任务为空，点下方“快速添加习惯”立即开始。</div>`;
    elements.habitList.appendChild(empty);
    return;
  }

  state.habits.forEach((habit) => {
    const node = elements.habitItemTemplate.content.cloneNode(true);
    const item = node.querySelector(".habit-item");
    const icon = node.querySelector(".habit-item__icon");
    const title = node.querySelector(".habit-item__title");
    const remind = node.querySelector(".habit-item__remind");
    const del = node.querySelector(".habit-item__delete");
    const check = node.querySelector(".habit-item__check");
    const isDone = Boolean(habit.history[todayKey]);
    const remindConf = reminderState[habit.id] || { enabled: false, time: "09:00", lastSent: "" };

    icon.textContent = habit.icon;
    title.textContent = habit.name;
    item.classList.toggle("is-done", isDone);
    check.classList.toggle("is-done", isDone);
    item.style.background = isDone ? "color-mix(in srgb, var(--accent) 16%, var(--surface-soft))" : "";
    remind.classList.toggle("is-active", remindConf.enabled);

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
  const allCounts = getDailyCounts();
  const dayKeys = Object.keys(allCounts).filter((key) => allCounts[key] > 0);
  const checkins = Object.values(allCounts).reduce((sum, value) => sum + value, 0);
  const doneDays = dayKeys.length;
  const persistDays = getPersistDays(dayKeys);

  elements.statDays.textContent = String(doneDays);
  elements.statCheckins.textContent = String(checkins);
  elements.statPersist.textContent = String(persistDays);
  elements.statStartDate.textContent = dayKeys.length ? `始于 ${formatLongDate(dayKeys.sort()[0])}` : "始于 --";

  renderWeekCircles(allCounts);
  renderYearHeatmap(allCounts);
}

function renderWeekCircles(allCounts) {
  const weekDays = Array.from({ length: 7 }, (_, index) => addDays(uiState.statsWeekStart, index));
  elements.weekRangeLabel.textContent = `${formatShort(weekDays[0])} - ${formatShort(weekDays[6])}`;
  elements.weekCircleRow.innerHTML = "";

  weekDays.forEach((date) => {
    const key = formatDateKey(date);
    const count = allCounts[key] || 0;
    const item = document.createElement("button");
    item.type = "button";
    item.className = `week-circle-item${count > 0 ? " is-done" : ""}${count > 1 ? " is-many" : ""}`;
    item.innerHTML = `
      <span class="week-circle-item__date">${date.getMonth() + 1}/${date.getDate()}</span>
      <span class="week-circle-item__weekday">周${weekdayLabels()[((date.getDay() + 6) % 7)]}</span>
      <span class="week-circle-item__dot">${count > 1 ? count : count === 1 ? "✓" : "/"}</span>
    `;
    item.title = `${key}：${count} 次`;
    item.addEventListener("click", () => {
      cycleBackfill(key);
      renderStats();
      renderHome();
    });
    elements.weekCircleRow.appendChild(item);
  });
}

function renderYearHeatmap(allCounts) {
  elements.yearLabel.textContent = String(uiState.statsYear);
  elements.yearHeatmapGrid.innerHTML = "";
  elements.yearMonthLabels.innerHTML = "";

  const { weeks, yearDays } = buildYearWeeks(uiState.statsYear);
  elements.yearHeatmapGrid.style.setProperty("--week-cols", String(weeks.length));
  elements.yearMonthLabels.style.setProperty("--week-cols", String(weeks.length));

  weeks.forEach((week, weekIndex) => {
    week.forEach((date, rowIndex) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "year-heatmap-cell";
      cell.style.gridColumn = String(weekIndex + 1);
      cell.style.gridRow = String(rowIndex + 1);

      if (!date || date.getFullYear() !== uiState.statsYear) {
        cell.classList.add("is-out");
      } else {
        const key = formatDateKey(date);
        const count = allCounts[key] || 0;
        if (count > 0 && count <= 1) cell.classList.add("lv1");
        if (count > 1 && count <= 3) cell.classList.add("lv2");
        if (count > 3) cell.classList.add("lv3");
        if (count === 0) cell.classList.add("is-empty");
        cell.title = `${key}：${count} 次`;
      }

      elements.yearHeatmapGrid.appendChild(cell);
    });
  });

  const monthStarts = getMonthStartColumns(weeks, uiState.statsYear);
  monthStarts.forEach((col, month) => {
    const monthNode = document.createElement("span");
    monthNode.textContent = `${month + 1}月`;
    monthNode.style.gridColumn = String(col + 1);
    elements.yearMonthLabels.appendChild(monthNode);
  });

  const yearKeys = yearDays.map(formatDateKey);
  const doneDays = yearKeys.filter((key) => (allCounts[key] || 0) > 0).length;
  const rate = yearDays.length ? Math.round((doneDays / yearDays.length) * 100) : 0;
  elements.yearDoneDays.textContent = `🏆 ${doneDays} 天`;
  elements.yearRate.textContent = `🔥 ${rate}%`;
}

function getDailyCounts() {
  const counts = {};
  state.habits.forEach((habit) => {
    Object.entries(habit.history || {}).forEach(([key, done]) => {
      if (!done) return;
      counts[key] = (counts[key] || 0) + 1;
    });
  });
  Object.entries(state.backfill || {}).forEach(([key, value]) => {
    const extra = Number(value) || 0;
    if (extra <= 0) return;
    counts[key] = (counts[key] || 0) + extra;
  });
  return counts;
}

function getBaseHabitCountByDate(dateKey) {
  return state.habits.reduce((sum, habit) => sum + (habit.history[dateKey] ? 1 : 0), 0);
}

function cycleBackfill(dateKey) {
  const current = Number(state.backfill?.[dateKey] || 0);
  const next = (current + 1) % 3;
  if (next === 0) {
    delete state.backfill[dateKey];
  } else {
    state.backfill[dateKey] = next;
  }
  if (getBaseHabitCountByDate(dateKey) > 0 && next === 0) {
    delete state.backfill[dateKey];
  }
  saveState();
}

function getPersistDays(dayKeys) {
  if (!dayKeys.length) return 0;
  const first = new Date(dayKeys.sort()[0]);
  const today = new Date();
  return Math.max(1, Math.floor((today - first) / 86400000) + 1);
}

function buildYearWeeks(year) {
  const firstDay = new Date(year, 0, 1);
  const lastDay = new Date(year, 11, 31);
  const start = addDays(firstDay, -firstDay.getDay());
  const end = addDays(lastDay, 6 - lastDay.getDay());
  const weeks = [];
  const yearDays = [];

  for (let cursor = new Date(start); cursor <= end; cursor = addDays(cursor, 1)) {
    const weekIndex = Math.floor((cursor - start) / (7 * 86400000));
    const dayIndex = cursor.getDay();
    if (!weeks[weekIndex]) weeks[weekIndex] = Array(7).fill(null);
    const date = new Date(cursor);
    weeks[weekIndex][dayIndex] = date;
    if (date.getFullYear() === year) yearDays.push(date);
  }

  return { weeks, yearDays };
}

function getMonthStartColumns(weeks, year) {
  const map = new Map();
  weeks.forEach((week, weekIndex) => {
    week.forEach((date) => {
      if (!date || date.getFullYear() !== year) return;
      const month = date.getMonth();
      if (!map.has(month) && date.getDate() <= 7) {
        map.set(month, weekIndex);
      }
    });
  });
  return map;
}

function renderTimerMode() {
  elements.timerModeBtns.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.timerMode === uiState.timerMode);
  });
  elements.pomoControls.classList.toggle("is-hidden", uiState.timerMode !== "pomo");
  elements.pomoCustomMinutes.closest(".time-input-row").classList.toggle("is-hidden", uiState.timerMode !== "pomo");
  elements.ringtoneSelect.closest(".time-input-row").classList.toggle("is-hidden", uiState.timerMode !== "pomo");
  elements.ringtonePreviewBtn.classList.toggle("is-hidden", uiState.timerMode !== "pomo");
  elements.timerReset.textContent = uiState.timerMode === "pomo" ? "重置" : "清零";
  if (uiState.timerMode === "pomo") renderPomodoro();
  else renderStopwatch();
}

function applyPomodoroMinutes(minutes) {
  if (!Number.isFinite(minutes) || minutes < 1) return;
  const safe = Math.min(180, Math.max(1, Math.round(minutes)));
  uiState.pomoMinutes = safe;
  uiState.pomoLeftSec = safe * 60;
  elements.pomoCustomMinutes.value = String(safe);
  elements.pomoCustomValue.textContent = `${safe}m`;
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
  elements.unifiedTimerDisplay.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  elements.pomoCustomMinutes.value = String(uiState.pomoMinutes);
  elements.pomoCustomValue.textContent = `${uiState.pomoMinutes}m`;
  elements.pomoQuickBtns.forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.pomoMinutes) === uiState.pomoMinutes);
  });
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
  uiState.laps.unshift({ label: "开始", value: elements.unifiedTimerDisplay.textContent });
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
  elements.unifiedTimerDisplay.textContent = formatElapsed(elapsed);
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
  const palette = getThemePalette(settings.themeId);
  const vars = settings.darkMode ? { ...palette.vars, ...palette.darkVars } : palette.vars;
  Object.entries(vars).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value);
  });
  document.documentElement.dataset.theme = settings.darkMode ? "dark" : "light";
  document.documentElement.dataset.palette = palette.id;
  elements.darkModeToggle.checked = settings.darkMode;
  elements.ringtoneSelect.value = settings.ringtone || "soft";
  elements.themeSwatches.querySelectorAll(".swatch").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.themeId === palette.id);
  });
}

function getThemePalette(themeId) {
  return THEME_PALETTES.find((palette) => palette.id === themeId) || THEME_PALETTES[0];
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

function clearLocalData() {
  if (!confirm("确认清空本地所有数据吗？此操作不可恢复。")) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(SETTINGS_KEY);
  localStorage.removeItem(REMINDER_KEY);
  localStorage.removeItem(BIO_CRED_KEY);
  location.reload();
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

function formatLongDate(dateKey) {
  const date = new Date(dateKey);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function startOfWeek(date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return addDays(copy, -copy.getDay());
}

function weekdayLabels() {
  return ["一", "二", "三", "四", "五", "六", "日"];
}
