import React, { useState, useEffect } from 'react';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import TimerTwoTone from '@material-ui/icons/TimerTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TimerIconButton from './TimerIconButton';

const useStyles = makeStyles({
  timerWrapper: { 
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});

const TIMER_KEY = 'endTime';
const defaultTimeRemaining = '00:00:00';

export default function Timer() {
  const { timerWrapper } = useStyles();
  const [timerStarted, settimerStarted] = useState(false);
  const [timeRemaining, settimeRemaining] = useState(defaultTimeRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      const isTimerSet = !!localStorage.getItem(TIMER_KEY);
      if (isTimerSet) {
        const msRemaining = localStorage.getItem(TIMER_KEY) - Date.now();
        if (msRemaining < 0) {
          sendNotification();
          return startTimer();
        }
        const seconds = Math.floor((msRemaining / 1000) % 60);
        const minutes = Math.floor((msRemaining / (1000 * 60)) % 60);
        const hours = Math.floor((msRemaining / (1000 * 60 * 60)) % 60);

        settimeRemaining(`${getPadded(hours)}:${getPadded(minutes)}:${getPadded(seconds)}`);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const getNotificationPermission = () => {
    return new Promise((resolve, reject) => {
      if (!('Notification' in window)) {
        reject(); 
      } else if (Notification.permission === 'granted') {
        resolve();
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            resolve();
          }
        });
      } else {
        reject();
      }
    });
  };

  const sendNotification = () => {
    getNotificationPermission()
      .then(() => {
        new Notification('Move from your place');
      })
      .catch(() => console.error('No notification permission'));
  };
  
  const startTimer = () => {
    const timerLimit = 30 * 60 * 1000;
    localStorage.setItem(TIMER_KEY, Date.now() + timerLimit);
    settimerStarted(true);
  };
  
  const stopTimer = () => {
    localStorage.removeItem(TIMER_KEY);
    settimeRemaining(defaultTimeRemaining);
    settimerStarted(false);
  };

  const getPadded = (n) => {
    return ('00' + n).substr(-2);
  };

  return (
    <Typography variant="h6" className={timerWrapper} gutterBottom>
      {
        timerStarted ? (
          <TimerIconButton onClick={stopTimer} icon={<TimerTwoTone />} tooltipText='Stop Timer' />
        ) : (
          <TimerIconButton onClick={startTimer} icon={<TimerOffIcon />} tooltipText='Start Timer' />
        )
      }
      { timeRemaining }
    </Typography>
  );
}
