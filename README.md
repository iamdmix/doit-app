# (note it see it) DoIt.
## 📌 Project Overview

DoIt is a minimal and elegant to-do list application that helps users jot down tasks, visualize them, and stay organized. The app features a sleek UI inspired by Monkeytype, making task management a smooth experience.

## ✨ Features

- Add and view tasks easily
- Simple and clean UI with a capsule-style input
- Light and dark theme support (future improvement)
- Backend with Express.js for task management (upcoming)

## 📂 Project Structure

```
todolist-app/
│── backend/        # Express.js backend (WIP)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── node_modules/ (ignored)
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│
│── frontend/       # Frontend UI
│   ├── app.js      # Frontend logic (JS)
│   ├── index.html  # Main HTML file
│   ├── styles.css  # Stylesheet
│
│── README.md       # Project documentation
│── .gitignore      # Ignored files for Git
│── notes.md        # Personal project notes
```

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/todolist-app.git
cd todolist-app
```

### 2️⃣ Install Dependencies (For Backend)

```sh
cd backend
npm install
```

### 3️⃣ Run the Backend Server

```sh
node server.js
```

### 4️⃣ Open the Frontend

Simply open `index.html` in a browser.

## 🎯 Future Improvements

- Implement full CRUD functionality (Create, Read, Update, Delete)
- Persistent task storage (Database integration)
- User authentication for personalized task lists
- Responsive UI for mobile devices

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js (WIP)
