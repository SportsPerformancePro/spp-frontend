import React from 'react';
export default function VideoUpload({ onUpload }) {
  return (<div><h2>Upload Video</h2><input type="file" accept="video/*" onChange={e=>onUpload(e.target.files[0])} /></div>);
