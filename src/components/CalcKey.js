import React, { useContext } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';

const CalcKey = ({ valueKey }) => {

  const { display, results, operation, evtHandler } = useContext(CalcContext);

  return (
    <button name={valueKey} onClick={evtHandler}>{valueKey}</button>
  )
};

export default CalcKey;
