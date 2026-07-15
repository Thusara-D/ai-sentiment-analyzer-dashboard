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
python3 -m uvicorn main:app --reload --port 8001

### 2. Start the React Frontend
Open a second terminal, navigate to the frontend folder, and run:
```bash
cd frontend
npm start
The web application will open automatically at http://localhost:3000.