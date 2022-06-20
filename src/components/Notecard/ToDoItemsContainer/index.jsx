import React from 'react';
import PropTypes from 'prop-types';
import plusIcon from '../../../assets/svg/notecard/plus-icon.svg';
import ToDoItem from '../../ToDoItem';

function ToDoItemsContainer({ toDoItems }) {
  const checkedToDoItems = toDoItems.map((item) => item.checked);
  const uncheckedToDoItems = toDoItems.map((item) => !item.checked);

  return (
    <div className="note-to-do-items">
      {uncheckedToDoItems.map(({ id, title, checked }) => (
        <ToDoItem id={id} checked={checked} title={title} />
      ))}
      {!toDoItems.length && (
        <div className="to-do-item-placeholder">
          <img className="svg-icon-large" src={plusIcon} alt="" />
          <textarea
            className="to-do-item-textarea"
            placeholder="List item"
            tabIndex={0}
          />
        </div>
      )}
      {checkedToDoItems > 0 && (
        <div className="completed-items-area">
          <div className="completed-items-separator" />
          <div className="completed-items-div">
            <div className="completed-items-btn rotate-90-cw" />
            <span className="completed-items-label">
              {checkedToDoItems.length > 1
                ? `${checkedToDoItems.length} Completed items`
                : '1 Completed item'}
            </span>
          </div>
          <div className="completed-items-list">
            {checkedToDoItems.map(({ id, title, checked }) => (
              <ToDoItem id={id} checked={checked} title={title} />
            ))}
          </div>
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
