import React from 'react';

import classes from './LottoBall.module.css';

const LottoBall = (props) => {
  return (
    <li>
      <div className={classes.ball}>{props.ball}</div>
    </li>
  );
};

export default LottoBall;
