import React from "react";
import PropTypes from "prop-types";
import Text from "../../Shared/Text";
import ToDoStatus from "../ToDoStatus";
import CompleteToDoStatus from "../CompleteToDoStatus";
import ToDoAction from "../ToDoAction";
/**
 * 
 * This function for ToDo Elements row in table
 * @param {number} index
 * @param {string} toDoTitle
 * @param {bool} toDoStatus
 * @param {bool} completeToDoStatus
 * @param {func} updateToDoStatus
 * @param {func} updateToDoCompleteStatus
 * @param {func} updateToDo
 * @param {func} removeToDo  
 */
const ToDoElements = props => {
    const {
        index,
        toDoTitle,
        toDoStatus,
        completeToDoStatus,
        updateToDoStatus,
        updateToDoCompleteStatus,
        updateToDo,
        removeToDo
    } = props;
    return (
        <tr>                                
            <td><Text title={toDoTitle} /></td>
            <td>
                <ToDoStatus 
                  toDoStatus={toDoStatus}  
                  handleOnClick={updateToDoStatus}
                  index={index}
                />
            </td>
            <td>
                <CompleteToDoStatus
                    completeToDoStatus={completeToDoStatus}
                    handleOnClick={updateToDoCompleteStatus}
                    index={index}
                />                
            </td>
            <td>
                <ToDoAction
                    handleOnClickUpdateToDoStatus={updateToDo}
                    handleOnClickRemoveToDoStatus={removeToDo}
                    index={index}
                /> 
            </td>
        </tr>
    );
}
ToDoElements.defaultProps = {
    index: 0,
    toDoTitle: "",
    toDoStatus: true,
    CompleteToDoStatus: false,
    updateToDoStatus: () => {},
    updateToDoCompleteStatus: () => {},
    updateToDo: () => {},
    removeToDo: () => {}
}
ToDoElements.propstypes = {
    index: PropTypes.number.isRequired,
    toDoTitle: PropTypes.string.isRequired,
    toDoStatus: PropTypes.bool.isRequired,
    completeToDoStatus: PropTypes.bool.isRequired,
    updateToDoStatus: PropTypes.func.isRequired,
    updateToDoCompleteStatus: PropTypes.func.isRequired,
    updateToDo: PropTypes.func.isRequired,
    removeToDo: PropTypes.func.isRequired
}
export default ToDoElements;