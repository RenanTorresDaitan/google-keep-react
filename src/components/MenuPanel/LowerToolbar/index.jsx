import React from 'react';
import PropTypes from 'prop-types';
import {
  NoteLowerToolbar,
  RestoreButton,
  DeleteButton,
  AddReminderButton,
  ColorPaletteButton,
  ArchiveButton,
  MenuButton,
} from './styles';

import NoteItemModel from '../../../models/NoteItemModel';

function LowerToolbar({ noteData, handleDataChange, showModal }) {
  return (
    <NoteLowerToolbar>
      {noteData.isTrashed ? (
        <>
          <RestoreButton
            label="Restore Note"
            handleClick={() => handleDataChange({ isTrashed: false })}
          />
          <DeleteButton
            label="Delete Note"
            handleClick={() => handleDataChange({
              noteTime: { ...noteData.noteTime, deletionDate: 0 },
            })}
          />
        </>
      ) : (
        <>
          <AddReminderButton
            label="Add Reminder"
            handleClick={() => handleDataChange({ isReminder: !noteData.isReminder })}
          />
          <ColorPaletteButton
            label="Change Note Color"
            handleClick={() => showModal({ color: true })}
          />
          <ArchiveButton
            isArchived={noteData.isArchived}
            label={`${noteData.isArchived ? 'Unarchive note' : 'Archive note'}`}
            handleClick={() => handleDataChange({ isArchived: !noteData.isArchived })}
          />
          <MenuButton
            label="Open Menu"
            handleClick={() => showModal({ menu: true })}
          />
        </>
      )}
    </NoteLowerToolbar>
  );
}

export default LowerToolbar;

LowerToolbar.propTypes = {
  noteData: PropTypes.instanceOf(NoteItemModel).isRequired,
  handleDataChange: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};
