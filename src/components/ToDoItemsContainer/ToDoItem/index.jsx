import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../styles.css';

const StyledToDoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.3125rem 0 0.875rem;
`;

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
      <div
        aria-labelledby="label"
        role="button"
        className="to-do-item-checkbox"
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
        <span
          role="button"
          htmlFor="checkbox"
          className="to-do-item-label"
          tabIndex={0}
          ref={ref}
          onClick={() => {
            setShowText(false);
          }}
          onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Space' ? setShowText(false) : null)}
        >
          {title}
        </span>
      )}
      {!showText && (
        <textarea
          className="to-do-item-textarea"
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
      <div
        className="to-do-item-delete"
        role="button"
        tabIndex={0}
        name="delete-btn"
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
