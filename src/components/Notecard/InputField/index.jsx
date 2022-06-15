import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputField({ text, className, handleShowDoneBtn }) {
  const [displayedText, setDisplayedText] = useState(text);
  const handleTitleChange = (event) => {
    setDisplayedText(event.target.value);
  };

  const handleShowText = (event) => {
    setShowText((prevState) => !prevState);
  };

  const [showText, setShowText] = useState(true);
  return (
    <div
      role="textbox"
      className={className}
      onKeyDown={handleShowDoneBtn}
      tabIndex={0}
      onClick={handleShowText}
    >
      {showText && <span>{displayedText}</span>}
      {!showText && (
        <textarea
          name="note-title"
          className="notecard__title-textarea"
          id="title-textarea"
          rows="1"
          maxLength="999"
          placeholder="Title"
          style={{ height: '1rem' }}
          value={displayedText}
          onChange={handleTitleChange}
        />
      )}
    </div>
  );
}

export default InputField;

InputField.propTypes = {
  text: PropTypes.string.isRequired,
  handleShowDoneBtn: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
