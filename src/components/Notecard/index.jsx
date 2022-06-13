import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ColorBallContainer from '../ColorBallContainer';

export default function Notecard({
  title, id, color, isArchived, isPinned,
}) {
  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${title}`}
      data-note-id={id}
      data-color={color}
    >
      <ColorBallContainer id={1} />
      <div className="notecard__menu-panel hide">
        <div
          role="button"
          className={`notecard__menu-panel-option ${
            isArchived ? 'hide' : ''
          }`}
          data-button="archive-button"
        >
          Archive
        </div>
        <div
          role="button"
          className="notecard__menu-panel-option"
          data-button="delete-button"
        >
          Delete
        </div>
      </div>
      <div className="notecard__buttons-container">
        <div
          role="button"
          className="notecard__button color-button"
          aria-label="Change Note Color"
          data-tooltip-text="Change Note Color"
          tabIndex="0"
        />
        <div
          role="button"
          className="notecard__button menu-button"
          aria-label="Menu"
          data-tooltip-text="Menu"
          tabIndex="0"
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
        <span>{title}</span>
        <textarea
          name="note-title"
          className="notecard__title-textarea hide"
          id="title-textarea"
          rows="1"
          maxLength="999"
          placeholder="Title"
          style={{ height: '1rem' }}
          value={title}
        />
      </div>
      <button
        type="button"
        className="notecard__done-button hide"
        style={{ userSelect: 'none' }}
      >
        Done
      </button>
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
