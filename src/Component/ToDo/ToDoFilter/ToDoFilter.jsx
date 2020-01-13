import React from "react";
import PropTypes from "prop-types";
import styles from "./ToDoFilter.module.scss";
import Button from "../../Shared/Button";
/**
 * 
 * @param {fun} handleOnClick
 * @param {boolean} activeFilter
 * @returns Element
 */
const ToDoFilter = props => {
    const {handleOnClick, activeFilter} =props;
    return (
        <div className={styles.todoFilterContainer}>
            <Button 
                buttonType="button"
                buttonName="All"
                buttonClass={ activeFilter===0 ? "isCompletedButton":"statusButton"}
                handleOnClick={handleOnClick}    
                index={0} 
                status={ activeFilter===0 ? true : false} 
                disabled={ activeFilter===0 ? true : false}                        
            />
            &nbsp;
            <Button 
                buttonType="button"
                buttonName="Active"
                buttonClass={ activeFilter===1 ? "isCompletedButton":"statusButton"}
                handleOnClick={handleOnClick}    
                index={1} 
                status={ activeFilter===1 ? true : false} 
                disabled={ activeFilter===1 ? true : false}                       
            />
            &nbsp;
            <Button 
                buttonType="button"
                buttonName="Completed"
                buttonClass={ activeFilter===2 ? "isCompletedButton":"statusButton"}
                handleOnClick={handleOnClick}    
                index={2} 
                status={ activeFilter===2 ? true : false} 
                disabled={ activeFilter===2 ? true : false}                       
            />
        </div>
    );
}
// default props value
ToDoFilter.defaultProps = {
    handleOnClick: () => {},
    activeFilter: 0
  };
ToDoFilter.propstypes = {
    handleOnClick: PropTypes.func.isRequired,
    activeFilter: PropTypes.number.isRequired
}
export default ToDoFilter;