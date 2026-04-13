const STORAGE_KEY = "habit-mobile-v2";
const SETTINGS_KEY = "habit-mobile-settings-v2";

const PRESET_CATEGORIES = [
  { id: "study", name: "学习" },
  { id: "health", name: "健康" },
  { id: "life", name: "生活" },
  { id: "work", name: "工作" }
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
  presetGrid: document.querySelector("#presetGrid"),
  habitItemTemplate: document.querySelector("#habitItemTemplate"),
  segmentedRangeBtns: Array.from(document.querySelectorAll("[data-range]")),
  habitHeatmapSelect: document.querySelector("#habitHeatmapSelect"),
  habitWeekdayLabels: document.querySelector("#habitWeekdayLabels"),
  habitMonthlyHeatmap: document.querySelector("#habitMonthlyHeatmap"),
  weekRangeLabel: document.querySelector("#weekRangeLabel"),
  weeklyHeatmapWeekdays: document.querySelector("#weeklyHeatmapWeekdays"),
  weeklyHeatmap: document.querySelector("#weeklyHeatmap"),
  overallHeatmapTitle: document.querySelector("#overallHeatmapTitle"),
  overallWeekdayLabels: document.querySelector("#overallWeekdayLabels"),
  overallHeatmap: document.querySelector("#overallHeatmap"),
  statRate: document.querySelector("#statRate"),
  statCheckins: document.querySelector("#statCheckins"),
  statStreak: document.querySelector("#statStreak"),
  pomoDisplay: document.querySelector("#pomoDisplay"),
  pomoStart: document.querySelector("#pomoStart"),
  pomoPause: document.querySelector("#pomoPause"),
  pomoReset: document.querySelector("#pomoReset"),
  pomoApply: document.querySelector("#pomoApply"),
  pomoCustomMinutes: document.querySelector("#pomoCustomMinutes"),
  pomoQuickBtns: Array.from(document.querySelectorAll("[data-pomo-minutes]")),
  stopwatchDisplay: document.querySelector("#stopwatchDisplay"),
  swStart: document.querySelector("#swStart"),
  swPause: document.querySelector("#swPause"),
  swReset: document.querySelector("#swReset"),
  themeSwatches: Array.from(document.querySelectorAll(".swatch")),
  darkModeToggle: document.querySelector("#darkModeToggle")
};

const state = loadState();
const settings = loadSettings();

const uiState = {
  activeScreen: "home",
  activeCategory: "study",
  statsRange: "week",
  selectedHabitId: "",
  pomoMinutes: 25,
  pomoLeftSec: 25 * 60,
  pomoTimer: null,
  swElapsedMs: 0,
  swTimer: null,
  swStartedAt: 0
};

bootstrap();

function bootstrap() {
  bindEvents();
  initCategoryTabs();
  initHabitSelect();
  applySettings();
  renderAll();
}

function bindEvents() {
  elements.navItems.forEach((button) => {
    button.addEventListener("click", () => switchScreen(button.dataset.screen || "home"));
  });

  elements.segmentedRangeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      uiState.statsRange = button.dataset.range || "week";
      renderStats();
    });
  });

  elements.habitHeatmapSelect.addEventListener("change", () => {
    uiState.selectedHabitId = elements.habitHeatmapSelect.value;
    renderHabitSpecificHeatmap();
  });

  elements.pomoQuickBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const minutes = Number(button.dataset.pomoMinutes || 25);
      applyPomodoroMinutes(minutes);
    });
  });

  elements.pomoApply.addEventListener("click", () => {
    const minutes = Number(elements.pomoCustomMinutes.value || 25);
    applyPomodoroMinutes(minutes);
  });

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
    renderStopwatch();
  });

  elements.themeSwatches.forEach((button) => {
    button.addEventListener("click", () => {
      settings.accent = button.dataset.accent || settings.accent;
      saveSettings();
      applySettings();
      renderAll();
    });
  });

  elements.darkModeToggle.addEventListener("change", () => {
    settings.darkMode = elements.darkModeToggle.checked;
    saveSettings();
    applySettings();
  });
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return { habits: [] };
  }
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.habits)) throw new Error("state error");
    return parsed;
  } catch {
    return { habits: [] };
  }
}

function loadSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (!raw) return { accent: "#e86f2d", darkMode: false };
  try {
    const parsed = JSON.parse(raw);
    return {
      accent: parsed.accent || "#e86f2d",
      darkMode: Boolean(parsed.darkMode)
    };
  } catch {
    return { accent: "#e86f2d", darkMode: false };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
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

function initHabitSelect() {
  elements.habitHeatmapSelect.innerHTML = "";
  if (state.habits.length === 0) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "暂无习惯";
    elements.habitHeatmapSelect.appendChild(opt);
    uiState.selectedHabitId = "";
    return;
  }

  state.habits.forEach((habit) => {
    const opt = document.createElement("option");
    opt.value = habit.id;
    opt.textContent = `${habit.icon} ${habit.name}`;
    elements.habitHeatmapSelect.appendChild(opt);
  });

  if (!state.habits.some((h) => h.id === uiState.selectedHabitId)) {
    uiState.selectedHabitId = state.habits[0].id;
  }
  elements.habitHeatmapSelect.value = uiState.selectedHabitId;
}

