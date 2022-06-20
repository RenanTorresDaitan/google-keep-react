import React from 'react';
import PropTypes from 'prop-types';

function ToDoItem({ id, title, checked }) {
  return <div>ToDoItem</div>;
}

export default ToDoItem;

ToDoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};
/*
static createToDoItem(noteId, toDoItem, view) {
  const element = document.createElement('div');
  element.setAttribute('className', 'to-do-item');
  element.setAttribute('data-item-id', toDoItem.id);
  element.innerHTML = `
      <div className="to-do-item-checkbox" checked="${toDoItem.isChecked}"></div>
      <label className="to-do-item-label">${toDoItem.label}</label>
      <textarea className="to-do-item-textarea hide"
      placeholder="List item">${toDoItem.label}</textarea>
      <div className="to-do-item-delete"></div>
    `;
  element
    .querySelector('.to-do-item-checkbox')
    .addEventListener('click', (event) => {
      event.stopPropagation();
      view.toggleChecked(noteId, toDoItem.id);
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
