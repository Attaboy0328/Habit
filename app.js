const STORAGE_KEY = "daily-check-app-v2";
const VIEW_KEY = "daily-check-view-v1";

const presetHabits = [
  { id: "vocab", name: "背单词", goal: "每天积累一点，长期很可观。", icon: "📝", aliases: ["背单词", "英语单词", "记单词"] },
  { id: "read", name: "阅读 / 看书", goal: "每天读几页，慢慢就会有收获。", icon: "📖", aliases: ["阅读", "看书", "听书"] },
  { id: "write", name: "练字 / 写作 / 日记", goal: "写一点、记一点，让思路更清晰。", icon: "✍️", aliases: ["练字", "写作", "日记"] },
  { id: "exam", name: "刷题 / 备考", goal: "考研、考证、公考都适用。", icon: "🧠", aliases: ["刷题", "备考", "考研", "考证", "公考"] },
  { id: "podcast", name: "听播客 / 听英语", goal: "通勤、家务时都能顺手做。", icon: "🎧", aliases: ["听播客", "听英语", "英语听力"] },
  { id: "study", name: "学习", goal: "今天也要稳稳地推进一点。", icon: "📚", aliases: ["学习", "读书", "自习"] },
  { id: "water", name: "喝水打卡", goal: "简单、高频，最适合坚持。", icon: "💧", aliases: ["喝水", "喝水打卡"] },
  { id: "stretch", name: "久坐提醒 / 定时拉伸", goal: "提醒自己起来活动一下。", icon: "🪑", aliases: ["久坐提醒", "定时拉伸", "拉伸"] },
  { id: "walk", name: "定时起身走动", goal: "站起来走走，状态会更稳。", icon: "🚶", aliases: ["起身走动", "走动"] },
  { id: "sleep", name: "早睡 / 不熬夜", goal: "把睡眠拉稳，第二天更轻松。", icon: "🌙", aliases: ["早睡", "不熬夜"] },
  { id: "wake", name: "早起打卡", goal: "先把一天打开，节奏就起来了。", icon: "☀️", aliases: ["早起", "起床"] },
  { id: "run", name: "运动 / 跑步 / 健身 / 跳绳", goal: "任选一种，动起来就算赢。", icon: "🏃", aliases: ["运动", "跑步", "健身", "跳绳"] },
  { id: "eye", name: "护眼 / 远眺 / 眼保健操", goal: "让眼睛也有休息时间。", icon: "👀", aliases: ["护眼", "远眺", "眼保健操"] },
  { id: "diet", name: "控糖 / 少零食 / 戒奶茶", goal: "少一点冲动，多一点稳定。", icon: "🥤", aliases: ["控糖", "少吃零食", "戒奶茶"] },
  { id: "weight", name: "体重记录 / 饮食记录", goal: "记录本身就很有价值。", icon: "📊", aliases: ["体重记录", "饮食记录"] },
  { id: "meditate", name: "冥想 / 深呼吸放松", goal: "给自己留一点安静时间。", icon: "🫧", aliases: ["冥想", "深呼吸", "放松"] },
  { id: "moxa", name: "艾灸", goal: "温养一下，给身体一点照顾。", icon: "🔥", aliases: ["艾灸", "温灸"] },
  { id: "bathroom", name: "排便", goal: "照顾好基础生理节律。", icon: "🚻", aliases: ["排便", "上厕所"] },
  { id: "nap", name: "午睡", goal: "补一小觉，下午更有劲。", icon: "😴", aliases: ["午睡", "小睡", "补觉"] },
  { id: "clean", name: "搞卫生", goal: "把环境整理好，心也会轻一点。", icon: "🧹", aliases: ["搞卫生", "打扫", "清洁"] },
  { id: "room", name: "整理房间 / 桌面整洁", goal: "桌面整洁，脑子也更清爽。", icon: "🗂️", aliases: ["整理房间", "桌面整洁", "整理桌面"] },
  { id: "money", name: "记账 / 不乱花钱", goal: "把钱花在真正重要的地方。", icon: "💰", aliases: ["记账", "不乱花钱"] },
  { id: "review", name: "每日复盘 / 写总结", goal: "今天过得怎么样，记录一下。", icon: "🪞", aliases: ["每日复盘", "写总结", "复盘"] },
  { id: "skin", name: "护肤 / 敷面膜", goal: "照顾好自己，也是正经事。", icon: "🧴", aliases: ["护肤", "敷面膜"] },
  { id: "shower", name: "洗头 / 洗澡 / 泡脚", goal: "把疲惫洗掉，晚上更放松。", icon: "🛁", aliases: ["洗头", "洗澡", "泡脚"] },
  { id: "phone", name: "戒手机 / 限时刷短视频", goal: "给注意力留一点空间。", icon: "📵", aliases: ["戒手机", "限时刷短视频"] },
  { id: "toilet", name: "喝水 + 上厕所规律化", goal: "把基础节律照顾稳定。", icon: "⏱️", aliases: ["喝水上厕所", "规律化"] },
  { id: "pomodoro", name: "专注计时 / 番茄钟", goal: "先专注 25 分钟，再看结果。", icon: "🍅", aliases: ["专注计时", "番茄钟"] },
  { id: "tasks", name: "完成每日任务", goal: "把今天该做的事情逐个收掉。", icon: "✅", aliases: ["完成每日任务", "今日任务"] },
  { id: "noDelay", name: "不拖延 / 今日事今日毕", goal: "今天的事，今天尽量清掉。", icon: "🚀", aliases: ["不拖延", "今日事今日毕"] },
  { id: "email", name: "邮件 / 消息及时处理", goal: "重要消息别堆太久。", icon: "📨", aliases: ["邮件", "消息及时处理"] },
  { id: "switch", name: "玩 Switch", goal: "适度放松，给自己一点奖励。", icon: "🎮", aliases: ["玩Switch", "玩 Switch", "游戏"] }
];

