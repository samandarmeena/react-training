import React from 'react';
import PropTypes from 'prop-types';
import ToDoActions from './ToDoActions';
import styles from './ToDoList.module.scss';

/**
 * ToDoList component
 * renders ToDoList container
 * @param {array} todoItems
 * @param {string} filterBy
 * @param {func} toggleFixed
 * @param {func} removeToDo
 * @return Element
 */
const ToDoList = (props) => {
  const { todoItems, filterBy, toggleFixed, removeToDo } = props;
  return (
    <ul className={styles.toDoList}>
      {todoItems.map((todoItem) => {
        return todoItem.status === filterBy ? (
          <li key={todoItem.id} className={styles.listItems}>
            <span className={styles.toDoTitle}>{todoItem.title}</span>
            <span className={styles.toDoActions}>
              <ToDoActions
                itemId={todoItem.id}
                itemStatus={todoItem.status}
                handleToggleFixed={toggleFixed}
                handleRemoveToDo={removeToDo}
              />
            </span>
          </li>
        ) : (
          ''
        );
      })}
    </ul>
  );
};

// proptype validations for props
ToDoList.propTypes = {
  todoItems: PropTypes.array.isRequired,
  filterBy: PropTypes.string.isRequired,
  toggleFixed: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired
};

export default ToDoList;
