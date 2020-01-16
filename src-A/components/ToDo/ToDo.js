import React, { Component } from 'react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import styles from './ToDo.module.scss';
import Button from '../Shared/Button';

/**
 * ToDo component
 * renders ToDo container
 * @return Element
 */
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { todoTitle: '', todos: [], filterBy: 'New' };
  }

  /** handle title value  */
  handleChange = (event) => {
    this.setState({ todoTitle: event.target.value });
  };

  /** save new todo */
  saveToDo = () => {
    if (this.state.todoTitle.trim()) {
      const newToDo = {
        id: this.state.todos.length + 1,
        title: this.state.todoTitle,
        status: 'New'
      };
      this.setState(
        { todos: [...this.state.todos, newToDo], filterBy: 'New' },
        () => {
          this.setState({ todoTitle: '' });
        }
      );
    }
  };

  /** remove a todo */
  removeToDo = (removeId) => {
    const newToDo = this.state.todos.filter((item) => item.id !== removeId);
    this.setState({
      todos: newToDo
    });
  };

  /** mark as completed/new */
  toggleFixed = (markId) => {
    const newToDo = this.state.todos.map((item) => {
      return item.id === markId
        ? {
            id: item.id,
            title: item.title,
            status: item.status === 'New' ? 'Completed' : 'New'
          }
        : item;
    });
    this.setState({
      todos: newToDo
    });
  };

  /** toggle between new and completed */
  toggleFilter = () => {
    let filterBy = this.state.filterBy === 'New' ? 'Completed' : 'New';
    this.setState({ filterBy: filterBy });
  };

  render() {
    return (
      <div className={styles.toDoContainer}>
        <div className={styles.addToDo}>
          <AddToDo
            todoTitle={this.state.todoTitle}
            handleChange={this.handleChange}
            onSave={this.saveToDo}
          />
        </div>
        {this.state.todos.length ? (
          <div className={styles.toDoListContainer}>
            <div className={styles.filterButton}>
              <Button
                buttonName="newToDO"
                buttonId="newToDO"
                buttonSize="buttonSmall"
                buttonStyle={
                  this.state.filterBy === 'New'
                    ? 'buttonPrimary'
                    : 'buttonSuccess'
                }
                addOnClass="buttonFilterBy"
                buttonToolTip="Toggle status"
                buttonTitle={this.state.filterBy}
                clickEvent={this.toggleFilter}
              />
            </div>
            <ToDoList
              todoItems={this.state.todos}
              removeToDo={this.removeToDo}
              toggleFixed={this.toggleFixed}
              filterBy={this.state.filterBy}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default ToDo;
