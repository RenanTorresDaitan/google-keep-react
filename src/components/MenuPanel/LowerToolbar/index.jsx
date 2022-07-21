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

const LowerToolbar = ({ noteData, handleDataChange, showModal }) => (
  <NoteLowerToolbar>
    {noteData.isTrashed ? (
      <>
        <RestoreButton
          aria-label="Restore Note"
          data-tooltip-text="Restore Note"
          tabIndex={0}
          onClick={() => handleDataChange({ isTrashed: false })}
        />
        <DeleteButton
          aria-label="Delete Note"
          data-tooltip-text="Delete Note"
          tabIndex={0}
          onClick={() => handleDataChange({
            noteTime: { ...noteData.noteTime, deletionDate: 0 },
          })}
        />
      </>
    ) : (
      <>
        <ColorPaletteButton
          aria-label="Change Note Color"
          data-tooltip-text="Change Note Color"
          tabIndex={0}
          onClick={() => showModal({ color: true })}
        />
        <ArchiveButton
          isArchived={noteData.isArchived}
          aria-label={`${noteData.isArchived ? 'Unarchive note' : 'Archive note'}`}
          data-tooltip-text={`${noteData.isArchived ? 'Unarchive note' : 'Archive note'}`}
          tabIndex={0}
          onClick={() => handleDataChange({ isArchived: !noteData.isArchived })}
        />
        <MenuButton
          aria-label="Open Menu"
          data-tooltip-text="Open Menu"
          tabIndex={0}
          onClick={() => showModal({ menu: true })}
        />
      </>
    )}
  </NoteLowerToolbar>
);

LowerToolbar.propTypes = {
  noteData: PropTypes.instanceOf(NoteItemModel).isRequired,
  handleDataChange: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default LowerToolbar;
