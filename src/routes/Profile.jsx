import NavBar from '../components/NavBar';
export default function Profile() {
  return (
    <div>
      <NavBar />
      <div style={{ padding: 20 }}>
        <h2>Athlete Profile</h2>
        <form>
          <input placeholder="Name" /><br/>
          <input placeholder="Email" /><br/>
          <input placeholder="Age" /><br/>
          <select><option>Tennis</option><option>Golf</option></select><br/>
          <input placeholder="Ranking" /><br/>
          <select><option>Beginner</option><option>Intermediate</option></select><br/>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}