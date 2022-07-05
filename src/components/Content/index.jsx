import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NoteItemsList from '../NoteItemsList';
import TakeNewNotesHeader from '../TakeNewNotesHeader';
import './styles.css';
import NotesAreaHeader from '../NotesAreaHeader';
import NotesContext from '../contexts/NotesContext';

export default function Content({ update }) {
  const { sidebarSelected } = useContext(NotesContext);
  return (
    <div className="content">
      {sidebarSelected !== 'TRASH' && <TakeNewNotesHeader update={update} />}
      <NotesAreaHeader update={update} />
      <NoteItemsList update={update} />
    </div>
  );
}

Content.propTypes = {
  update: PropTypes.func.isRequired,
};
