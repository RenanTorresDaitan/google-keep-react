import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NoteListItems from '../NoteListItems';
import TakeNewNotesHeader from '../TakeNewNotesHeader';
import './styles.css';
import NoteItemModel from '../../models/NoteItemModel';

export default function Content({ notesToRender }) {
  const [updated, setUpdated] = useState(false);
  const handleUpdate = () => {
    setUpdated((prevState) => !prevState);
  };
  return (
    <div className="content">
      <TakeNewNotesHeader updateNotes={handleUpdate} />
      <NoteListItems notecards={notesToRender} />
    </div>
  );
}

Content.propTypes = {
  notesToRender: PropTypes.arrayOf(PropTypes.instanceOf(NoteItemModel)).isRequired,
};
