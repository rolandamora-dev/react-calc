import React, { useContext, useCallback, useState, useEffect } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';
import { Keys } from '../utils';

const CalcKey = ({ valueKey }) => {

  const [key, setKey] = useState('');
  const { display, results, operation, evtHandler, setDisplay, displayReset, setDisplayReset, setResults, setOperation } = useContext(CalcContext);

  const clickCallback = useCallback((event) => {
    setKey(valueKey);

    if (valueKey === Keys.AC) {
      setResults('');
      setOperation('');
      setDisplay('0');
    } else if (valueKey === Keys.Percent) {
      setDisplay(oVal => {
        return oVal / 100;
      });
    } else if (valueKey === Keys.MoreOrLess) {
      setDisplay(oVal => {
        return (oVal) * -1;
      });
    }
    else if (valueKey === Keys.Dot) {
      if (displayReset) {
        setDisplayReset(false);
        return valueKey;
      } else {
        setDisplay(oVal => {
          if (!(oVal.trim().includes(valueKey))) {
            if (parseFloat(oVal) === 0) {
              return valueKey;
            } else {
              return oVal.concat(valueKey);
            }
          } else {
            return oVal;
          }
        });
      }
    } else {
      if (displayReset) {
        setDisplay(valueKey);
        setDisplayReset(false);
      } else {
        setDisplay(oVal => {
          if (oVal.trim() === Keys.Dot) {
            return oVal.concat(valueKey);
          } else if (parseFloat(oVal) === 0) {
            return valueKey;
          } else {
            return oVal.concat(valueKey);
          }
        });
      }
    }
  }, [key]);

  return (
    <button name={valueKey} onClick={clickCallback}>{valueKey}</button>
  )
};

export default CalcKey;
