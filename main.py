from fastapi import FastAPI 
import joblib 

model = joblib.load('sentiment_model.pkl')
tfidf = joblib.load('tfidf_vectorizer.pkl')

app = FastAPI()

@app.post("/predict")
def predict(review: str):
    text_vector = tfidf.transform([review])

    prediction = model.predict(text_vector)
    sentiment = "positive" if prediction[0] == 1 else "Negative"

    return {"review": review, "sentiment": sentiment}