import * as actionTypes from "../actions/actionTypes";

const initialState = [
  {
    id: 1,
    title: "Chapter one",
    description: "<p>This is the a test description</p>",
  },
];

const ebookData = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_CHAPTER:
      return [...state, { id: state.length + 1, ...payload }];

    default:
      return state;
  }
};

export default ebookData;
