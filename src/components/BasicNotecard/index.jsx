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

export default function BasicNotecard({
  noteItem,
  handleDataChange,
  children,
}) {
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
            label="Change Note Color"
            handleClick={() => setShowModal({ color: true })}
          />
          <MenuButton
            label="Menu"
            handleClick={() => setShowModal({ menu: true })}
          />
          <PinButton
            label="Fix Note"
            handleClick={() => {
              handleDataChange({ isPinned: !isPinned });
            }}
          />
        </NotecardButtonsContainer>
      )}
      <BigPinButton
        isPinned={isPinned}
        handleClick={() => handleDataChange({ isPinned: !isPinned })}
        label="Fix Note"
      />
      {children}
      <LowerToolbar
        noteData={noteItem}
        handleDataChange={handleDataChange}
        showModal={(m) => setShowModal(m)}
      />
    </>
  );
}
BasicNotecard.propTypes = {
  noteItem: PropTypes.instanceOf(NoteItemModel).isRequired,
  handleDataChange: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
