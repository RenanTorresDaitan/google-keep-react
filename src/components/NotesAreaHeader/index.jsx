import React from 'react';
import PropTypes from 'prop-types';
import NoteItemController from '../../controllers/NoteItemController';
import Button from '../Button';

function NotesAreaHeader({ sidebar, notesLength }) {
  let imageClass = '';
  let notesClass = '';
  let title = '';
  let subtitle = '';

  const trashHeader = (
    <div className="trash-header">
      Notes in Trash are deleted after 7 days.
      <Button
        className="empty-trash-btn"
        handleClick={() => {
          new NoteItemController().deleteTrashedNotes();
        }}
        label="Empty trash"
        btnText="Empty Trash"
      />
    </div>
  );

  switch (sidebar) {
    case 'NOTES':
      imageClass = 'no-notes-img';
      notesClass = 'no-notes-found no-notes-found-label';
      title = 'No notes yet';
      subtitle = 'Your notes from Google Keep will show up here.';
      break;
    case 'REMINDERS':
      imageClass = 'no-reminders-img';
      notesClass = 'no-reminders-found no-reminders-label';
      title = 'Notes with upcoming reminders appear here';
      subtitle = '';
      break;
    case 'ARCHIVE':
      imageClass = 'no-archived-img';
      notesClass = 'no-archived-found no-archived-label';
      title = 'Your archived notes appear here';
      subtitle = '';
      break;
    case 'TRASH':
      imageClass = 'no-trashed-img';
      notesClass = 'no-trashed-found no-trashed-label';
      title = 'No notes in Trash';
      subtitle = '';
      break;
    default:
      break;
  }

  return (
    <>
      {sidebar === 'TRASH' && trashHeader}
      {notesLength === 0 && (
        <div className={notesClass}>
          <div className={imageClass} />
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </div>
      )}
    </>
  );
}

export default NotesAreaHeader;

NotesAreaHeader.propTypes = {
  sidebar: PropTypes.string.isRequired,
  notesLength: PropTypes.number.isRequired,
};
