import React, { useState } from 'react'
import AthleteProfile from './components/AthleteProfile'
import VideoUploader from './components/VideoUploader'
import ToneSelector from './components/ToneSelector'
import CoachFeedback from './components/CoachFeedback'
import './index.css'

export default function App() {
  const [profile, setProfile] = useState({})
  const [videoFile, setVideoFile] = useState(null)
  const [tone, setTone] = useState('pro')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async () => {
    const form = new FormData()
    form.append('video', videoFile)
    form.append('profile', JSON.stringify(profile))
    form.append('tone', tone)
    const res = await fetch(\`\${import.meta.env.VITE_API_URL}/api/analyze\`, {
      method: 'POST', body: form
    })
    const json = await res.json()
    setFeedback(json.feedback || 'Error getting feedback')
  }

  return (
    <div className="container">
      <h1>Sports Performance Pro</h1>
      <AthleteProfile onChange={setProfile}/>
      <VideoUploader onFile={setVideoFile}/>
      <ToneSelector value={tone} onChange={setTone}/>
      <button disabled={!videoFile} onClick={handleSubmit}>
        Submit to XLevel Coach
      </button>
      <CoachFeedback text={feedback}/>
    </div>
  )
}
