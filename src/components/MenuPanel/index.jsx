import React from 'react';
import PropTypes from 'prop-types';
import { NoteCardMenuPanel, MenuPanelOption } from './styles';

const MenuPanel = ({ options, handleDataChange }) => {
  const { isArchived, isTrashed } = options;
  return (
    <NoteCardMenuPanel>
      <MenuPanelOption
        aria-label={isArchived ? 'Unarchive note' : 'Archive note'}
        data-tooltip-text={isArchived ? 'Unarchive note' : 'Archive note'}
        tabIndex={0}
        onClick={() => handleDataChange({ isArchived: !isArchived })}
      >
        {isArchived ? 'Unarchive' : 'Archive'}
      </MenuPanelOption>
      {!isTrashed && (
        <MenuPanelOption
          aria-label="Delete note"
          data-tooltip-text="Delete note"
          tabIndex={0}
          onClick={() => handleDataChange({ isTrashed: true })}
        >
          Delete
        </MenuPanelOption>
      )}
    </NoteCardMenuPanel>
  );
};

MenuPanel.propTypes = {
  options: PropTypes.shape({
    isArchived: PropTypes.bool.isRequired,
    isTrashed: PropTypes.bool.isRequired,
  }).isRequired,
  handleDataChange: PropTypes.func.isRequired,
};

export default MenuPanel;
