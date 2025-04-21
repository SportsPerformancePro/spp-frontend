import { Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Upload from './components/Upload';
import CoachFeedback from './components/CoachFeedback';

export default function App() {
  return (
    <div className="app">
      <nav className="sidebar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/coach">Coach</Link>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/coach" element={<CoachFeedback />} />
        </Routes>
      </main>
    </div>
  );
}
