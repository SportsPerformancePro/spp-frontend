import { useState } from 'react';

export default function CoachFeedback() {
  const [prompt, setPrompt] = useState('');
  const [feedback, setFeedback] = useState(null);

  const ask = e => {
    e.preventDefault();
    // DUMMY
    setFeedback(
      "💡 (dummy) Great form! To improve your swing, focus on balance at impact."
    );
  };

  return (
    <div>
      <h2>Ask XLevel Coach</h2>
      <form onSubmit={ask}>
        <textarea
          rows="2"
          placeholder="Enter your question..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button type="submit">Submit to Coach</button>
      </form>

      <div className="coach-feedback">
        <h3>Coach Feedback:</h3>
        <p>{feedback || 'No feedback yet.'}</p>
      </div>
    </div>
  );
}
