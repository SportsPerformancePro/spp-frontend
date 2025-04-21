import NavBar from '../components/NavBar';
export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <h2 style={{ padding: 20 }}>Welcome to Your Dashboard</h2>
      {/* Sponsor placements for teams/schools could go here */}
    </div>
  );
}