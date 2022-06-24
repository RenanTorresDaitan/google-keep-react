import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Button from '../../Button/index';

function LowerToolbar({ noteData, handleDataChange }) {
  return (
    <div className="note-lower-toolbar">
      {noteData.isTrashed ? (
        <>
          <Button
            className="lower-toolbar-button restore-icon"
            label="Restore Note"
            handleClick={() => {}}
          />
          <Button
            className="lower-toolbar-button delete-icon"
            label="Delete Note"
            handleClick={() => {}}
          />
        </>
      ) : (
        <>
          <Button
            className="lower-toolbar-button add-reminder-icon"
            label="Add Reminder"
            handleClick={() => handleDataChange({
              name: 'isReminder',
              value: !noteData.isReminder,
            })}
          />
          <Button
            className="lower-toolbar-button color-palette-icon"
            label="Change Note Color"
            handleClick={() => {}}
          />
          <Button
            className={`lower-toolbar-button ${
              noteData.isArchived ? 'unarchive-icon' : 'archive-icon'
            }`}
            label={`${noteData.isArchived ? 'Unarchive note' : 'Archive note'}`}
            handleClick={() => handleDataChange({
              name: 'isArchived',
              value: !noteData.isArchived,
            })}
          />
          <Button
            className="lower-toolbar-button menu-icon"
            label="Open Menu"
            handleClick={() => {}}
          />
        </>
      )}
    </div>
  );
}

export default LowerToolbar;

LowerToolbar.propTypes = {
  noteData: PropTypes.shape({
    id: PropTypes.number,
    noteTitle: PropTypes.string,
    isArchived: PropTypes.bool,
    isPinned: PropTypes.bool,
    isReminder: PropTypes.bool,
    isToDoList: PropTypes.bool,
    isTrashed: PropTypes.bool,
    noteDescription: PropTypes.string,
    toDoItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        checked: PropTypes.string,
      }),
    ),
  }).isRequired,
  handleDataChange: PropTypes.func.isRequired,
};
