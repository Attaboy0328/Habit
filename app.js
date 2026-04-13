const STORAGE_KEY = "habit-mobile-v1";
const SETTINGS_KEY = "habit-mobile-settings-v1";

const presetHabits = [
  { id: "study", name: "学习", goal: "今天推进一点", icon: "📘" },
  { id: "run", name: "跑步", goal: "运动 20 分钟", icon: "🏃" },
  { id: "vocab", name: "背单词", goal: "积累 20 个", icon: "📝" },
  { id: "water", name: "喝水", goal: "8 杯水", icon: "💧" },
  { id: "yoga", name: "瑜伽", goal: "拉伸 15 分钟", icon: "🧘" },
  { id: "clean", name: "搞卫生", goal: "整理桌面", icon: "🧹" }
];

const elements = {
  screens: Array.from(document.querySelectorAll(".screen")),
  navItems: Array.from(document.querySelectorAll(".mobile-nav__item")),
  todayLabel: document.querySelector("#todayLabel"),
  todayProgress: document.querySelector("#todayProgress"),
  progressRate: document.querySelector("#progressRate"),
  progressRing: document.querySelector("#progressRing"),
  progressMessage: document.querySelector("#progressMessage"),
  streakSummary: document.querySelector("#streakSummary"),
  habitList: document.querySelector("#habitList"),
  habitForm: document.querySelector("#habitForm"),
  habitName: document.querySelector("#habitName"),
  habitGoal: document.querySelector("#habitGoal"),
  presetRow: document.querySelector("#presetRow"),
  habitItemTemplate: document.querySelector("#habitItemTemplate"),
  segmentedRangeBtns: Array.from(document.querySelectorAll("[data-range]")),
  statRate: document.querySelector("#statRate"),
  statCheckins: document.querySelector("#statCheckins"),
  statStreak: document.querySelector("#statStreak"),
  heatmapGrid: document.querySelector("#heatmapGrid"),
  pomoDisplay: document.querySelector("#pomoDisplay"),
  pomoStart: document.querySelector("#pomoStart"),
  pomoPause: document.querySelector("#pomoPause"),
  pomoReset: document.querySelector("#pomoReset"),
  pomoMinutesBtns: Array.from(document.querySelectorAll("[data-pomo-minutes]")),
  stopwatchDisplay: document.querySelector("#stopwatchDisplay"),
  swStart: document.querySelector("#swStart"),
  swPause: document.querySelector("#swPause"),
  swReset: document.querySelector("#swReset"),
  themeSwatches: Array.from(document.querySelectorAll(".swatch")),
  darkModeToggle: document.querySelector("#darkModeToggle")
};

const state = loadState();
const settings = loadSettings();

const timerState = {
  activeScreen: "home",
  statsRange: "week",
  pomoMinutes: 25,
  pomoLeftSec: 25 * 60,
  pomoTimer: null,
  swElapsedMs: 0,
  swTimer: null,
  swStartAt: 0
};

bootstrap();

function bootstrap() {
  bindEvents();
  applySettings();
  renderAll();
}

function bindEvents() {
  elements.navItems.forEach((button) => {
    button.addEventListener("click", () => {
      switchScreen(button.dataset.screen || "home");
    });
  });

  elements.habitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = elements.habitName.value.trim();
    if (!name) return;

    const goal = elements.habitGoal.value.trim() || "完成今天的最小行动";
    state.habits.unshift(createHabit({ id: crypto.randomUUID(), name, goal, icon: "⭐" }));
    elements.habitForm.reset();
    saveState();
    renderAll();
  });

  elements.segmentedRangeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      timerState.statsRange = button.dataset.range || "week";
      renderStats();
    });
  });

  elements.pomoMinutesBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const minutes = Number(button.dataset.pomoMinutes || 25);
      timerState.pomoMinutes = minutes;
      timerState.pomoLeftSec = minutes * 60;
      stopPomoTimer();
      renderPomodoro();
      elements.pomoMinutesBtns.forEach((it) => it.classList.toggle("is-active", it === button));
    });
  });

  elements.pomoStart.addEventListener("click", startPomoTimer);
  elements.pomoPause.addEventListener("click", stopPomoTimer);
  elements.pomoReset.addEventListener("click", () => {
    stopPomoTimer();
    timerState.pomoLeftSec = timerState.pomoMinutes * 60;
    renderPomodoro();
  });

  elements.swStart.addEventListener("click", startStopwatch);
  elements.swPause.addEventListener("click", stopStopwatch);
  elements.swReset.addEventListener("click", () => {
    stopStopwatch();
    timerState.swElapsedMs = 0;
    renderStopwatch();
  });

  elements.themeSwatches.forEach((button) => {
    button.addEventListener("click", () => {
      settings.accent = button.dataset.accent || settings.accent;
      saveSettings();
      applySettings();
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
    return { habits: presetHabits.map(createHabit) };
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.habits)) throw new Error("bad state");
    return parsed;
  } catch {
    return { habits: presetHabits.map(createHabit) };
  }
}

function loadSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (!raw) {
    return { accent: "#e86f2d", darkMode: false };
  }
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

function createHabit(seed) {
  return {
    id: seed.id,
    name: seed.name,
    goal: seed.goal,
    icon: seed.icon,
    history: {}
  };
}

function switchScreen(screen) {
  timerState.activeScreen = screen;
  elements.screens.forEach((section) => {
    section.classList.toggle("is-active", section.dataset.screen === screen);
  });
  elements.navItems.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screen === screen);
  });
}

function renderAll() {
  renderHome();
  renderStats();
  renderPomodoro();
  renderStopwatch();
  renderPresets();
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

  elements.todayProgress.textContent = `${doneCount}/${total}`;
  elements.progressRate.textContent = `${rate}%`;
  elements.progressRing.style.strokeDashoffset = `${264 - (264 * rate) / 100}`;
  elements.progressMessage.textContent = getProgressMessage(rate);
  elements.streakSummary.textContent = `连续 ${getMaxStreak()} 天`;

  elements.habitList.innerHTML = "";
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
}

function renderPresets() {
  elements.presetRow.innerHTML = "";
  presetHabits.forEach((preset) => {
    const button = document.createElement("button");
    button.className = "preset-chip";
    button.type = "button";
    button.textContent = `${preset.icon} ${preset.name}`;
    button.addEventListener("click", () => {
      const exists = state.habits.some((h) => h.name === preset.name);
      if (!exists) {
        state.habits.unshift(createHabit(preset));
        saveState();
        renderAll();
      }
    });
    elements.presetRow.appendChild(button);
  });
}

function renderStats() {
  const days = timerState.statsRange === "week" ? 7 : timerState.statsRange === "month" ? 30 : 365;
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
    if (button.dataset.range) {
      button.classList.toggle("is-active", button.dataset.range === timerState.statsRange);
    }
  });

  elements.heatmapGrid.innerHTML = "";
  const heatDays = timerState.statsRange === "year" ? 364 : days;
  getRecentDays(heatDays).forEach((date) => {
    const key = formatDateKey(date);
    const done = state.habits.filter((habit) => habit.history[key]).length;
    const cell = document.createElement("div");
    const level = done === 0 ? "" : done <= 2 ? " lv1" : done <= 4 ? " lv2" : " lv3";
    cell.className = `heat-day${level}`;
    cell.title = `${key}：${done} 次`;
    elements.heatmapGrid.appendChild(cell);
  });
}

function getMaxStreak() {
  return Math.max(0, ...state.habits.map((habit) => getHabitStreak(habit)));
}

function getHabitStreak(habit) {
  let streak = 0;
  const day = new Date();
  while (habit.history[formatDateKey(day)]) {
    streak += 1;
    day.setDate(day.getDate() - 1);
  }
  return streak;
}

function getRecentDays(count) {
  return Array.from({ length: count }, (_, index) => {
    const day = new Date();
    day.setDate(day.getDate() - (count - index - 1));
    return day;
  });
}

function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getProgressMessage(rate) {
  if (rate === 100) return "今天全完成，状态非常好。";
  if (rate >= 60) return "进度过半，再完成一项就很漂亮。";
  if (rate > 0) return "已经开了个好头，继续。";
  return "从最容易的一项开始。";
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

function renderPomodoro() {
  const min = Math.floor(timerState.pomoLeftSec / 60);
  const sec = timerState.pomoLeftSec % 60;
  elements.pomoDisplay.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function startPomoTimer() {
  if (timerState.pomoTimer) return;
  timerState.pomoTimer = setInterval(() => {
    timerState.pomoLeftSec -= 1;
    if (timerState.pomoLeftSec <= 0) {
      timerState.pomoLeftSec = 0;
      stopPomoTimer();
    }
    renderPomodoro();
  }, 1000);
}

function stopPomoTimer() {
  if (!timerState.pomoTimer) return;
  clearInterval(timerState.pomoTimer);
  timerState.pomoTimer = null;
}

function renderStopwatch() {
  const elapsed = timerState.swTimer ? timerState.swElapsedMs + (Date.now() - timerState.swStartAt) : timerState.swElapsedMs;
  const hours = Math.floor(elapsed / 3600000);
  const minutes = Math.floor((elapsed % 3600000) / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  elements.stopwatchDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startStopwatch() {
  if (timerState.swTimer) return;
  timerState.swStartAt = Date.now();
  timerState.swTimer = setInterval(renderStopwatch, 250);
}

function stopStopwatch() {
  if (!timerState.swTimer) return;
  clearInterval(timerState.swTimer);
  timerState.swTimer = null;
  timerState.swElapsedMs += Date.now() - timerState.swStartAt;
  renderStopwatch();
}
