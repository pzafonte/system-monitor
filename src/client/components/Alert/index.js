import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

//TODO: ADD FONT AWESOME ICONS FOR ALERT

import classes from './main.css';

const Alert = (props) => {
  const { isAlert } = props;

  return (
    <div className={classes.Alert}>
      <div className={classes.MessageContainer}>
      
        {/* Add font awesome icon here */}

        <span>
          <h3 className={classes.AlertText}>{isAlert ? 'High CPU Load generated an alert' : 'CPU Load Alert Clear'}</h3>
          <h4 className={classes.DetailsText}>{`2 Minute CPU Load Avg. = ${props.loadAvg}, at ${new Date(props.timestamp).toLocaleTimeString()}`}</h4>
        </span>
      </div>
    </div>
  );
};

Alert.propTypes = {
  loadAvg: PropTypes.number.isRequired,
  isAlert: PropTypes.bool.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default Alert;
