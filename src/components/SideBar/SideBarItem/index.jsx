import React from 'react';
import PropTypes from 'prop-types';

function SideBarItem({ active, icon, label }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="sidebar-item"
      active={active}
    >
      <div className="sidebar-item__icon">
        <img alt="" className="svg-icon-large" src={icon} />
        <span className="sidebar-item__label">{label}</span>
      </div>
    </div>
  );
}

SideBarItem.defaultProps = {
  active: 'false',
};

SideBarItem.propTypes = {
  active: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SideBarItem;
