import React from 'react';
import '../Styles.css';

const CalcKeyOperators = ({ evtHandler, valueKey }) => {

  const handleClick = () => {
    evtHandler({ keyPress: valueKey });
  }

  return <button className='button-operators' onClick={handleClick}>{valueKey}</button>
};

export default CalcKeyOperators;