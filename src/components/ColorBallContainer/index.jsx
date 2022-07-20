import React from 'react';
import PropTypes from 'prop-types';
import { ColorBall, StyledColorBallContainer } from './styles';

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
    <ColorBall
      aria-label={color}
      role="button"
      tabIndex={0}
      key={color}
      data-color={color}
      onClick={() => changeToColor(color)}
      onKeyDown={(e) => ((e.code === 'Enter' || e.code === 'Space') ? changeToColor(color) : null)}
    />
  );

  return (
    <StyledColorBallContainer>
      {colors.map((color) => createColorBall(color))}
    </StyledColorBallContainer>
  );
}

ColorBallContainer.propTypes = {
  changeToColor: PropTypes.func.isRequired,
};
