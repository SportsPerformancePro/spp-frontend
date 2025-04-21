import { useState } from 'react';
export default function Signup() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const handle = e => {
    e.preventDefault();
    alert(`(dummy) Signing up ${email}`);
  };
  return (
    <form onSubmit={handle}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={pw}
        onChange={e => setPw(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
