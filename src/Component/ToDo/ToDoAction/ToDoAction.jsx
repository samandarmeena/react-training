import React from "react";
import PropTypes from "prop-types";
import Button from "../../Shared/Button";
/**
 * this component renders status button
 * @param {func} handleOnClickUpdateToDoStatus 
 * @param {func} handleOnClickRemoveToDoStatus
 * @param {number} index
 * @returns Element
 */
const ToDoAction = props => {
    const {
        handleOnClickUpdateToDoStatus,
        handleOnClickRemoveToDoStatus,
        index        
    } = props;
    return (
        <>
            <Button 
                buttonType="button"
                buttonName="Edit"
                buttonClass="secondary"
                handleOnClick={handleOnClickUpdateToDoStatus}
                index={index}            
            />             
            <Button 
                buttonType="button"
                buttonName="Delete"
                buttonClass="error" 
                handleOnClick={handleOnClickRemoveToDoStatus}    
                index={index}                            
            /> 
        </>
    );
}
ToDoAction.defaultProps = {
    handleOnClickUpdateToDoStatus: () => {},
    handleOnClickRemoveToDoStatus: () => {},
    index: 0
}
ToDoAction.propTypes = {
    handleOnClickUpdateToDoStatus: PropTypes.func.isRequired,
    handleOnClickRemoveToDoStatus: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}
export default ToDoAction;