import React, { useContext } from 'react';
import WinNumbersContext from '../../store/winNumbers-context';
import LottoItem from '../LottoItem';
import LottoBall from '../LottoBall';

import classes from './WinLottoNums.module.css';

const WinLottoNums = () => {
  const ctxWinNumbers = useContext(WinNumbersContext);

  return (
    <ul className={classes.winBalls}>
      <LottoItem balls={ctxWinNumbers.winNumArray} />
      <li>
        <div className={classes.plus}>+</div>
      </li>
      <LottoBall ball={ctxWinNumbers.bonusNum} />
    </ul>
  );
};

export default WinLottoNums;
