import React from 'react';
import '../Styles.css';

const CalcKey = ({ evtHandler, valueKey }) => {

  const handleClick = () => {
    evtHandler({ keyPress: valueKey });
  }

  return <button onClick={handleClick}>{valueKey}</button>
};

export default CalcKey;
