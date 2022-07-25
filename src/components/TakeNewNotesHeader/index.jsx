import React, { useState, useRef, useEffect } from 'react';
import NewNotecard from '../NewNotecard';
import {
  StyledNewNoteHeader,
  TakeaNoteButton,
  CreateListButton,
  NewNoteHeaderContainer,
} from './styles';

const TakeNewNotesHeader = () => {
  const [displayHeader, setDisplayHeader] = useState(true);
  const [typeOfNewNote, setTypeOfNewNote] = useState('note');
  const headerDimension = useRef();
  const [height, setHeight] = useState(3);
  const handleDisplayHeader = (visible) => {
    setDisplayHeader(visible);
  };

  const createNewNote = (type, handle) => (
    <NewNotecard typeOfNote={type} showHeader={() => handle(true)} />
  );
  useEffect(() => {
    if (headerDimension.current !== null) {
      setHeight(headerDimension.current.children[0].clientHeight / 16 + 1);
    }
  }, [headerDimension, displayHeader]);

  return (
    <NewNoteHeaderContainer height={height}>
      <StyledNewNoteHeader ref={headerDimension}>
        {displayHeader ? (
          <>
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
          </>
        ) : (
          createNewNote(typeOfNewNote, handleDisplayHeader)
        )}
      </StyledNewNoteHeader>
    </NewNoteHeaderContainer>
  );
};

export default TakeNewNotesHeader;
