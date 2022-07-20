import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import db from '../../models/DBManager';
import { NotesContext } from '../contexts/NotesProvider';
import NoteItemModel from '../../models/NoteItemModel';
import BasicNotecard from '../BasicNotecard';
import ToDoItemsContainer from '../ToDoItemsContainer';
import { Description, DoneButton, StyledNotecard, Title } from './styles';

export default function Notecard({ noteItem }) {
  const { id, color, noteTitle, noteDescription, isToDoList } = noteItem;
  const [doneBtnVisible, setDoneBtnVisible] = useState(false);
  const [noteData, setNoteData] = useState({
    noteTitle,
    noteDescription,
  });
  const { handleUpdate } = useContext(NotesContext);
  const handleDataChange = (data) => {
    setDoneBtnVisible(false);
    db.updateNote(id, data);
    handleUpdate();
  };

  const noteTitleEl = (
    <Title
      text={noteData.noteTitle}
      placeHolder="Title"
      handleChange={(value) => {
        setNoteData({ ...noteData, noteTitle: value });
        setDoneBtnVisible(true);
      }}
    />
  );

  const toDoItemsEl = (
    <ToDoItemsContainer
      toDoItems={noteItem.toDoItems}
      handleDataChange={(data) => handleDataChange({ toDoItems: data })}
    />
  );

  const noteDescriptionEl = (
    <Description
      text={noteData.noteDescription}
      placeHolder="Take a note..."
      handleChange={(value) => {
        setNoteData({ ...noteData, noteDescription: value });
        setDoneBtnVisible(true);
      }}
    />
  );

  return (
    <StyledNotecard
      aria-label={`Keep's Note ${noteTitle}`}
      data-note-id={id}
      data-color={color}
    >
      <BasicNotecard noteItem={noteItem} handleDataChange={handleDataChange}>
        <>
          {noteTitleEl}
          {isToDoList ? toDoItemsEl : noteDescriptionEl}
        </>
      </BasicNotecard>
      {doneBtnVisible && (
        <DoneButton
          handleClick={() => handleDataChange(noteData)}
          label="Done"
          btnText="Done"
        />
      )}
    </StyledNotecard>
  );
}
Notecard.propTypes = {
  noteItem: PropTypes.instanceOf(NoteItemModel).isRequired,
};
