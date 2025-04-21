import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const nav = useNavigate();

  const saveProfile = () => {
    // mock save
    nav('/analytics');
  };

  return (
    <div>
      <NavBar />
      <div style={{ padding: 20 }}>
        <h2>Athlete Profile</h2>
        <p>Name: {user.name}</p>
        <p>Sport: {user.sport}</p>
        <p>Level: {user.level}</p>
        <form onSubmit={e => { e.preventDefault(); saveProfile(); }}>
          <input placeholder="Name" defaultValue={user.name} /><br/>
          <input placeholder="Email" defaultValue={user.email || ''} /><br/>
          <input placeholder="Age" /><br/>
          <select><option>Tennis</option><option>Golf</option></select><br/>
          <input placeholder="Ranking" /><br/>
          <select><option>Beginner</option><option>Intermediate</option></select><br/>
          <button type="submit">Save Profile & Continue</button>
        </form>
      </div>
    </div>
  );
}