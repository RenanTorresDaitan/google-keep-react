import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import db from '../../models/DBManager';
import Notecard from '../Notecard';
import './styles.css';
import NotesAreaHeader from '../NotesAreaHeader';

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

  return (
    <section className="notes-area">
      {notecards.length === 0 && <NotesAreaHeader sidebar={sidebarSelected} />}
      {notecards}
    </section>
  );
}

export default NoteListItems;

NoteListItems.propTypes = {
  sidebarSelected: PropTypes.string.isRequired,
};
