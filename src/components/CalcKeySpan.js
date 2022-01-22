import React, { useContext, useCallback, useState } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';
import { Keys } from '../utils';

const CalcKeySpan = ({ valueKey }) => {

  const [key, setKey] = useState('');
  const { display, results, operation, evtHandler, setDisplay, displayReset, setDisplayReset } = useContext(CalcContext);

  const clickCallback = useCallback((event) => {
    setKey(valueKey);
    setDisplay(prevVal => {
      if (valueKey === Keys.AC) {
        return '0';
      }
      else if (valueKey === Keys.Digit_Zero) {
        if (parseFloat(prevVal) === 0) {
          return valueKey;
        } else {
          return prevVal.concat(valueKey);
        }
      }
      else {
        return prevVal;
      }
    });
  }, [key]);

  return (
    <button name={valueKey} className='span-two' onClick={clickCallback}>{valueKey}</button>
  )
};

export default CalcKeySpan;