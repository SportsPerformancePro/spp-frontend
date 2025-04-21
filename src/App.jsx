import React, { useState } from 'react';
import axios from 'axios';
import AthleteProfile from './components/AthleteProfile.jsx';
import VideoUpload from './components/VideoUpload.jsx';
import PromptForm from './components/PromptForm.jsx';
import CoachFeedback from './components/CoachFeedback.jsx';
import Sidebar from './components/Sidebar.jsx';
import ToneToggle from './components/ToneToggle.jsx';
import './style.css';

export default function App() {
  const [profile, setProfile] = useState({});
  const [video, setVideo] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [stillFrame, setStillFrame] = useState('');
  const [mode, setMode] = useState('Pro');

  const handleAnalyze = async (prompt) => {
    const formData = new FormData();
    if (video) formData.append('video', video);
    formData.append('prompt', prompt);
    formData.append('profile', JSON.stringify(profile));
    formData.append('mode', mode);

    try {
      const res = await axios.post('http://localhost:5000/analyze', formData);
      setFeedback(res.data.feedback);
      setStillFrame(res.data.stillFrameUrl);
    } catch (err) {
      setFeedback('Error contacting server.');
    }
  };

  return (
    <div className="app-container">
      <Sidebar profile={profile} />
      <div className="main-content">
        <AthleteProfile onSave={setProfile} />
        <VideoUpload onUpload={setVideo} />
        <ToneToggle mode={mode} onToggle={() => setMode(mode === 'Pro' ? 'Kid' : 'Pro')} />
        <PromptForm onAnalyze={handleAnalyze} />
        <CoachFeedback feedback={feedback} stillFrame={stillFrame} />
      </div>
    </div>
  );
}
