import React from 'react';
import PropTypes from 'prop-types';
import { ColorBall, StyledColorBallContainer } from './styles';

const ColorBallContainer = ({ changeToColor }) => {
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
      tabIndex={0}
      key={color}
      data-color={color}
      onClick={() => changeToColor(color)}
    />
  );

  return (
    <StyledColorBallContainer>
      {colors.map((color) => createColorBall(color))}
    </StyledColorBallContainer>
  );
};

export default ColorBallContainer;

ColorBallContainer.propTypes = {
  changeToColor: PropTypes.func.isRequired,
};
