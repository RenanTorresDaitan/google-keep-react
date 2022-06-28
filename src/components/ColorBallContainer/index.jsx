import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function ColorBallContainer({ changeToColor }) {
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

  const createColorBall = (color) => (
    <span
      aria-label={color}
      className="color-ball"
      role="button"
      tabIndex={0}
      key={color}
      data-color={color}
      onClick={() => changeToColor(color)}
      onKeyDown={(e) => ((e.code === 'Enter' || e.code === 'Space') ? changeToColor(color) : null)}
    />
  );

  return (
    <div className="color-ball__container">
      {colors.map((color) => createColorBall(color))}
    </div>
  );
}

ColorBallContainer.propTypes = {
  changeToColor: PropTypes.func.isRequired,
};
