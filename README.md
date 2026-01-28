<div align="center">
  <img src="https://img.shields.io/badge/Anti--Fraud-Quiz-1890FF?style=for-the-badge&logo=wechat&logoColor=white" alt="Anti-Fraud Quiz Logo" />
  <h1 align="center">🛡️ 信息工程学院反诈答题小程序</h1>
  <p align="center">
    <strong>“全民反诈，你我同行。”</strong><br>
    专为高校学生打造的沉浸式反诈知识学习与竞答平台。
  </p>

  <p align="center">
    <a href="#-项目简介">项目简介</a> •
    <a href="#-核心亮点">核心亮点</a> •
    <a href="#-开发进度">开发进度</a> •
    <a href="#-后续规划">后续规划</a> •
    <a href="#-技术栈">技术栈</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Platform-WeChat%20Mini%20Program-07C160?style=flat-square&logo=wechat&logoColor=white" alt="Platform" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License" />
    <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=flat-square" alt="Status" />
    <img src="https://img.shields.io/badge/UI-Glassmorphism-purple?style=flat-square" alt="UI Style" />
  </p>
</div>

---

## 📖 项目简介

**反诈卫士 (Anti-Fraud Guardian)** 是一款专为高校环境设计的微信小程序，旨在通过**趣味化**、**游戏化**的方式普及网络安全与反诈骗知识。

本项目突破了传统枯燥的说教式宣传，采用现代化的 **Dashboard UI** 设计风格，融合了 **玻璃拟态 (Glassmorphism)**、**3D 视觉** 等流行元素，提供流畅、美观且富有科技感的用户体验。学生可以通过答题挑战、学习案例、争夺排行等方式，在潜移默化中提高防骗意识。

## ✨ 核心亮点

<table>
  <tr>
    <td align="center">⏱️ <strong>沉浸式答题</strong></td>
    <td align="center">📚 <strong>防骗宝典</strong></td>
    <td align="center">🏅 <strong>激励体系</strong></td>
  </tr>
  <tr>
    <td>带有倒计时紧迫感的答题体验，支持单选、判断等多种题型，实时反馈正误。</td>
    <td>内置丰富的诈骗案例库与防骗知识百科，随查随学，覆盖高发诈骗类型。</td>
    <td>完善的积分系统、每日签到、勋章成就墙，激发学习动力，让学习不再枯燥。</td>
  </tr>
  <tr>
    <td align="center">🏆 <strong>荣耀排行</strong></td>
    <td align="center">🎨 <strong>精美 UI</strong></td>
    <td align="center">📊 <strong>数据可视化</strong></td>
  </tr>
  <tr>
    <td>3D 视觉风格的排行榜领奖台，实时展示反诈先锋风采，营造良性竞争氛围。</td>
    <td>精心打磨的交互细节，流畅的动画效果，Premium 级的视觉享受。</td>
    <td>直观的个人数据统计，清晰展示学习历程与成长轨迹。</td>
  </tr>
</table>

## 🚀 开发进度 (Development Progress)

> **当前总体进度**: ▓▓▓▓▓▓▓▓▓▓░░░░░ **65%**

### 📱 前端功能 (Frontend)

| 模块 | 功能点 | 状态 | 进度 | 备注 |
| :--- | :--- | :---: | :---: | :--- |
| **首页** | Dashboard 仪表盘 | ✅ | 100% | 流线型渐变头部 |
| | 每日小贴士 | ✅ | 100% | 每日更新金句 |
| | 快捷入口 | ✅ | 100% | 挑战、排行入口 |
| **答题** | 核心答题逻辑 | ✅ | 100% | 倒计时、计分 |
| | 交互反馈 | ✅ | 100% | 选中高亮、音效 |
| | 结果结算 | ✅ | 100% | 智能评分评价 |
| **学习** | 知识百科 | ✅ | 100% | 分类展示 |
| | 真实案例 | ✅ | 100% | 深度剖析 |
| **用户** | 个人中心 UI | ✅ | 100% | Premium 卡片风格 |
| | 每日签到 | ✅ | 100% | 积分奖励逻辑 |
| | 勋章系统 | ✅ | 100% | 成就解锁 |
| | 答题记录 | ✅ | 100% | 历史成绩查询 |
| **排行** | 3D 领奖台 | ✅ | 100% | 绝对定位布局 |
| | 完整榜单 | ✅ | 100% | 列表展示 |

### ☁️ 后端与云开发 (Backend)

| 模块 | 功能点 | 状态 | 进度 | 备注 |
| :--- | :--- | :---: | :---: | :--- |
| **鉴权** | 用户登录 | 🔄 | 20% | 待接入 wx.login |
| **数据** | 数据库设计 | 🔄 | 30% | 表结构已规划 |
| **接口** | 云函数开发 | ⬜ | 0% | 待开发 |
| **管理** | CMS 后台 | ⬜ | 0% | 待搭建 |

> ✅ = 已完成 | 🔄 = 进行中 | ⬜ = 待开始

## 📅 后续规划 (Roadmap)

我们制定了详细的后续开发计划，以确保项目能顺利上线并投入使用。

### Phase 1: 云开发对接 (Current Focus)
- [ ] **用户鉴权**：接入微信登录，建立真实用户体系。
- [ ] **数据库对接**：实现题目、用户、记录的云端存储。
- [ ] **云函数开发**：`getQuestions` (随机抽题), `submitAnswer` (校验), `dailyCheckIn` (签到)。

### Phase 2: 管理后台搭建
- [ ] **Web 管理端**：基于云开发 CMS 搭建。
- [ ] **题库管理**：支持 Excel 批量导入/导出题目。
- [ ] **数据看板**：查看每日活跃人数、平均分、高频错题。

### Phase 3: 社交与裂变
- [ ] **错题本**：自动收集错题，支持针对性复习。
- [ ] **限时挑战赛**：每周/月重置排名与奖励。
- [ ] **证书系统**：积分达标自动生成电子证书。

## 🛠 技术栈

![WeChat](https://img.shields.io/badge/WeChat-Mini_Program-07C160?style=flat-square&logo=wechat&logoColor=white)
![WXML](https://img.shields.io/badge/Code-WXML-orange?style=flat-square)
![WXSS](https://img.shields.io/badge/Style-WXSS-blue?style=flat-square)
![JavaScript](https://img.shields.io/badge/Logic-JavaScript-yellow?style=flat-square)
![CloudBase](https://img.shields.io/badge/Backend-CloudBase-0052D9?style=flat-square&logo=tencent-cloud&logoColor=white)

## 📂 目录结构

```bash
miniprogram/
├── data/              # 📄 本地模拟数据 (Mock Data)
├── images/            # 🖼️ 图片与图标资源 (Assets)
├── pages/             # 📱 页面文件 (Pages)
│   ├── index/         #    🏠 首页
│   ├── quiz/          #    📝 答题页
│   ├── result/        #    📊 结果页
│   ├── study/         #    📚 学习中心
│   ├── rank/          #    🏆 排行榜
│   ├── user/          #    👤 个人中心
│   └── history/       #    📜 答题记录
├── app.js             # ⚙️ 全局逻辑
├── app.json           # ⚙️ 全局配置
└── app.wxss           # 🎨 全局样式
```

## 🤝 贡献指南

欢迎提交 Issue 或 Pull Request 来完善这个项目！

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

---

<div align="center">
  <p>信息工程学院 © 2026 | Designed with ❤️ by Anti-Fraud Team</p>
</div>
