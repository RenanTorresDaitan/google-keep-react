import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
import {
  CompletedItemsArea,
  CompletedItemsBtn,
  CompletedItemsToggle,
  CompletedItemsLabel,
  CompletedItemsList,
  CompletedItemsSeparator,
  StyledToDoItemPlaceholder,
} from './styles';
import { StyledTextarea } from './ToDoItem/styles';

const ToDoItemsContainer = ({ toDoItems, handleDataChange }) => {
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
        .filter((item) => item.checked)
        .map((item) => (
          <ToDoItem
            toDoItem={item}
            key={item.id}
            updateToDoItem={updateToDoItem}
            deleteToDoItem={deleteToDoItem}
          />
        )),
      unchecked: toDoItems
        .filter((item) => !item.checked)
        .map((item) => (
          <ToDoItem
            toDoItem={item}
            key={item.id}
            updateToDoItem={updateToDoItem}
            deleteToDoItem={deleteToDoItem}
            ref={newToDoItemRef.current === item.id ? newToDoItemRef : null}
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
          checked: false,
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
      onClick={() => setShowPlaceHolder(true)}
      tabIndex={0}
      role="button"
      onKeyDown={() => setShowPlaceHolder(true)}
    >
      {items.unchecked}
      {showPlaceHolder && (
        <StyledToDoItemPlaceholder>
          <StyledTextarea
            placeholder="List item"
            tabIndex={0}
            onKeyDown={(e) => createNewToDoItem(e)}
          />
        </StyledToDoItemPlaceholder>
      )}
      {items.checked.length > 0 && (
        <CompletedItemsArea>
          <CompletedItemsSeparator />
          <CompletedItemsToggle
            role="button"
            tabIndex={0}
            onClick={() => setShowCompletedItems((prevState) => !prevState)}
            onKeyDown={() => {}}
          >
            <CompletedItemsBtn show={showCompletedItems} />
            <CompletedItemsLabel>
              {items.checked.length > 1
                ? `${items.checked.length} Completed items`
                : '1 Completed item'}
            </CompletedItemsLabel>
          </CompletedItemsToggle>
          {showCompletedItems && (
            <CompletedItemsList>{items.checked}</CompletedItemsList>
          )}
        </CompletedItemsArea>
      )}
    </div>
  );
};

ToDoItemsContainer.defaultProps = {
  toDoItems: [],
};

ToDoItemsContainer.propTypes = {
  toDoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
  handleDataChange: PropTypes.func.isRequired,
};

export default ToDoItemsContainer;
