import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import './styles.css';

function SearchBar({ closeSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInput = (value) => {
    setSearchValue(value);
  };
  const cancelSearch = () => {
    setSearchValue('');
    closeSearch();
  };

  return (
    <div className="search-panel">
      <Button
        className="search-panel__button icon-size icon-button"
        handleClick={() => {}}
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
