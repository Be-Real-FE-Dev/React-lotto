import React from 'react';

import WinLottoNums from './WinLottoNums';
import LottoResultList from './LottoResultList';
import Button from '../../UI/Button';
import classes from './LottoResult.module.css';

const LottoResult = (props) => {
  return (
    <div className={classes['lotto-result']}>
      <div>
        <h3>당첨 번호</h3>
        <WinLottoNums />
      </div>
      <LottoResultList lottoList={props.lottoList} />
      <Button className={classes.closeButton} onClick={props.onClose}>
        X
      </Button>
      <Button>다시 도전하기</Button>
    </div>
  );
};

export default LottoResult;
