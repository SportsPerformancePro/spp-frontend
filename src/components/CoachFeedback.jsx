import React from 'react';
export default function CoachFeedback({ feedback, stillFrame }) {
  return (<div><h2>Coach Feedback</h2><p>{feedback}</p>{stillFrame && <img src={stillFrame} alt="Still Frame" />}</div>);
