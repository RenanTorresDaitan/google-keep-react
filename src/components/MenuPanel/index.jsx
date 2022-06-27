import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function MenuPanel({ noteData, handleDataChange }) {
  return (
    <div className="notecard__menu-panel">
      {!noteData.isArchived && (
        <Button
          className="notecard__menu-panel-option"
          handleClick={() => handleDataChange({ name: 'isArchived', value: !noteData.isArchived })}
          label="Archive note"
          btnText="Archive"
        />
      )}
      {!noteData.isTrashed && (
        <Button
          className="notecard__menu-panel-option"
          handleClick={() => handleDataChange({ name: 'isTrashed', value: !noteData.isTrashed })}
          label="Delete note"
          btnText="Delete"
        />
      )}
    </div>
  );
}

MenuPanel.propTypes = {
  noteData: PropTypes.shape(
    PropTypes.bool.isRequired,
    PropTypes.bool.isRequired,
  ).isRequired,
  handleDataChange: PropTypes.func.isRequired,
};
