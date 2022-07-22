import React, { useContext } from 'react';
import Notecard from '../Notecard';
import { NotesContext } from '../contexts/NotesProvider';
import NotesArea from './styles';

const NoteItemsList = () => {
  const { notesToRender } = useContext(NotesContext);

  const notecards = notesToRender.map((noteItem, index) => (
    <Notecard key={noteItem.id} noteItem={noteItem} index={index} />
  ));
  return <NotesArea>{notecards}</NotesArea>;
};

export default NoteItemsList;
