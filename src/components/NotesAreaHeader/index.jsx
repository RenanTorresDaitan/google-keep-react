import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import db from '../../models/DBManager';
import NotesContext from '../contexts/NotesContext';

function NotesAreaHeader({ update }) {
  const { sidebarSelected, notesToRender } = useContext(NotesContext);
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
          db.deleteTrashedNotes();
          update();
        }}
        label="Empty trash"
        btnText="Empty Trash"
      />
    </div>
  );

  switch (sidebarSelected) {
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
      {sidebarSelected === 'TRASH' && trashHeader}
      {notesToRender.length === 0 && (
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
  update: PropTypes.func.isRequired,
};
