import React, { memo, useEffect, useState, useRef } from 'react';
import { RiFlag2Fill, RiTimerLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Select from './Select';

const StyledHeader = styled.header`
  background: #215826;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  gap: 0 20px;
  .info {
    display: flex;
    align-items: center;
  }
  span {
    font-size: 50px;
  }
`;

const Header = memo(() => {
  const [ timer, setTimer ] = useState('000');
  const interval = useRef(null);

  const { flag, start, halted } = useSelector(state => ({
    flag: state.flag,
    start: state.start,
    halted: state.halted
  }))

  useEffect(() => {
    if(start) {
      interval.current = setInterval(() => setTimer(prevTime => String(Number(prevTime) + 1).padStart(3, '0')), 1000);
    } else if(!start) {
      clearInterval(interval.current);
      interval.current = setTimer('000');
    }
    if(halted) {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    }
  }, [start, halted]);

  return (
    <StyledHeader>
      <Select />
      <div className="info">
        <RiFlag2Fill color="red" size="50px"/>
        <span>{flag}</span>
        <RiTimerLine color="yellow" size="50px"/>
        <span>{timer}</span>
      </div>
    </StyledHeader>
  );
});

export default Header;