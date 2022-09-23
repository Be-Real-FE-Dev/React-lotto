import React from 'react';
import LottoItem from '../LottoItem';
import LottoRank from './LottoRank';

const LottoResultList = (props) => {
  console.log('lotto=' + props.lotto);
  console.log(props.lottoList);
  return (
    <ul>
      {props.lottoList.map((lotto) => (
        <React.Fragment key={lotto.id}>
          <LottoItem balls={lotto.balls} />
          <LottoRank balls={lotto.balls} />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default LottoResultList;
