import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const nav = useNavigate();
  return (
    <div className="page">
      <h2>Athlete Profile</h2>
      <p>Name: <input placeholder="Name"/></p>
      <p>Email: <input placeholder="Email"/></p>
      <p>Sport: <select><option>Tennis</option><option>Golf</option><option>Soccer</option></select></p>
      <button onClick={() => nav('/analytics')}>Save Profile</button>
    </div>
  );
}
