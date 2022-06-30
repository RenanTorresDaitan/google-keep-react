import React, { useState } from 'react';
import PropTypes, { number, string } from 'prop-types';
import plusIcon from '../../assets/svg/notecard/plus-icon.svg';
import ToDoItem from './ToDoItem';
import './styles.css';

function ToDoItemsContainer({ toDoItems, handleDataChange }) {
  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);

  const checkedItems = toDoItems.filter((item) => item.checked === 'true');
  const checkedItemsEl = checkedItems.map((item) => (
    <ToDoItem
      key={item.id}
      toDoItem={item}
      updateToDoItem={(td) => handleUpdateToDo(td)}
      deleteToDoItem={(td) => deleteToDoItem(td)}
    />
  ));
  const uncheckedItems = toDoItems.filter((item) => item.checked === 'false');
  const uncheckedItemsEl = uncheckedItems.map((item) => (
    <ToDoItem
      key={item.id}
      toDoItem={item}
      updateToDoItem={(td) => handleUpdateToDo(td)}
      deleteToDoItem={(td) => deleteToDoItem(td)}
    />
  ));
  const handleUpdateToDo = (newItem) => {
    const newToDos = toDoItems.map((oldItem) => {
      if (oldItem.id === newItem.id) return newItem;
      return oldItem;
    });
    handleDataChange(newToDos);
  };
  const deleteToDoItem = (item) => {
    const newToDos = toDoItems.filter((oldItem) => oldItem.id !== item.id);
    handleDataChange(newToDos);
  };

  const createNewToDoItem = (event) => {
    event.preventDefault();
    if (event.keyCode > 60 && event.keyCode < 95) {
      const lastId = toDoItems.sort((a, b) => a.id - b.id);
      let nextId = 1;
      if (lastId.length > 0) {
        nextId = lastId[lastId.length - 1].id + 1;
      }
      handleDataChange([
        ...toDoItems,
        {
          id: nextId,
          title: event.key,
          checked: 'false',
        },
      ]);
    }
  };
  return (
    <div
      className="note-to-do-items"
      onClick={() => setShowPlaceHolder(true)}
      tabIndex={0}
      role="button"
      onKeyDown={() => setShowPlaceHolder(true)}
    >
      {uncheckedItemsEl}
      {showPlaceHolder && (
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
    }),
  ),
  handleDataChange: PropTypes.func.isRequired,
};
