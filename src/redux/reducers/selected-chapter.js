import * as actionTypes from "../actions/actionTypes";

const initialState = 1;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_SELECTED_CHAPTER_INDEX:
      return payload;

    default:
      return state;
  }
};
