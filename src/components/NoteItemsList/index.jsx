import React, { useContext } from 'react';
import Notecard from '../Notecard';
import './styles.css';
import { NotesContext } from '../contexts/NotesProvider';

export default function NoteItemsList() {
  const { notesToRender } = useContext(NotesContext);

  const notecards = notesToRender.map((noteItem) => (
    <Notecard key={noteItem.id} noteItem={noteItem} />
  ));
  return <section className="notes-area">{notecards}</section>;
}
