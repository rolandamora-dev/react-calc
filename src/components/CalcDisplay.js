import React, { useContext } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';

const CalcDisplay = () => {
  const { display, results, operation, evtHandler } = useContext(CalcContext);
  // display = display ? display : '0';

  return <div className='display'>{display}</div>;
};

export default CalcDisplay;
