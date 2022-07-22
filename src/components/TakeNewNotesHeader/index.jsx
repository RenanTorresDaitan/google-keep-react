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
  const [dimensions, setDimensions] = useState({ height: 3, width: 0 });
  const handleDisplayHeader = (visible) => {
    setDisplayHeader(visible);
  };

  const createNewNote = (type, handle) => (
    <NewNotecard typeOfNote={type} showHeader={() => handle(true)} />
  );
  useEffect(() => {
    console.log(headerDimension.current.children[0].clientHeight, 'OK');
    if (headerDimension.current !== null) {
      setDimensions({
        height: headerDimension.current.children[0].clientHeight / 16 + 1,
        width: 0,
      });
    }
  }, [headerDimension, displayHeader]);

  return (
    <NewNoteHeaderContainer height={dimensions.height}>
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
