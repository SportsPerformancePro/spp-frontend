import React, { useState } from 'react';

export default function AthleteProfile({ onUpdate }) {
  const [form, setForm] = useState({
    name: '', email: '', age:'', sport: 'Golf',
    ranking:'', experience:'Beginner'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    onUpdate(updated);
  };

  return (
    <div>
      <h2>Athlete Profile</h2>
      <input name="name" placeholder="Name" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="age" placeholder="Age" onChange={handleChange}/>
      <select name="sport" onChange={handleChange}>
        <option>Golf</option>
        <option>Tennis</option>
        <option>Baseball</option>
      </select>
      <input name="ranking" placeholder="Ranking" onChange={handleChange}/>
      <select name="experience" onChange={handleChange}>
        <option>Beginner</option><option>Intermediate</option><option>Pro</option>
      </select>
    </div>
  );
}
