# Habit

一个轻量的每日打卡 Web App 原型，适合先在本地使用，再继续升级成部署到 GitHub Pages 或 Cloudflare Pages 的版本。

## 功能

- 添加每日习惯
- 当日打卡 / 取消打卡
- 自动计算连续打卡天数
- 展示今日完成进度
- 展示最近 7 天完成热力图
- 使用 `localStorage` 做本地数据持久化

## 本地运行

这是一个零依赖静态项目，直接打开 `index.html` 就能运行。

如果想通过本地服务器运行，可以在项目目录执行：

```bash
npx serve .
```

## 项目结构

```text
Habit/
  index.html
  styles.css
  app.js
  README.md
```

## 下一步建议

- 接入后端数据库，支持多设备同步
- 接入登录系统
- 部署到 Cloudflare Pages
- 增加提醒、统计和成就系统
