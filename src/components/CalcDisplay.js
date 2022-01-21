import React, { useContext } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';

const CalcDisplay = () => {
  const { display, results, operation, evtHandler } = useContext(CalcContext);
  const newDisplay = display ? display : '0';

  return <div className='display'>{newDisplay}</div>;
};

export default CalcDisplay;
