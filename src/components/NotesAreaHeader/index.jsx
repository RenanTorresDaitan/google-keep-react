import React, { useContext } from 'react';
import db from '../../models/DBManager';
import { NotesContext } from '../contexts/NotesProvider';
import {
  EmptyTrashButton,
  NotesAreaImage,
  NotesAreaTitle,
  StyledNotesAreaHeader,
  TrashHeader,
} from './styles';

const NotesAreaHeader = () => {
  const { sidebarSelected, notesToRender, handleUpdate } = useContext(NotesContext);

  const trashHeader = (
    <TrashHeader>
      Notes in Trash are deleted after 7 days.
      <EmptyTrashButton
        aria-label="Empty trash"
        data-tooltip-text="Empty trash"
        tabIndex={0}
        onClick={() => {
          db.deleteTrashedNotes();
          handleUpdate();
        }}
      >
        Empty trash
      </EmptyTrashButton>
    </TrashHeader>
  );
  let title = '';
  let subtitle = '';

  switch (sidebarSelected) {
    case 'NOTES':
      title = 'No notes yet';
      subtitle = 'Your notes from Google Keep will show up here.';
      break;
    case 'REMINDERS':
      title = 'Notes with upcoming reminders appear here';
      subtitle = '';
      break;
    case 'ARCHIVE':
      title = 'Your archived notes appear here';
      subtitle = '';
      break;
    case 'TRASH':
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
        <StyledNotesAreaHeader sidebarSelected={sidebarSelected}>
          <NotesAreaImage sidebarSelected={sidebarSelected} />
          <NotesAreaTitle sidebarSelected={sidebarSelected}>
            {title}
          </NotesAreaTitle>
          <h4>{subtitle}</h4>
        </StyledNotesAreaHeader>
      )}
    </>
  );
};

export default NotesAreaHeader;
