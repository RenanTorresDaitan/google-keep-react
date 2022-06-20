import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TakeNewNotesHeader from '../TakeNewNotesHeader';
import NoteListItems from '../NoteListItems';
import DBManager from '../../models/DBManager';

import './styles.css';
import Notecard from '../Notecard';
import NoteItemModel from '../../models/NoteItemModel';
import NoteItemController from '../../controllers/NoteItemController';
import SideBarHeader from '../SideBarHeader';

export default function Content({ sidebarSelected }) {
  const [notesToRender, setNotesToRender] = useState([]);
  const [displayHeader, setDisplayHeader] = useState(true);

  const handleDisplayHeader = () => setDisplayHeader((prevState) => !prevState);
  const noteToCreate = (type) => {
    const newNoteItem = new NoteItemModel();
    if (type === 'list') {
      newNoteItem.isToDoList = true;
      return <Notecard noteItem={newNoteItem} isCreating />;
    }
    return <Notecard noteItem={newNoteItem} isCreating />;
  };

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
        <TakeNewNotesHeader
          handleDisplayHeader={handleDisplayHeader}
          noteToCreate={noteToCreate}
        />
      ) : (
        <Notecard noteItem={new NoteItemModel()} isCreating />
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
            onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Space'
              ? new NoteItemController().deleteTrashedNotes()
              : null)}
          >
            Empty Trash
          </div>
        </div>
      )}
      {sidebarSelected === 'NOTES' && notesToRender.length === 0 && (
        <SideBarHeader
          notesClass="no-notes-found no-notes-found-label"
          imageClass="no-notes-img"
          title="No notes yet"
          subtitle="Your notes from Google Keep will show up here."
        />
      )}
      {sidebarSelected === 'REMINDERS' && notesToRender.length === 0 && (
        <SideBarHeader
          notesClass="no-reminders-found no-reminders-label"
          imageClass="no-reminders-img"
          title="Notes with upcoming reminders appear here"
        />
      )}
      {sidebarSelected === 'ARCHIVE' && notesToRender.length === 0 && (
        <SideBarHeader
          notesClass="no-archived-found no-archived-label"
          imageClass="no-archived-img"
          title="Your archived notes appear here"
        />
      )}
      {sidebarSelected === 'TRASH' && notesToRender.length === 0 && (
        <SideBarHeader
          notesClass="no-trashed-found no-trashed-label"
          imageClass="no-trashed-img"
          title="No notes in Trash"
        />
      )}
      <NoteListItems itemsList={notesToRender} />
    </div>
  );
}

Content.propTypes = {
  sidebarSelected: PropTypes.string.isRequired,
};
