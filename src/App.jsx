import React, { useState } from 'react';

function App() {
  const [files, setFiles] = useState([]);
  const [sport, setSport] = useState('');
  const [prompt, setPrompt] = useState('');
  const [feedback, setFeedback] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const feedbackResults = selectedFiles.map(file => {
      const valid = ['mp4', 'mov', 'avi'].includes(file.name.split('.').pop().toLowerCase());
      return { name: file.name, valid };
    });
    setFiles(selectedFiles);
    setFeedback(feedbackResults);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sports Performance Pro</h1>
      
      <label>Select a sport:</label><br />
      <select value={sport} onChange={(e) => setSport(e.target.value)}>
        <option value="">-- Choose --</option>
        <option value="golf">Golf</option>
        <option value="tennis">Tennis</option>
        <option value="pickleball">Pickleball</option>
        <option value="padel">Padel</option>
      </select><br /><br />

      <label>Upload your video(s):</label><br />
      <input type="file" multiple onChange={handleFileChange} /><br /><br />

      {feedback.map((f, i) => (
        <div key={i} style={{ color: f.valid ? 'green' : 'red' }}>
          {f.valid ? '✔️' : '❌'} {f.name} {f.valid ? 'is valid' : 'has invalid format'}
        </div>
      ))}

      <br />
      <label>Ask your AI Coach:</label><br />
      <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="e.g., How’s my swing?" style={{ width: '100%', padding: '0.5rem' }} />
      <br /><br />
      <button onClick={() => alert('Submitting to Xlevel...')}>Submit</button>
    </div>
  );
}

export default App;
