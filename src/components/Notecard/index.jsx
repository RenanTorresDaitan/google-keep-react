import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ColorBallContainer from './ColorBallContainer';
import MenuPanel from './MenuPanel';
import NoteItemModel from '../../models/NoteItemModel';

export default function Notecard({ noteItem }) {
  const {
    _id,
    noteTime,
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
  const [displayedTitle, setDisplayedTitle] = useState(noteTitle);

  function handleColorChange() {
    setDisplayColorContainer(true);
  }
  function handleMenuPanel() {
    setDisplayMenuPanel(true);
  }
  function handleBlur() {
    setDisplayColorContainer(false);
    setDisplayMenuPanel(false);
  }
  function handleTitleChange(event) {
    setDisplayedTitle(event.target.value);
    setDoneBtnVisible(true);
  }

  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${displayedTitle}`}
      data-note-id={_id}
      data-color={color}
    >
      {displayColorContainer && <ColorBallContainer id={_id} />}
      {displayMenuPanel && <MenuPanel isArchived={isArchived} />}
      <div className="notecard__buttons-container">
        <div
          role="button"
          className="notecard__button color-button"
          aria-label="Change Note Color"
          data-tooltip-text="Change Note Color"
          tabIndex="0"
          onClick={handleColorChange}
          onKeyDown={handleColorChange}
          onBlur={handleBlur}
        />
        <div
          role="button"
          className="notecard__button menu-button"
          aria-label="Menu"
          data-tooltip-text="Menu"
          tabIndex="0"
          onClick={handleMenuPanel}
          onKeyDown={handleMenuPanel}
          onBlur={handleBlur}
        />
        <div
          role="button"
          className={`notecard__button pin-button ${
            isPinned ? 'note-pinned' : ''
          }`}
          aria-label="Fix note"
          data-tooltip-text="Fix note"
          tabIndex="0"
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
      <div className="notecard__title">
        <span>{displayedTitle}</span>
        <textarea
          name="note-title"
          className="notecard__title-textarea"
          id="title-textarea"
          rows="1"
          maxLength="999"
          placeholder="Title"
          style={{ height: '1rem' }}
          value={displayedTitle}
          onChange={handleTitleChange}
        />
      </div>
      {doneBtnVisible && (
        <button
          type="button"
          className="notecard__done-button"
          style={{ userSelect: 'none' }}
        >
          Done
        </button>
      )}
    </div>
  );
}
Notecard.propTypes = {
  noteItem: PropTypes.instanceOf(NoteItemModel).isRequired,
};
