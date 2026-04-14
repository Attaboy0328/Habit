const STORAGE_KEY = "habit-mobile-v3";
const SETTINGS_KEY = "habit-mobile-settings-v3";

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
  presetGrid: document.querySelector("#presetGrid"),
  habitItemTemplate: document.querySelector("#habitItemTemplate"),
  rangeBtns: Array.from(document.querySelectorAll("[data-range]")),
  timerModeBtns: Array.from(document.querySelectorAll("[data-timer-mode]")),
  timerPanels: Array.from(document.querySelectorAll(".timer-panel")),
  overallHeatmapTitle: document.querySelector("#overallHeatmapTitle"),
  overallHeatmapHint: document.querySelector("#overallHeatmapHint"),
  overallDateAxis: document.querySelector("#overallDateAxis"),
  overallHeatmap: document.querySelector("#overallHeatmap"),
  habitCountList: document.querySelector("#habitCountList"),
  statRate: document.querySelector("#statRate"),
  statCheckins: document.querySelector("#statCheckins"),
  statActiveHabits: document.querySelector("#statActiveHabits"),
  statStreak: document.querySelector("#statStreak"),
  pomoDisplay: document.querySelector("#pomoDisplay"),
  pomoStart: document.querySelector("#pomoStart"),
  pomoPause: document.querySelector("#pomoPause"),
  pomoReset: document.querySelector("#pomoReset"),
  pomoApply: document.querySelector("#pomoApply"),
  pomoCustomMinutes: document.querySelector("#pomoCustomMinutes"),
  ringtoneSelect: document.querySelector("#ringtoneSelect"),
  pomoQuickBtns: Array.from(document.querySelectorAll("[data-pomo-minutes]")),
  stopwatchDisplay: document.querySelector("#stopwatchDisplay"),
  swStart: document.querySelector("#swStart"),
  swPause: document.querySelector("#swPause"),
  swReset: document.querySelector("#swReset"),
  themeSwatches: document.querySelector("#themeSwatches"),
  darkModeToggle: document.querySelector("#darkModeToggle")
};

const state = loadState();
const settings = loadSettings();

const uiState = {
  activeScreen: "home",
  activeCategory: "study",
  statsRange: "week",
  timerMode: "pomo",
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
  initThemeSwatches();
  applySettings();
  renderAll();
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

  elements.darkModeToggle.addEventListener("change", () => {
    settings.darkMode = elements.darkModeToggle.checked;
    saveSettings();
    applySettings();
  });
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
  if (!raw) return { accent: THEME_COLORS[0], darkMode: false, ringtone: "soft" };
  try {
    const parsed = JSON.parse(raw);
    return {
      accent: parsed.accent || THEME_COLORS[0],
      darkMode: Boolean(parsed.darkMode),
      ringtone: parsed.ringtone || "soft"
    };
  } catch {
    return { accent: THEME_COLORS[0], darkMode: false, ringtone: "soft" };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveSettings() {
  settings.ringtone = elements.ringtoneSelect.value;
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
    const del = node.querySelector(".habit-item__delete");
    const check = node.querySelector(".habit-item__check");
    const isDone = Boolean(habit.history[todayKey]);

    icon.textContent = habit.icon;
    title.textContent = habit.name;
    goal.textContent = habit.goal;
    item.classList.toggle("is-done", isDone);
    check.classList.toggle("is-done", isDone);

    del.addEventListener("click", () => {
      state.habits = state.habits.filter((h) => h.id !== habit.id);
      saveState();
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
  const days = uiState.statsRange === "week" ? 7 : uiState.statsRange === "month" ? 30 : 365;
  const periodDates = getRecentDays(days);
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

  elements.rangeBtns.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.range === uiState.statsRange);
  });

  if (uiState.statsRange === "week") {
    elements.overallHeatmapTitle.textContent = "周热力图";
    elements.overallHeatmapHint.textContent = "展示本周每天完成情况";
  } else if (uiState.statsRange === "month") {
    elements.overallHeatmapTitle.textContent = "月热力图";
    elements.overallHeatmapHint.textContent = "展示近30天完成情况";
  } else {
    elements.overallHeatmapTitle.textContent = "年热力图";
    elements.overallHeatmapHint.textContent = "按月份查看全年热力分布";
  }

  renderDateAxis(periodDates);
  renderHabitCounts(periodKeys);
  renderOverallHeatmap();
}

function renderOverallHeatmap() {
  elements.overallHeatmap.innerHTML = "";

  if (uiState.statsRange === "week") {
    renderHeatRangeBlock(getCurrentWeekDays(), "本周", false);
    return;
  }

  if (uiState.statsRange === "month") {
    renderHeatRangeBlock(getRecentDays(30), "近30天", false);
    return;
  }

  for (let month = 0; month < 12; month += 1) {
    const year = new Date().getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));
    renderHeatRangeBlock(days, `${month + 1}月`, true);
  }
}

