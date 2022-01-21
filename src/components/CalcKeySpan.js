import React from 'react';
import '../Styles.css';

const CalcKeySpan = ({ evtHandler, valueKey }) => {

  const handleClick = () => {
    evtHandler({ keyPress: valueKey });
  }

  return <button className='span-two' onClick={handleClick}>{valueKey}</button>
};

export default CalcKeySpan;
