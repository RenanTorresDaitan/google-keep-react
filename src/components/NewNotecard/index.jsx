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
  const [doneBtnVisible, setDoneBtnVisible] = useState(false);
  const [showModal, setShowModal] = useState({ menu: false, color: false });
  const handleDataChange = (data) => {
    setNewNoteData((prevNoteData) => ({
      ...prevNoteData,
      ...data,
    }));
    setShowModal({ menu: false, color: false });
  };
  useEffect(() => {
    setDoneBtnVisible(true);
  }, [newNoteData.noteDescription, newNoteData.noteTitle]);

  const toDoItemsContainer = (
    <ToDoItemsContainer
      toDoItems={newNoteData.toDoItems}
      handleDataChange={(data) => handleDataChange({ toDoItems: data })}
    />
  );

  const handleNewNote = () => {
    db.createNewNoteItem(newNoteData);
    setDoneBtnVisible(false);
    showHeader();
    update();
  };

  return (
    <div
      className="notecard"
      aria-label={`Keep's Note ${newNoteData.noteTitle}`}
      data-note-id={newNoteData.id}
      data-color={newNoteData.color}
    >
      {showModal.color && (
        <ColorBallContainer
          changeToColor={(c) => {
            handleDataChange({ color: c });
          }}
        />
      )}
      {showModal.menu && (
        <MenuPanel
          options={{
            isArchived: newNoteData.isArchived,
            isTrashed: newNoteData.isTrashed,
          }}
          handleDataChange={(options) => handleDataChange({ options })}
        />
      )}
      {!newNoteData.isTrashed && (
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
              newNoteData.isPinned ? 'note-pinned' : ''
            }`}
            label="Fix Note"
            handleClick={() => {
              handleDataChange({ isPinned: !newNoteData.isPinned });
            }}
          />
        </div>
      )}
      <Button
        className={`notecard__pin-button--big ${
          newNoteData.isPinned ? 'note-pinned' : ''
        }`}
        handleClick={() => {
          handleDataChange({ isPinned: !newNoteData.isPinned });
        }}
        label="Fix Note"
      />
      <InputField
        text={newNoteData.noteTitle}
        className="notecard__title"
        placeHolder="Title"
        handleChange={(value) => handleDataChange({ noteTitle: value })}
        visible={false}
      />
      {newNoteData.isToDoList ? (
        toDoItemsContainer
      ) : (
        <InputField
          text={newNoteData.noteDescription}
          className="notecard__desc"
          placeHolder="Take a note..."
          handleChange={(value) => handleDataChange({ noteDescription: value })}
          visible={false}
        />
      )}
      {doneBtnVisible && (
        <Button
          className="notecard__done-button"
          handleClick={() => handleNewNote()}
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
