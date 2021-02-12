import * as actionTypes from "../actions/actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return { ...state, ...payload };

    default:
      return state;
  }
};
