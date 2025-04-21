import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
export default function Signup() {
  const { login } = useContext(AuthContext);
  const nav = useNavigate();
  const handle = () => {
    login({ name: 'Demo User' });
    nav('/payment');
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>Sign Up</h2>
      <p>Choose your membership plan and get started.</p>
      {/* Plan selection stub */}
      <button onClick={handle}>Proceed to Payment</button>
    </div>
  );
}