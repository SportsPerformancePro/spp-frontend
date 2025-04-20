import React from 'react';

export default function AthleteProfile() {
  return (
    <div className="section">
      <h2>Athlete Profile</h2>
      <form>
        <input type="text" placeholder="Name" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="number" placeholder="Age" /><br />
        <select><option>Choose Sport</option><option>Archery</option><option>Tennis</option></select><br />
        <input type="text" placeholder="Ranking" /><br />
        <select><option>Experience Level</option><option>Beginner</option><option>Intermediate</option><option>Pro</option></select>
      </form>
    </div>
  );
}