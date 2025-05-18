# ✅ Task Manager - TypeScript Project

A simple task manager (To-Do app) built with **TypeScript**, using modular structure, localStorage, and DOM manipulation.  
Perfect for learning TypeScript fundamentals like OOP, modules, event handling, and browser APIs.

---

## 📦 Features

- ✅ Add new tasks
- 🗑️ Delete tasks
- 🔁 Toggle completion status
- 💾 Persistent storage via `localStorage`
- 🧠 Clean structure (models, services, components, utils)

---

## 🧰 Tech Stack

- TypeScript (Vanilla)
- HTML5 + CSS3
- localStorage API
- No frameworks, no dependencies

---

## 📁 Project Structure

task-manager/
│
├── index.html          # Main HTML page
├── styles.css          # Simple styling
├── main.ts             # Entry point
│
├── models/             # Data models
│   └── Task.ts
│
├── services/           # Business logic (task operations)
│   └── TaskService.ts
│
├── components/         # UI rendering logic
│   └── TaskList.ts
│
└── utils/              # Utility functions (e.g., localStorage helper)
└── Storage.ts
