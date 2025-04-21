import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
export default function Payment() {
  const { user } = useContext(AuthContext);
  const nav = useNavigate();
  const pay = () => {
    // stub payment success
    nav('/dashboard');
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>Payment</h2>
      <p>Plan: Standard Membership</p>
      <button onClick={pay}>Complete Payment</button>
    </div>
  );
}