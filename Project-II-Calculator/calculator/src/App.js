import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <div className="calculator-display">
        <CalculatorDisplay/>
      </div>
      <div className="number-buttons">
        <NumberButton text={'7'}/>
        <NumberButton text={'8'}/>
        <NumberButton text={'9'}/>
        <NumberButton text={'4'}/>
        <NumberButton text={'5'}/>
        <NumberButton text={'6'}/>
        <NumberButton text={'1'}/>
        <NumberButton text={'2'}/>
        <NumberButton text={'3'}/>
      </div>
      <div className="operator-buttons">
        <ActionButton text={'÷'}/>
        <ActionButton text={'x'}/>
        <ActionButton text={'-'}/>
        <ActionButton text={'+'}/>
        <ActionButton text={'='}/>
      </div>
    </div>
  );
};

export default App;
