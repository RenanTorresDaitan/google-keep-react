import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ColorBallContainer from '../ColorBallContainer';
import MenuPanel from '../MenuPanel';
import Button from '../Button';
import InputField from '../InputField';
import db from '../../models/DBManager';
import ToDoItemsContainer from '../ToDoItemsContainer';

export default function NewNotecard({ typeOfNote, showHeader, update }) {
  const [newNoteData, setNewNoteData] = useState({
    noteTitle: '',
    color: 'default',
    isArchived: false,
    isPinned: false,
    isReminder: false,
    isToDoList: typeOfNote === 'list',
    isTrashed: false,
    noteDescription: '',
    toDoItems: [],
  });
  const [displayColorContainer, setDisplayColorContainer] = useState(false);
  const [displayMenuPanel, setDisplayMenuPanel] = useState(false);
  const [doneBtnVisible, setDoneBtnVisible] = useState(false);
  const showColorPanel = () => setDisplayColorContainer(true);
  const showMenuPanel = () => setDisplayMenuPanel(true);
  const handleBlur = () => {
    setDisplayColorContainer(false);
    setDisplayMenuPanel(false);
  };
  const handleDataChange = (data) => {
    const { name, value } = data;
    setNewNoteData((prevNoteData) => ({
      ...prevNoteData,
      [name]: value,
    }));
    handleBlur();
  };
  useEffect(() => {
    setDoneBtnVisible(true);
  }, [newNoteData.noteDescription, newNoteData.noteTitle]);

  const toDoItemsContainer = (
    <ToDoItemsContainer toDoItems={newNoteData.toDoItems} />
  );

  const handleNewNote = () => {
    db.createNewNoteItem(newNoteData);
    setDoneBtnVisible(false);
    showHeader(true);
    update();
  };

  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${newNoteData.noteTitle}`}
      data-note-id={newNoteData.id}
      data-color={newNoteData.color}
    >
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
          noteData={{
            isArchived: newNoteData.isArchived,
            isTrashed: newNoteData.isTrashed,
          }}
          handleDataChange={handleDataChange}
        />
      )}
      {!newNoteData.isTrashed && (
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
              newNoteData.isPinned ? 'note-pinned' : ''
            }`}
            label="Fix Note"
            handleClick={() => {
              handleDataChange({
                name: 'isPinned',
                value: !newNoteData.isPinned,
              });
            }}
          />
        </div>
      )}
      <Button
        className={`notecard__pin-button--big ${
          newNoteData.isPinned ? 'note-pinned' : ''
        }`}
        handleClick={() => {
          handleDataChange({ name: 'isPinned', value: !newNoteData.isPinned });
          db.updateNote(null, newNoteData);
        }}
        label="Fix Note"
      />
      <InputField
        text={newNoteData.noteTitle}
        className="notecard__title"
        placeHolder="Title"
        handleChange={(e) => handleDataChange({ name: 'noteTitle', value: e.target.value })}
        visible={false}
      />
      {newNoteData.isToDoList ? (
        toDoItemsContainer
      ) : (
        <InputField
          text={newNoteData.noteDescription}
          className="notecard__desc"
          placeHolder="Take a note..."
          handleChange={(e) => handleDataChange({ name: 'noteDescription', value: e.target.value })}
          visible={false}
        />
      )}
      {doneBtnVisible && (
        <Button
          className="notecard__done-button"
          handleClick={handleNewNote}
          label="Done"
          btnText="Done"
        />
      )}
    </div>
  );
}
NewNotecard.propTypes = {
  typeOfNote: PropTypes.string.isRequired,
  showHeader: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};
