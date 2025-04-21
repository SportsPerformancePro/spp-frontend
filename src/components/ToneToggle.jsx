import React from 'react';
export default function ToneToggle({ mode, onToggle }) {
  return (<div><h4>Mode: {mode}</h4><button onClick={onToggle}>Switch Tone</button></div>);
