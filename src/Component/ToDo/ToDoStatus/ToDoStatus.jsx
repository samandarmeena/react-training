import React from "react";
import PropTypes from "prop-types";
import Button from "../../Shared/Button";
/**
 * this component renders status button
 * @param {bool} toDoStatus 
 * @param {func} handleOnClick\
 * @param {number} index
 * @returns Element
 */
const ToDoStatus = props => {
    const {
        toDoStatus,
        handleOnClick,
        index
    } = props;
    return (
        <Button 
            buttonType="button"
            buttonName={toDoStatus ? "Active":"Decline"}
            buttonClass={toDoStatus ? "statusButton":"declineButton"}
            handleOnClick={handleOnClick}
            index={index}
            status={toDoStatus ? true:false}            
        />
    );
}
ToDoStatus.defaultProps = {
    toDoStatus: true,
    handleOnClick: () => {},
    index: 0
}
ToDoStatus.propTypes = {
    toDoStatus: PropTypes.bool.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}
export default ToDoStatus;