import React, { useState } from 'react';
import AthleteProfile from './components/AthleteProfile';
import VideoUploader from './components/VideoUploader';

export default function App() {
  const [profile, setProfile] = useState({});
  const [feedback, setFeedback] = useState('');

  const handleAnalyze = (question, videoFile, sport) => {
    const formData = new FormData();
    formData.append('question', question);
    formData.append('sport', sport);
    formData.append('name', profile.name);
    formData.append('experience', profile.experience);
    formData.append('ranking', profile.ranking);

    fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question, sport, name: profile.name,
        experience: profile.experience, ranking: profile.ranking
      })
    })
    .then(res => res.json())
    .then(data => setFeedback(data.feedback))
    .catch(() => setFeedback('Error contacting server.'));
  };

  return (
    <div className="app">
      <h1>Sports Performance Pro</h1>
      <AthleteProfile onUpdate={setProfile} />
      <VideoUploader onAnalyze={handleAnalyze} />
      <section>
        <h2>Coach Feedback:</h2>
        <p>{feedback}</p>
      </section>
    </div>
  );
}
