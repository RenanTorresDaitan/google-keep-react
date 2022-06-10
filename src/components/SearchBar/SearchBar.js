import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const clearSearchInput = () => {
    setSearchValue('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={searchValue}
        placeholder="Search Notes..."
        onChange={handleInput}
      />
      <p>Searching for: {searchValue}</p>
      <button onClick={clearSearchInput}>X</button>
    </div>
  );
};

export default SearchBar;
