import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ColorBallContainer from '../ColorBallContainer';
import MenuPanel from '../MenuPanel';
import InputField from '../InputField';
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
  sendNoteData,
  typeOfNoteEl,
}) {
  const { noteTitle, isArchived, isPinned, isTrashed } = noteItem;
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
      <InputField
        text={noteTitle}
        className="notecard__title"
        placeHolder="Title"
        handleChange={(value) => {
          sendNoteData({ noteTitle: value });
        }}
      />
      {typeOfNoteEl}
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
  sendNoteData: PropTypes.func.isRequired,
  typeOfNoteEl: PropTypes.node.isRequired,
};
