import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Shared/Input';
import Button from '../../Shared/Button';
import styles from './AddToDo.module.scss';

/**
 * AddToDo component
 * renders AddToDo container
 * @param {string} todoTitle
 * @param {func} handleChange
 * @param {func} onSave
 * @return Element
 */
const AddToDo = (props) => {
  const { todoTitle, handleChange, onSave } = props;
  return (
    <div className={styles.welcomeBox}>
      <div className={styles.title}>Welcome!</div>
      <div className={styles.message}>
        To get started, add some items to your list.
      </div>
      <div className={styles.addToDo}>
        <Input
          inputType="text"
          inputName="todoTitle"
          inputId="todoTitle"
          inputPlaceholder="Enter here"
          inputValue={todoTitle}
          changeEvent={handleChange}
        />
        <Button
          buttonName="saveToDo"
          buttonId="saveToDo"
          buttonTitle="Add New"
          clickEvent={onSave}
          buttonToolTip="Add ToDo"
          addOnClass="saveToDoBtn"
        />
      </div>
    </div>
  );
};

// proptype validations for props
AddToDo.propTypes = {
  todoTitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default AddToDo;
