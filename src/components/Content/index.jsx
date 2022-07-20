import React, { useContext } from 'react';
import NoteItemsList from '../NoteItemsList';
import TakeNewNotesHeader from '../TakeNewNotesHeader';
import NotesAreaHeader from '../NotesAreaHeader';
import { NotesContext } from '../contexts/NotesProvider';
import StyledContent from './styles';

export default function Content() {
  const { sidebarSelected } = useContext(NotesContext);
  return (
    <StyledContent>
      {sidebarSelected !== 'TRASH' && <TakeNewNotesHeader />}
      <NotesAreaHeader />
      <NoteItemsList />
    </StyledContent>
  );
}
