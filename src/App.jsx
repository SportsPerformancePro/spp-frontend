import React, { useState } from 'react';
import './index.css';

function App() {
  const [selectedSport, setSelectedSport] = useState('Golf');
  const [videoFiles, setVideoFiles] = useState([]);
  const [isValid, setIsValid] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSportChange = (e) => {
    setSelectedSport(e.target.value);
  };

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    setVideoFiles(files);
    setIsValid(files.every(file => file.name.endsWith('.mp4') || file.name.endsWith('.mov')));
  };

  const handleSubmit = async () => {
    if (!isValid || videoFiles.length === 0 || !prompt) {
      setResponse('Please upload valid video(s) and enter a prompt.');
      return;
    }

    const formData = new FormData();
    videoFiles.forEach(file => formData.append('video', file));
    formData.append('sport', selectedSport);
    formData.append('prompt', prompt);

    try {
      setResponse('⏳ Submitting to Xlevel Coach...');
      const res = await fetch('https://web-production-0f9b2.up.railway.app/analyze', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      setResponse(data.analysis || '✅ Submission complete. No feedback returned.');
    } catch (err) {
      setResponse('❌ Error contacting server.');
    }
  };

  return (
    <div className="container">
      <h1>Sports Performance Pro</h1>

      <label>Select your sport:</label>
      <select value={selectedSport} onChange={handleSportChange}>
        <option value="Golf">Golf</option>
        <option value="Tennis">Tennis</option>
        <option value="Baseball">Baseball</option>
        <option value="Softball">Softball</option>
        <option value="Pickleball">Pickleball</option>
        <option value="Padel">Padel</option>
        <option value="Archery">Archery</option>
        <option value="Esports">Esports</option>
      </select>

      <label>Upload your video(s):</label>
      <input type="file" multiple onChange={handleVideoChange} />
      {isValid === true && <p style={{ color: 'green' }}>✔ Valid video(s)</p>}
      {isValid === false && <p style={{ color: 'red' }}>✖ Invalid file type. Please upload MP4 or MOV.</p>}

      <label>Ask your AI Coach:</label>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you'd like help with..."
      />

      <button onClick={handleSubmit}>Submit to Xlevel Coach</button>

      <h2>Coach Feedback:</h2>
      <div className="feedback-box">
        {response}
      </div>
    </div>
  );
}

export default App;