const defaultHabits = presetHabits.map((item) => createHabitFromPreset(item));

const elements = {
  todayLabel: document.querySelector("#todayLabel"),
  completedCount: document.querySelector("#completedCount"),
  totalCount: document.querySelector("#totalCount"),
  progressBar: document.querySelector("#progressBar"),
  progressMessage: document.querySelector("#progressMessage"),
  modeHint: document.querySelector("#modeHint"),
  streakSummary: document.querySelector("#streakSummary"),
  habitList: document.querySelector("#habitList"),
  calendarGrid: document.querySelector("#calendarGrid"),
  presetGrid: document.querySelector("#presetGrid"),
  presetSearch: document.querySelector("#presetSearch"),
  habitForm: document.querySelector("#habitForm"),
  habitName: document.querySelector("#habitName"),
  habitGoal: document.querySelector("#habitGoal"),
  habitItemTemplate: document.querySelector("#habitItemTemplate"),
  presetCardTemplate: document.querySelector("#presetCardTemplate"),
  viewButtons: Array.from(document.querySelectorAll(".view-switch__btn")),
  modeToggle: document.querySelector("#modeToggle"),
  viewSwitch: document.querySelector("#viewSwitch"),
  statsButtons: Array.from(document.querySelectorAll(".stats-toggle__btn")),
  libraryTabs: Array.from(document.querySelectorAll(".library-tab")),
  checkinTotal: document.querySelector("#checkinTotal"),
  habitDoneTotal: document.querySelector("#habitDoneTotal"),
  averageRate: document.querySelector("#averageRate"),
  fabAdd: document.querySelector("#fabAdd"),
  dashboard: document.querySelector("#dashboard"),
  mobileNavItems: Array.from(document.querySelectorAll(".mobile-nav__item")),
  panels: Array.from(document.querySelectorAll(".panel"))
};

const state = loadState();
const viewState = loadViewState();
const statsState = loadStatsState();

elements.habitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = elements.habitName.value.trim();
  const goal = elements.habitGoal.value.trim();

  if (!name) {
    return;
  }

  state.habits.unshift(createCustomHabit(name, goal));

  saveState();
  elements.habitForm.reset();
  render();
});

elements.viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setView(button.dataset.view);
  });
});

if (elements.modeToggle && elements.viewSwitch) {
  elements.modeToggle.addEventListener("click", () => {
    elements.viewSwitch.classList.toggle("is-open");
  });
}

elements.mobileNavItems.forEach((button) => {
  button.addEventListener("click", () => {
    setMobileScreen(button.dataset.screen);
  });
});

