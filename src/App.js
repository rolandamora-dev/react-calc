import React, { useState } from 'react';
import './Styles.css';
import CalcKey from './components/CalcKey';
import CalcKeyOperators from './components/CalcKeyOperators';
import { Keys, getDisplay, Operation } from './utils';
import CalcKeySpan from './components/CalcKeySpan';

function App() {

  const [display, setDisplay] = useState('20');
  const [operation, setOperation] = useState('');
  const [displayReset, setDisplayReset] = useState(false);
  const [results, setResults] = useState(0);

  const digitHandler = (digit) => {
    if (displayReset) {
      setDisplay(digit);
      setDisplayReset(false);
    } else {
      if (parseFloat(display) > 0 || display.trim().includes(Keys.Dot)) {
        setDisplay(val => {
          return val.concat(digit);
        })
      } else {
        setDisplay(val => val = digit);
      }
    }
  }

  const getCalcValue = (operation, val1, val2) => {
    if (operation === Operation.Ops_Plus) {
      return parseFloat(val1) + parseFloat(val2);
    }
    else if (operation === Operation.Ops_Minus) {
      return parseFloat(val1) - parseFloat(val2);
    }
    else if (operation === Operation.Ops_Multiply) {
      return parseFloat(val1) * parseFloat(val2);
    }
    else if (operation === Operation.Ops_Divide) {
      return parseFloat(val1) / parseFloat(val2);
    }
  }

  const operationHandler = (operationKey) => {
    if (operationKey === Operation.Ops_Equals) {
      if (operation) {
        setDisplay(val => {
          return getCalcValue(operation, results, parseFloat(val));
        })
        setOperation('');
      }
    } else {
      if (operation) {
        setResults(val => {
          return getCalcValue(operation, display, parseFloat(val));
        })
      } else {
        setResults(val => val = display);
      }
      setOperation(operationKey);
    }
    setDisplayReset(true);
  }

  const evtHandler = ({ keyPress }) => {
    if (keyPress === Keys.AC) {
      setDisplay(Keys.Digit_Zero);
      setResults(Keys.Digit_Zero);
      setOperation('');
      setDisplayReset(false);
    } else if (keyPress === Keys.Percent) {
      if (parseFloat(display) > 0) {
        setDisplay(prevDisplay => {
          return parseFloat(prevDisplay) / 100;
        })
      }
    } else if (keyPress === Keys.Dot) {
      digitHandler(Keys.Dot);
    } else if (keyPress === Keys.Digit_One) {
      digitHandler(Keys.Digit_One);
    }
    else if (keyPress === Keys.Digit_Two) {
      digitHandler(Keys.Digit_Two);
    }
    else if (keyPress === Keys.Digit_Three) {
      digitHandler(Keys.Digit_Three);
    }
    else if (keyPress === Keys.Digit_Four) {
      digitHandler(Keys.Digit_Four);
    }
    else if (keyPress === Keys.Digit_Five) {
      digitHandler(Keys.Digit_Five);
    }
    else if (keyPress === Keys.Digit_Six) {
      digitHandler(Keys.Digit_Six);
    }
    else if (keyPress === Keys.Digit_Seven) {
      digitHandler(Keys.Digit_Seven);
    }
    else if (keyPress === Keys.Digit_Eight) {
      digitHandler(Keys.Digit_Eight);
    }
    else if (keyPress === Keys.Digit_Nine) {
      digitHandler(Keys.Digit_Nine);
    }
    else if (keyPress === Keys.Digit_Zero) {
      setDisplay(prevDisplay => {
        return getDisplay(prevDisplay, Keys.Digit_Zero);
      })
    }
    else if (keyPress === Keys.Ops_Plus) {
      operationHandler(Keys.Ops_Plus);
    }
    else if (keyPress === Keys.Ops_Multiply) {
      operationHandler(Keys.Ops_Multiply);
    }
    else if (keyPress === Keys.Ops_Minus) {
      operationHandler(Keys.Ops_Minus);
    }
    else if (keyPress === Keys.Ops_Divide) {
      operationHandler(Keys.Ops_Divide);
    }
    else if (keyPress === Keys.Ops_Equals) {
      operationHandler(Keys.Ops_Equals);
    }
  }

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{`${results}  ${operation}`}</div>
        <div className='display'>{display}</div>
      </div>
      <CalcKey evtHandler={evtHandler} valueKey={Keys.AC} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.MoreOrLess} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Percent} />
      <CalcKeyOperators evtHandler={evtHandler} valueKey={Keys.Ops_Divide} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Digit_Seven} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Digit_Eight} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Digit_Nine} />
      <CalcKeyOperators evtHandler={evtHandler} valueKey={Keys.Ops_Multiply} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Digit_Four} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Digit_Five} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Digit_Six} />
      <CalcKeyOperators evtHandler={evtHandler} valueKey={Keys.Ops_Minus} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Digit_One} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Digit_Two} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Digit_Three} />
      <CalcKeyOperators evtHandler={evtHandler} valueKey={Keys.Ops_Plus} />
      <CalcKeySpan evtHandler={evtHandler} valueKey={Keys.Digit_Zero} />
      <CalcKey evtHandler={evtHandler} valueKey={Keys.Dot} />
      <CalcKeyOperators evtHandler={evtHandler} valueKey={Keys.Ops_Equals} />
    </div>
  );
}

export default App;
