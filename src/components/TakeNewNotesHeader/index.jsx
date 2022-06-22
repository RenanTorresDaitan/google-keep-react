import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import NoteItemModel from '../../models/NoteItemModel';
import './styles.css';
import Notecard from '../Notecard';

function TakeNewNotesHeader({ updateNotes }) {
  const [displayHeader, setDisplayHeader] = useState(true);
  const [typeOfNote, setTypeOfNote] = useState('note');
  const handleDisplayHeader = () => {
    setDisplayHeader((prevState) => !prevState);
  };
  const handleNewNote = (type) => {
    setTypeOfNote(type);
    handleDisplayHeader();
  };

  const newNote = new NoteItemModel();
  typeOfNote === 'list'
    ? (newNote.isToDoList = true)
    : (newNote.isToDoList = false);
  newNote.toDoItems = [{ id: 10, title: 'teste', checked: false }];

  return (
    <div style={{ display: 'block', margin: 'auto' }}>
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
        <Notecard
          isCreating
          noteItem={newNote}
          update={() => {
            updateNotes();
            handleDisplayHeader();
          }}
        />
      )}
    </div>
  );
}

export default TakeNewNotesHeader;

TakeNewNotesHeader.propTypes = {
  updateNotes: PropTypes.func.isRequired,
};
