import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function ColorBallContainer({ id }) {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'darkblue',
    'purple',
    'pink',
    'brown',
    'gray',
    'default',
  ];

  function handleColorChange() {}

  function createColorBall(color) {
    return (
      <span
        aria-label={color}
        className="color-ball"
        role="button"
        tabIndex={0}
        key={color}
        data-color={color}
        onClick={handleColorChange}
        onKeyDown={handleColorChange}
      />
    );
  }
  return (
    <div className="color-ball__container">
      {colors.map((color) => createColorBall(color))}
    </div>
  );
}

ColorBallContainer.propTypes = {
  id: PropTypes.number.isRequired,
};
