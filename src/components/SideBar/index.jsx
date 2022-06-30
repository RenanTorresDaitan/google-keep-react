import React from 'react';
import PropTypes from 'prop-types';

import SideBarItem from './SideBarItem';
import lampIcon from '../../assets/svg/lamp-icon.svg';
import bellIcon from '../../assets/svg/bell-icon.svg';
import pencilIcon from '../../assets/svg/pencil-icon.svg';
import boxIcon from '../../assets/svg/box-icon.svg';
import trashIcon from '../../assets/svg/trash-icon.svg';
import './styles.css';

export default function SideBar({ active, changeSidebar, expand }) {
  return (
    <div className={`sidebar__container ${expand ? 'sidebar__container--expanded' : ''}`}>
      <div className={`sidebar ${expand ? 'sidebar--expanded' : ''}`}>
        <SideBarItem
          active={(active === 'NOTES').toString()}
          icon={lampIcon}
          label="Notes"
          click={changeSidebar}
          expand={expand}
        />
        <SideBarItem
          active={(active === 'REMINDERS').toString()}
          icon={bellIcon}
          label="Reminders"
          click={changeSidebar}
          expand={expand}
        />
        <SideBarItem
          active="false"
          icon={pencilIcon}
          label="Edit label"
          expand={expand}
        />
        <SideBarItem
          active={(active === 'ARCHIVE').toString()}
          icon={boxIcon}
          label="Archive"
          click={changeSidebar}
          expand={expand}
        />
        <SideBarItem
          active={(active === 'TRASH').toString()}
          icon={trashIcon}
          label="Trash"
          click={changeSidebar}
          expand={expand}
        />
      </div>
    </div>
  );
}

SideBar.propTypes = {
  changeSidebar: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  expand: PropTypes.bool.isRequired,
};
