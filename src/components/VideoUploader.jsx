import React from 'react'

export default function VideoUploader({ onFile }) {
  return (
    <section>
      <h2>Upload Video</h2>
      <input
        type="file"
        accept="video/*"
        onChange={e=>onFile(e.target.files[0])}
      />
    </section>
  )
}
