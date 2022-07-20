import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ColorBallContainer from '../ColorBallContainer';
import MenuPanel from '../MenuPanel';
import db from '../../models/DBManager';
import ToDoItemsContainer from '../ToDoItemsContainer';
import { NotesContext } from '../contexts/NotesProvider';
import {
  Description,
  DoneButton,
  StyledNotecard,
  Title,
} from '../Notecard/styles';
import {
  BigPinButton,
  ColorDropButton,
  MenuButton,
  NotecardButtonsContainer,
  PinButton,
} from '../BasicNotecard/styles';

export default function NewNotecard({ typeOfNote, showHeader }) {
  const [newNoteData, setNewNoteData] = useState({
    noteTitle: '',
    color: 'default',
    isArchived: false,
    isPinned: false,
    isReminder: false,
    isToDoList: typeOfNote === 'list',
    isTrashed: false,
    noteDescription: '',
    toDoItems: [],
  });
  const [doneBtnVisible, setDoneBtnVisible] = useState(false);
  const [showModal, setShowModal] = useState({ menu: false, color: false });
  const { handleUpdate } = useContext(NotesContext);

  const handleDataChange = (data) => {
    setNewNoteData((prevNoteData) => ({
      ...prevNoteData,
      ...data,
    }));
    setShowModal({ menu: false, color: false });
  };

  const toDoItemsEl = (
    <ToDoItemsContainer
      toDoItems={newNoteData.toDoItems}
      handleDataChange={(data) => handleDataChange({ toDoItems: data })}
    />
  );
  const noteDescriptionEl = (
    <Description
      text={newNoteData.noteDescription}
      placeHolder="Take a note..."
      handleChange={(value) => handleDataChange({ noteDescription: value })}
      visible={false}
    />
  );
  const handleNewNote = () => {
    db.createNewNoteItem(newNoteData);
    handleUpdate();
    setDoneBtnVisible(false);
    showHeader();
  };
  useEffect(() => {
    setDoneBtnVisible(true);
  }, [newNoteData.noteDescription, newNoteData.noteTitle]);
  return (
    <StyledNotecard
      aria-label={`Keep's Note ${newNoteData.noteTitle}`}
      data-note-id={newNoteData.id}
      data-color={newNoteData.color}
    >
      {showModal.color && (
        <ColorBallContainer
          changeToColor={(c) => {
            handleDataChange({ color: c });
          }}
        />
      )}
      {showModal.menu && (
        <MenuPanel
          options={{
            isArchived: newNoteData.isArchived,
            isTrashed: true,
          }}
          handleDataChange={(options) => handleDataChange(options)}
        />
      )}
      {!newNoteData.isTrashed && (
        <NotecardButtonsContainer>
          <ColorDropButton
            label="Change Note Color"
            handleClick={() => setShowModal({ color: true })}
          />
          <MenuButton
            label="Menu"
            handleClick={() => setShowModal({ menu: true })}
          />
          <PinButton
            label="Fix Note"
            handleClick={() => {
              handleDataChange({ isPinned: !newNoteData.isPinned });
            }}
          />
        </NotecardButtonsContainer>
      )}
      <BigPinButton
        handleClick={() => {
          handleDataChange({ isPinned: !newNoteData.isPinned });
        }}
        label="Fix Note"
      />
      <Title
        text={newNoteData.noteTitle}
        placeHolder="Title"
        handleChange={(value) => handleDataChange({ noteTitle: value })}
        visible={false}
      />
      {newNoteData.isToDoList ? toDoItemsEl : noteDescriptionEl}
      {doneBtnVisible && (
        <DoneButton
          handleClick={() => handleNewNote()}
          label="Done"
          btnText="Done"
        />
      )}
    </StyledNotecard>
  );
}
NewNotecard.propTypes = {
  typeOfNote: PropTypes.string.isRequired,
  showHeader: PropTypes.func.isRequired,
};
