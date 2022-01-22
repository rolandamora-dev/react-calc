import React, { useContext, useEffect, useState, useCallback } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';
import { Operation } from '../utils';

const CalcKeyOperators = ({ valueKey }) => {

  const [toggle, setToggle] = useState(false);
  const { display, results, operation, evtHandler, setDisplay, displayReset, setDisplayReset, setResults, setOperation } = useContext(CalcContext);

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

  const clickCallback = useCallback((event) => {
    setToggle(prevValue => !prevValue);
  }, [toggle]);

  useEffect(() => {
    if (valueKey !== Operation.Ops_Equals) {
      setResults(display);
      setDisplay('0');
      setOperation(valueKey);
    } else {
      if (operation) {
        setDisplay(prevVal => {
          return getCalcValue(operation, results, parseFloat(prevVal));
        });
      }
    }
  }, [toggle]);


  return (
    <button name={valueKey} className='button-operators' onClick={clickCallback}>{valueKey}</button>
  )
};

export default CalcKeyOperators;