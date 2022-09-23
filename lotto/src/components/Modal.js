import NumberList from './NumberList';
import Button from './Button';
import styled from 'styled-components';

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
`;

const ModalTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;
`;

const SelectedList = styled.ul`
  width: 100%;
  margin-top: 30px;
  border: 1px solid #ccc;
  padding: 20px 15px;
`;

const SelectedItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 10px;

  ul {
    padding: 0;
    border: none;
  }
`;

const Raking = styled.span`
  width: 60px;
  border-radius: 5px;
  padding: 10px;
  background: rgb(199, 31, 31);
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

const Modal = () => {
  return (
    <DimmedLayer>
      <ModalBody className="modal">
        <ModalTitle>당첨번호</ModalTitle>
        <NumberList />
        <SelectedList>
          <SelectedItem>
            <NumberList />
            <Raking>등수</Raking>
          </SelectedItem>
        </SelectedList>
        <Button className="close__btn" width="30px" margin="3px">
          x
        </Button>
        <Button width="90px">다시 시작하기</Button>
      </ModalBody>
    </DimmedLayer>
  );
};

export default Modal;
