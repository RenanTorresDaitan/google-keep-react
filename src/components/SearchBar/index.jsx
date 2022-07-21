import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import useDebounce from '../../hooks/useDebounce';

import { NotesContext } from '../contexts/NotesProvider';
import {
  CancelSearchButton,
  SearchButton,
  SearchInput,
  SearchPanel,
} from './styles';

const SearchBar = ({ closeSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 300);
  const { noteList, setNotesToRender } = useContext(NotesContext);
  useEffect(() => {
    const searchList = noteList.filter(
      (note) => note.noteTitle.includes(debouncedValue)
        || note.noteDescription.includes(debouncedValue)
        || note.toDoItems
          .map((td) => td.title)
          .join(' ')
          .includes(debouncedValue),
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
    <SearchPanel>
      <SearchButton label="Search" />
      <SearchInput
        type="text"
        value={searchValue}
        placeholder="Search Keep..."
        onChange={(event) => handleInput(event.target.value)}
        onKeyDown={(event) => (event.code === 'Escape' ? cancelSearch() : null)}
      />
      <CancelSearchButton
        aria-label="Clear search"
        data-tooltip-text="Clear search"
        tabIndex={0}
        onClick={cancelSearch}
      />
    </SearchPanel>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  closeSearch: PropTypes.func.isRequired,
};
