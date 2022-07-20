import React, { useState } from 'react';
import NewNotecard from '../NewNotecard';
import { StyledNewNoteHeader, TakeaNoteButton, CreateListButton, NewNoteHeaderContainer } from './styles';

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
    <NewNoteHeaderContainer>
      {displayHeader ? (
        <StyledNewNoteHeader>
          <TakeaNoteButton
            handleClick={() => {
              handleDisplayHeader(false);
              setTypeOfNewNote('note');
            }}
            label="Take a note..."
            btnText="Take a note..."
          />
          <CreateListButton
            label="New list"
            handleClick={() => {
              handleDisplayHeader(false);
              setTypeOfNewNote('list');
            }}
          />
        </StyledNewNoteHeader>
      ) : (
        createNewNote(typeOfNewNote)
      )}
    </NewNoteHeaderContainer>
  );
}

export default TakeNewNotesHeader;
