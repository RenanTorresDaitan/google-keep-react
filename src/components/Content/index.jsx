import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import NewNoteComponent from '../NewNoteComponent';
import NoteListItems from '../NoteListItems';
import DBManager from '../../models/DBManager';

import './styles.css';

export default function Content({ sidebarSelected }) {
  const [notesToRender, setNotesToRender] = useState([]);
  useEffect(() => {
    const notesList = DBManager.noteItemsList
      .getList()
      .filter((item) => !item.isTrashed && !item.isArchived);
    const remindersList = DBManager.noteItemsList
      .getList()
      .filter((item) => !item.isTrashed && item.isReminder);
    const archiveList = DBManager.noteItemsList
      .getList()
      .filter((item) => !item.isTrashed && item.isArchived);
    const trashList = DBManager.noteItemsList
      .getList()
      .filter((item) => item.isTrashed);
    switch (sidebarSelected) {
      case 'NOTES':
      case 'EDIT LABEL':
        setNotesToRender(notesList);
        break;
      case 'REMINDERS':
        setNotesToRender(remindersList);
        break;
      case 'ARCHIVE':
        setNotesToRender(archiveList);
        break;
      case 'TRASH':
        setNotesToRender(trashList);
        break;
      default:
        setNotesToRender([]);
        break;
    }
  }, [sidebarSelected]);

  return (
    <div className="content">
      <NewNoteComponent />
      {sidebarSelected === 'TRASH' && (
        <div className="trash-header">
          Notes in Trash are deleted after 7 days.
          <div
            role="button"
            className="empty-trash-btn"
            aria-hidden="false"
            tabIndex={0}
            style={{ userSelect: 'none' }}
          >
            Empty Trash
          </div>
        </div>
      )}
      {sidebarSelected === 'NOTES' && notesToRender.length === 0 && (
        <div className="no-notes-found">
          <div className="no-notes-img" />
          <h2>No notes yet</h2>
          <h4>Your notes from Google Keep will show up here.</h4>
        </div>
      )}
      {sidebarSelected === 'REMINDERS' && notesToRender.length === 0 && (
        <div className="no-reminders-found">
          <div className="no-reminders-img" />
          <div className="no-reminders-label">
            Notes with upcoming reminders appear here
          </div>
        </div>
      )}
      {sidebarSelected === 'ARCHIVE' && notesToRender.length === 0 && (
        <div className="no-archived-found">
          <div className="no-archived-img" />
          <div className="no-archived-label">
            Your archived notes appear here
          </div>
        </div>
      )}
      {sidebarSelected === 'TRASH' && notesToRender.length === 0 && (
        <div className="no-trashed-found">
          <div className="no-trashed-img" />
          <div className="no-trashed-label">No notes in Trash</div>
        </div>
      )}
      <NoteListItems itemsList={notesToRender} />
    </div>
  );
}

Content.propTypes = {
  sidebarSelected: PropTypes.string.isRequired,
};
