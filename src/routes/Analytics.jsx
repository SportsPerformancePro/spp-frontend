import React from 'react';
import NavBar from '../components/NavBar';
export default function Analytics() {
  const [uploaded, setUploaded] = React.useState(false);
  const handleUpload = () => setUploaded(true);
  const handleAsk = () => alert('Dummy XLevel feedback shown here!');
  return (
    <div>
      <NavBar />
      <div style={{ padding: 20 }}>
        <h2>Video Analytics</h2>
        <input type="file" accept="video/*" onChange={handleUpload} /><br/>
        {uploaded && (
          <>
            <div style={{ marginTop: 20 }}>
              <video width="400" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
            <button onClick={handleAsk} style={{ marginTop: 10 }}>Ask XLevel Coach</button>
            <div style={{ marginTop: 20 }}>
              <img src="https://via.placeholder.com/400x200" alt="Still frame" />
              <h3>Feedback:</h3>
              <p>Your serve is powerful and well-balanced. ...</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}