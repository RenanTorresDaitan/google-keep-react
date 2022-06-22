import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

function ToDoItem({ id, title, checked, update }) {
  const [toDoItemState, setToDoItemState] = useState({ id, title, checked });
  function handleChange(newState) {
    const { name, value } = newState;
    setToDoItemState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="to-do-item" data-note-id={toDoItemState.id}>
      <div
        aria-labelledby="label"
        role="button"
        className="to-do-item-checkbox"
        check={`${toDoItemState.checked}`}
        tabIndex={0}
        onClick={() => {
          handleChange({ name: 'checked', value: !toDoItemState.checked });
          update(toDoItemState);
        }}
        onKeyDown={(e) => {}}
      />
      <label htmlFor="to-do-item-checbox" className="to-do-item-label">
        {toDoItemState.title}
      </label>
      <textarea
        className="to-do-item-textarea"
        placeholder="List item"
        // value={title}
      />
      <div className="to-do-item-delete" />
    </div>
  );
}

export default ToDoItem;

ToDoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
};
/*  element
    .querySelector('.to-do-item-checkbox')
    .addEventListener('click', (event) => {
      event.stopPropagation();
      view.handleChange(noteId, toDoItem.id);
    });
  element
    .querySelector('.to-do-item-label')
    .addEventListener('click', (event) => {
      event.stopPropagation();
      view.changeToDoItemLabel(noteId, toDoItem.id);
    });
  element
    .querySelector('.to-do-item-delete')
    .addEventListener('click', (event) => {
      event.stopPropagation();
      view.deleteToDoItem(noteId, toDoItem.id);
    });
  return element;
*/
