import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file || !prompt) {
      alert("Please provide both a video and a prompt.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("prompt", prompt);
    formData.append("sport", "Tennis");
    formData.append("experience", "Intermediate");
    formData.append("tone", "Pro");

    try {
      setLoading(true);
      const res = await axios.post("https://web-production-0f9b2.up.railway.app/analyze", formData);
      setResponse(res.data.analysis || "No analysis received.");
    } catch (err) {
      setResponse("Failed to contact backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>XLEVEL COACH ANALYSIS</h1>
      <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files[0])} />
      <textarea
        rows="3"
        style={{ width: "100%", marginTop: 10 }}
        placeholder="Tell Xlevel what to look for..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button style={{ marginTop: 10 }} onClick={handleSubmit}>
        Submit to Coach
      </button>

      {loading ? (
        <p>Analyzing...</p>
      ) : (
        response && (
          <div style={{ marginTop: 20, background: "#111", padding: 15, borderRadius: 8 }}>
            <h2>Coach Feedback:</h2>
            <p>{response}</p>
          </div>
        )
      )}
    </div>
  );
}