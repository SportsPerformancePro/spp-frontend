import { useState } from 'react';
export default function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const handle = e => {
    e.preventDefault();
    alert(`(dummy) Logging in ${email}`);
  };
  return (
    <form onSubmit={handle}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );
}
