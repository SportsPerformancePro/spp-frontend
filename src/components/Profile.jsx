import { useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
    sport: 'Golf',
    ranking: '',
    level: 'Beginner',
  });

  const update = e => {
    const { name, value } = e.target;
    setProfile(p => ({ ...p, [name]: value }));
  };

  const save = e => {
    e.preventDefault();
    alert('(dummy) Profile saved:' + JSON.stringify(profile, null, 2));
  };

  return (
    <form onSubmit={save}>
      <h2>Athlete Profile</h2>
      <input
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={update}
      />
      <input
        name="email"
        placeholder="Email"
        value={profile.email}
        onChange={update}
      />
      <input
        name="age"
        placeholder="Age"
        value={profile.age}
        onChange={update}
      />
      <select name="sport" value={profile.sport} onChange={update}>
        <option>Golf</option>
        <option>Tennis</option>
        <option>Soccer</option>
        <option>Baseball</option>
        <option>Basketball</option>
      </select>
      <input
        name="ranking"
        placeholder="Ranking"
        value={profile.ranking}
        onChange={update}
      />
      <select name="level" value={profile.level} onChange={update}>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Pro</option>
      </select>
      <button type="submit">Save Profile</button>
    </form>
  );
}
