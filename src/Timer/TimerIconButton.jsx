import React from 'react';
import propTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const TimerIconButton = ({icon, onClick, tooltipText}) => {
  return (
    <Tooltip title={tooltipText} aria-label={tooltipText}>
      <IconButton aria-label="toggle-timer" size="small" color='primary' onClick={onClick}>
        { icon }
      </IconButton>
    </Tooltip>
  );
};

TimerIconButton.propTypes = {
  icon: propTypes.node,
  onClick: propTypes.func,
  tooltipText: propTypes.string,
};

export default TimerIconButton;
