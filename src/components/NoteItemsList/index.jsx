import React, { useContext } from 'react';
import Masonry from 'react-masonry-css';
import Notecard from '../Notecard';
import { NotesContext } from '../contexts/NotesProvider';
import NotesArea from './styles';
import './styles.css';

const breakpointColumnsObj = {
  default: 4,
  1300: 3,
  960: 2,
  600: 1,
};

const NoteItemsList = () => {
  const { notesToRender } = useContext(NotesContext);
  const notecards = notesToRender.map((noteItem, index) => (
    <Notecard key={noteItem.id} noteItem={noteItem} index={index} />
  ));
  return (
    <NotesArea>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry__grid"
        columnClassName="masonry__grid_column"
      >
        {notecards}
      </Masonry>
    </NotesArea>
  );
};

export default NoteItemsList;
