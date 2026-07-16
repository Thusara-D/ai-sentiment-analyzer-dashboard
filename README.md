# 🧠 Full-Stack NLP Sentiment Analyzer

## 📌 Project Overview
This is a Full-Stack Artificial Intelligence application that analyzes the sentiment (Positive or Negative) of English text reviews using a custom-trained Machine Learning model. It is built as part of my portfolio to demonstrate Full-Stack AI integration.

## 🚀 Architecture & Tech Stack
* **Machine Learning:** Python, Scikit-Learn (Logistic Regression), TF-IDF Vectorizer
* **Backend API:** FastAPI, Uvicorn
* **Frontend UI:** React.js, Node.js
* **Version Control:** Git & GitHub

## ⚙️ How to Run the Project locally

### 1. Start the FastAPI Backend
Open a terminal in the root directory and run:
```bash
python3 -m uvicorn main:app --reload --port 8001```

### 2. Start the React Frontend
Open a second terminal, navigate to the frontend folder, and run:
```bash
cd frontend
npm start
The web application will open automatically at http://localhost:3000.```

## 🐳 Run with Docker (Recommended)

This project is fully containerized using Docker, making it incredibly easy to set up and run on any machine without installing Python or Node.js locally.

### Prerequisites
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Quick Start (One-Click Setup)
1. Clone the repository and navigate to the project folder.
2. Run the following command in your terminal:
   ```bash
   docker compose up -d --build```

Wait a few moments for the containers to build and start.

###Access the applications:

1.Frontend (React UI): http://localhost:3000
2.Backend API (FastAPI Docs): http://localhost:8001/docs

###To Stop the Application
1.Run the following command to stop and remove the containers:
   ```Bash
   docker compose down
