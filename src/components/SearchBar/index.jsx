import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import useDebounce from '../../hooks/useDebounce';

import { NotesContext } from '../contexts/NotesProvider';
import Button from '../Button';
import './styles.css';

function SearchBar({ closeSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 300);
  const { noteList, setNotesToRender } = useContext(NotesContext);
  useEffect(() => {
    const searchList = noteList.filter(
      (note) => note.noteTitle.includes(debouncedValue)
        || note.noteDescription.includes(debouncedValue)
        || note.toDoItems.map((td) => td.title).join(' ').includes(debouncedValue),
    );
    setNotesToRender(searchList);
  }, [debouncedValue, noteList, setNotesToRender]);

  const handleInput = (value) => {
    setSearchValue(value);
  };
  const cancelSearch = () => {
    setSearchValue('');
    setNotesToRender(noteList);
    closeSearch();
  };

  return (
    <div className="search-panel">
      <Button
        className="search-panel__button icon-size icon-button"
        label="Search"
      />
      <input
        type="text"
        className="search-panel__input"
        value={searchValue}
        placeholder="Search Keep..."
        onChange={(event) => handleInput(event.target.value)}
        onKeyDown={(event) => (event.code === 'Escape' ? cancelSearch() : null)}
      />
      <Button
        className="search-panel__clear-button"
        handleClick={cancelSearch}
        label="Clear search"
      />
    </div>
  );
}
export default SearchBar;

SearchBar.propTypes = {
  closeSearch: PropTypes.func.isRequired,
};
