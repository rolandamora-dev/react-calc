import React, { useContext } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';

const CalcDisplay = () => {
  const { display, results, operation, evtHandler } = useContext(CalcContext);

  return <div className='display'>{display}</div>;
};

export default CalcDisplay;
