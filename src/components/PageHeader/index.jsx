import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NotesContext } from '../contexts/NotesProvider';
import {
  HeaderContainer,
  HeaderIcon,
  HeaderSubtitle,
  HeaderTitle,
  HeaderTitleContainer,
  MenuButton,
} from './styles';

const PageHeader = ({ handleMenuClick }) => {
  const { sidebarSelected } = useContext(NotesContext);

  let title = 'Keep';
  let subtitle = 'Notes';

  switch (sidebarSelected) {
    case 'NOTES':
      title = 'Keep';
      subtitle = 'Notes';
      break;
    case 'REMINDERS':
      title = 'Reminders';
      subtitle = '';
      break;
    case 'ARCHIVE':
      title = 'Archive';
      subtitle = '';
      break;
    case 'TRASH':
      title = 'Trash';
      subtitle = '';
      break;
    default:
      break;
  }
  return (
    <HeaderContainer>
      <MenuButton label="Menu" handleClick={handleMenuClick} />
      {sidebarSelected === 'NOTES' && <HeaderIcon />}
      <HeaderTitleContainer>
        <HeaderTitle tabIndex={-1}>{title}</HeaderTitle>
        <HeaderSubtitle tabIndex={-1}>{subtitle}</HeaderSubtitle>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
};

PageHeader.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
};

export default PageHeader;
