import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Notecard from '../Notecard';
import './styles.css';
import NotesContext from '../contexts/NotesContext';

export default function NoteItemsList({ update }) {
  const { notesToRender } = useContext(NotesContext);

  const notecards = notesToRender.map((noteItem) => (
    <Notecard key={noteItem.id} noteItem={noteItem} update={update} />
  ));
  return <section className="notes-area">{notecards}</section>;
}

NoteItemsList.propTypes = {
  update: PropTypes.func.isRequired,
};
