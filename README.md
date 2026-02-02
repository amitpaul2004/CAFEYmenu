# ☕ BrewVerse Elite | Real-Time Restaurant Management System

![Banner](https://img.shields.io/badge/Architecture-Three--Tier-gold?style=for-the-badge)
![Socket.io](https://img.shields.io/badge/Real--Time-Socket.io-black?style=for-the-badge&logo=socket.io)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**BrewVerse Elite** is a modern, high-performance **real-time restaurant management system** built for seamless communication between **customers**, **kitchen staff**, and **restaurant administrators**.

It offers a premium multi-terminal workflow where each terminal works independently (even on separate devices) while staying synced in real-time using WebSocket technology.

---

## 🚀 The Multi-Terminal Experience

This system consists of **three independent terminals** connected to one real-time backend hub:

### ✅ 1) User Terminal (`/index.html`)
A premium digital café menu with:
- **Tap & Scan** drink previews  
- **Glassmorphism UI**
- Real-time **Tray / Cart**
- Smooth mobile-first interface

### ✅ 2) Kitchen Terminal (`/kitchen`)
A live order stream for chefs:
- Instant real-time order alerts
- Automated **"Ding" sound** on new orders
- Clean workflow display for preparation

### ✅ 3) Executive Admin Terminal (`/admin`)
A dashboard for owners:
- Real-time order monitoring
- Sales tracking
- Order history viewer
- Revenue analytics

---

## 🌐 Live Deployment Links

| Terminal | Live Link |
|---------|----------|
| 👤 User Menu | **[Open User Terminal](YOUR_USER_DEPLOY_LINK)** |
| 👨‍🍳 Kitchen Panel | **[Open Kitchen Terminal](YOUR_KITCHEN_DEPLOY_LINK)** |
| 🧑‍💼 Admin Dashboard | **[Open Admin Terminal](YOUR_ADMIN_DEPLOY_LINK)** |

> Replace the above links with your actual deployed URLs.

---

## 🖼️ Terminal Preview (Screenshots)

### 👤 User Terminal Preview
![User Preview](./preview/user-terminal.png)

### 👨‍🍳 Kitchen Terminal Preview
![Kitchen Preview](./preview/kitchen-terminal.png)

### 🧑‍💼 Admin Terminal Preview
![Admin Preview](./preview/admin-terminal.png)

📌 **Tip:** Create a folder named **preview/** in your repo and upload these screenshots inside it.

---

## 🛠️ Tech Stack (Updated)

✅ This project **does NOT use MERN Stack**.

- **Frontend**: HTML5, CSS3 (Advanced Glassmorphism), JavaScript (ES6+)
- **Backend**: Node.js + Express.js
- **Real-Time Engine**: Socket.io (WebSockets)
- **Database**: MongoDB Atlas *(if used)*
- **Deployment**:
  - **Vercel / Netlify**: Frontend terminals
  - **Render / Railway**: Backend (WebSocket hub)

---

## 📦 Installation & Setup

### 1️⃣ Clone Backend Hub
```bash
git clone https://github.com/your-username/brewverse-hub.git
cd brewverse-hub
npm install
