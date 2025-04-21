import React from 'react';
export default function Sidebar({ profile }) {
  return (<div><h3>{profile.name||'Athlete'}</h3><button>Profile</button><button>Uploaded Videos</button><button>Progress</button></div>);
