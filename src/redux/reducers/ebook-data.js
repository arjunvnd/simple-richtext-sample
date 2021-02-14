import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const ebookData = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_CHAPTER:
      return [...state, { id: state.length + 1, ...payload }];
    case actionTypes.UPDATE_CHAPTER:
      return state.map((item) => {
        if (item.id === payload.id) {
          return { id: item.id, ...payload };
        } else {
          return item;
        }
      });
    case actionTypes.INITIALISE_EBOOK_STATE:
      return payload;

    default:
      return state;
  }
};

export default ebookData;
