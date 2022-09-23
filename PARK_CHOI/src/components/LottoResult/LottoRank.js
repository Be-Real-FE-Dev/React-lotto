import React, { useContext } from 'react';
import WinNumbersContext from '../../store/winNumbers-context';

const LottoRank = (props) => {
  const ctxWinNumbers = useContext(WinNumbersContext);

  const prize = props.balls.reduce((acc, ball) => {
    return ctxWinNumbers.winNumArray.includes(ball) ? acc - 1 : acc;
  }, 6);

  console.log(prize);

  return <li>{prize} 등</li>;
};

export default LottoRank;
