import React from 'react';
import LottoItem from './LottoItem';

import classes from './LottoList.module.css';

const LottoList = (props) => {
  // console.log(props);
  return (
    <div className={classes['lotto-container']}>
      <ul className={classes['lotto-list']}>
        {props.lottoList.map((lotto) => {
          console.log('lotto=' + lotto);
          return <LottoItem key={lotto.id} balls={lotto.balls} />;
        })}
      </ul>
    </div>
  );
};

export default LottoList;
