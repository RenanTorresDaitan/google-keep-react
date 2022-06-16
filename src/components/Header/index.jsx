import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import searchIcon from '../../assets/svg/search-icon.svg';
import menuBarsIcon from '../../assets/svg/menu-bars.svg';
import openNewTabIcon from '../../assets/svg/open-new-tab-icon.svg';
import closeIcon from '../../assets/svg/close-icon.svg';
import './styles.css';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  function handleShowSearch() {
    setShowSearch((prevState) => !prevState);
  }

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="icon-button icon-size menu-bars">
          <img className="svg-icon-large" src={menuBarsIcon} alt="" />
        </div>
        <div className="header-icon icon-size" />
        <h2 className="header-title" tabIndex={-1}>
          Keep
        </h2>
        <h3 className="header-subtitle" tabIndex={-1}>
          Notes
        </h3>
      </div>
      {showSearch && <SearchBar />}
      <div className="header-icons">
        <div
          id="search-icon-btn"
          className="icon-button icon-size"
          role="button"
          aria-label="Search"
          tabIndex={0}
          onClick={handleShowSearch}
          onKeyDown={(e) => (e.code === 'Enter' ? handleShowSearch() : null)}
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
