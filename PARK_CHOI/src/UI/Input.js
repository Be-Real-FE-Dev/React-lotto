import React, { forwardRef } from 'react';

import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        ref={ref}
      />
    </div>
  );
});

export default Input;
