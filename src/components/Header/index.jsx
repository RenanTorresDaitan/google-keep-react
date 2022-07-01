import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import PageHeader from '../PageHeader';

import './styles.css';
import Button from '../Button';

function Header({ sidebarSelected, handleMenuClick }) {
  const [showSearch, setShowSearch] = useState(false);

  function handleShowSearch() {
    setShowSearch((prevState) => !prevState);
  }

  return (
    <header className="app-header">
      <PageHeader
        sidebarSelected={sidebarSelected}
        handleMenuClick={handleMenuClick}
      />
      {showSearch && <SearchBar closeSearch={() => handleShowSearch()} />}
      <div className="header-icons">
        <Button
          className="search-panel__button icon-size icon-button"
          handleClick={() => handleShowSearch()}
          label="Search"
        />
        <Button
          className="search-panel__open-new-tab icon-size icon-button"
          handleClick={() => {}}
          label="Open in new tab"
        />
        <Button
          className="search-panel__close-button icon-size icon-button"
          handleClick={() => {}}
          label="Close"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  sidebarSelected: PropTypes.string.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Header;
