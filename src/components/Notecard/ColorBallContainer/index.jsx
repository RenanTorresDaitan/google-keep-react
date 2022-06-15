import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import NoteItemController from '../../../controllers/NoteItemController';

export default function ColorBallContainer({ id, changeToColor }) {
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

  const handleColorChange = (color) => {
    new NoteItemController().changeNoteColor(id, color);
    changeToColor(color);
  };

  const createColorBall = (color) => (
    <span
      aria-label={color}
      className="color-ball"
      role="button"
      tabIndex={0}
      key={color}
      data-color={color}
      onClick={() => handleColorChange(color)}
      onKeyDown={() => handleColorChange(color)}
    />
  );

  return (
    <div className="color-ball__container">
      {colors.map((color) => createColorBall(color))}
    </div>
  );
}

ColorBallContainer.propTypes = {
  id: PropTypes.number.isRequired,
  changeToColor: PropTypes.func.isRequired,
};
