import React from 'react';
import PropTypes from 'prop-types';

function SideBarItem({ active, icon, label, click }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="sidebar-item"
      active={active}
      onClick={() => click(label.toUpperCase())}
      onKeyDown={(e) => ((e.code === 'Enter' || e.code === 'Space') ? click(label.toUpperCase()) : null)}
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
  click: () => {},
};

SideBarItem.propTypes = {
  active: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  click: PropTypes.func,
};

export default SideBarItem;
