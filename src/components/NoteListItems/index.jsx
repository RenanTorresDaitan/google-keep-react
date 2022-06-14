import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NoteListModel from '../../models/NoteListModel';
import Notecard from '../Notecard';

function NoteListItems({ itemsList }) {
  const [noteCards, setNoteCards] = useState([]);
  useEffect(() => {
    setNoteCards(
      itemsList
        .getList()
        .map((item) => (
          <Notecard key={item.id} noteItem={item} />
        )),
    );
  }, [itemsList]);

  return <div>{noteCards}</div>;
}

export default NoteListItems;

NoteListItems.propTypes = {
  itemsList: PropTypes.instanceOf(NoteListModel).isRequired,
};
