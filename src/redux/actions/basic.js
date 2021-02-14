import * as actionTypes from "./actionTypes";

/* For showing the text editor */
export const setEditState = () => ({
  type: actionTypes.SET_EDIT_STATE,
});
/* For hiding the text editor */
export const setIdleState = () => ({
  type: actionTypes.SET_IDLE_STATE,
});

export const setAddState = () => ({
  type: actionTypes.SET_ADD_STATE,
});

export const addNewChapter = (payload) => ({
  type: actionTypes.ADD_NEW_CHAPTER,
  payload,
});

export const updateChapter = (payload) => ({
  type: actionTypes.UPDATE_CHAPTER,
  payload,
});

export const intialiseState = (payload) => ({
  type: actionTypes.INITIALISE_EBOOK_STATE,
  payload,
});

export const editChapter = (payload) => ({
  type: actionTypes.UPDATE_CHAPTER,
  payload,
});

export const setSelectedChapter = (payload) => ({
  type: actionTypes.UPDATE_SELECTED_CHAPTER_INDEX,
  payload,
});
