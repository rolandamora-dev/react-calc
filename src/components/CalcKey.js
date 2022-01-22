import React, { useContext, useCallback, useState, useEffect } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';
import { Keys } from '../utils';

const CalcKey = ({ valueKey }) => {

  const [key, setKey] = useState('');
  const { display, results, operation, evtHandler, setDisplay, displayReset, setDisplayReset } = useContext(CalcContext);

  const clickCallback = useCallback((event) => {
    setKey(valueKey);
    setDisplay(prevVal => {
      if (valueKey === Keys.AC) {
        return '0';
      }
      else if (valueKey === Keys.Dot) {
        if (!prevVal.trim().includes(valueKey)) {
          if (parseFloat(prevVal) === 0) {
            return valueKey;
          } else {
            return prevVal.concat(valueKey);
          }
        } else {
          return prevVal;
        }
      }
      else {
        if (parseFloat(prevVal) === 0) {
          return valueKey;
        } else {
          return prevVal.concat(valueKey);
        }
      }
    });
  }, [key]);

  return (
    <button name={valueKey} onClick={clickCallback}>{valueKey}</button>
  )
};

export default CalcKey;
