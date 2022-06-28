import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ColorBallContainer from '../ColorBallContainer';
import MenuPanel from '../MenuPanel';
import Button from '../Button';
import InputField from '../InputField';
import NoteItemModel from '../../models/NoteItemModel';
import LowerToolbar from '../MenuPanel/LowerToolbar';

export default function BasicNotecard({
  noteItem,
  handleDataChange,
  sendNoteData,
}) {
  const { noteTitle, isPinned, isTrashed, noteDescription } = noteItem;
  const [showModal, setShowModal] = useState({ menu: false, color: false });
  const [noteData, setNoteData] = useState({
    noteTitle,
    noteDescription,
  });
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
        <MenuPanel noteItem={noteItem} handleDataChange={handleDataChange} />
      )}
      {!isTrashed && (
        <div className="notecard__buttons-container">
          <Button
            className="notecard__button color-button"
            label="Change Note Color"
            handleClick={() => setShowModal({ color: true })}
          />
          <Button
            className="notecard__button menu-button"
            label="Menu"
            handleClick={() => setShowModal({ menu: true })}
          />
          <Button
            className={`notecard__button pin-button ${
              isPinned ? 'note-pinned' : ''
            }`}
            label="Fix Note"
            handleClick={() => {
              handleDataChange({ isPinned: !isPinned });
            }}
          />
        </div>
      )}
      <Button
        className={`notecard__pin-button--big ${isPinned ? 'note-pinned' : ''}`}
        handleClick={() => handleDataChange({ isPinned: !isPinned })}
        label="Fix Note"
      />
      <InputField
        text={noteTitle}
        className="notecard__title"
        placeHolder="Title"
        handleChange={(value) => {
          setNoteData({ ...noteData, noteTitle: value });
          sendNoteData(noteData);
        }}
      />
      <InputField
        text={noteDescription}
        className="notecard__desc"
        placeHolder="Take a note..."
        handleChange={(value) => {
          setNoteData({ ...noteData, noteDescription: value });
          sendNoteData(noteData);
        }}
      />
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
};
