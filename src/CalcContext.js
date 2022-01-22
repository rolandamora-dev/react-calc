import React, { createContext, useState } from "react";
import { Keys, Operation } from "./utils";

export const CalcContext = createContext();

const CalcProvider = (props) => {
  const [display, setDisplay] = useState('0');
  const [results, setResults] = useState('');
  const [operation, setOperation] = useState('');
  const [displayReset, setDisplayReset] = useState(false);

  const [calcKey, setCalcKey] = useState('');

  const evtHandler = () => { }
  // const evtHandler = (event) => {
  //   const keyPress = event.target.name;
  //   console.log('keyPress', keyPress);
  //   if (keyPress === Keys.AC) {
  //     setDisplay('0');
  //     setResults('');
  //     setOperation('');
  //     setDisplayReset(false);
  //   }
  //   else if (keyPress === Keys.Percent) {
  //     if (parseFloat(display) > 0) {
  //       setDisplay(prevDisplay => {
  //         return parseFloat(prevDisplay) / 100;
  //       })
  //     }
  //   } else if (keyPress === Keys.Dot) {
  //     digitHandler(Keys.Dot);
  //   } else if (keyPress === Keys.Digit_One) {
  //     digitHandler(Keys.Digit_One);
  //   }
  //   else if (keyPress === Keys.Digit_Two) {
  //     digitHandler(Keys.Digit_Two);
  //   }
  //   else if (keyPress === Keys.Digit_Three) {
  //     digitHandler(Keys.Digit_Three);
  //   }
  //   else if (keyPress === Keys.Digit_Four) {
  //     digitHandler(Keys.Digit_Four);
  //   }
  //   else if (keyPress === Keys.Digit_Five) {
  //     digitHandler(Keys.Digit_Five);
  //   }
  //   else if (keyPress === Keys.Digit_Six) {
  //     digitHandler(Keys.Digit_Six);
  //   }
  //   else if (keyPress === Keys.Digit_Seven) {
  //     digitHandler(Keys.Digit_Seven);
  //   }
  //   else if (keyPress === Keys.Digit_Eight) {
  //     digitHandler(Keys.Digit_Eight);
  //   }
  //   else if (keyPress === Keys.Digit_Nine) {
  //     digitHandler(Keys.Digit_Nine);
  //   }
  //   else if (keyPress === Keys.Digit_Zero) {
  //     digitHandler(Keys.Digit_Zero);
  //   }
  //   else if (keyPress === Keys.Ops_Plus) {
  //     operationHandler(Keys.Ops_Plus);
  //   }
  //   else if (keyPress === Keys.Ops_Multiply) {
  //     operationHandler(Keys.Ops_Multiply);
  //   }
  //   else if (keyPress === Keys.Ops_Minus) {
  //     operationHandler(Keys.Ops_Minus);
  //   }
  //   else if (keyPress === Keys.Ops_Divide) {
  //     operationHandler(Keys.Ops_Divide);
  //   }
  //   else if (keyPress === Keys.Ops_Equals) {
  //     operationHandler(Keys.Ops_Equals);
  //   }
  // }

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

  // const digitHandler = (digit) => {
  //   // console.log(`digit: ${digit}, displayReset: ${displayReset}, display: ${display}`);
  //   if (displayReset) {
  //     setDisplay(digit);
  //     setDisplayReset(false);
  //   } else {
  //     if (parseFloat(display) > 0 || display.trim().includes(Keys.Dot)) {
  //       console.log('parseFloat(display) === true part', digit);
  //       setDisplay(val => {
  //         return val.concat(digit);
  //       })
  //     } else {
  //       console.log('parseFloat(display) === false part', digit);
  //       setDisplay(digit);
  //     }
  //   }
  // }

  // const getCalcValue = (operation, val1, val2) => {
  //   if (operation === Operation.Ops_Plus) {
  //     return parseFloat(val1) + parseFloat(val2);
  //   }
  //   else if (operation === Operation.Ops_Minus) {
  //     return parseFloat(val1) - parseFloat(val2);
  //   }
  //   else if (operation === Operation.Ops_Multiply) {
  //     return parseFloat(val1) * parseFloat(val2);
  //   }
  //   else if (operation === Operation.Ops_Divide) {
  //     return parseFloat(val1) / parseFloat(val2);
  //   }
  // }

  return (
    <CalcContext.Provider value={{ display, results, operation, evtHandler, setDisplay, displayReset, setDisplayReset, setResults, setOperation }}>
      {props.children}
    </CalcContext.Provider >
  )
}

export default CalcProvider;