import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import PageHeader from '../PageHeader';

import './styles.css';
import Button from '../Button';

function Header({ handleMenuClick }) {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  return (
    <header className="app-header">
      <PageHeader handleMenuClick={handleMenuClick} />
      {showSearch && <SearchBar closeSearch={handleShowSearch} />}
      <div className="header-icons">
        <Button
          className="search-panel__button icon-size icon-button"
          handleClick={handleShowSearch}
          label="Search"
        />
        <Button
          className="search-panel__open-new-tab icon-size icon-button"
          label="Open in new tab"
        />
        <Button
          className="search-panel__close-button icon-size icon-button"
          label="Close"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
};

export default Header;
