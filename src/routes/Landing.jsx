import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>Sports Performance Pro</h1>
      <p>Next‑gen AI video analysis for athletes & teams.</p>
      <div>
        <button><Link to="/signup">Become a Member</Link></button>
      </div>
      <h3>Our Sponsors</h3>
      <div>
        {/* Placeholder for sponsor logos */}
        <img src="/public/sponsor1.png" alt="Sponsor 1" width="120" />
        <img src="/public/sponsor2.png" alt="Sponsor 2" width="120" />
      </div>
    </div>
  );
}