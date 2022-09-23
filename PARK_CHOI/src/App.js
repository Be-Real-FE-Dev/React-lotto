import React from 'react';
import Lotto from './components/Lotto';
import './App.css';
import WinNumbersProvider from './store/WinNumbersProvider';

const App = () => {
  return (
    <WinNumbersProvider>
      <Lotto />
    </WinNumbersProvider>
  );
};

export default App;
