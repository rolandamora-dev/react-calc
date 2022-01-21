import React, { useContext } from 'react';
import '../Styles.css';
import { CalcContext } from '../CalcContext';

const CalcKeyOperators = ({ valueKey }) => {

  const { display, results, operation, evtHandler } = useContext(CalcContext);

  return (
    <button name={valueKey} className='button-operators' onClick={evtHandler}>{valueKey}</button>
  )
};

export default CalcKeyOperators;