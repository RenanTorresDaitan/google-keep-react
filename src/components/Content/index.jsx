import React from 'react';
import PropTypes from 'prop-types';

import NewNoteComponent from '../NewNoteComponent';
import NoteListItems from '../NoteListItems';
import DBManager from '../../models/DBManager';

import noNotesFolder from '../../assets/no-notes-folder.png';

export default function Content({ notes, sidebarSelected }) {
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
      {sidebarSelected === 'NOTES' && notes === 0 && (
        <div className="no-notes-found">
          <img src={noNotesFolder} width="236px" alt="No notes found" />
          <h2>No notes yet</h2>
          <h4>Your notes from Google Keep will show up here.</h4>
        </div>
      )}
      {sidebarSelected === 'REMINDERS' && notes === 0 && (
        <div className="no-reminders-found">
          <div className="no-reminders-img" />
          <div className="no-reminders-label">
            Notes with upcoming reminders appear here
          </div>
        </div>
      )}
      {sidebarSelected === 'ARCHIVE' && notes === 0 && (
        <div className="no-archived-found">
          <div className="no-archived-img" />
          <div className="no-archived-label">
            Your archived notes appear here
          </div>
        </div>
      )}
      {sidebarSelected === 'TRASH' && notes === 0 && (
        <div className="no-trashed-found">
          <div className="no-trashed-img" />
          <div className="no-trashed-label">No notes in Trash</div>
        </div>
      )}
      <NoteListItems itemsList={DBManager.noteItemsList} />
    </div>
  );
}

Content.propTypes = {
  notes: PropTypes.number.isRequired,
  sidebarSelected: PropTypes.string.isRequired,
};
