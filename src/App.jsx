import React, { useState } from 'react';

export default function App() {
  const [profile, setProfile] = useState({
    name: '', email: '', age: '', sport: 'Golf', ranking: '', experience: 'Beginner'
  });
  const [video, setVideo] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleProfileChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleVideoChange = e => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!video || !prompt) return;
    setLoading(true);
    const form = new FormData();
    form.append('video', video);
    form.append('prompt', prompt);
    form.append('profile', JSON.stringify(profile));
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        body: form
      });
      const data = await res.json();
      setFeedback(data.feedback || 'No feedback returned');
    } catch (err) {
      setFeedback('Error contacting server.');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Sports Performance Pro</h1>
      <section>
        <h2>Athlete Profile</h2>
        {['name','email','age','ranking'].map(field => (
          <input
            key={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={profile[field]}
            onChange={handleProfileChange}
          />
        ))}
        <select name="sport" value={profile.sport} onChange={handleProfileChange}>
          {['Golf','Tennis','Baseball','Soccer','Basketball'].map(s => <option key={s}>{s}</option>)}
        </select>
        <select name="experience" value={profile.experience} onChange={handleProfileChange}>
          {['Beginner','Intermediate','Advanced','Pro'].map(l => <option key={l}>{l}</option>)}
        </select>
      </section>
      <section>
        <h2>Upload Video</h2>
        <input type="file" accept="video/*" onChange={handleVideoChange} />
      </section>
      <section>
        <h2>Ask XLevel Coach</h2>
        <textarea
          rows="2"
          placeholder="Your question..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button disabled={loading} onClick={handleSubmit}>
          {loading ? 'Submitting...' : 'Submit to Coach'}
        </button>
      </section>
      <section>
        <h2>Coach Feedback:</h2>
        <div>{feedback}</div>
      </section>
    </div>
  );
}
