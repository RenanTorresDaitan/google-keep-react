import React, { useContext } from 'react';
import Notecard from '../Notecard';
import { NotesContext } from '../contexts/NotesProvider';
import NotesArea from './styles';

const NoteItemsList = () => {
  const { notesToRender } = useContext(NotesContext);

  const notecards = notesToRender.map((noteItem) => (
    <Notecard key={noteItem.id} noteItem={noteItem} />
  ));
  return <NotesArea>{notecards}</NotesArea>;
};

export default NoteItemsList;
