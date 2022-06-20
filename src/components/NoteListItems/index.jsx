import React from 'react';
import PropTypes from 'prop-types';
import NoteItemModel from '../../models/NoteItemModel';
import Notecard from '../Notecard';
import './styles.css';

function NoteListItems({ itemsList }) {
  const notecards = itemsList.map((item) => (
    <Notecard key={item.id} noteItem={item} isCreating={false} />
  ));

  return <section className="notes-area">{notecards}</section>;
}

export default NoteListItems;

NoteListItems.propTypes = {
  itemsList: PropTypes.arrayOf(PropTypes.instanceOf(NoteItemModel)).isRequired,
};
