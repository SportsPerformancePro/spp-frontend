import React from 'react';
import AthleteProfile from './components/AthleteProfile';
import VideoUpload from './components/VideoUpload';
import PromptForm from './components/PromptForm';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <h1>XLevel Coach</h1>
      <AthleteProfile />
      <VideoUpload />
      <PromptForm />
    </div>
  );
}