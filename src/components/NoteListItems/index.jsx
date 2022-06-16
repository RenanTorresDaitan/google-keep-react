import React from 'react';
import PropTypes from 'prop-types';
import NoteListModel from '../../models/NoteListModel';
import Notecard from '../Notecard';
import './styles.css';

function NoteListItems({ itemsList }) {
  const notecards = itemsList
    .getList()
    .map((item) => <Notecard key={item.id} noteItem={item} />);

  return <section className="notes-area">{notecards}</section>;
}

export default NoteListItems;

NoteListItems.propTypes = {
  itemsList: PropTypes.instanceOf(NoteListModel).isRequired,
};
