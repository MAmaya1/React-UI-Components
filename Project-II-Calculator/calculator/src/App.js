import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator">
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
      
    </div>
  );
};

export default App;
