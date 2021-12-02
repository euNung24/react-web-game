import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const HeaderContainer = () => {
  const { flag, start, halted } = useSelector(state => ({
    flag: state.flag,
    start: state.start,
    halted: state.halted,
  }))
  return (
    <Header flag={flag} start={start} hatled={halted} />
  );
};

export default HeaderContainer;