import React, { useState } from 'react';
import './App.css';

function App() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState(null);

  const analyzeSentiment = async () => {
    if (!review) return;

    try {
      
      const response = await fetch(`http://127.0.0.1:8001/predict?review=${encodeURIComponent(review)}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();
      setResult(data.sentiment);
    } catch (error) {
      console.error("Error connecting to API:", error);
      setResult("Error - API not running");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NLP Sentiment Analyzer 🧠</h1>
        <p>Enter your English review here:</p>

        <textarea
          rows="4"
          cols="50"
          placeholder="ex: This movie is very good!"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', borderRadius: '8px', color: 'black' }}
        />
        <br />
        <button
          onClick={analyzeSentiment}
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer', marginTop: '10px', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}
        >
          Analyze Sentiment
        </button>

        {result && (
          <div style={{ marginTop: '20px', padding: '20px', backgroundColor: result === 'Positive' ? '#d4edda' : '#f8d7da', color: result === 'Positive' ? '#155724' : '#721c24', borderRadius: '8px' }}>
            <h2>Result: {result}</h2>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;