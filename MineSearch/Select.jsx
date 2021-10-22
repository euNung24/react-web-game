import React, { useContext, memo, useCallback } from 'react';
import styled from 'styled-components';
import { MineSearchContext, SET_LEVEL } from './MineSearch';

const StyledSelect = styled.div`
  display: inline-block;
  h2 {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin: 0 10px;
  }
  select {
    border-radius: 5px;
    padding: 5px;
    font-size: 24px;
  }
`;


const Select = memo(() => {
  const { dispatch } = useContext(MineSearchContext);

  const handleChange = useCallback((e) => {
    switch(e.target.value) {
      case "easy": {
        return dispatch({ type: SET_LEVEL, row: 12, col: 6, mine: 10 });
      }
      case "medium": {
        return dispatch({ type: SET_LEVEL, row: 20, col: 10, mine: 35 });
      }
      case "hard": {
        return dispatch({ type: SET_LEVEL, row: 27, col: 13, mine: 75 });
      }
      default: {
        return dispatch({ type: SET_LEVEL, row: 20, col: 10, mine: 35 });
      }
    }
  }, []);

  return (
    <StyledSelect>
      <h2>지뢰찾기</h2>
      <select name="level" id="level" defaultValue="medium" onChange={handleChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </StyledSelect>
  );
});

export default Select;