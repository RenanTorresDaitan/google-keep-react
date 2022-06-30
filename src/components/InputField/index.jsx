import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function InputField({ text, placeHolder, className, handleChange, visible }) {
  const [showText, setShowText] = useState(visible);
  const [input, setInput] = useState(text);
  const textarea = useRef();
  const handleShowText = () => {
    if (input === '') {
      setShowText(false);
    } else {
      setShowText((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (!showText) {
      textarea.current.focus();
      textarea.current.setSelectionRange(
        textarea.current.value.length,
        textarea.current.value.length,
      );
    }
  }, [showText]);

  return (
    <div
      className={className}
      role="textbox"
      onClick={handleShowText}
      tabIndex={0}
      onKeyDown={() => {}}
    >
      {showText ? (
        <span>{input}</span>
      ) : (
        <textarea
          className={`${className}-textarea`}
          id={`${className}-textarea`}
          ref={textarea}
          rows="1"
          maxLength="999"
          placeholder={placeHolder}
          style={{ height: '1rem' }}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            handleChange(e.target.value);
          }}
        />
      )}
    </div>
  );
}

export default InputField;
InputField.defaultProps = {
  visible: true,
};

InputField.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};
