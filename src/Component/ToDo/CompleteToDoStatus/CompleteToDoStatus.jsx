import React from "react";
import PropTypes from "prop-types";
import Button from "../../Shared/Button";
/**
 * this component renders status button
 * @param {bool} completeToDoStatus 
 * @param {func} handleOnClick
 * @param {number} index
 * @returns Element
 */
const CompleteToDoStatus = props => {
    const {
        completeToDoStatus,
        handleOnClick,
        index
    } = props;
    return (
        <Button 
            buttonType="button"
            buttonName={completeToDoStatus ? "Completed":"In Progress"}
            buttonClass={completeToDoStatus ? "isCompletedButton":"statusButton"}
            handleOnClick={handleOnClick}
            index={index}
            status={completeToDoStatus ? true:false}            
        />
    );
}
CompleteToDoStatus.defaultProps = {
    completeToDoStatus: false,
    handleOnClick: () => {},
    index: 0
}
CompleteToDoStatus.propTypes = {
    completeToDoStatus: PropTypes.bool.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}
export default CompleteToDoStatus;