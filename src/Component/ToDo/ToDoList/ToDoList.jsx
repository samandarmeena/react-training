import React from "react";
import PropTypes from "prop-types";
import styles from "./ToDoList.module.scss";
import ToDoElements from "../ToDoElements";
import ToDoFilter from "../ToDoFilter";
/**
 * This component for render todo list
 * @param {array} toDos // array of objects
 */
class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toDos: this.props.toDos,
            activeFilter: 0,
            todosArr :[]
        }        
    }
    componentDidMount(){        
        this.TodoFilter("",0);
    }
    //receive props
    componentDidUpdate(prevProps, prevState) {
        if (this.props.toDos.length !== prevState.toDos.length) { 
            this.setState({
                toDos: prevProps.toDos
            },()=>{
                this.TodoFilter("",0);
            });                                  
        }
    }
    // update todo
    updateTodo = (e, index) => { 
        this.props.handleOnClick(e,index);        
    };         
    // remove todo
    removeTodo = (todo) =>{
        console.log(todo);
      
        const {toDos,updateToDos} = this.props;
        const affterDelete = toDos.filter(item => {
            return item.todo !== todo;
        });
        updateToDos(affterDelete);
    }  
    // update todo status
    updateTodoStatus = (e, index, status) => {     
         
        let newTodoDataArray = [...this.state.toDos]; 
        for(let i = 0; i < newTodoDataArray.length;i++){
            if(i===index){
                newTodoDataArray[i].status = !status;
            }
        }
        this.setState({
            toDos: newTodoDataArray
        },() => {
            this.TodoFilter("",0);
        });
    }
    // update todo complete status
    updateTodoCompleteStatus = (e, index, status) => {       
        let newComTodoDataArray = [...this.state.toDos]; 
        for(let i = 0; i < this.state.toDos.length;i++){
            if(i===index){
                newComTodoDataArray[i].isCompleted = !status;
            }
        }
        this.setState({
            toDos: newComTodoDataArray
        });
    }
    //todo filter
    TodoFilter = (e, filter) => {        
        let newFilterArr = [...this.state.toDos];
        let filterData = [];
        if (filter === 0){
            // filter get record all
            filterData = newFilterArr;
        } else if (filter === 1){
            // filter get active record
            filterData=this.props.toDos.filter(function(todo){
                return todo.status !== false;                
            });
        } else if (filter === 2){
            // filter get is completed record
            filterData = this.props.toDos.filter(function(todo){
                return todo.isCompleted !== false;
            });
        }        
        this.setState({
            todosArr: filterData,
            activeFilter: filter
        });
    }
    render () {
        const {activeFilter,todosArr} = this.state;        
        return (            
            <div className={styles.todoList}>
                <ToDoFilter 
                handleOnClick={this.TodoFilter}
                activeFilter={activeFilter}/>
                <table>
                    <thead>
                        <tr>
                            <th>Todo</th>
                            <th>Status</th>
                            <th>Is Completed</th>
                            <th>Action</th>
                        </tr>                        
                    </thead>
                    <tbody>                         
                        {todosArr.map((item,itemKey) => {
                            return (
                                <ToDoElements 
                                index={itemKey}
                                toDoTitle={item.todo}
                                toDoStatus={item.status}
                                completeToDoStatus={item.isCompleted}
                                updateToDoStatus={this.updateTodoStatus}
                                updateToDoCompleteStatus={this.updateTodoCompleteStatus}
                                updateToDo={this.updateTodo}
                                removeToDo={()=>this.removeTodo(item.todo)}
                                key={itemKey}
                                />                            
                            );
                        })
                        } 
                    </tbody>
                </table>
            </div>            
        ); 
    };
}
ToDoList.defaultProps = {
    updateToDos: () => {},
    toDos: [],
    handleOnClick: () => {}
}
ToDoList.propTypes = {
    toDos: PropTypes.array,
    updateToDos: PropTypes.func.isRequired,
    handleOnClick: PropTypes.func.isRequired
}
export default ToDoList;