import React from 'react';
import PropTypes from 'prop-types';
import { NoteCardMenuPanel, MenuPanelOption } from './styles';

export default function MenuPanel({ options, handleDataChange }) {
  const { isArchived, isTrashed } = options;
  return (
    <NoteCardMenuPanel>
      <MenuPanelOption
        handleClick={() => handleDataChange({ isArchived: !isArchived })}
        label="Archive note"
        btnText={isArchived ? 'Unarchive' : 'Archive'}
      />
      {!isTrashed && (
        <MenuPanelOption
          handleClick={() => handleDataChange({ isTrashed: true })}
          label="Delete note"
          btnText="Delete"
        />
      )}
    </NoteCardMenuPanel>
  );
}

MenuPanel.propTypes = {
  options: PropTypes.shape({
    isArchived: PropTypes.bool.isRequired,
    isTrashed: PropTypes.bool.isRequired,
  }).isRequired,
  handleDataChange: PropTypes.func.isRequired,
};