elements.statsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setStatsRange(button.dataset.range);
  });
});

elements.libraryTabs.forEach((button) => {
  button.addEventListener("click", () => {
    elements.libraryTabs.forEach((tab) => tab.classList.toggle("is-active", tab === button));
    renderPresetHabits();
  });
});

if (elements.presetSearch) {
  elements.presetSearch.addEventListener("input", () => renderPresetHabits());
}

if (elements.fabAdd) {
  elements.fabAdd.addEventListener("click", () => {
    elements.habitName.focus();
    setView("desktop");
  });
}

render();

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return { habits: defaultHabits };
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.habits)) {
      throw new Error("Invalid state");
    }
    return parsed;
  } catch {
    return { habits: defaultHabits };
  }
}

function loadViewState() {
  const raw = localStorage.getItem(VIEW_KEY);
  if (!raw) {
    return { view: "mobile", screen: "today" };
  }

  try {
    const parsed = JSON.parse(raw);
    if (!["auto", "desktop", "mobile"].includes(parsed.view)) {
      return { view: "mobile", screen: "today" };
    }
    return {
      view: parsed.view || "mobile",
      screen: ["today", "add", "library", "stats"].includes(parsed.screen) ? parsed.screen : "today"
    };
  } catch {
    return { view: "mobile", screen: "today" };
  }
}

function loadStatsState() {
  const raw = localStorage.getItem("daily-check-stats-v1");
  if (!raw) {
    return { range: "week" };
  }

  try {
    const parsed = JSON.parse(raw);
    if (!["week", "month", "year"].includes(parsed.range)) {
      return { range: "week" };
    }
    return parsed;
  } catch {
    return { range: "week" };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveViewState() {
  localStorage.setItem(VIEW_KEY, JSON.stringify(viewState));
}

function saveStatsState() {
  localStorage.setItem("daily-check-stats-v1", JSON.stringify(statsState));
}

function render() {
  renderViewMode();
  renderPresetHabits();
  renderHeader();
  renderHabits();
  renderCalendar();
  renderStatsSummary();
  renderMobileNavigation();
  renderPanels();
}

function renderHeader() {
  const todayKey = formatDateKey(new Date());
  const completedToday = state.habits.filter((habit) => habit.history[todayKey]).length;
  const totalHabits = state.habits.length;
  const ratio = totalHabits ? Math.round((completedToday / totalHabits) * 100) : 0;
  const longestCurrentStreak = Math.max(0, ...state.habits.map((habit) => calculateStreak(habit)));

  elements.todayLabel.textContent = formatFullDate(new Date());
  elements.completedCount.textContent = completedToday;
  elements.totalCount.textContent = totalHabits;
  elements.progressBar.style.width = `${ratio}%`;
  elements.streakSummary.textContent = `最高连续 ${longestCurrentStreak} 天`;
  elements.progressMessage.textContent = getProgressMessage(ratio, totalHabits);
}

function renderViewMode() {
  elements.viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewState.view);
  });

  const modeLabelMap = {
    auto: "当前为自动模式",
    desktop: "当前为电脑模式",
    mobile: "当前为手机首页模式"
  };

  elements.modeHint.textContent = modeLabelMap[viewState.view] || modeLabelMap.auto;
  elements.dashboard.dataset.view = viewState.view;
}

function renderMobileNavigation() {
  elements.mobileNavItems.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screen === viewState.screen);
  });
}

function renderPanels() {
  const isMobile = viewState.view !== "desktop";
  if (!isMobile) {
    elements.panels.forEach((panel) => {
      panel.classList.remove("is-hidden");
      panel.classList.remove("is-mobile-active");
    });
    elements.dashboard.dataset.screen = "";
    return;
  }

  elements.dashboard.dataset.screen = viewState.screen;

  elements.panels.forEach((panel) => {
    const shouldShow =
      (viewState.screen === "today" && panel.classList.contains("panel--today")) ||
      (viewState.screen === "add" && panel.classList.contains("panel--form")) ||
      (viewState.screen === "library" && panel.classList.contains("panel--library")) ||
      (viewState.screen === "stats" && panel.classList.contains("panel--calendar"));

    panel.classList.toggle("is-hidden", !shouldShow);
    panel.classList.toggle("is-mobile-active", shouldShow);
  });
}

