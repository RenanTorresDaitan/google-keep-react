import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.css';

function IconButton({ className, label, handleClick, btnText }) {
  return (
    <div
      role="button"
      className={className}
      aria-label={label}
      data-tooltip-text={label}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => ((e.code === 'Enter' || e.code === 'Space') ? handleClick() : null)}
      style={{ userSelect: 'none' }}
    >
      {btnText}
    </div>
  );
}

export default IconButton;

IconButton.defaultProps = {
  btnText: '',
};

IconButton.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
