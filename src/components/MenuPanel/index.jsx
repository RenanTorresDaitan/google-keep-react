import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import NoteItemModel from '../../models/NoteItemModel';

export default function MenuPanel({ noteItem, handleDataChange }) {
  const { isArchived, isTrashed } = noteItem;
  return (
    <div className="notecard__menu-panel">
      {!isArchived && (
        <Button
          className="notecard__menu-panel-option"
          handleClick={() => handleDataChange({ isArchived: !isArchived })}
          label="Archive note"
          btnText={isArchived ? 'Unarchive' : 'Archive'}
        />
      )}
      {!isTrashed && (
        <Button
          className="notecard__menu-panel-option"
          handleClick={() => handleDataChange({ isTrashed: true })}
          label="Delete note"
          btnText="Delete"
        />
      )}
    </div>
  );
}

MenuPanel.propTypes = {
  noteItem: PropTypes.instanceOf(NoteItemModel).isRequired,
  handleDataChange: PropTypes.func.isRequired,
};