function renderPresetHabits() {
  elements.presetGrid.innerHTML = "";
  const query = (elements.presetSearch?.value || "").trim().toLowerCase();
  const activeCategory = document.querySelector(".library-tab.is-active")?.dataset.category || "all";

  presetHabits
    .filter((preset) => {
      const corpus = [preset.name, preset.goal, ...(preset.aliases || [])].join(" ").toLowerCase();
      const matchesQuery = !query || corpus.includes(query);
      const matchesCategory = activeCategory === "all" || getPresetCategory(preset) === activeCategory;
      return matchesQuery && matchesCategory;
    })
    .forEach((preset) => {
    const fragment = elements.presetCardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".preset-card");
    const icon = fragment.querySelector(".preset-card__icon");
    const name = fragment.querySelector(".preset-card__name");
    const meta = fragment.querySelector(".preset-card__meta");

    icon.textContent = preset.icon;
    name.textContent = preset.name;
    meta.textContent = preset.goal;

    card.addEventListener("click", () => addPresetHabit(preset));
    elements.presetGrid.appendChild(fragment);
  });
}

function renderHabits() {
  elements.habitList.innerHTML = "";

  if (!state.habits.length) {
    elements.habitList.innerHTML = `
      <div class="empty-state">
        还没有打卡项目。<br>
        先加一个最容易开始的小目标，让连续完成这件事发生。
      </div>
    `;
    return;
  }

  const todayKey = formatDateKey(new Date());

  state.habits.forEach((habit) => {
    const fragment = elements.habitItemTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".habit-card");
    const icon = fragment.querySelector(".habit-card__icon");
    const title = fragment.querySelector(".habit-card__title");
    const goal = fragment.querySelector(".habit-card__goal");
    const streak = fragment.querySelector(".streak-pill");
    const button = fragment.querySelector(".check-button");
    const isChecked = Boolean(habit.history[todayKey]);

    icon.textContent = habit.icon || "•";
    title.textContent = habit.name;
    goal.textContent = habit.goal;
    streak.textContent = `连续 ${calculateStreak(habit)} 天`;
    button.textContent = isChecked ? "今天已完成" : "立即打卡";
    button.classList.toggle("is-checked", isChecked);

    button.addEventListener("click", () => {
      toggleHabit(habit.id, todayKey);
    });

    card.dataset.habitId = habit.id;
    elements.habitList.appendChild(fragment);
  });
}

function renderCalendar() {
  elements.calendarGrid.innerHTML = "";

  const days = getRecentDays(statsState.range === "month" ? 30 : 7);

  days.forEach((day) => {
    const dayKey = formatDateKey(day);
    const dayItem = document.createElement("div");
    dayItem.className = "calendar-day";

    const completedCount = state.habits.filter((habit) => habit.history[dayKey]).length;
    const scoreLabel = state.habits.length
      ? `${completedCount}/${state.habits.length} 完成`
      : "暂无习惯";

    const dots = state.habits.length
      ? state.habits.map((habit) => {
          const doneClass = habit.history[dayKey] ? "calendar-dot is-done" : "calendar-dot";
          return `<span class="${doneClass}" title="${habit.name}"></span>`;
        }).join("")
      : `<span class="calendar-dot"></span>`;

    dayItem.innerHTML = `
      <div class="calendar-day__label">
        <span>${formatShortDate(day)}</span>
        <span class="calendar-day__score">${scoreLabel}</span>
      </div>
      <div class="calendar-day__dots">${dots}</div>
    `;

    elements.calendarGrid.appendChild(dayItem);
  });
}

function renderStatsSummary() {
  const periodDays = getStatsPeriodDays(statsState.range);
  const todayKey = formatDateKey(new Date());
  const periodKeys = periodDays.map(formatDateKey);

  let checkinTotal = 0;
  let habitDoneTotal = 0;
  let completeDays = 0;

  periodKeys.forEach((key) => {
    const completedHabits = state.habits.filter((habit) => habit.history[key]).length;
    checkinTotal += completedHabits;
    if (completedHabits > 0) {
      completeDays += 1;
    }
  });

  state.habits.forEach((habit) => {
    const wasDoneInPeriod = periodKeys.some((key) => habit.history[key]);
    if (wasDoneInPeriod) {
      habitDoneTotal += 1;
    }
  });

  const averageRate = periodKeys.length && state.habits.length
    ? Math.round((checkinTotal / (periodKeys.length * state.habits.length)) * 100)
    : 0;

  elements.checkinTotal.textContent = String(checkinTotal);
  elements.habitDoneTotal.textContent = String(habitDoneTotal);
  elements.averageRate.textContent = `${averageRate}%`;

  elements.statsButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.range === statsState.range);
  });
}

