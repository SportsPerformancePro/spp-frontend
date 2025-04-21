import { useState } from 'react';

export default function Upload() {
  const [files, setFiles] = useState([]);
  const handle = e => setFiles([...e.target.files]);
  return (
    <div>
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" multiple onChange={handle} />
      {files.length > 0 && (
        <ul>
          {files.map((f,i)=><li key={i}>{f.name}</li>)}
        </ul>
      )}
    </div>
  );
}
