import {
  DOUBLE_CLICK,
  IS_FINISHED,
  OPEN_BLOCK,
  SET_FLAG,
  SET_LEVEL,
  SET_NORMAL,
} from "./actionNames";

export const setLevel = (row, col, mine) => ({
  type: SET_LEVEL,
  row,
  col,
  mine,
});

export const openBlock = (row, col) => ({
  type: OPEN_BLOCK,
  row,
  col,
});

export const doubleClick = (row, col) => ({
  type: DOUBLE_CLICK,
  row,
  col,
});

export const setFlag = (row, col) => ({
  type: SET_FLAG,
  row,
  col,
});

export const setNormal = (row, col) => ({
  type: SET_NORMAL,
  row,
  col,
});

export const isFinished = () => ({
  type: IS_FINISHED,
});
