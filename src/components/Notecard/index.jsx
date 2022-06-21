import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ColorBallContainer from './ColorBallContainer';
import MenuPanel from './MenuPanel';
import NoteItemModel from '../../models/NoteItemModel';
import NoteItemController from '../../controllers/NoteItemController';
import IconButton from '../IconButton';
import InputField from './InputField';
import LowerToolbar from './LowerToolbar';
import ToDoItemsContainer from './ToDoItemsContainer';
import db from '../../models/DBManager';

export default function Notecard({ noteItem, isCreating, update }) {
  const {
    id,
    noteTitle,
    color,
    isArchived,
    isPinned,
    isReminder,
    isToDoList,
    isTrashed,
    noteDescription,
    toDoItems,
  } = noteItem;

  const [displayColorContainer, setDisplayColorContainer] = useState(false);
  const [displayMenuPanel, setDisplayMenuPanel] = useState(false);
  const [doneBtnVisible, setDoneBtnVisible] = useState(false);

  const [noteData, setNoteData] = useState({
    noteTitle,
    color,
    isArchived,
    isPinned,
    isReminder,
    isToDoList,
    isTrashed,
    noteDescription,
    toDoItems,
  });

  const showColorPanel = () => setDisplayColorContainer(true);
  const showMenuPanel = () => setDisplayMenuPanel(true);
  const handleBlur = () => {
    setDisplayColorContainer(false);
    setDisplayMenuPanel(false);
  };

  const handleDataChange = (data) => {
    const { name, value, type, checked } = data;
    setNoteData((prevNoteData) => ({
      ...prevNoteData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    handleBlur();
    setDoneBtnVisible(true);
  };
  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${noteData.noteTitle}`}
      data-note-id={id}
      data-color={noteData.color}
    >
      {displayColorContainer && (
        <ColorBallContainer
          id={id}
          changeToColor={(c) => {
            handleDataChange({ name: 'color', value: c });
            setDoneBtnVisible(false);
          }}
        />
      )}
      {displayMenuPanel && (
        <MenuPanel
          id={id}
          isArchived={noteData.isArchived}
          updateNotes={update}
        />
      )}
      {!noteData.isTrashed && (
        <div className="notecard__buttons-container">
          <IconButton
            className="notecard__button color-button"
            label="Change Note Color"
            handleClick={showColorPanel}
          />
          <IconButton
            className="notecard__button menu-button"
            label="Menu"
            handleClick={showMenuPanel}
          />
          <IconButton
            className={`notecard__button pin-button ${
              noteData.isPinned ? 'note-pinned' : ''
            }`}
            label="Fix Note"
            handleClick={() => {
              handleDataChange({ name: 'isPinned', value: !noteData.isPinned });
              new NoteItemController().updateNote(id, noteData);
              update(true);
              setDoneBtnVisible(false);
            }}
          />
        </div>
      )}
      <IconButton
        className={`notecard__pin-button--big ${
          noteData.isPinned ? 'note-pinned' : ''
        }`}
        handleClick={() => {
          handleDataChange({ name: 'isPinned', value: !noteData.isPinned });
          new NoteItemController().updateNote(id, noteData);
          update(true);
          setDoneBtnVisible(false);
        }}
        label="Fix Note"
      />
      <InputField
        text={noteData.noteTitle}
        className="notecard__title"
        placeHolder="Title"
        handleChange={(e) => handleDataChange({ name: 'noteTitle', value: e.target.value })}
        handleShowDoneBtn={() => setDoneBtnVisible(true)}
      />
      {isToDoList ? (
        <ToDoItemsContainer toDoitems={noteData.toDoItems} />
      ) : (
        <InputField
          text={noteData.noteDescription}
          className="notecard__desc"
          placeHolder="Take a note..."
          handleChange={(e) => handleDataChange({ name: 'noteDescription', value: e.target.value })}
          handleShowDoneBtn={() => setDoneBtnVisible(true)}
        />
      )}
      {!isCreating && (
        <LowerToolbar
          id={id}
          isArchived={noteData.isArchived}
          isTrashed={noteData.isTrashed}
          handleChangeColor={showColorPanel}
          handleOpenMenu={showMenuPanel}
          updateNotes={update}
        />
      )}
      {doneBtnVisible && (
        <IconButton
          className="notecard__done-button"
          handleClick={() => {
            setDoneBtnVisible(false);
            handleBlur();
            if (isCreating) {
              db.createNewNoteItem(noteData);
              update(true);
              return;
            }
            new NoteItemController().updateNote(id, noteData);
            update(true);
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
  isCreating: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
};
