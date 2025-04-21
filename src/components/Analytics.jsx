import React from 'react';
import { useNavigate } from 'react-router-dom';
import teamImg from '../assets/images/team_sport_ai_analyze_return.png';
import golfImg from '../assets/images/SPP_Golf_Results.png';
import stillImg from '../assets/images/still_shot_analytics.png';

export default function Analytics() {
  return (
    <div className="page">
      <h2>Analytics Dashboard</h2>
      <p>Upload Video: <input type="file"/></p>
      <button>Ask XLevel Coach</button>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div><h3>Team Sport Analysis</h3><img src={teamImg} alt="Team Analysis" style={{ maxWidth: '300px' }}/></div>
        <div><h3>Golf Analysis</h3><img src={golfImg} alt="Golf Analysis" style={{ maxWidth: '300px' }}/></div>
        <div><h3>Still Shot Analysis</h3><img src={stillImg} alt="Still Shot" style={{ maxWidth: '300px' }}/></div>
      </div>
    </div>
  );
}
