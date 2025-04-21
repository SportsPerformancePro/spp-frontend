import React from 'react'

export default function ToneSelector({ value, onChange }) {
  return (
    <section>
      <h2>Tone Selector</h2>
      <label>
        <input
          type="radio"
          name="tone"
          checked={value==='pro'}
          onChange={()=>onChange('pro')}
        /> Pro Mode
      </label>
      <label style={{marginLeft:'1rem'}}>
        <input
          type="radio"
          name="tone"
          checked={value==='kid'}
          onChange={()=>onChange('kid')}
        /> Kid Mode
      </label>
    </section>
  )
}
