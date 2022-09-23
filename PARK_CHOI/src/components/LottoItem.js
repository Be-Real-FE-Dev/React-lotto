import React from 'react';
import LottoBall from './LottoBall';

import classes from './LottoItem.module.css';

const LottoItem = (props) => {
  return (
    <li>
      <ol className={`${classes['lotto-item']} ${props.className}}`}>
        {props.balls.map((ball, i) => (
          <LottoBall key={`${i}_${ball}`} ball={ball} />
        ))}
      </ol>
    </li>
  );
};

export default LottoItem;
