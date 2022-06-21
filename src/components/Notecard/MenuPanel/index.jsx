import React from 'react';
import PropTypes from 'prop-types';
import NoteItemController from '../../../controllers/NoteItemController';

export default function MenuPanel({ id, isArchived, updateNotes }) {
  return (
    <div className="notecard__menu-panel">
      <div
        role="button"
        className={`notecard__menu-panel-option ${isArchived ? 'hide' : ''}`}
        data-button="archive-button"
        tabIndex={0}
        onClick={() => {
          new NoteItemController().archiveNote(id);
          updateNotes(true);
        }}
        onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Space'
          ? new NoteItemController().archiveNote(id)
          : null)}
      >
        Archive
      </div>
      <div
        role="button"
        className="notecard__menu-panel-option"
        data-button="delete-button"
        tabIndex={0}
        onClick={() => {
          new NoteItemController().trashNote(id);
          updateNotes(true);
        }}
        onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Space'
          ? new NoteItemController().trashNote(id)
          : null)}
      >
        Delete
      </div>
    </div>
  );
}

MenuPanel.propTypes = {
  id: PropTypes.number.isRequired,
  isArchived: PropTypes.bool.isRequired,
  updateNotes: PropTypes.func.isRequired,
};
