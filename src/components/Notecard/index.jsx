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
  const handleColorChange = () => setDisplayColorContainer(true);

  const [displayMenuPanel, setDisplayMenuPanel] = useState(false);
  const handleMenuPanel = () => setDisplayMenuPanel(true);

  const handleBlur = () => {
    setDisplayColorContainer(false);
    setDisplayMenuPanel(false);
  };

  const [doneBtnVisible, setDoneBtnVisible] = useState(false);

  const [dataColor, setDataColor] = useState(color);

  const handlePinNote = () => new NoteItemController().pinNote(id);

  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${noteTitle}`}
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
      {displayMenuPanel && <MenuPanel isArchived={isArchived} />}
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
        text={noteTitle}
        className="notecard__title"
        handleShowDoneBtn={() => setDoneBtnVisible(true)}
      />
      <InputField
        text={noteDescription}
        className="notecard__desc"
        handleShowDoneBtn={() => setDoneBtnVisible(true)}
      />
      {doneBtnVisible && (
        <IconButton
          className="notecard__done-button"
          handleClick={() => {
            setDoneBtnVisible(false);
            new NoteItemController().updateNote(id);
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
