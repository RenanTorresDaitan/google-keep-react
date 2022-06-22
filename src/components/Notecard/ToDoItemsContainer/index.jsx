import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import plusIcon from '../../../assets/svg/notecard/plus-icon.svg';
import ToDoItem from './ToDoItem';
import './styles.css';

function ToDoItemsContainer({ toDoItems, updateNotes }) {
  const [noteToDoItems, setNoteToDoItems] = useState(toDoItems);
  const [showCompletedItems, setShowCompletedItems] = useState(true);
  const checkedToDoItems = useRef(noteToDoItems.filter((item) => item.checked));
  const uncheckedToDoItems = useRef(
    noteToDoItems.filter((item) => !item.checked),
  );
  useEffect(() => {
    checkedToDoItems.current = noteToDoItems.filter((item) => item.checked);
    uncheckedToDoItems.current = noteToDoItems.filter((item) => !item.checked);
  }, [toDoItems, noteToDoItems]);

  const handleUpdate = (updatedItem) => {
    console.log(updatedItem);
    setNoteToDoItems((prevState) => {
      const newState = prevState.map((item) => {
        if (item.id === updatedItem.id) return updatedItem;
        return item;
      });
      return newState;
    });
  };
  return (
    <div className="note-to-do-items">
      {uncheckedToDoItems.current.length > 0
        && uncheckedToDoItems.current.map(({ id, title, checked }) => (
          <ToDoItem
            key={id}
            id={id}
            checked={checked}
            title={title}
            update={(item) => {
              handleUpdate(item);
              updateNotes(true);
            }}
          />
        ))}
      {!noteToDoItems.length && (
        <div className="to-do-item-placeholder">
          <img className="svg-icon-large" src={plusIcon} alt="" />
          <textarea
            className="to-do-item-textarea"
            placeholder="List item"
            tabIndex={0}
          />
        </div>
      )}
      {checkedToDoItems.current.length > 0 && (
        <div className="completed-items-area">
          <div className="completed-items-separator" />
          <div
            role="button"
            tabIndex={0}
            className="completed-items-div"
            onClick={() => setShowCompletedItems((prevState) => !prevState)}
            onKeyDown={() => {}}
          >
            <div className={`completed-items-btn ${showCompletedItems ? 'rotate-90-cw' : ''}`} />
            <span className="completed-items-label">
              {checkedToDoItems.current.length > 1
                ? `${checkedToDoItems.current.length} Completed items`
                : '1 Completed item'}
            </span>
          </div>
          {showCompletedItems && (
            <div className="completed-items-list">
              {checkedToDoItems.current.length > 0
                && checkedToDoItems.current.map(({ id, title, checked }) => (
                  <ToDoItem
                    key={id}
                    id={id}
                    checked={checked}
                    title={title}
                    update={(item) => handleUpdate(item)}
                  />
                ))}
            </div>
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
  toDoItems: PropTypes.arrayOf(ToDoItem),
  updateNotes: PropTypes.func.isRequired,
};

/*
        `;
    this.uncheckedItems.forEach((item) => element.insertBefore(
      ToDoItemContainer.createToDoItem(this.noteItem.id, item, this.noteItemView),
      element.querySelector('.to-do-item-placeholder'),
    ));
    this.checkedItems.forEach((item) => element
      .querySelector('.completed-items-list')
      .append(ToDoItemContainer.createToDoItem(this.noteItem.id, item, this.noteItemView)));
    element
      .querySelector('.to-do-item-placeholder .to-do-item-textarea')
      .addEventListener('keydown', (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.noteItemView.createNewToDoItem(this.noteItem.id, event);
      });
    element
      .querySelector('.to-do-item-placeholder .to-do-item-textarea')
      .addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
    element
      .querySelector('.completed-items-div')
      .addEventListener('click', (event) => {
        event.stopPropagation();
        this.noteItemView.toggleCompletedItemsList();
      });
    return element;
  }

  update() {
    this.uncheckedItems = [];
    this.checkedItems = [];
    this.toDoItems.forEach((item) => {
      if (!item.isChecked) this.uncheckedItems.push(item);
      else this.checkedItems.push(item);
    });
    this._element = this._template();
  }

  }
}
*/
