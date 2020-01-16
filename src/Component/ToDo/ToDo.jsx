import React from "react";
import styles from "./ToDo.module.scss";
import Input from "../Shared/Input";
import Button from "../Shared/Button";
import ToDoList from "./ToDoList/ToDoList";
/**
 * This component for render todo form todo list
 */
class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeFilter: 0,
            index: -1,
            todo:"",
            status: true,
            isCompleted: false,
            todoDataArray: [{todo:"test",status:true,isCompleted:false}]
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    addTodo = (e ,index)=> {        
        e.preventDefault();                    
        let todoDataArray = [...this.state.todoDataArray]; 
        if(index!==-1){
            //update todo
            for(let i=0; i < todoDataArray.length; i++){
                if(i===index){
                    todoDataArray[i].todo = this.state.todo;
                }
            }
            this.setState(
                {
                    todoDataArray: todoDataArray
                },() =>  this.setState(
                    {
                        todo: "",
                        index: -1
                    }
                )            
            );
        }else{
            //add todo
            todoDataArray.push(
                {
                    todo: this.state.todo,
                    status: this.state.status,
                    isCompleted: this.state.isCompleted
                }
            );
            this.setState(
                {
                    todoDataArray: todoDataArray
                },() => this.setState(
                    {
                        todo: "",
                        index: -1
                    }
                )
            );
        }  
    }
    // get to do details
    getToDoDetail = (e, index) => {        
        this.setState({
            index: index,
            todo: this.state.todoDataArray[index].todo
        })
    } 
    
    render () {   
        const props = {
            inputLabel: "Todo",
            inputType: "text",
            inputName: "todo",
            isRequired: true,
            inputValue: this.state.todo,
            handleChange: this.handleChange,
            inputMaxLength: "30"
        }
        const buttonProps = {
            buttonType: "submit",
            buttonName: "Add Todo",
            buttonClass: "buttonClass"             
        }
        return (            
            <div className={styles.todoContainer}>                                              
                <div className={styles.todoForm}>
                    <form onSubmit={e =>this.addTodo(e, this.state.index)} className={styles.formInline}>
                        <Input
                        {...props}
                        /> 
                        <Button
                            {...buttonProps}                                                         
                        />    
                    </form>
                </div>
                <ToDoList 
                    toDos={this.state.todoDataArray}
                    handleOnClick={this.getToDoDetail}
                    updateToDos={(arr)=>this.setState({todoDataArray:arr})}
                />
            </div>
        );
    }
}
export default ToDo;