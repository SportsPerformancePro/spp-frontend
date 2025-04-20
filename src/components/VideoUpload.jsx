import React from 'react';

export default function VideoUpload() {
  return (
    <div className="section">
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" multiple />
    </div>
  );
}