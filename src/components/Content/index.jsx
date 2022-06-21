import React from 'react';
import PropTypes from 'prop-types';
import NoteListItems from '../NoteListItems';
import TakeNewNotesHeader from '../TakeNewNotesHeader';
import './styles.css';

export default function Content({ sidebarSelected }) {
  return (
    <div className="content">
      <TakeNewNotesHeader />
      <NoteListItems sidebarSelected={sidebarSelected} />
    </div>
  );
}

Content.propTypes = {
  sidebarSelected: PropTypes.string.isRequired,
};
