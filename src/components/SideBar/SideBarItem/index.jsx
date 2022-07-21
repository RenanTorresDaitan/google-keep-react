import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSideBarItem,
  SideBarButton,
  SideBarLabel,
  SidebarIcon,
} from './styles';

const SideBarItem = ({ active, icon, label, click, expand }) => (
  <StyledSideBarItem
    role="button"
    tabIndex={0}
    onClick={() => click(label.toUpperCase())}
    onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Space'
      ? click(label.toUpperCase())
      : null)}
  >
    <SideBarButton expand={expand} active={active}>
      <SidebarIcon src={icon} />
      <SideBarLabel>{label}</SideBarLabel>
    </SideBarButton>
  </StyledSideBarItem>
);

SideBarItem.defaultProps = {
  active: false,
  click: () => {},
};

SideBarItem.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  click: PropTypes.func,
  expand: PropTypes.bool.isRequired,
};

export default SideBarItem;
