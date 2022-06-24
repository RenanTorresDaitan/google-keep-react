import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import NoteItemModel from '../../models/NoteItemModel';
import BasicNotecard from '../BasicNotecard';
import ToDoItemsContainer from '../ToDoItemsContainer';
import LowerToolbar from '../MenuPanel/LowerToolbar';
import NoteItemController from '../../controllers/NoteItemController';
import Button from '../Button';

export default function Notecard({ noteItem }) {
  const [noteData, setNoteData] = useState(noteItem);
  const [doneBtnVisible, setDoneBtnVisible] = useState(false);

  useEffect(() => {
    console.log(noteData);
    setDoneBtnVisible(true);
  }, [noteData.noteTitle, noteData.noteDescription, noteData.isArchived]);

  const handleDataChange = (data) => {
    const { name, value } = data;
    setNoteData((prevNoteData) => ({
      ...prevNoteData,
      [name]: value,
    }));
  };

  const toDoItemsContainer = (
    <ToDoItemsContainer toDoItems={noteData.toDoItems} />
  );

  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${noteData.noteTitle}`}
      data-note-id={noteData.id}
      data-color={noteData.color}
    >
      <BasicNotecard noteData={noteData} handleDataChange={handleDataChange} />
      {noteData.isToDoList && toDoItemsContainer}
      <LowerToolbar noteData={noteData} handleDataChange={handleDataChange} />
      {doneBtnVisible && (
        <Button
          className="notecard__done-button"
          handleClick={() => {
            setDoneBtnVisible(false);
            new NoteItemController().updateNote(noteData.id, noteData);
          }}
          label="Done"
          btnText="Done"
        />
      )}
    </div>
  );
}
Notecard.propTypes = {
  noteItem: PropTypes.instanceOf(NoteItemModel).isRequired,
};
