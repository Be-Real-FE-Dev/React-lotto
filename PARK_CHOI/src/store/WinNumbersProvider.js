import React, { useEffect, useState } from 'react';
import WinNumbersContext from './winNumbers-context';

const WinNumbersProvider = (props) => {
  const [winNumbers, setWinNumbers] = useState({});

  useEffect(() => {
    const winNumArray = new Array(6)
      .fill()
      .map((ball) => Math.floor(Math.random() * 45));
    const bonusNum = Math.floor(Math.random() * 45);

    setWinNumbers({ winNumArray, bonusNum });
  }, []);

  return (
    <WinNumbersContext.Provider value={winNumbers}>
      {props.children}
    </WinNumbersContext.Provider>
  );
};

export default WinNumbersProvider;
