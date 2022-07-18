import React, { useContext } from 'react';
import styled from 'styled-components';
import NoteItemsList from '../NoteItemsList';
import TakeNewNotesHeader from '../TakeNewNotesHeader';
import NotesAreaHeader from '../NotesAreaHeader';
import { NotesContext } from '../contexts/NotesProvider';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

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
