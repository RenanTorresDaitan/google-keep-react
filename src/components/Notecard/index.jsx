import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import NoteItemModel from '../../models/NoteItemModel';
import BasicNotecard from '../BasicNotecard';
import ToDoItemsContainer from '../ToDoItemsContainer';
import Button from '../Button';
import db from '../../models/DBManager';

export default function Notecard({ noteItem, update }) {
  const { id, color, noteTitle, noteDescription, isToDoList } = noteItem;
  const [doneBtnVisible, setDoneBtnVisible] = useState(false);
  const [noteData, setNoteData] = useState({
    noteTitle,
    noteDescription,
  });
  const handleUpdate = (data) => {
    setDoneBtnVisible(false);
    db.updateNote(id, data);
    update(true);
  };
  const toDoItemsContainer = (
    <ToDoItemsContainer
      toDoItems={noteItem.toDoItems}
      handleDataChange={(data) => handleUpdate({ toDoItems: data })}
    />
  );
  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${noteTitle}`}
      data-note-id={id}
      data-color={color}
    >
      <BasicNotecard
        noteItem={noteItem}
        handleDataChange={handleUpdate}
        sendNoteData={(data) => {
          setNoteData({ ...noteData, ...data });
          setDoneBtnVisible(true);
        }}
      />
      {isToDoList && toDoItemsContainer}
      {doneBtnVisible && (
        <Button
          className="notecard__done-button"
          handleClick={() => handleUpdate(noteData)}
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
