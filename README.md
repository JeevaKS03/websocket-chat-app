
# WebSocket Chat Application

A simple real-time chat application built using **WebSockets** where multiple clients can connect, choose a username, and exchange messages instantly.

---

## 📁 Project Structure

```

project-root/
│
├── client/
│   └── index.html      # Frontend (HTML + JavaScript)
│
├── server/
│   └── server.js       # WebSocket server (Node.js)
│
└── README.md

```
---

## 🚀 Features

- Multiple clients can connect simultaneously
- Users choose a username
- Real-time message broadcasting
- Persistent WebSocket connection
- Lightweight and minimal UI

---

## 🛠 Tech Stack

- **Node.js**
- **ws** (WebSocket library)
- **HTML / JavaScript**

---

## 📦 How to Run the Project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/JeevaKS03/websocket-chat-app.git
cd websocket-chat-app
````

---

### 2️⃣ Install dependencies

```bash
cd server
npm install ws
```

---

### 3️⃣ Start the WebSocket server

```bash
node server.js
```

Server will run on:

```
ws://localhost:8080
```

---

### 4️⃣ Open the client

* Open `client/index.html` in your browser
* Open the file in **multiple tabs or browsers** to simulate multiple users

---

## 🧠 How It Works

* Client connects to the WebSocket server
* User enters a username and sends messages
* Messages are sent as JSON objects
* Server broadcasts messages to all connected clients
* Each message is displayed with the sender’s username

---

## 📚 What I Learned

* How WebSockets differ from HTTP
* Creating persistent bi-directional connections
* Broadcasting messages to multiple clients
* Managing user state per WebSocket connection
* Building real-time applications with Node.js

---

## 🧑‍💻 Author - Jeeva K S

Built as a learning project to understand real-time communication using WebSockets.
