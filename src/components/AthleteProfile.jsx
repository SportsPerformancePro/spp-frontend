import React, { useState, useEffect } from 'react'

export default function AthleteProfile({ onChange }) {
  const [form, setForm] = useState({
    name:'', email:'', age:'', sport:'Tennis', ranking:'', level:'Intermediate'
  })

  useEffect(() => onChange(form), [form, onChange])

  return (
    <section>
      <h2>Athlete Profile</h2>
      {['name','email','age','ranking'].map(k=>(
        <input
          key={k}
          placeholder={k}
          value={form[k]}
          onChange={e=>setForm(f=>({...f,[k]:e.target.value}))}
        />
      ))}
      <select
        value={form.sport}
        onChange={e=>setForm(f=>({...f,sport:e.target.value}))}
      >
        {['Tennis','Golf','Baseball','Soccer','Basketball']
          .map(s=><option key={s}>{s}</option>)}
      </select>
      <select
        value={form.level}
        onChange={e=>setForm(f=>({...f,level:e.target.value}))}
      >
        {['Beginner','Intermediate','Pro'].map(l=><option key={l}>{l}</option>)}
      </select>
    </section>
)
}
