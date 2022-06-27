import React from 'react';
import PropTypes from 'prop-types';
import NoteItemsList from '../NoteItemsList';
import TakeNewNotesHeader from '../TakeNewNotesHeader';
import './styles.css';
import NoteItemModel from '../../models/NoteItemModel';
import NotesAreaHeader from '../NotesAreaHeader';

export default function Content({ sidebarSelected, notesToRender, update }) {
  return (
    <div className="content">
      <TakeNewNotesHeader update={update} />
      <NotesAreaHeader
        sidebar={sidebarSelected}
        notesLength={notesToRender.length}
      />
      <NoteItemsList notesToRender={notesToRender} update={update} />
    </div>
  );
}

Content.propTypes = {
  notesToRender: PropTypes.arrayOf(PropTypes.instanceOf(NoteItemModel))
    .isRequired,
  sidebarSelected: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};
