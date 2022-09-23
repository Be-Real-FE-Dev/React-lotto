import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const LottoForm = styled.form`
  width: 100%;
  margin-bottom: 24px;
`;

const LottoGuide = styled.p`
  width: 100%;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const LottoInputWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const LottoInput = styled.input`
  width: calc(100% - 90px);
  height: 50px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px 15px;
  margin-right: 10px;
  font-size: 16px;
`;

const Form = ({ price, onChangePrice, onClickLotto }) => {
  const changePrice = e => {
    onChangePrice(e.target.value);
  };

  return (
    <LottoForm onSubmit={onClickLotto}>
      <LottoGuide>구입할 금액을 입력해주세요.</LottoGuide>
      <LottoInputWrapper>
        <LottoInput
          type="number"
          value={price}
          step="1000"
          min="0"
          max="100000"
          placeholder="금액을 입력해주세요."
          onChange={changePrice}
        />
        <Button width="80px" height="60px">
          확인
        </Button>
      </LottoInputWrapper>
    </LottoForm>
  );
};

export default Form;
