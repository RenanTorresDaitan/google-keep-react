import React from 'react';

import SideBarItem from './SideBarItem';
import lampIcon from '../../assets/svg/lamp-icon.svg';
import bellIcon from '../../assets/svg/bell-icon.svg';
import pencilIcon from '../../assets/svg/pencil-icon.svg';
import boxIcon from '../../assets/svg/box-icon.svg';
import trashIcon from '../../assets/svg/trash-icon.svg';
import './styles.css';

export default function SideBar() {
  return (
    <div className="sidebar__container">
      <SideBarItem active="true" icon={lampIcon} label="Notes" />
      <SideBarItem icon={bellIcon} label="Reminders" />
      <SideBarItem icon={pencilIcon} label="Edit label" />
      <SideBarItem icon={boxIcon} label="Archive" />
      <SideBarItem icon={trashIcon} label="Trash" />
    </div>
  );
}
