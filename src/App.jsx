
import React, { useState } from 'react';

function App() {
    const [sport, setSport] = useState("Golf");
    const [file, setFile] = useState(null);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async () => {
        setStatus("Submitting to Xlevel...");
        try {
            const res = await fetch("https://web-production-0f9b2.up.railway.app/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sport, prompt })
            });
            const data = await res.json();
            setResponse(data.reply || "No response received.");
        } catch (error) {
            setResponse("Error: " + error.message);
        } finally {
            setStatus("");
        }
    };

    return (
        <div>
            <h1>Sports Performance Pro</h1>
            <label>Select a sport:</label>
            <select value={sport} onChange={e => setSport(e.target.value)}>
                <option>Golf</option>
                <option>Tennis</option>
            </select>
            <br />
            <label>Upload your video(s):</label>
            <input type="file" multiple onChange={e => setFile(e.target.files[0])} />
            <br />
            <p>{file ? `${file.name} is valid` : "No file selected"}</p>
            <label>Ask your AI Coach:</label>
            <input
                type="text"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="e.g. analysis my weaknesses with my swing"
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <p><strong>{status}</strong></p>
            <p><strong>Response:</strong> {response}</p>
        </div>
    );
}

export default App;
