import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import searchIcon from '../../assets/svg/search-icon.svg';
import openNewTabIcon from '../../assets/svg/open-new-tab-icon.svg';
import closeIcon from '../../assets/svg/close-icon.svg';
import PageHeader from '../PageHeader';

import './styles.css';

function Header({ sidebarSelected }) {
  const [showSearch, setShowSearch] = useState(false);

  function handleShowSearch() {
    setShowSearch((prevState) => !prevState);
  }

  return (
    <header className="app-header">
      <PageHeader sidebarSelected={sidebarSelected} />
      {showSearch && <SearchBar />}
      <div className="header-icons">
        <div
          id="search-icon-btn"
          className="icon-button icon-size"
          role="button"
          aria-label="Search"
          tabIndex={0}
          onClick={handleShowSearch}
          onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Space' ? handleShowSearch() : null)}
        >
          <img className="svg-icon" src={searchIcon} alt="" />
        </div>
        <div
          className="icon-button icon-size"
          role="button"
          aria-label="Open in new tab"
          tabIndex={0}
        >
          <img
            className="svg-icon"
            src={openNewTabIcon}
            alt="Open in a new Tab"
          />
        </div>
        <div
          className="icon-button icon-size"
          role="button"
          aria-label="Close"
          tabIndex={0}
        >
          <img className="svg-icon" src={closeIcon} alt="Close App" />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  sidebarSelected: PropTypes.string.isRequired,
};

export default Header;
