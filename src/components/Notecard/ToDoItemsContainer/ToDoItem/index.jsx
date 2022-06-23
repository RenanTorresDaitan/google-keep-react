import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

function ToDoItem({ id, title, checked, updateToDoItem }) {
  const [toDoData, setToDoData] = useState({
    id,
    title,
    checked,
  });
  const [showText, setShowText] = useState(true);
  const handleToDoData = (data) => {
    const { name, value } = data;
    setToDoData((prevNoteData) => ({
      ...prevNoteData,
      [name]: value,
    }));
  };
  useEffect(() => {
    updateToDoItem(toDoData);
  }, [toDoData]);

  return (
    <div className="to-do-item" data-note-id={toDoData.id}>
      <div
        aria-labelledby="label"
        role="button"
        className="to-do-item-checkbox"
        check={toDoData.checked}
        tabIndex={0}
        onClick={() => {
          handleToDoData({
            name: 'checked',
            value: toDoData.checked === 'true' ? 'false' : 'true',
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
          onClick={() => setShowText(false)}
          onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Space' ? setShowText(true) : null)}
        >
          {toDoData.title}
        </span>
      )}
      {!showText && (
        <textarea
          className="to-do-item-textarea"
          placeholder="List item"
          value={toDoData.title}
          onChange={(event) => {
            handleToDoData({ name: 'title', value: event.target.value });
            if (event.nativeEvent.inputType === 'insertLineBreak') {
              setShowText(true);
            }
          }}
        />
      )}
      <div className="to-do-item-delete" />
    </div>
  );
}

export default ToDoItem;

ToDoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  updateToDoItem: PropTypes.func.isRequired,
};
