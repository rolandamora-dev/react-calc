import React, { useContext } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';

const CalcOperand = () => {
  const { display, results, operation, evtHandler } = useContext(CalcContext);

  return <div className=' previous-operand'>{results} {operation}</div>;
};

export default CalcOperand;
