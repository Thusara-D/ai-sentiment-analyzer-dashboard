from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib

model = joblib.load('sentiment_model.pkl')
tfidf = joblib.load('tfidf_vectorizer.pkl')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
def predict(review: str):
    text_vector = tfidf.transform([review])
    prediction = model.predict(text_vector)
    sentiment = "Positive" if prediction[0] == 1 else "Negative"
    return {"review": review, "sentiment": sentiment}