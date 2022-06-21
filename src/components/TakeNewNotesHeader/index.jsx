import React, { useState } from 'react';
import IconButton from '../IconButton';
import NoteItemModel from '../../models/NoteItemModel';
import db from '../../models/DBManager';
import './styles.css';
import Notecard from '../Notecard';

function TakeNewNotesHeader() {
  const [displayHeader, setDisplayHeader] = useState(true);
  const handleDisplayHeader = () => {
    setDisplayHeader((prevState) => !prevState);
  };
  const handleNewNote = (type) => {
    const newNote = new NoteItemModel();
    if (type === 'list') newNote.isToDoList = true;
    db.createNewNoteItem(newNote);
    handleDisplayHeader();
  };

  return (
    <div>
      {displayHeader ? (
        <div className="newnote__header">
          <IconButton
            className="newnote__take-a-note"
            handleClick={() => handleNewNote('note')}
            label="Take a note..."
            btnText="Take a note..."
          />
          <IconButton
            className="newnote__new-list icon-button icon-size"
            label="New list"
            handleClick={() => handleNewNote('list')}
          />
        </div>
      ) : (
        <Notecard isCreating noteItem={new NoteItemModel()} update={() => {}} />
      )}
    </div>
  );
}

export default TakeNewNotesHeader;
