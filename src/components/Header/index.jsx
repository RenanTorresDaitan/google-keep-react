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

function Header({ handleMenuClick }) {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  return (
    <AppHeader>
      <PageHeader handleMenuClick={handleMenuClick} />
      {showSearch && <SearchBar closeSearch={handleShowSearch} />}
      <HeaderIcons>
        <SearchButton handleClick={handleShowSearch} label="Search" />
        <OpenNewTabButton label="Open in new tab" />
        <CloseButton label="Close" />
      </HeaderIcons>
    </AppHeader>
  );
}

Header.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
};

export default Header;
