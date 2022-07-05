import React, { useContext } from 'react';
import NoteItemsList from '../NoteItemsList';
import TakeNewNotesHeader from '../TakeNewNotesHeader';
import './styles.css';
import NotesAreaHeader from '../NotesAreaHeader';
import { NotesContext } from '../contexts/NotesProvider';

export default function Content() {
  const { sidebarSelected } = useContext(NotesContext);
  return (
    <div className="content">
      {sidebarSelected !== 'TRASH' && <TakeNewNotesHeader />}
      <NotesAreaHeader />
      <NoteItemsList />
    </div>
  );
}
