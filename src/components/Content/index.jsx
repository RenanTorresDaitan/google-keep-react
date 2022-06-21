import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NoteListItems from '../NoteListItems';
import TakeNewNotesHeader from '../TakeNewNotesHeader';
import './styles.css';

export default function Content({ sidebarSelected }) {
  const [updated, setUpdated] = useState(false);
  const handleUpdate = () => {
    setUpdated((prevState) => !prevState);
  };
  return (
    <div className="content">
      <TakeNewNotesHeader updateNotes={handleUpdate} />
      <NoteListItems sidebarSelected={sidebarSelected} updateNotes={handleUpdate} />
    </div>
  );
}

Content.propTypes = {
  sidebarSelected: PropTypes.string.isRequired,
};
