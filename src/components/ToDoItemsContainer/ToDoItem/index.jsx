import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
// import '../styles.css';
import { StyledLabel, StyledCheckbox, StyledTextarea, StyledToDoItem, ToDoItemDeleteBtn } from '../styles';

function ToDoItem({ toDoItem, updateToDoItem, deleteToDoItem }, ref) {
  const [showText, setShowText] = useState(true);
  const textarea = useRef();
  const { id, title, checked } = toDoItem;
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
    <StyledToDoItem data-note-id={id}>
      <StyledCheckbox
        aria-labelledby="label"
        role="button"
        check={checked}
        tabIndex={0}
        onClick={() => {
          updateToDoItem({
            id,
            title,
            checked: checked === 'true' ? 'false' : 'true',
          });
        }}
        onKeyDown={(e) => {}}
        name="checkbox"
      />
      {showText && (
        <StyledLabel
          role="button"
          check={checked}
          htmlFor="checkbox"
          tabIndex={0}
          ref={ref}
          onClick={() => {
            setShowText(false);
          }}
          onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Space' ? setShowText(false) : null)}
        >
          {title}
        </StyledLabel>
      )}
      {!showText && (
        <StyledTextarea
          placeholder="List item"
          value={title}
          ref={textarea}
          onChange={(event) => {
            updateToDoItem({ id, title: event.target.value, checked });
          }}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              e.preventDefault();
              setShowText(true);
              updateToDoItem({ id, title, checked });
            }
          }}
        />
      )}
      <ToDoItemDeleteBtn
        role="button"
        tabIndex={0}
        onClick={() => deleteToDoItem(toDoItem)}
        onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Space'
          ? deleteToDoItem(toDoItem)
          : null)}
        label="delete note"
      />
    </StyledToDoItem>
  );
}
const toDoItemRef = forwardRef(ToDoItem);
export default toDoItemRef;

ToDoItem.propTypes = {
  toDoItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    checked: PropTypes.string.isRequired,
  }).isRequired,
  updateToDoItem: PropTypes.func.isRequired,
  deleteToDoItem: PropTypes.func.isRequired,
};
