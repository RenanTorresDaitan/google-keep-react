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
import DBManager from '../../models/DBManager';

export default function Notecard({ noteItem, isCreating }) {
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
    noteDescription,
    color,
    isArchived,
    isTrashed,
  });

  const handleColorChange = () => setDisplayColorContainer(true);
  const handleMenuPanel = () => setDisplayMenuPanel(true);
  const handlePinNote = () => new NoteItemController().pinNote(id);
  const handleBlur = () => {
    setDisplayColorContainer(false);
    setDisplayMenuPanel(false);
  };

  const handleTitleChange = (event) => {
    setNoteData({ ...noteData, noteTitle: event.target.value });
  };
  const handleDescriptionChange = (event) => {
    setNoteData({ ...noteData, noteDescription: event.target.value });
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
            setNoteData({ ...noteData, color: c });
            handleBlur();
          }}
        />
      )}
      {displayMenuPanel && (
        <MenuPanel id={id} isArchived={noteData.isArchived} />
      )}
      {!noteData.isTrashed && (
        <div className="notecard__buttons-container">
          <IconButton
            className="notecard__button color-button"
            label="Change Note Color"
            handleClick={handleColorChange}
          />
          <IconButton
            className="notecard__button menu-button"
            label="Menu"
            handleClick={handleMenuPanel}
          />
          <IconButton
            className={`notecard__button pin-button ${
              isPinned ? 'note-pinned' : ''
            }`}
            label="Fix Note"
            handleClick={handlePinNote}
          />
        </div>
      )}
      <div
        role="button"
        className={`notecard-pin-button ${isPinned ? 'note-pinned' : ''}`}
        aria-label="Fix note"
        data-tooltip-text="Fix note"
        tabIndex="0"
      >
        <img className="svg-icon-large" alt="" />
      </div>
      <InputField
        text={noteData.noteTitle}
        className="notecard__title"
        placeHolder="Title"
        handleChange={(e) => handleTitleChange(e)}
        handleShowDoneBtn={() => setDoneBtnVisible(true)}
      />
      {isToDoList ? (
        <ToDoItemsContainer toDoitems={noteData.toDoItems} />
      ) : (
        <InputField
          text={noteData.noteDescription}
          className="notecard__desc"
          placeHolder="Take a note..."
          handleChange={(e) => handleDescriptionChange(e)}
          handleShowDoneBtn={() => setDoneBtnVisible(true)}
        />
      )}
      {!isCreating && (
        <LowerToolbar
          id={id}
          isArchived={noteData.isArchived}
          isTrashed={noteData.isTrashed}
          handleChangeColor={handleColorChange}
          handleOpenMenu={handleMenuPanel}
        />
      )}
      {doneBtnVisible && (
        <IconButton
          className="notecard__done-button"
          handleClick={() => {
            setDoneBtnVisible(false);
            handleBlur();
            if (isCreating) {
              DBManager.createNewNoteItem(noteData);
              return;
            }
            new NoteItemController().updateNote(id, noteData);
            DBManager.updateNotesOnLocalStorage();
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
};
