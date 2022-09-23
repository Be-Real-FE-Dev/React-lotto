import NumberList from "./NumberList";
import Button from "./Button";
import styled from "styled-components";

const DimmedLayer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);

  .close__btn {
    position: absolute;
    right: 30px;
    top: 30px;
    background: none;
    font-size: 20px;
  }

  .restart__btn {
    display: block;
    width: 150px;
    margin: 30px auto 0;
  }
`;

const ModalBody = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 600px;
  padding: 35px 30px;
  border-radius: 8px;
  background: #fff;
  transform: translate3d(-50%, -50%, 0);
  height: 500px;
  overflow-y: auto;

  & > ul:nth-child(2) {
    margin-bottom: 20px;
  }
`;

const ModalTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;
`;

const Modal = ({
  lottoList,
  winningNumbers,
  clickRestart,
  clickCloseModal,
}) => {
  return (
    <DimmedLayer onClick={clickCloseModal}>
      <ModalBody className="modal">
        <ModalTitle>당첨번호</ModalTitle>
        <NumberList result={false} lottoList={[winningNumbers]} />
        <NumberList
          result={true}
          lottoList={lottoList}
          winningNumbers={winningNumbers}
        />
        <Button
          className="close__btn"
          width="30px"
          margin="3px"
          onClick={clickCloseModal}
        >
          x
        </Button>
        <Button onClick={clickRestart} width="90px" className="restart__btn">
          다시 시작하기
        </Button>
      </ModalBody>
    </DimmedLayer>
  );
};

export default Modal;