function toggleHabit(habitId, dateKey) {
  const target = state.habits.find((habit) => habit.id === habitId);

  if (!target) {
    return;
  }

  if (target.history[dateKey]) {
    delete target.history[dateKey];
  } else {
    target.history[dateKey] = true;
  }

  saveState();
  render();
}

function addPresetHabit(preset) {
  const exists = state.habits.some((habit) => habit.presetId === preset.id);

  if (exists) {
    const existing = state.habits.find((habit) => habit.presetId === preset.id);
    if (existing) {
      const todayKey = formatDateKey(new Date());
      existing.history[todayKey] = true;
    }
  } else {
    state.habits.unshift(createHabitFromPreset(preset));
  }

  saveState();
  render();
}

function calculateStreak(habit) {
  let streak = 0;
  const cursor = new Date();

  while (true) {
    const key = formatDateKey(cursor);
    if (!habit.history[key]) {
      break;
    }
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function getRecentDays(count) {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (count - index - 1));
    return date;
  });
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatFullDate(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(date);
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "numeric",
    day: "numeric"
  }).format(date);
}

function getProgressMessage(ratio, totalHabits) {
  if (!totalHabits) {
    return "从一个最小动作开始，今天就能进入节奏。";
  }

  if (ratio === 100) {
    return "今天全完成了，继续把这股劲带到明天。";
  }

  if (ratio >= 50) {
    return "进度过半，离今天的收尾已经很近。";
  }

  if (ratio > 0) {
    return "已经开了个好头，再完成一项会更有感觉。";
  }

  return "先完成最容易的一项，行动会带动后面的动力。";
}

function setView(view) {
  viewState.view = view;
  if (view === "desktop") {
    viewState.screen = "today";
  }
  saveViewState();
  render();
}

function setMobileScreen(screen) {
  viewState.screen = screen;
  if (viewState.view === "auto") {
    viewState.view = "mobile";
  }
  saveViewState();
  render();
}

function setStatsRange(range) {
  statsState.range = range;
  saveStatsState();
  render();
}

function getStatsPeriodDays(range) {
  if (range === "year") {
    return Array.from({ length: 52 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - ((51 - index) * 7));
      return date;
    });
  }
  return getRecentDays(range === "month" ? 30 : 7);
}

function getPresetCategory(preset) {
  const text = `${preset.name} ${preset.goal} ${(preset.aliases || []).join(" ")}`;
  if (/鍠濇按|璺戞|鍋ヨ韩|鏃╃潯|缁墦|绔嬪埢|鎶ょ溂|鍐ユ兂|鑹剧伕|娲楀ご|娲楁尽|鎺掍究|鍗堢潯|鏁寸悊|鐜?/u.test(text)) {
    return "health";
  }
  if (/鑳屽崟璇?|闃呰|缁冨瓧|鍐欎綔|澶囪€?|鍚挱瀹?|鑻辫|鍒烽|瀛︿範|璇讳功|鑷範/u.test(text)) {
    return "study";
  }
  if (/璁拌处|鎵撴壂|娓呮磥|鏁寸悊|閭欢|娑堟伅|鎴掓墜鏈?|妗岄潰|涓嶄贡鑺遍挶/u.test(text)) {
    return "life";
  }
  return "work";
}

function createHabitFromPreset(preset) {
  return {
    id: crypto.randomUUID(),
    presetId: preset.id,
    name: preset.name,
    goal: preset.goal,
    icon: preset.icon,
    createdAt: new Date().toISOString(),
    history: {}
  };
}

function createCustomHabit(name, goal) {
  return {
    id: crypto.randomUUID(),
    name,
    goal: goal || "记录一次完成，让坚持被看见。",
    icon: "⭐",
    createdAt: new Date().toISOString(),
    history: {}
  };
}
