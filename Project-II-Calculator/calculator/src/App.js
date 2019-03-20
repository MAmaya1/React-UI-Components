import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const buttonNums = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
const operators = ['÷', 'x', '-', '+', '='];

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay text="0"/>
      <div className="calculator-buttons">
        <div className="number-container">
          <ActionButton buttonStyle="action-btn" text="clear"/>
          {buttonNums.map(number => {
              return <NumberButton buttonStyle="number-btn" text={number}/>;
            }
          )}
          <ActionButton buttonStyle="action-btn" text="0"/>
        </div>
        <div className="operator-buttons">
          {operators.map(operator => {
            return <NumberButton buttonStyle="operator-btn" text={operator}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
