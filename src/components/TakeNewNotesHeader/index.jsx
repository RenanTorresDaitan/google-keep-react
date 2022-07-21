import React, { useState } from 'react';
import NewNotecard from '../NewNotecard';
import { StyledNewNoteHeader, TakeaNoteButton, CreateListButton, NewNoteHeaderContainer } from './styles';

const TakeNewNotesHeader = () => {
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
            aria-label="Take a note..."
            data-tooltip-text="Take a note..."
            tabIndex={0}
            onClick={() => {
              handleDisplayHeader(false);
              setTypeOfNewNote('note');
            }}
          >
            Take a note...
          </TakeaNoteButton>
          <CreateListButton
            aria-label="New list"
            data-tooltip-text="New list"
            tabIndex={0}
            onClick={() => {
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
};

export default TakeNewNotesHeader;
