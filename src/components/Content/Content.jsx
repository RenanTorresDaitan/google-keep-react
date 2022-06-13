import React from 'react';
import Notecard from '../Notecard';

export default function Content() {
  return (
    <div className="main-content">
      <Notecard title="Title" id="123" color="orange" isArchived isPinned={false} />
    </div>
  );
}
