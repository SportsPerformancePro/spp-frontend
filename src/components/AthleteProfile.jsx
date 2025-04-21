import React, { useState } from 'react';
export default function AthleteProfile({ onSave }) {
  const [form, setForm] = useState({ name:'', email:'', age:'', sport:'Tennis', ranking:'', experience:'Intermediate' });
  const handle = (e)=> setForm({...form, [e.target.name]: e.target.value});
  return (
    <div>
      <h2>Athlete Profile</h2>
      <input name="name" placeholder="Name" onChange={handle} />
      <input name="email" placeholder="Email" onChange={handle} />
      <input name="age" placeholder="Age" onChange={handle} />
      <select name="sport" onChange={handle}>
        <option>Archery</option><option>Golf</option><option>Baseball</option><option>Softball</option><option>Tennis</option><option>Pickleball</option><option>Padel</option>
      </select>
      <input name="ranking" placeholder="Ranking" onChange={handle} />
      <select name="experience" onChange={handle}>
        <option>Beginner</option><option>Intermediate</option><option>Pro</option>
      </select>
      <button onClick={()=>onSave(form)}>Save Profile</button>
    </div>
