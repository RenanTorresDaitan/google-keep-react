import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import IconButton from '../../IconButton';
import NoteItemController from '../../../controllers/NoteItemController';

function LowerToolbar({
  id,
  isArchived,
  isTrashed,
  handleChangeColor,
  handleOpenMenu,
  updateNotes,
}) {
  return (
    <div className="note-lower-toolbar">
      {!isTrashed && (
        <IconButton
          className="lower-toolbar-button add-reminder-icon"
          label="Add Reminder"
          handleClick={() => {
            new NoteItemController().addReminder(id);
            updateNotes(true);
          }}
        />
      )}
      {!isTrashed && (
        <IconButton
          className="lower-toolbar-button color-palette-icon"
          label="Change Note Color"
          handleClick={handleChangeColor}
        />
      )}
      {!isTrashed && (
        <IconButton
          className={`lower-toolbar-button ${
            isArchived ? 'unarchive-icon' : 'archive-icon'
          }`}
          label={`${isArchived ? 'Unarchive note' : 'Archive note'}`}
          handleClick={() => {
            new NoteItemController().archiveNote(id);
            updateNotes(true);
          }}
        />
      )}
      {!isTrashed && (
        <IconButton
          className="lower-toolbar-button menu-icon"
          label="Open Menu"
          handleClick={handleOpenMenu}
        />
      )}
      {isTrashed && (
        <IconButton
          className="lower-toolbar-button restore-icon"
          label="Restore Note"
          handleClick={() => {
            new NoteItemController().restoreNote(id);
            updateNotes(true);
          }}
        />
      )}
      {isTrashed && (
        <IconButton
          className="lower-toolbar-button delete-icon"
          label="Delete Note"
          handleClick={() => {
            new NoteItemController().deleteNote(id);
            updateNotes(true);
          }}
        />
      )}
    </div>
  );
}

export default LowerToolbar;

LowerToolbar.propTypes = {
  id: PropTypes.number.isRequired,
  isArchived: PropTypes.bool.isRequired,
  isTrashed: PropTypes.bool.isRequired,
  handleChangeColor: PropTypes.func.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  updateNotes: PropTypes.func.isRequired,
};
