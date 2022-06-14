import React from 'react';
import PropTypes from 'prop-types';

import NewNoteComponent from '../NewNoteComponent';
import NoteListItems from '../NoteListItems';
import DBManager from '../../models/DBManager';

export default function Content({ db }) {
  return (
    <div className="main-content">
      <NewNoteComponent />
      <NoteListItems itemsList={db.noteItemsList} />
    </div>
  );
}

Content.propTypes = {
  db: PropTypes.instanceOf(DBManager).isRequired,
};
