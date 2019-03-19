import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay/>
      <div className="number-container">
        <ActionButton text="clear"/>
        <div className="number-buttons">
          <NumberButton text="7"/>
          <NumberButton text="8"/>
          <NumberButton text="9"/>
          <NumberButton text="4"/>
          <NumberButton text="5"/>
          <NumberButton text="6"/>
          <NumberButton text="1"/>
          <NumberButton text="2"/>
          <NumberButton text="3"/>
        </div>
        <ActionButton text="0"/>
      </div>
      <div className="operator-buttons">
        <NumberButton buttonStyle="red" text="÷"/>
        <NumberButton buttonStyle="red" text="x"/>
        <NumberButton buttonStyle="red" text="-"/>
        <NumberButton buttonStyle="red" text="+"/>
        <NumberButton buttonStyle="red" text="="/>
      </div>
    </div>
  );
};

export default App;
