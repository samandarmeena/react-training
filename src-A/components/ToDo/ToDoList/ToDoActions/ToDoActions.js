import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../../Shared/Image';
import Button from '../../../Shared/Button';

/**
 * ToDoActions component
 * renders ToDoActions container
 * @param {string} itemId
 * @param {string} itemStatus
 * @param {func} handleToggleFixed
 * @param {func} handleRemoveToDo
 * @return Element
 */
const ToDoActions = (props) => {
  const { itemId, itemStatus, handleToggleFixed, handleRemoveToDo } = props;
  const actionButtons = [
    {
      buttonName: `complete${itemId}`,
      buttonId: `complete${itemId}`,
      buttonSize: 'buttonSmall',
      buttonToolTip: itemStatus === 'New' ? 'Mark as Completed' : 'Mark as New',
      buttonStyle: itemStatus === 'New' ? 'buttonSuccess' : 'buttonInfo',
      addOnClass: 'changeStatus',
      buttonTitle:
        itemStatus === 'New' ? (
          <Image src="/assets/images/check.png" alt="Check" />
        ) : (
          <Image src="/assets/images/return.png" alt="Return" />
        ),
      clickEvent: () => handleToggleFixed(itemId)
    },
    {
      buttonName: `remove${itemId}`,
      buttonId: `remove${itemId}`,
      buttonSize: 'buttonSmall',
      buttonStyle: 'buttonDanger',
      addOnClass: 'removeToDo',
      buttonToolTip: 'Remove ToDo',
      buttonTitle: <Image src="/assets/images/trash.png" alt="Remove" />,
      clickEvent: () => handleRemoveToDo(itemId)
    }
  ];
  return (
    <>
      {actionButtons.map((actionButton) => {
        return (
          <Button
            key={actionButton.buttonId}
            buttonName={actionButton.buttonName}
            buttonId={actionButton.buttonId}
            buttonSize={actionButton.buttonSize}
            buttonStyle={actionButton.buttonStyle}
            addOnClass={actionButton.addOnClass}
            buttonToolTip={actionButton.buttonToolTip}
            buttonTitle={actionButton.buttonTitle}
            clickEvent={actionButton.clickEvent}
          />
        );
      })}
    </>
  );
};

// proptype validations for props
ToDoActions.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemStatus: PropTypes.string.isRequired,
  handleToggleFixed: PropTypes.func.isRequired,
  handleRemoveToDo: PropTypes.func.isRequired
};

export default ToDoActions;
