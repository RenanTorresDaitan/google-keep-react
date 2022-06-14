import React from 'react';
import Notecard from '../Notecard';
import NewNoteComponent from '../NewNoteComponent';

export default function Content() {
  return (
    <div className="main-content">
      <NewNoteComponent />
      {/* <NoteListItems /> */}
      <Notecard title="Title" id="123" color="blue" isArchived={false} isPinned={false} />
    </div>
  );
}
