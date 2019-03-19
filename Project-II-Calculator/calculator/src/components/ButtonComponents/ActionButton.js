import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return <button className={props.buttonStyle}>{props.text}</button>;
};

ActionButton.defaultProps = {
    buttonStyle: 'action-button-styles'
};

export default ActionButton;