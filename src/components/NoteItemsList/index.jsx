import React from 'react';
import PropTypes from 'prop-types';
import Notecard from '../Notecard';
import './styles.css';
import NoteItemModel from '../../models/NoteItemModel';

export default function NoteItemsList({ notesToRender }) {
  const notecards = notesToRender.map((item) => <Notecard key={item.id} noteItem={item} />);
  return <section className="notes-area">{notecards}</section>;
}

NoteItemsList.propTypes = {
  notesToRender: PropTypes.arrayOf(PropTypes.instanceOf(NoteItemModel))
    .isRequired,
};
