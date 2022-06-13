import React from 'react';
import Notecard from '../Notecard';

export default function Content() {
  return (
    <div className="main-content">
      <Notecard title="Title" id="123" color="blue" isArchived={false} isPinned={false} />
    </div>
  );
}
