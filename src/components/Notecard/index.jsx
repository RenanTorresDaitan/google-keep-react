import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ColorBallContainer from './ColorBallContainer';
import MenuPanel from './MenuPanel';
import NoteItemModel from '../../models/NoteItemModel';
import NoteItemController from '../../controllers/NoteItemController';
import IconButton from './IconButton';
import InputField from './InputField';

export default function Notecard({ noteItem }) {
  const {
    id,
    noteTitle,
    noteTime,
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
  const [dataColor, setDataColor] = useState(color);

  const [displayedTitle, setDisplayedTitle] = useState(noteTitle);
  const [displayedDescription, setDisplayedDescription] = useState(noteDescription);

  const handleColorChange = () => setDisplayColorContainer(true);
  const handleMenuPanel = () => setDisplayMenuPanel(true);
  const handlePinNote = () => new NoteItemController().pinNote(id);
  const handleBlur = () => {
    setDisplayColorContainer(false);
    setDisplayMenuPanel(false);
  };

  const handleTitleChange = (event) => {
    setDisplayedTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDisplayedDescription(event.target.value);
  };

  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${displayedTitle}`}
      data-note-id={id}
      data-color={dataColor}
    >
      {displayColorContainer && (
        <ColorBallContainer
          id={id}
          changeToColor={(c) => {
            setDataColor(c);
            handleBlur();
          }}
        />
      )}
      {displayMenuPanel && <MenuPanel id={id} isArchived={isArchived} />}
      <div className="notecard__buttons-container">
        <IconButton
          className="color-button"
          label="Change Note Color"
          handleClick={handleColorChange}
        />
        <IconButton
          className="menu-button"
          label="Menu"
          handleClick={handleMenuPanel}
        />
        <IconButton
          className={`pin-button ${isPinned ? 'note-pinned' : ''}`}
          label="Fix Note"
          handleClick={handlePinNote}
        />
      </div>
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
        text={displayedTitle}
        className="notecard__title"
        placeHolder="Title"
        handleChange={(e) => handleTitleChange(e)}
        handleShowDoneBtn={() => setDoneBtnVisible(true)}
      />
      {isToDoList ? (
        ''
      ) : (
        <InputField
          text={displayedDescription}
          className="notecard__desc"
          placeHolder="Take a note..."
          handleChange={(e) => handleDescriptionChange(e)}
          handleShowDoneBtn={() => setDoneBtnVisible(true)}
        />
      )}
      {doneBtnVisible && (
        <IconButton
          className="notecard__done-button"
          handleClick={() => {
            setDoneBtnVisible(false);
            handleBlur();
            new NoteItemController().updateNote(id, {
              noteTitle: displayedTitle,
              noteDescription: displayedDescription,
              isToDoList,
            });
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
