import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import db from '../../models/DBManager';
import Notecard from '../Notecard';
import './styles.css';
import NotesAreaHeader from '../NotesAreaHeader';
import IconButton from '../IconButton';
import NoteItemController from '../../controllers/NoteItemController';

function NoteListItems({ sidebarSelected }) {
  const [notesToRender, setNotesToRender] = useState([]);
  const [notecards, setNotecards] = useState([]);
  const [updated, setUpdated] = useState(false);
  const handleUpdate = () => {
    setUpdated((prevState) => !prevState);
  };
  useEffect(() => {
    const noteList = db.noteItemsList.getList();
    if (sidebarSelected === 'NOTES') {
      setNotesToRender(
        noteList.filter((item) => !item.isArchived && !item.isTrashed),
      );
    }
    if (sidebarSelected === 'REMINDERS') {
      setNotesToRender(
        noteList.filter((item) => item.isReminder && !item.isTrashed),
      );
    }
    if (sidebarSelected === 'ARCHIVE') {
      setNotesToRender(
        noteList.filter((item) => item.isArchived && !item.isTrashed),
      );
    }
    if (sidebarSelected === 'TRASH') {
      setNotesToRender(noteList.filter((item) => item.isTrashed));
    }
  }, [sidebarSelected, updated]);

  useEffect(() => {
    setNotecards(
      notesToRender.map((item) => (
        <Notecard
          key={item.id}
          noteItem={item}
          isCreating={false}
          update={handleUpdate}
        />
      )),
    );
  }, [notesToRender]);

  const trashHeader = (
    <div className="trash-header">
      Notes in Trash are deleted after 7 days.
      <IconButton
        className="empty-trash-btn"
        handleClick={() => {
          new NoteItemController().deleteTrashedNotes();
          handleUpdate();
        }}
        label="Empty trash"
        btnText="Empty Trash"
      />
    </div>
  );
  return (
    <section className="notes-area">
      {sidebarSelected === 'TRASH' && trashHeader}
      {notecards.length === 0 && <NotesAreaHeader sidebar={sidebarSelected} />}
      {notecards}
    </section>
  );
}

export default NoteListItems;

NoteListItems.propTypes = {
  sidebarSelected: PropTypes.string.isRequired,
};
