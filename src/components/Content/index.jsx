import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TakeNewNotesHeader from '../TakeNewNotesHeader';
import NoteListItems from '../NoteListItems';
import DBManager from '../../models/DBManager';

import './styles.css';
import Notecard from '../Notecard';
import NoteItemModel from '../../models/NoteItemModel';
import NoteItemController from '../../controllers/NoteItemController';

export default function Content({ sidebarSelected }) {
  const [notesToRender, setNotesToRender] = useState([]);
  const [displayHeader, setDisplayHeader] = useState(true);

  const handleDisplayHeader = () => setDisplayHeader((prevState) => !prevState);

  useEffect(() => {
    const noteItems = DBManager.noteItemsList.getList();
    switch (sidebarSelected) {
      case 'NOTES':
      case 'EDIT LABEL':
        setNotesToRender(
          noteItems.filter((item) => !item.isTrashed && !item.isArchived),
        );
        break;
      case 'REMINDERS':
        setNotesToRender(
          noteItems.filter((item) => !item.isTrashed && item.isReminder),
        );
        break;
      case 'ARCHIVE':
        setNotesToRender(
          noteItems.filter((item) => !item.isTrashed && item.isArchived),
        );
        break;
      case 'TRASH':
        setNotesToRender(noteItems.filter((item) => item.isTrashed));
        break;
      default:
        setNotesToRender([]);
        break;
    }
  }, [sidebarSelected]);

  return (
    <div className="content">
      {displayHeader ? (
        <TakeNewNotesHeader handleDisplayHeader={handleDisplayHeader} />
      ) : (
        <Notecard noteItem={new NoteItemModel()} />
      )}
      {sidebarSelected === 'TRASH' && (
        <div className="trash-header">
          Notes in Trash are deleted after 7 days.
          <div
            role="button"
            className="empty-trash-btn"
            aria-hidden="false"
            tabIndex={0}
            style={{ userSelect: 'none' }}
            onClick={() => new NoteItemController().deleteTrashedNotes()}
            onKeyDown={(e) => ((e.code === 'Enter' || e.code === 'Space')
              ? new NoteItemController().deleteTrashedNotes()
              : null)}
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
