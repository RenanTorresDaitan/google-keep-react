import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ColorBallContainer from '../ColorBallContainer';
import MenuPanel from '../MenuPanel';
import NoteItemModel from '../../models/NoteItemModel';
import LowerToolbar from '../MenuPanel/LowerToolbar';
import {
  BigPinButton,
  PinButton,
  NotecardButtonsContainer,
  MenuButton,
  ColorDropButton,
} from './styles';

const BasicNotecard = ({ noteItem, handleDataChange, children }) => {
  const { isArchived, isPinned, isTrashed } = noteItem;
  const [showModal, setShowModal] = useState({ menu: false, color: false });

  return (
    <>
      {showModal.color && (
        <ColorBallContainer
          changeToColor={(c) => {
            handleDataChange({ color: c });
            setShowModal({ color: false });
          }}
        />
      )}
      {showModal.menu && (
        <MenuPanel
          options={{ isArchived, isTrashed }}
          handleDataChange={handleDataChange}
        />
      )}
      {!isTrashed && (
        <NotecardButtonsContainer>
          <ColorDropButton
            aria-label="Change Note Color"
            data-tooltip-text="Change Note Color"
            tabIndex={0}
            onClick={() => setShowModal({ color: true })}
          />
          <MenuButton
            aria-label="Menu"
            data-tooltip-text="Menu"
            tabIndex={0}
            onClick={() => setShowModal({ menu: true })}
          />
          <PinButton
            aria-label="Fix Note"
            data-tooltip-text="Fix Note"
            tabIndex={0}
            onClick={() => {
              handleDataChange({ isPinned: !isPinned });
            }}
          />
        </NotecardButtonsContainer>
      )}
      <BigPinButton
        aria-label="Fix Note"
        data-tooltip-text="Fix Note"
        tabIndex={0}
        onClick={() => handleDataChange({ isPinned: !isPinned })}
        isPinned={isPinned}
      />
      {children}
      <LowerToolbar
        noteData={noteItem}
        handleDataChange={handleDataChange}
        showModal={(m) => setShowModal(m)}
      />
    </>
  );
};

BasicNotecard.propTypes = {
  noteItem: PropTypes.instanceOf(NoteItemModel).isRequired,
  handleDataChange: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
export default BasicNotecard;
