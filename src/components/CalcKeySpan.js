import React, { useContext } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';

const CalcKeySpan = ({ valueKey }) => {

  const { display, results, operation, evtHandler } = useContext(CalcContext);

  return (
    <button name={valueKey} className='span-two' onClick={evtHandler}>{valueKey}</button>
  )
};

export default CalcKeySpan;