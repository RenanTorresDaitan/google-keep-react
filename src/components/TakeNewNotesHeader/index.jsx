import React, { useState } from 'react';
import Button from '../Button';
import NewNotecard from '../NewNotecard';
import './styles.css';

function TakeNewNotesHeader() {
  const [displayHeader, setDisplayHeader] = useState(true);
  const [typeOfNewNote, setTypeOfNewNote] = useState('note');
  const handleDisplayHeader = (visible) => {
    setDisplayHeader(visible);
  };
  const createNewNote = (type) => (
    <NewNotecard
      typeOfNote={type}
      showHeader={() => handleDisplayHeader(true)}
    />
  );
  return (
    <div style={{ display: 'block', margin: 'auto' }}>
      {displayHeader ? (
        <div className="newnote__header">
          <Button
            className="newnote__take-a-note"
            handleClick={() => {
              handleDisplayHeader(false);
              setTypeOfNewNote('note');
            }}
            label="Take a note..."
            btnText="Take a note..."
          />
          <Button
            className="newnote__new-list icon-button icon-size"
            label="New list"
            handleClick={() => {
              handleDisplayHeader(false);
              setTypeOfNewNote('list');
            }}
          />
        </div>
      ) : (
        createNewNote(typeOfNewNote)
      )}
    </div>
  );
}

export default TakeNewNotesHeader;
