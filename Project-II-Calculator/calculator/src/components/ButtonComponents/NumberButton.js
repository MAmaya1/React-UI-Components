import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return <button className={`number-button-styles ${props.buttonStyle}`}>{props.text}</button>;
};

NumberButton.defaultProps = {
    buttonStyle: 'number-button-styles'
}

export default NumberButton;