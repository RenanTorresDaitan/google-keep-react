import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import NewNotecard from '../NewNotecard';
import './styles.css';

function TakeNewNotesHeader({ update }) {
  const [displayHeader, setDisplayHeader] = useState(true);
  const [typeOfNewNote, setTypeOfNewNote] = useState('note');
  const handleDisplayHeader = () => {
    setDisplayHeader((prevState) => !prevState);
  };
  const createNewNote = (type) => (
    <NewNotecard
      typeOfNote={type}
      showHeader={handleDisplayHeader}
      update={update}
    />
  );
  return (
    <div style={{ display: 'block', margin: 'auto' }}>
      {displayHeader ? (
        <div className="newnote__header">
          <Button
            className="newnote__take-a-note"
            handleClick={() => {
              handleDisplayHeader();
              setTypeOfNewNote('note');
            }}
            label="Take a note..."
            btnText="Take a note..."
          />
          <Button
            className="newnote__new-list icon-button icon-size"
            label="New list"
            handleClick={() => {
              handleDisplayHeader();
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
TakeNewNotesHeader.propTypes = {
  update: PropTypes.func.isRequired,
};

export default TakeNewNotesHeader;
