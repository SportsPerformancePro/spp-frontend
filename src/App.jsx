import React, { useState } from 'react';

function App() {
  const [sport, setSport] = useState("Golf");
  const [files, setFiles] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState([]);

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    const feedbackList = selected.map(file => {
      const isValid = ['mp4', 'mov', 'avi'].includes(file.name.split('.').pop().toLowerCase());
      return { name: file.name, valid: isValid };
    });
    setFiles(selected);
    setFeedback(feedbackList);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://web-production-0f9b2.up.railway.app/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ sport, prompt })
      });

      const data = await res.json();
      setResponse(data.response || "No response received.");
    } catch (err) {
      setResponse("Error contacting server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Sports Performance Pro</h1>

      <label>Choose your sport:</label><br />
      <select value={sport} onChange={(e) => setSport(e.target.value)}>
        <option value="Golf">Golf</option>
        <option value="Tennis">Tennis</option>
        <option value="Pickleball">Pickleball</option>
        <option value="Padel">Padel</option>
      </select>

      <br /><br />
      <label>Upload your video(s):</label><br />
      <input type="file" multiple onChange={handleFileChange} />
      {feedback.map((file, i) => (
        <p key={i} style={{ color: file.valid ? "green" : "red" }}>
          {file.valid ? "✔️" : "❌"} {file.name}
        </p>
      ))}

      <br />
      <label>Ask your AI Coach:</label><br />
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you want help with"
        style={{ width: "100%", padding: "0.5rem" }}
      />

      <br /><br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Analyzing..." : "Submit to Xlevel Coach"}
      </button>

      {response && (
        <>
          <h3>Coach Feedback:</h3>
          <div style={{ background: '#eee', padding: '1rem', borderRadius: '8px' }}>
            {response}
          </div>
        </>
      )}
    </div>
  );
}

export default App;