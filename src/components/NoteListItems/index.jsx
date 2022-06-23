import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Notecard from '../Notecard';
import './styles.css';
import IconButton from '../IconButton';
import NoteItemController from '../../controllers/NoteItemController';
import NoteItemModel from '../../models/NoteItemModel';

function NoteListItems({ notecards }) {
  const notesToRender = notecards.map((item) => (
    <Notecard key={item.id} noteItem={item} isCreating={false} />
  ));
  const trashHeader = (
    <div className="trash-header">
      Notes in Trash are deleted after 7 days.
      <IconButton
        className="empty-trash-btn"
        handleClick={() => {
          new NoteItemController().deleteTrashedNotes();
        }}
        label="Empty trash"
        btnText="Empty Trash"
      />
    </div>
  );
  return (
    <section className="notes-area">
      {/* {sidebarSelected === 'TRASH' && trashHeader}
      {notecards.length === 0 && <NotesAreaHeader sidebar={sidebarSelected} />} */}
      {notesToRender}
    </section>
  );
}

export default NoteListItems;

NoteListItems.propTypes = {
  notecards: PropTypes.arrayOf(PropTypes.instanceOf(NoteItemModel)).isRequired,
};
