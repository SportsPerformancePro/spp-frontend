import React from 'react';

export default function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar" />
          <div>
            <h2>JAMES</h2>
            <p>Top Spin</p>
            <span>Intermediate Player</span>
          </div>
        </div>
        <nav>
          <button>Uploaded Videos</button>
          <button>Progress Reports</button>
        </nav>
      </aside>
      <main className="main-area">
        <section className="video-area">
          <video controls src="sample.mp4" />
          <div className="still-frame">
            <img src="still-frame.jpg" alt="Still Frame" />
            <p>STILL FRAME</p>
          </div>
        </section>
        <section className="feedback-panel">
          <h1>XLEVEL COACH</h1>
          <h2>FEEDBACK</h2>
          <p>Your serve is powerful and well-balanced. To improve, increase your wrist snap for more spin and try stepping over into the court for greater power.</p>
        </section>
      </main>
    </div>
  );
}