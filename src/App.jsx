import React, { useState } from 'react';

export default function App() {
  const [profile, setProfile] = useState({ name: '', email: '', age: '', sport: '', ranking: '', experience: '' });
  const [videos, setVideos] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [feedback, setFeedback] = useState('');
  const [stillFrame, setStillFrame] = useState('');

  const handleFileChange = (e) => {
    setVideos([...e.target.files]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    videos.forEach(video => formData.append('videos', video));
    formData.append('prompt', prompt);
    Object.keys(profile).forEach(key => formData.append(key, profile[key]));

    const response = await fetch('https://sportsperformancepro-backend-production.up.railway.app/analyze', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    setFeedback(result.feedback);
    setStillFrame(result.stillFrameUrl);
  };

  return (
    <div className="container">
      <h1>Sports Performance Pro</h1>

      <section>
        <h2>Athlete Profile</h2>
        {['name', 'email', 'age', 'sport', 'ranking', 'experience'].map(field => (
          <input
            key={field}
            placeholder={field}
            value={profile[field]}
            onChange={(e) => setProfile({ ...profile, [field]: e.target.value })}
          />
        ))}
      </section>

      <section>
        <h2>Upload Video</h2>
        <input type="file" multiple onChange={handleFileChange} />
      </section>

      <section>
        <h2>Ask XLevel</h2>
        <input value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </section>

      <section>
        <h2>Coach Feedback</h2>
        <p>{feedback}</p>
        {stillFrame && <img src={stillFrame} alt="Still Frame" />}
      </section>
    </div>
  );
}