function renderHeatRangeBlock(days, label, compact) {
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
  elements.overallHeatmap.appendChild(block);
}

function renderDateAxis(periodDates) {
  const labels = getAxisLabels(periodDates, uiState.statsRange);
  elements.overallDateAxis.innerHTML = labels.map((item) => `<div class="date-axis__item"><span>${item.weekday}</span><strong>${item.date}</strong></div>`).join("");
}

function getAxisLabels(periodDates, range) {
  if (!periodDates.length) return [];
  if (range === "week") {
    return periodDates.map((date) => ({
      weekday: `周${weekdayLabels()[((date.getDay() + 6) % 7)]}`,
      date: `${date.getMonth() + 1}/${date.getDate()}`
    }));
  }

  if (range === "month") {
    const picks = [0, 6, 13, 20, 29]
      .filter((idx) => idx < periodDates.length)
      .map((idx) => periodDates[idx]);
    return picks.map((date) => ({
      weekday: `周${weekdayLabels()[((date.getDay() + 6) % 7)]}`,
      date: `${date.getMonth() + 1}/${date.getDate()}`
    }));
  }

  return [0, 30, 60, 90, 120, 180, 240, 300, 364]
    .filter((idx) => idx < periodDates.length)
    .map((idx) => {
      const date = periodDates[idx];
      return {
        weekday: `${date.getMonth() + 1}月`,
        date: `${date.getMonth() + 1}/${date.getDate()}`
      };
    });
}

function renderHabitCounts(periodKeys) {
  elements.habitCountList.innerHTML = "";
  if (!state.habits.length) {
    elements.habitCountList.innerHTML = '<div class="empty-box">暂无习惯统计。</div>';
    return;
  }

  const rows = state.habits
    .map((habit) => {
      const count = periodKeys.reduce((sum, key) => sum + (habit.history[key] ? 1 : 0), 0);
      return { habit, count };
    })
    .sort((a, b) => b.count - a.count);

  rows.forEach(({ habit, count }) => {
    const item = document.createElement("div");
    item.className = "habit-count-item";
    item.innerHTML = `<span class="habit-count-item__name">${habit.icon} ${habit.name}</span><strong>${count}</strong>`;
    elements.habitCountList.appendChild(item);
  });
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
  uiState.pomoTimer = setInterval(() => {
    uiState.pomoLeftSec -= 1;
    if (uiState.pomoLeftSec <= 0) {
      uiState.pomoLeftSec = 0;
      pausePomodoro();
      playRingtone(settings.ringtone);
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

function playRingtone(type) {
  if (type === "none") return;
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const sequence = type === "soft" ? [660, 550] : type === "bright" ? [880, 988, 880] : [523, 659, 784];
  sequence.forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = freq;
    osc.type = "sine";
    osc.connect(gain);
    gain.connect(ctx.destination);
    const start = ctx.currentTime + index * 0.18;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.08, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.16);
    osc.start(start);
    osc.stop(start + 0.17);
  });
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
  elements.ringtoneSelect.value = settings.ringtone || "soft";
  elements.themeSwatches.querySelectorAll(".swatch").forEach((button) => {
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

function weekdayLabels() {
  return ["一", "二", "三", "四", "五", "六", "日"];
}
