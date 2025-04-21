import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const nav = useNavigate();
  return (
    <div className="page">
      <h2>Create Your Membership</h2>
      <p>Select Plan: <select><option>Free Trial</option><option>Pro</option><option>Team</option></select></p>
      <button onClick={() => nav('/profile')}>Continue</button>
    </div>
  );
}
