
import React, { useState } from "react";

function App() {
  const [sport, setSport] = useState("Golf");
  const [video, setVideo] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting to Xlevel...");

    const formData = new FormData();
    formData.append("sport", sport);
    formData.append("prompt", prompt);
    formData.append("video", video);

    try {
      const res = await fetch("https://web-production-0f9b2.up.railway.app/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResponse(data.response || "No response from Xlevel.");
    } catch (error) {
      setResponse("Error contacting server.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Sports Performance Pro</h1>
      <form onSubmit={{handleSubmit}}>
        <label>
          Choose your sport:
          <select value={{sport}} onChange={{(e) => setSport(e.target.value)}}>
            <option value="Golf">Golf</option>
            <option value="Tennis">Tennis</option>
          </select>
        </label>
        <br /><br />
        <label>
          Upload your video(s):
          <input type="file" accept="video/*" onChange={{(e) => setVideo(e.target.files[0])}} />
        </label>
        <br /><br />
        <label>
          Ask your AI Coach:
          <input
            type="text"
            value={{prompt}}
            onChange={{(e) => setPrompt(e.target.value)}}
            style={{ width: "100%" }}
          />
        </label>
        <br /><br />
        <button type="submit">Submit to Xlevel Coach</button>
      </form>
      <br />
      <div><strong>Coach Feedback:</strong></div>
      <div style={{ backgroundColor: "#f0f0f0", padding: "1rem", marginTop: "1rem" }}>{{response}}</div>
      <div style={{ marginTop: "1rem", color: "gray" }}>{{status}}</div>
    </div>
  );
}

export default App;
