import React from 'react';
import PropTypes from 'prop-types';

export default function MenuPanel({ isArchived }) {
  return (
    <div className="notecard__menu-panel">
      <div
        role="button"
        className={`notecard__menu-panel-option ${isArchived ? 'hide' : ''}`}
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
  );
}

MenuPanel.propTypes = {
  isArchived: PropTypes.bool.isRequired,
};
