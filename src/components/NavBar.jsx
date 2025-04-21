import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <nav style={{ display: 'flex', gap: 10, padding: 10, background: '#222', color: '#fff' }}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/analytics">Analytics</Link>
    </nav>
  );
}