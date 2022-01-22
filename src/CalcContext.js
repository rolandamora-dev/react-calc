import React, { createContext, useState } from "react";

export const CalcContext = createContext();

const CalcProvider = (props) => {
  const [display, setDisplay] = useState('0');
  const [results, setResults] = useState('');
  const [operation, setOperation] = useState('');
  const [displayReset, setDisplayReset] = useState(false);

  const evtHandler = () => { }
  return (
    <CalcContext.Provider value={{ display, results, operation, evtHandler, setDisplay, displayReset, setDisplayReset, setResults, setOperation }}>
      {props.children}
    </CalcContext.Provider >
  )
}

export default CalcProvider;