import React from 'react';
import PropTypes from 'prop-types';
import NoteListItems from '../NoteListItems';
import TakeNewNotesHeader from '../TakeNewNotesHeader';
import db from '../../models/DBManager';
import './styles.css';
import NoteItemModel from '../../models/NoteItemModel';

export default function Content({ sidebarSelected }) {
  const handleDisplayHeader = () => {
  };
  const noteToCreate = (str) => db.createNewNoteItem(new NoteItemModel());
  return (
    <div className="content">
      <TakeNewNotesHeader
        handleDisplayHeader={handleDisplayHeader}
        noteToCreate={noteToCreate}
      />
      <NoteListItems sidebarSelected={sidebarSelected} />
    </div>
  );
}

Content.propTypes = {
  sidebarSelected: PropTypes.string.isRequired,
};
