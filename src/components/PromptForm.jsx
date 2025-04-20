import React from 'react';

export default function PromptForm() {
  return (
    <div className="section">
      <h2>Ask XLevel</h2>
      <textarea placeholder="What would you like help with?" rows="4" cols="50"></textarea><br />
      <button>Submit</button>
    </div>
  );
}