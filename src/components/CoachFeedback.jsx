import React from 'react'

export default function CoachFeedback({ text }) {
  return (
    <section>
      <h2>Coach Feedback:</h2>
      <div style={{background:'#333', padding:'1rem', minHeight:'4rem'}}>
        {text}
      </div>
    </section>
  )
}
