import React, { useState } from 'react';

export default function VideoUploader({ onAnalyze }) {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [sport, setSport] = useState('Golf');

  return (
    <div>
      <h2>Upload Video</h2>
      <input type="file" onChange={e=>setFile(e.target.files[0])}/>
      <h2>Ask XLevel Coach:</h2>
      <input value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Type your question"/>
      <button onClick={()=>onAnalyze(question, file, sport)}>
        Submit to Coach
      </button>
    </div>
  );
}