function renderAll() {
  renderNav();
  renderHome();
  renderPresetGrid();
  renderStats();
  renderPomodoro();
  renderStopwatch();
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
  const rate = total ? Math.round((doneCount / total) * 100) : 0;

  elements.todayLabel.textContent = new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(today);

  elements.welcomeSub.textContent = total === 0 ? "先从下方选择习惯开始" : "继续保持，今天也会很稳";
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
    initHabitSelect();
    return;
  }

  state.habits.forEach((habit) => {
    const node = elements.habitItemTemplate.content.cloneNode(true);
    const item = node.querySelector(".habit-item");
    const icon = node.querySelector(".habit-item__icon");
    const title = node.querySelector(".habit-item__title");
    const goal = node.querySelector(".habit-item__goal");
    const check = node.querySelector(".habit-item__check");
    const isDone = Boolean(habit.history[todayKey]);

    icon.textContent = habit.icon;
    title.textContent = habit.name;
    goal.textContent = habit.goal;
    item.classList.toggle("is-done", isDone);
    check.classList.toggle("is-done", isDone);

    check.addEventListener("click", () => {
      if (isDone) {
        delete habit.history[todayKey];
      } else {
        habit.history[todayKey] = true;
      }
      saveState();
      renderAll();
    });

    elements.habitList.appendChild(node);
  });

  initHabitSelect();
}

function renderPresetGrid() {
  elements.categoryTabs.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.textContent === PRESET_CATEGORIES.find((c) => c.id === uiState.activeCategory)?.name);
  });

  elements.presetGrid.innerHTML = "";
  PRESET_HABITS.filter((item) => item.category === uiState.activeCategory).forEach((preset) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "preset-chip";
    button.innerHTML = `<span>${preset.icon}</span><span>${preset.name}</span>`;
    button.addEventListener("click", () => addPresetHabit(preset));
    elements.presetGrid.appendChild(button);
  });
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
  renderStatsCards();
  renderHabitSpecificHeatmap();
  renderWeeklyHeatmap();
  renderOverallHeatmap();
}

function renderStatsCards() {
  const days = uiState.statsRange === "week" ? 7 : uiState.statsRange === "month" ? 30 : 365;
  const periodKeys = getRecentDays(days).map(formatDateKey);

  let checkins = 0;
  state.habits.forEach((habit) => {
    periodKeys.forEach((key) => {
      if (habit.history[key]) checkins += 1;
    });
  });

  const totalSlots = Math.max(1, state.habits.length * periodKeys.length);
  const rate = Math.round((checkins / totalSlots) * 100);

  elements.statRate.textContent = `${rate}%`;
  elements.statCheckins.textContent = String(checkins);
  elements.statStreak.textContent = String(getMaxStreak());

  elements.segmentedRangeBtns.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.range === uiState.statsRange);
  });
}

function renderHabitSpecificHeatmap() {
  elements.habitWeekdayLabels.innerHTML = weekdayLabels().map((d) => `<span>${d}</span>`).join("");
  elements.habitMonthlyHeatmap.innerHTML = "";

  const habit = state.habits.find((item) => item.id === uiState.selectedHabitId);
  if (!habit) {
    elements.habitMonthlyHeatmap.innerHTML = '<div class="empty-box">先添加习惯后再查看单项热力图。</div>';
    return;
  }

  for (let month = 0; month < 12; month += 1) {
    const block = document.createElement("article");
    block.className = "month-block";
    const title = document.createElement("h4");
    title.textContent = `${month + 1}月`;
    const grid = document.createElement("div");
    grid.className = "month-grid";

    const daysInMonth = new Date(new Date().getFullYear(), month + 1, 0).getDate();
    for (let day = 1; day <= 42; day += 1) {
      const cell = document.createElement("div");
      cell.className = "heat-cell";
      if (day <= daysInMonth) {
        const key = formatDateKey(new Date(new Date().getFullYear(), month, day));
        if (habit.history[key]) {
          cell.classList.add("lv3");
          cell.textContent = "1";
        }
      }
      grid.appendChild(cell);
    }

    block.appendChild(title);
    block.appendChild(grid);
    elements.habitMonthlyHeatmap.appendChild(block);
  }
}

