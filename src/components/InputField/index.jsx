import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const InputField = ({ className, text, placeHolder, handleChange, visible }) => {
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
  const handleTextChange = (e) => {
    setInput(e.target.value);
    handleChange(e.target.value);
  };

  useEffect(() => {
    if (!showText) {
      const textValue = textarea.current.value;
      textarea.current.focus();
      textarea.current.value = '';
      textarea.current.value = textValue;
    }
  }, [showText]);

  return (
    <div
      role="textbox"
      className={className}
      onClick={handleShowText}
      tabIndex={0}
      onKeyDown={() => {}}
    >
      {showText ? (
        <span>{input}</span>
      ) : (
        <textarea
          ref={textarea}
          maxLength="999"
          placeholder={placeHolder}
          value={input}
          onBlur={(e) => {
            handleTextChange(e);
            handleShowText();
          }}
          onChange={handleTextChange}
        />
      )}
    </div>
  );
};

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
export default InputField;
