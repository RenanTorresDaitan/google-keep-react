import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function InputField({ text, placeHolder, className, handleChange, visible }) {
  const [showText, setShowText] = useState(visible);
  const [inputData, setInputData] = useState(text);
  const textarea = useRef();
  useEffect(() => {
    handleChange(inputData);
  }, [text, inputData]);
  const handleShowText = () => {
    setShowText((prevState) => !prevState);
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
        <span>{inputData}</span>
      ) : (
        <textarea
          className={`${className}-textarea`}
          id={`${className}-textarea`}
          ref={textarea}
          rows="1"
          maxLength="999"
          placeholder={placeHolder}
          style={{ height: '1rem' }}
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
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
