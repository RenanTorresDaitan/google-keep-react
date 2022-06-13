import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };
  const clearSearchInput = () => {
    setSearchValue('');
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          className="search-bar__input"
          value={searchValue}
          placeholder="Search Notes..."
          onChange={handleInput}
        />
        <button type="button" className="search-bar__clear-button" onClick={clearSearchInput}>X</button>
      </div>
      <p className="search-bar__result">
        Searching for:
        {' '}
        {searchValue}
      </p>
    </div>
  );
}
export default SearchBar;
