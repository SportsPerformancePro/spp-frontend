import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="page">
      <h1>Welcome to Sports Performance Pro</h1>
      <p>High-tech AI-powered performance analysis for every athlete and team.</p>
      <Link to="/signup"><button>Sign Up Now</button></Link>
    </div>
  );
}
