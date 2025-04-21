import React, { useState } from 'react';
export default function PromptForm({ onAnalyze }) {
  const [prompt, setPrompt] = useState('');
  return (
    <div>
      <h2>Ask XLevel</h2>
      <textarea onChange={e=>setPrompt(e.target.value)} />
      <button onClick={()=>onAnalyze(prompt)}>Submit to Coach</button>
    </div>
  );
}