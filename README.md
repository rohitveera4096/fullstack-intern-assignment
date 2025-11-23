# Career Dashboard & Skill Gap Analyzer

A full-stack web application designed to help developers analyze their current skill set against industry standards, view career roadmaps, and stay updated with the latest technology news via the Hacker News API.

<img width="1531" height="1508" alt="image" src="https://github.com/user-attachments/assets/94c612b1-010a-46c5-a828-958cf2055b2c" />

---


## 🔗 Live Demo
- **Frontend :** https://fullstack-intern-assignment-bice.vercel.app/
- **Backend :** https://fullstack-intern-assignment-p6u2.onrender.com

---

## 🚀 Features

* **🧠 Skill Gap Analysis**
    * Enter your target role and current skills. The system returns:
        * Matched skills 
        * Missing skills 
        * Single-line learning recommendation
        * Suggested learning order

* **🗺️ Interactive Career Roadmaps**
    * Role-based learning phases for:
        * Frontend Developer
        * Backend Developer

* **📰 Tech News Aggregator**
    * Fetches the top 5 latest tech stories from Hacker News.

* **📱 Responsive Minimal UI**
    * Clean, readable, and fully responsive layout built with modern CSS.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React (Create React App), CSS |
| **Backend** | Node.js, Express |
| **Hosting** | Vercel (Frontend), Render (Backend) |
| **Version Control** | Git & GitHub |

---

### 📁 Files & Folder Structure

```plaintext
/ (Root of Repo)
├── README.md
├── LICENSE           
├── /backend
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── /routes
│       ├── news.js
│       ├── roadmap.js
│       └── skillGap.js
└── /frontend
    ├── package.json
    ├── package-lock.json
    ├── .env
    ├── /public
    └── /src
        ├── App.js
        ├── App.css
        ├── NewsList.js
        ├── RoadmapDisplay.js
        ├── SKILLGapFrom.js
        ├── (...)

```

## ⚙️ Installation & Running Locally

This project uses a split structure (`frontend` and `backend`). You will need two terminal instances to run the application.

### 1. Backend Setup

Navigate to the backend directory, install dependencies, and start the server.

```bash
cd backend
npm install
node server.js
# Server runs on http://localhost:4000
```

### 2. Frontend Setup

Open a new terminal, navigate to the frontend directory, and start the React app.

```bash
cd frontend
npm install
npm start
# App runs on http://localhost:3000
```
Create a file: frontend/.env with

```bash
REACT_APP_API_BASE=http://localhost:4000
```

Restart the frontend after updating .env.

---

## 🔗 API Endpoints

The backend provides the following RESTful endpoints:

| Method | Endpoint       | Description                         | Request Body Example                                                       |
| ------ | -------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| POST   | /api/skill-gap | Analyzes missing skills for a role. | `{ "targetRole": "Frontend Developer", "currentSkills": ["HTML", "CSS"] }` |
| POST   | /api/roadmap   | Returns a learning path for a role. | `{ "role": "Backend Developer" }`                                          |
| GET    | /api/news      | Fetches top 5 tech stories.         | N/A                                                                        |

---
