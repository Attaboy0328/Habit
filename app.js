const STORAGE_KEY = "daily-check-app-v1";

const defaultHabits = [
  {
    id: crypto.randomUUID(),
    name: "晨间拉伸",
    goal: "先动起来，状态自然会跟上。",
    createdAt: new Date().toISOString(),
    history: {}
  },
  {
    id: crypto.randomUUID(),
    name: "英语 30 分钟",
    goal: "每天一点点，长期最有力量。",
    createdAt: new Date().toISOString(),
    history: {}
  }
];

const state = loadState();
const elements = {
  todayLabel: document.querySelector("#todayLabel"),
  completedCount: document.querySelector("#completedCount"),
  totalCount: document.querySelector("#totalCount"),
  progressBar: document.querySelector("#progressBar"),
  progressMessage: document.querySelector("#progressMessage"),
  streakSummary: document.querySelector("#streakSummary"),
  habitList: document.querySelector("#habitList"),
  calendarGrid: document.querySelector("#calendarGrid"),
  habitForm: document.querySelector("#habitForm"),
  habitName: document.querySelector("#habitName"),
  habitGoal: document.querySelector("#habitGoal"),
  habitItemTemplate: document.querySelector("#habitItemTemplate")
};

elements.habitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = elements.habitName.value.trim();
  const goal = elements.habitGoal.value.trim();

  if (!name) {
    return;
  }

  state.habits.unshift({
    id: crypto.randomUUID(),
    name,
    goal: goal || "记录一次完成，让坚持被看见。",
    createdAt: new Date().toISOString(),
    history: {}
  });

  saveState();
  elements.habitForm.reset();
  render();
});

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

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function render() {
  renderHeader();
  renderHabits();
  renderCalendar();
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
    const title = fragment.querySelector(".habit-card__title");
    const goal = fragment.querySelector(".habit-card__goal");
    const streak = fragment.querySelector(".streak-pill");
    const button = fragment.querySelector(".check-button");
    const isChecked = Boolean(habit.history[todayKey]);

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

  const days = getRecentDays(7);

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
