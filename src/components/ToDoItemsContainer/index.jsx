import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import PropTypes, { number, string } from 'prop-types';
import plusIcon from '../../assets/svg/notecard/plus-icon.svg';
import ToDoItem from './ToDoItem';
import './styles.css';

function ToDoItemsContainer({ toDoItems, handleDataChange }) {
  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);
  const newToDoItemRef = useRef(null);

  const updateToDoItem = useCallback(
    (newItem) => {
      const newToDos = toDoItems.map((oldItem) => {
        if (oldItem.id === newItem.id) return newItem;
        return oldItem;
      });
      handleDataChange(newToDos);
    },
    [handleDataChange, toDoItems],
  );
  const deleteToDoItem = useCallback(
    (item) => {
      const newToDos = toDoItems.filter((oldItem) => oldItem.id !== item.id);
      handleDataChange(newToDos);
    },
    [handleDataChange, toDoItems],
  );

  const items = useMemo(
    () => ({
      checked: toDoItems
        .filter((item) => item.checked === 'true')
        .map((item) => (
          <ToDoItem
            toDoItem={item}
            key={item.id}
            updateToDoItem={updateToDoItem}
            deleteToDoItem={deleteToDoItem}
          />
        )),
      unchecked: toDoItems
        .filter((item) => item.checked === 'false')
        .map((item) => (
          <ToDoItem
            toDoItem={item}
            key={item.id}
            updateToDoItem={updateToDoItem}
            deleteToDoItem={deleteToDoItem}
            ref={
              newToDoItemRef.current === item.id ? newToDoItemRef : null
            }
          />
        )),
    }),
    [toDoItems, updateToDoItem, deleteToDoItem],
  );

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
      newToDoItemRef.current = nextId;
    }
  };

  useEffect(() => {
    if (newToDoItemRef.current !== null) {
      newToDoItemRef.current.click();
      newToDoItemRef.current = null;
    }
  }, [items]);

  return (
    <div
      className="note-to-do-items"
      onClick={() => setShowPlaceHolder(true)}
      tabIndex={0}
      role="button"
      onKeyDown={() => setShowPlaceHolder(true)}
    >
      {items.unchecked}
      {showPlaceHolder && (
        <div className="to-do-item-placeholder">
          <img className="svg-icon-large" src={plusIcon} alt="" />
          <textarea
            className="to-do-item-textarea"
            placeholder="List item"
            tabIndex={0}
            onKeyDown={(e) => createNewToDoItem(e)}
          />
        </div>
      )}
      {items.checked.length > 0 && (
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
              {items.checked.length > 1
                ? `${items.checked.length} Completed items`
                : '1 Completed item'}
            </span>
          </div>
          {showCompletedItems && (
            <div className="completed-items-list">{items.checked}</div>
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
