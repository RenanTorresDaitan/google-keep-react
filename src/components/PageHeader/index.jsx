import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { NotesContext } from '../contexts/NotesProvider';
import './styles.css';

function PageHeader({ handleMenuClick }) {
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
    <div className="header__container">
      <Button
        className="header__menu-bars"
        label="Menu"
        handleClick={handleMenuClick}
      />
      {sidebarSelected === 'NOTES' && <div className="header__icon" />}
      <div className="header__title-container">
        <h2 className="header__title" tabIndex={-1}>
          {title}
        </h2>
        <h3 className="header__subtitle" tabIndex={-1}>
          {subtitle}
        </h3>
      </div>
    </div>
  );
}

PageHeader.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
};

export default PageHeader;
