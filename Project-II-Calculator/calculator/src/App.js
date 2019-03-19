import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay text="0"/>
      <div className="calculator-buttons">
        <div className="number-container">
          <ActionButton buttonStyle="action-btn" text="clear"/>
          <NumberButton buttonStyle="number-btn" text="7"/>
          <NumberButton buttonStyle="number-btn" text="8"/>
          <NumberButton buttonStyle="number-btn" text="9"/>
          <NumberButton buttonStyle="number-btn" text="4"/>
          <NumberButton buttonStyle="number-btn" text="5"/>
          <NumberButton buttonStyle="number-btn" text="6"/>
          <NumberButton buttonStyle="number-btn" text="1"/>
          <NumberButton buttonStyle="number-btn" text="2"/>
          <NumberButton buttonStyle="number-btn" text="3"/>
          <ActionButton buttonStyle="action-btn" text="0"/>
        </div>
        <div className="operator-buttons">
          <NumberButton buttonStyle="operator-btn" text="÷"/>
          <NumberButton buttonStyle="operator-btn" text="x"/>
          <NumberButton buttonStyle="operator-btn" text="-"/>
          <NumberButton buttonStyle="operator-btn" text="+"/>
          <NumberButton buttonStyle="operator-btn" text="="/>
        </div>
      </div>
    </div>
  );
};

export default App;
