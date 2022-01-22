import React, { useContext, useEffect, useState, useCallback } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';
import { Keys, Operation } from '../utils';

const CalcKeyOperators = ({ valueKey }) => {

  const [operator, setOperator] = useState('');
  const { display, results, operation, evtHandler, setDisplay, displayReset, setDisplayReset, setResults, setOperation } = useContext(CalcContext);


  // const operationHandler = (operationKey) => {
  //   if (operationKey === Operation.Ops_Equals) {
  //     if (operation) {
  //       setDisplay(val => {
  //         return getCalcValue(operation, results, parseFloat(val));
  //       })
  //       setOperation('');
  //     }
  //   } else {
  //     if (operation) {
  //       setResults(val => {
  //         return getCalcValue(operation, display, parseFloat(val));
  //       });
  //     } else {
  //       setResults(val => val = display);
  //     }
  //     setOperation(operationKey);
  //   }
  //   setDisplayReset(true);
  // }

  // const setOperationVal

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
    setOperator(valueKey);
    setDisplay(prevVal => {
      console.log('clickCallback', valueKey);
      if (operation) {
        if (valueKey === Operation.Ops_Equals) {
          return getCalcValue(valueKey, results, parseFloat(prevVal));
        } else {
          return prevVal;
        }
      } else {
        return prevVal;
      }
    });

  }, [operator]);

  useEffect(() => {
    // setDisplay(prevVal => {
    //   if (valueKey === Operation.Ops_Equals) {
    //     return getCalcValue(valueKey, results, parseFloat(prevVal));
    //   }
    //   // else {
    //   //   if (valueKey) {
    //   //     setResults(val => {
    //   //       return getCalcValue(operation, display, parseFloat(val));
    //   //     });
    //   //   } else {
    //   //     setResults(val => val = display);
    //   //   }
    //   //   setOperation(valueKey);
    //   // }
    // });
    setOperation(valueKey);
    // setResults('123.1145');

    console.log('useEffect');
  }, [operator]);

  return (
    <button name={valueKey} className='button-operators' onClick={clickCallback}>{valueKey}</button>
  )
};

export default CalcKeyOperators;