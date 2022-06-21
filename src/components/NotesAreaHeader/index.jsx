import React from 'react';
import PropTypes from 'prop-types';

function NotesAreaHeader({ sidebar }) {
  let imageClass = '';
  let notesClass = '';
  let title = '';
  let subtitle = '';

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
    <div className={notesClass}>
      <div className={imageClass} />
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
}

export default NotesAreaHeader;

NotesAreaHeader.propTypes = {
  sidebar: PropTypes.string.isRequired,
};
