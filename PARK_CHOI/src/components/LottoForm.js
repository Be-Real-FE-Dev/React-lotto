import React, { useRef } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

import classes from './LottoForm.module.css';

const LottoForm = (props) => {
  const moneyInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    props.onPurchaseLotto(moneyInputRef.current.value);
    moneyInputRef.current.value = '';
  };

  return (
    <>
      <form className={classes['lotto-form']} onSubmit={submitHandler}>
        <Input
          ref={moneyInputRef}
          id={'buy'}
          label={'구매'}
          type={'number'}
          placeholder={'구매금액을 입력해주세요. (장당 1000원)'}
        />
        <Button>구매하기</Button>
      </form>
    </>
  );
};

export default LottoForm;
