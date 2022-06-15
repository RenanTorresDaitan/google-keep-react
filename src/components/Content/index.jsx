import React from 'react';

import NewNoteComponent from '../NewNoteComponent';
import NoteListItems from '../NoteListItems';
import DBManager from '../../models/DBManager';

export default function Content() {
  return (
    <div className="content">
      <NewNoteComponent />
      <NoteListItems itemsList={DBManager.noteItemsList} />
    </div>
  );
}
