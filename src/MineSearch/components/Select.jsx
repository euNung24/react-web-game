import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLevel } from "../actions/actions";
import { StyledSelect } from "../styles/StyledSeletet";

const Select = memo(() => {
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    switch (e.target.value) {
      case "easy": {
        return dispatch(setLevel(12, 6, 10));
      }
      case "medium": {
        return dispatch(setLevel(20, 10, 35));
      }
      case "hard": {
        return dispatch(setLevel(27, 13, 75));
      }
      default:
        return;
    }
  }, []);

  return (
    <StyledSelect>
      <h2>지뢰찾기</h2>
      <select
        name="level"
        id="level"
        defaultValue="medium"
        onChange={handleChange}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </StyledSelect>
  );
});

export default Select;
