import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';

const styles = {
  timeWrapper: {
    'height': '50%',
    'marginTop': 'calc((7em * 1.15) / 2)',
    'display': 'flex',
    'alignItems': 'flex-end',
    'justifyContent': 'center',
  },
  timeStyle: {
    'margin': '0',
    'fontSize': '7em',
  },
};

const getFormattedTime = () => {
  const date = new Date();
  let dateStr = date.toLocaleTimeString();
  dateStr = ('0' + dateStr).slice(-11);
  return dateStr.substr(0, 5) + dateStr.substr(8);
};

export default function Clock() {
  const { timeWrapper, timeStyle } = styles;
  const [time, settime] = useState(getFormattedTime());
  const intervalTime = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      const formattedTime = getFormattedTime();
      if (formattedTime != time) {
        settime(formattedTime);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={timeWrapper}>
      <h1 style={timeStyle}>{time}</h1>
    </div>
  );
}
