import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Button from '../../Button/index';
import NoteItemModel from '../../../models/NoteItemModel';

function LowerToolbar({ noteData, handleDataChange, showModal }) {
  return (
    <div className="note-lower-toolbar">
      {noteData.isTrashed ? (
        <>
          <Button
            className="lower-toolbar-button restore-icon"
            label="Restore Note"
            handleClick={() => handleDataChange({ isTrashed: false })}
          />
          <Button
            className="lower-toolbar-button delete-icon"
            label="Delete Note"
            handleClick={() => handleDataChange({
              noteTime: { ...noteData.noteTime, deletionDate: 0 },
            })}
          />
        </>
      ) : (
        <>
          <Button
            className="lower-toolbar-button add-reminder-icon"
            label="Add Reminder"
            handleClick={() => handleDataChange({ isReminder: !noteData.isReminder })}
          />
          <Button
            className="lower-toolbar-button color-palette-icon"
            label="Change Note Color"
            handleClick={() => showModal({ color: true })}
          />
          <Button
            className={`lower-toolbar-button ${
              noteData.isArchived ? 'unarchive-icon' : 'archive-icon'
            }`}
            label={`${noteData.isArchived ? 'Unarchive note' : 'Archive note'}`}
            handleClick={() => handleDataChange({ isArchived: !noteData.isArchived })}
          />
          <Button
            className="lower-toolbar-button menu-icon"
            label="Open Menu"
            handleClick={() => showModal({ menu: true })}
          />
        </>
      )}
    </div>
  );
}

export default LowerToolbar;

LowerToolbar.propTypes = {
  noteData: PropTypes.instanceOf(NoteItemModel).isRequired,
  handleDataChange: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};
