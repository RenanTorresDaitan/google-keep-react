import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import SideBarItem from './SideBarItem';
import lampIcon from '../../assets/svg/lamp-icon.svg';
import bellIcon from '../../assets/svg/bell-icon.svg';
import pencilIcon from '../../assets/svg/pencil-icon.svg';
import boxIcon from '../../assets/svg/box-icon.svg';
import trashIcon from '../../assets/svg/trash-icon.svg';
import './styles.css';
import { NotesContext } from '../contexts/NotesProvider';

export default function SideBar({ expand }) {
  const { sidebarSelected, handleSidebarChange } = useContext(NotesContext);
  return (
    <div
      className={`sidebar__container ${
        expand ? 'sidebar__container--expanded' : ''
      }`}
    >
      <div className={`sidebar ${expand ? 'sidebar--expanded' : ''}`}>
        <SideBarItem
          active={(sidebarSelected === 'NOTES').toString()}
          icon={lampIcon}
          label="Notes"
          click={handleSidebarChange}
          expand={expand}
        />
        <SideBarItem
          active={(sidebarSelected === 'REMINDERS').toString()}
          icon={bellIcon}
          label="Reminders"
          click={handleSidebarChange}
          expand={expand}
        />
        <SideBarItem
          active="false"
          icon={pencilIcon}
          label="Edit label"
          expand={expand}
        />
        <SideBarItem
          active={(sidebarSelected === 'ARCHIVE').toString()}
          icon={boxIcon}
          label="Archive"
          click={handleSidebarChange}
          expand={expand}
        />
        <SideBarItem
          active={(sidebarSelected === 'TRASH').toString()}
          icon={trashIcon}
          label="Trash"
          click={handleSidebarChange}
          expand={expand}
        />
      </div>
    </div>
  );
}

SideBar.propTypes = {
  expand: PropTypes.bool.isRequired,
};
