import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ColorBallContainer from '../ColorBallContainer';
import MenuPanel from '../MenuPanel';
import Button from '../Button';
import InputField from '../InputField';
import db from '../../models/DBManager';

export default function BasicNotecard({ noteData, handleDataChange }) {
  const {
    id,
    noteTitle,
    isArchived,
    isPinned,
    isTrashed,
    noteDescription,
  } = noteData;
  const [displayColorContainer, setDisplayColorContainer] = useState(false);
  const [displayMenuPanel, setDisplayMenuPanel] = useState(false);
  const showColorPanel = () => setDisplayColorContainer(true);
  const showMenuPanel = () => setDisplayMenuPanel(true);
  const handleBlur = () => {
    setDisplayColorContainer(false);
    setDisplayMenuPanel(false);
  };

  return (
    <>
      {displayColorContainer && (
        <ColorBallContainer
          changeToColor={(c) => {
            handleDataChange({ name: 'color', value: c });
            handleBlur();
          }}
        />
      )}
      {displayMenuPanel && (
        <MenuPanel
          noteData={{ isArchived, isTrashed }}
          handleDataChange={handleDataChange}
        />
      )}
      {!isTrashed && (
        <div className="notecard__buttons-container">
          <Button
            className="notecard__button color-button"
            label="Change Note Color"
            handleClick={showColorPanel}
          />
          <Button
            className="notecard__button menu-button"
            label="Menu"
            handleClick={showMenuPanel}
          />
          <Button
            className={`notecard__button pin-button ${
              isPinned ? 'note-pinned' : ''
            }`}
            label="Fix Note"
            handleClick={() => {
              handleDataChange({ name: 'isPinned', value: !isPinned });
            }}
          />
        </div>
      )}
      <Button
        className={`notecard__pin-button--big ${isPinned ? 'note-pinned' : ''}`}
        handleClick={() => {
          handleDataChange({ name: 'isPinned', value: !isPinned });
          db.updateNote(id, noteData);
        }}
        label="Fix Note"
      />
      <InputField
        text={noteTitle}
        className="notecard__title"
        placeHolder="Title"
        handleChange={(e) => handleDataChange({ name: 'noteTitle', value: e.target.value })}
      />
      <InputField
        text={noteDescription}
        className="notecard__desc"
        placeHolder="Take a note..."
        handleChange={(e) => handleDataChange({ name: 'noteDescription', value: e.target.value })}
      />
    </>
  );
}
BasicNotecard.propTypes = {
  noteData: PropTypes.shape({
    id: PropTypes.number,
    noteTitle: PropTypes.string,
    isArchived: PropTypes.bool,
    isPinned: PropTypes.bool,
    isReminder: PropTypes.bool,
    isTrashed: PropTypes.bool,
    noteDescription: PropTypes.string,
  }).isRequired,
  handleDataChange: PropTypes.func.isRequired,
};
