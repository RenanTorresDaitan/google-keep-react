/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes, { number, string } from 'prop-types';
import plusIcon from '../../../assets/svg/notecard/plus-icon.svg';
import ToDoItem from './ToDoItem';
import './styles.css';

function ToDoItemsContainer({ toDoItems, updateToDoItems }) {
  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const [toDoItemsData, setToDoItemsData] = useState(toDoItems);

  const checkedItems = toDoItemsData.filter((item) => item.checked === 'true');
  const checkedItemsEl = checkedItems.map((item) => {
    const { id, title, checked } = item;
    return (
      <ToDoItem
        key={id}
        id={id}
        checked={checked}
        title={title}
        updateToDoItem={(td) => handleUpdateToDo(td)}
      />
    );
  });
  const uncheckedItems = toDoItemsData.filter(
    (item) => item.checked === 'false'
  );
  const uncheckedItemsEl = uncheckedItems.map((item, index) => {
    const { id, title, checked } = item;
    return (
      <ToDoItem
        key={id}
        id={id}
        checked={checked}
        title={title}
        updateToDoItem={(td) => handleUpdateToDo(td)}
      />
    );
  });
  const handleUpdateToDo = (newItem) => {
    const newToDos = toDoItemsData.map((oldItem) => {
      if (oldItem.id === newItem.id) return newItem;
      return oldItem;
    });
    setToDoItemsData(newToDos);
  };

  const createNewToDoItem = (event) => {
    if (event.keyCode > 60 && event.keyCode < 95) {
      setToDoItemsData((prevTodos) => [
        ...prevTodos,
        { id: toDoItemsData.length, title: event.key, checked: 'false' },
      ]);
    }
  };

  useEffect(() => {
    updateToDoItems(toDoItemsData);
  }, [toDoItemsData]);

  return (
    <div className="note-to-do-items">
      {uncheckedItemsEl}
      {!uncheckedItems.length && (
        <div className="to-do-item-placeholder">
          <img className="svg-icon-large" src={plusIcon} alt="" />
          <textarea
            className="to-do-item-textarea"
            placeholder="List item"
            tabIndex={0}
            onKeyDown={createNewToDoItem}
          />
        </div>
      )}
      {checkedItems.length > 0 && (
        <div className="completed-items-area">
          <div className="completed-items-separator" />
          <div
            role="button"
            tabIndex={0}
            className="completed-items-div"
            onClick={() => setShowCompletedItems((prevState) => !prevState)}
            onKeyDown={() => {}}
          >
            <div
              className={`completed-items-btn ${
                showCompletedItems ? 'rotate-90-cw' : ''
              }`}
            />
            <span className="completed-items-label">
              {checkedItems.length > 1
                ? `${checkedItems.length} Completed items`
                : '1 Completed item'}
            </span>
          </div>
          {showCompletedItems && (
            <div className="completed-items-list">{checkedItemsEl}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default ToDoItemsContainer;

ToDoItemsContainer.defaultProps = {
  toDoItems: [],
};

ToDoItemsContainer.propTypes = {
  toDoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: number,
      title: string,
      checked: string,
    })
  ),
  updateToDoItems: PropTypes.func.isRequired,
};
