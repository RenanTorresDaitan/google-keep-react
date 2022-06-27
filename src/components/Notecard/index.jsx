import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import NoteItemModel from '../../models/NoteItemModel';
import BasicNotecard from '../BasicNotecard';
import ToDoItemsContainer from '../ToDoItemsContainer';
import LowerToolbar from '../MenuPanel/LowerToolbar';
import Button from '../Button';
import db from '../../models/DBManager';

export default function Notecard({ noteItem, update }) {
  const [noteData, setNoteData] = useState(noteItem);
  const [doneBtnVisible, setDoneBtnVisible] = useState(false);
  const handleDataChange = (data) => {
    const { name, value } = data;
    setNoteData((prevNoteData) => ({
      ...prevNoteData,
      [name]: value,
    }));
    console.log(name, value);
    setDoneBtnVisible(true);
  };

  useEffect(() => {
    db.updateNote(noteData.id, noteData);
  }, []);

  const toDoItemsContainer = (
    <ToDoItemsContainer toDoItems={noteData.toDoItems} />
  );
  const handleUpdate = () => {
    setDoneBtnVisible(false);
    db.updateNote(noteItem.id, noteData);
    update(true);
  };
  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${noteData.noteTitle}`}
      data-note-id={noteData.id}
      data-color={noteData.color}
    >
      <BasicNotecard
        noteData={noteData}
        handleDataChange={(a) => handleDataChange(a)}
      />
      {noteData.isToDoList && toDoItemsContainer}
      <LowerToolbar
        noteData={noteData}
        handleDataChange={handleDataChange}
        update={update}
      />
      {doneBtnVisible && (
        <Button
          className="notecard__done-button"
          handleClick={() => handleUpdate()}
          label="Done"
          btnText="Done"
        />
      )}
    </div>
  );
}
Notecard.propTypes = {
  noteItem: PropTypes.instanceOf(NoteItemModel).isRequired,
  update: PropTypes.func.isRequired,
};
