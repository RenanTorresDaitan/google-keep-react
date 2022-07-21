import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, label, handleClick, btnText }) => {
  (
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
};

Button.defaultProps = {
  btnText: '',
  handleClick: undefined,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
