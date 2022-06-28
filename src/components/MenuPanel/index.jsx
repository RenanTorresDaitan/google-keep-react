import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function MenuPanel({ options, handleDataChange }) {
  const { isArchived, isTrashed } = options;
  return (
    <div className="notecard__menu-panel">
      <Button
        className="notecard__menu-panel-option"
        handleClick={() => handleDataChange({ isArchived: !isArchived })}
        label="Archive note"
        btnText={isArchived ? 'Unarchive' : 'Archive'}
      />
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
  options: PropTypes.shape({
    isArchived: PropTypes.bool.isRequired,
    isTrashed: PropTypes.bool.isRequired,
  }).isRequired,
  handleDataChange: PropTypes.func.isRequired,
};