function renderWeeklyHeatmap() {
  elements.weeklyHeatmapWeekdays.innerHTML = weekdayLabels().map((d) => `<span>${d}</span>`).join("");
  elements.weeklyHeatmap.innerHTML = "";

  const weekDays = getCurrentWeekDays();
  const weekKeys = weekDays.map(formatDateKey);
  elements.weekRangeLabel.textContent = `${formatShortMonthDay(weekDays[0])} - ${formatShortMonthDay(weekDays[6])}`;

  const topHabits = state.habits.slice(0, 6);
  if (topHabits.length === 0) {
    elements.weeklyHeatmap.innerHTML = '<div class="empty-box">暂无习惯可展示周热力图。</div>';
    return;
  }

  topHabits.forEach((habit) => {
    const row = document.createElement("div");
    row.className = "week-row";
    const left = document.createElement("div");
    left.className = "week-row__label";
    left.textContent = `${habit.icon} ${habit.name}`;
    const cells = document.createElement("div");
    cells.className = "week-row__cells";

    weekKeys.forEach((key) => {
      const cell = document.createElement("span");
      cell.className = `week-cell ${habit.history[key] ? "lv3" : ""}`;
      cell.textContent = habit.history[key] ? "1" : "-";
      cells.appendChild(cell);
    });

    row.appendChild(left);
    row.appendChild(cells);
    elements.weeklyHeatmap.appendChild(row);
  });
}

function renderOverallHeatmap() {
  elements.overallWeekdayLabels.innerHTML = weekdayLabels().map((d) => `<span>${d}</span>`).join("");
  elements.overallHeatmap.innerHTML = "";

  if (uiState.statsRange === "week") {
    elements.overallHeatmapTitle.textContent = "周热力图";
    renderRangeHeatBlocks(getCurrentWeekDays(), "本周", elements.overallHeatmap);
    return;
  }

  if (uiState.statsRange === "month") {
    elements.overallHeatmapTitle.textContent = "月热力图";
    const monthDays = getRecentDays(30);
    renderRangeHeatBlocks(monthDays, "近30天", elements.overallHeatmap);
    return;
  }

  elements.overallHeatmapTitle.textContent = "年热力图";
  for (let month = 0; month < 12; month += 1) {
    const start = new Date(new Date().getFullYear(), month, 1);
    const daysInMonth = new Date(new Date().getFullYear(), month + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => new Date(start.getFullYear(), start.getMonth(), i + 1));
    renderRangeHeatBlocks(days, `${month + 1}月`, elements.overallHeatmap, true);
  }
}

function renderRangeHeatBlocks(days, label, root, compact = false) {
  const block = document.createElement("article");
  block.className = "range-block";
  const heading = document.createElement("h4");
  heading.textContent = label;
  const grid = document.createElement("div");
  grid.className = compact ? "range-grid compact" : "range-grid";

  const maxCells = compact ? 42 : Math.ceil(days.length / 7) * 7;
  for (let i = 0; i < maxCells; i += 1) {
    const cell = document.createElement("div");
    cell.className = "heat-cell";

    if (i < days.length) {
      const key = formatDateKey(days[i]);
      const count = state.habits.filter((habit) => habit.history[key]).length;
      if (count > 0 && count <= 2) cell.classList.add("lv1");
      if (count > 2 && count <= 4) cell.classList.add("lv2");
      if (count > 4) cell.classList.add("lv3");
      if (!compact) cell.textContent = count > 0 ? String(count) : "";
    }

    grid.appendChild(cell);
  }

  block.appendChild(heading);
  block.appendChild(grid);
  root.appendChild(block);
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
  uiState.pomoTimer = setInterval(() => {
    uiState.pomoLeftSec -= 1;
    if (uiState.pomoLeftSec <= 0) {
      uiState.pomoLeftSec = 0;
      pausePomodoro();
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

function startStopwatch() {
  if (uiState.swTimer) return;
  uiState.swStartedAt = Date.now();
  uiState.swTimer = setInterval(renderStopwatch, 200);
}

function pauseStopwatch() {
  if (!uiState.swTimer) return;
  clearInterval(uiState.swTimer);
  uiState.swTimer = null;
  uiState.swElapsedMs += Date.now() - uiState.swStartedAt;
  renderStopwatch();
}

function renderStopwatch() {
  const elapsed = uiState.swTimer ? uiState.swElapsedMs + (Date.now() - uiState.swStartedAt) : uiState.swElapsedMs;
  const hh = Math.floor(elapsed / 3600000);
  const mm = Math.floor((elapsed % 3600000) / 60000);
  const ss = Math.floor((elapsed % 60000) / 1000);
  elements.stopwatchDisplay.textContent = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

function applySettings() {
  document.documentElement.style.setProperty("--accent", settings.accent);
  document.documentElement.style.setProperty("--accent-strong", settings.accent);
  document.documentElement.dataset.theme = settings.darkMode ? "dark" : "light";
  elements.darkModeToggle.checked = settings.darkMode;
  elements.themeSwatches.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.accent === settings.accent);
  });
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

function formatShortMonthDay(date) {
  return `${date.getMonth() + 1}.${date.getDate()}`;
}

function weekdayLabels() {
  return ["一", "二", "三", "四", "五", "六", "日"];
}
