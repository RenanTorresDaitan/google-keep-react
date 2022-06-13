import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ColorBallContainer from './ColorBallContainer';
import MenuPanel from './MenuPanel';

export default function Notecard({ title, id, color, isArchived, isPinned }) {
  const [displayColorContainer, setDisplayColorContainer] = useState(false);
  const [displayMenuPanel, setDisplayMenuPanel] = useState(false);
  const [doneBtnVisible, setDoneBtnVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState(title);

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
    setNoteTitle(event.target.value);
    setDoneBtnVisible(true);
  }

  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${title}`}
      data-note-id={id}
      data-color={color}
    >
      {displayColorContainer && <ColorBallContainer id={1} />}
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
        <span>{noteTitle}</span>
        <textarea
          name="note-title"
          className="notecard__title-textarea"
          id="title-textarea"
          rows="1"
          maxLength="999"
          placeholder="Title"
          style={{ height: '1rem' }}
          value={noteTitle}
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
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  isPinned: PropTypes.bool.isRequired,
};
