
# ☕ BrewVerse Elite | Real-Time Restaurant Management System

![Banner](https://img.shields.io/badge/Architecture-MERN--Stack-gold?style=for-the-badge)
![Socket.io](https://img.shields.io/badge/Real--Time-Socket.io-black?style=for-the-badge&logo=socket.io)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**BrewVerse Elite** is a high-performance, three-tier restaurant management system designed for seamless communication between customers, kitchen staff, and administrators. 



---

## 🚀 The Multi-Terminal Experience

This project is split into three distinct terminals, each running on separate devices but synchronized in real-time:

1.  **User Terminal (`/index.html`)**: A premium digital menu featuring "Tap & Scan" drink previews, glassmorphic design, and a real-time "Tray" (cart) system.
2.  **Kitchen Terminal (`/kitchen`)**: A dedicated live-stream for chefs. It triggers an automated **"Ding"** sound and visual alerts the millisecond an order is placed.
3.  **Executive Admin (`/admin`)**: A centralized dashboard for owners to track real-time sales, monitor order history, and view revenue analytics.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Advanced Glassmorphism), JavaScript (ES6+)
- **Backend**: Node.js & Express.js
- **Real-Time Engine**: Socket.io (WebSockets)
- **Database**: MongoDB Atlas
- **Deployment**: 
  - **Vercel**: Static Frontend Terminals
  - **Render**: Persistent WebSocket Hub (Backend)

---

## 📦 Installation & Setup

### 1. Clone the Hub (Backend)
```bash
git clone [https://github.com/your-username/brewverse-hub.git](https://github.com/your-username/brewverse-hub.git)
cd brewverse-hub
npm install
