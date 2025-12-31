# BeyondChats – Full Stack Assignment

This project is a full-stack web application built as part of the BeyondChats
Full Stack Developer Intern assignment.

The application scrapes blog articles, stores them in a database, rewrites
articles using AI-based logic, and displays both original and updated articles
in a responsive frontend UI.

---

## Tech Stack

- Frontend: React.js (Vite)
- Backend: Node.js, Express.js
- Database: MongoDB
- API Testing: Thunder Client / Postman
- Styling: Pure CSS (Responsive Design)

---

## Features

- Scrapes the oldest blog articles from BeyondChats
- Stores articles in MongoDB
- CRUD APIs for articles
- AI-based article rewriting workflow
- Displays original and updated articles
- Fully responsive UI (mobile + desktop)

---

## github link
https://github.com/Ravi-Rathod143/mast.git

## live preview
https://mastre-3nyxp29yp-ravibhais-projects.vercel.app/

## Local Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- Git

---

### Backend Setup

```bash
cd backend
npm install
npm start

### Frontend setup

cd backend
npm install
npm run dev

## create .env file
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/beyondchats
OPENAI_API_KEY=your_openai_key

### Run seed data:

npm run seed

#  Architecture / Data Flow Diagram

## Diagram 

```md
## Architecture Diagram

Frontend (React + Vite)
        |
        | HTTP (Axios)
        v
Backend (Node.js + Express.js)
        |
        | Mongoose ODM
        v
MongoDB Database

## UI/UX

- Clean card-based layout
- Responsive grid using CSS Grid
- Mobile-first design
- Graceful loading and error states
