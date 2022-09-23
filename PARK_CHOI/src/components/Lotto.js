import React, { useState, useEffect } from 'react';
import LottoForm from './LottoForm';
import LottoList from './LottoList';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import LottoResult from './LottoResult/LottoResult';

import classes from './Lotto.module.css';

// [{id: balls: }];

const Lotto = () => {
  const [myLotto, setMyLotto] = useState([]);
  const [winNumbers, setWinNumbers] = useState({});
  const [isShowMadal, setIsShowModal] = useState(false);

  const createWinNumber = () => {
    const winNumArray = new Array(6)
      .fill()
      .map((ball) => Math.floor(Math.random() * 45));
    const bonusNum = Math.floor(Math.random() * 45);

    return { winNumArray, bonusNum };
  };

  const showModalHander = () => {
    setIsShowModal(true);
  };

  useEffect(() => {
    setWinNumbers(createWinNumber());
  }, []);

  const generateLottos = (money) => {
    const _lottoList = new Array(Math.floor(money / 1000)).fill(null);

    return _lottoList.map((lotto) => {
      return {
        id: Math.random(),
        balls: new Array(6)
          .fill()
          .map((ball) => Math.floor(Math.random() * 45)),
      };
    });
  };

  const purchaseLottoHandler = (money) => {
    setMyLotto(generateLottos(money));
  };

  const closeModalHandler = () => {
    setIsShowModal(false);
  };

  return (
    <div className={classes.lotto}>
      <h1>행운의 로또</h1>
      <LottoForm onPurchaseLotto={purchaseLottoHandler} />
      <LottoList lottoList={myLotto} />
      <Button className={classes.result} onClick={showModalHander}>
        결과 확인하기
      </Button>
      {isShowMadal && (
        <Modal winNumbers={winNumbers} onClose={closeModalHandler}>
          <LottoResult lottoList={myLotto} onClose={closeModalHandler} />
        </Modal>
      )}
    </div>
  );
};

export default Lotto;
