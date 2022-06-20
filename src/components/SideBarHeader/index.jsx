import React from 'react';
import PropTypes from 'prop-types';

function SideBarHeader({ notesClass, imageClass, title, subtitle }) {
  return (
    <div className={notesClass}>
      <div className={imageClass} />
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
}

export default SideBarHeader;

SideBarHeader.defaultProps = {
  subtitle: '',
};

SideBarHeader.propTypes = {
  notesClass: PropTypes.string.isRequired,
  imageClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
