import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import PageHeader from '../PageHeader';

import {
  AppHeader,
  CloseButton,
  HeaderIcons,
  OpenNewTabButton,
  SearchButton,
} from './styles';

const Header = ({ handleMenuClick }) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  return (
    <AppHeader>
      <PageHeader handleMenuClick={handleMenuClick} />
      {showSearch && <SearchBar closeSearch={handleShowSearch} />}
      <HeaderIcons>
        <SearchButton
          aria-label="Search"
          data-tooltip-text="Search"
          tabIndex={0}
          onClick={handleShowSearch}
        />
        <OpenNewTabButton
          aria-label="Open in new tab"
          data-tooltip-text="Open in new tab"
        />
        <CloseButton aria-label="Close" data-tooltip-text="Close" />
      </HeaderIcons>
    </AppHeader>
  );
};

Header.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
};

export default Header;
