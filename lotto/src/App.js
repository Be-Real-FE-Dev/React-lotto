import { useState } from "react";
import Form from "./components/Form";
import NumberList from "./components/NumberList";
import Button from "./components/Button";
import Modal from "./components/Modal";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";

const H1 = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
`;

const Div = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 0 0 40px;

  .lotto__checked-result {
    display: block;
    margin: 20px auto 0;
    width: 200px;
    height: 40px;
    font-weight: 500;
  }
`;

function App() {
  const [price, setPrice] = useState(0);
  const [lottoList, setLottoList] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const LOTTONUM = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45,
  ];

  const changePriceHandler = (newPrice) => setPrice(newPrice);

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const clickLottoHandler = (e) => {
    e.preventDefault();

    const lottoArrayNum = price / 1000;

    setLottoList(
      new Array(lottoArrayNum)
        .fill(0)
        .map(() => shuffle(LOTTONUM).filter((_, i) => i < 7))
    );
  };

  const clickResultHanlder = () => {
    if (lottoList.length === 0) return;
    const temp = shuffle(LOTTONUM).filter((x, i) => i < 7);
    setWinningNumbers(temp);
    setIsOpenModal(true);
  };

  const clickCloseModalHandler = (e) => {
    if (
      e.target.closest(".modal") &&
      !e.target.classList.contains("close__btn")
    )
      return;
    setIsOpenModal(false);
  };

  const restart = () => {
    setPrice(0);
    setLottoList([]);
    setWinningNumbers([]);
    setIsOpenModal(false);
  };

  return (
    <Div className="App">
      <GlobalStyle />
      <H1>🎱 행운의 로또</H1>
      <Form
        price={price}
        onChangePrice={changePriceHandler}
        onClickLotto={clickLottoHandler}
      />
      <NumberList lottoList={lottoList} />
      <Button
        className="lotto__checked-result"
        width="70px"
        onClick={clickResultHanlder}
      >
        결과 확인하기
      </Button>
      {isOpenModal && (
        <Modal
          winningNumbers={winningNumbers}
          lottoList={lottoList}
          clickCloseModal={clickCloseModalHandler}
          clickRestart={restart}
        />
      )}
    </Div>
  );
}

export default App;
