import * as actionTypes from "./actionTypes";

/* For showing the text editor */
export const setEditState = () => ({
  type: actionTypes.SET_EDIT_STATE,
})
/* For hiding the text editor */
export const setIdleState = () => ({
  type: actionTypes.SET_IDLE_STATE,
})

export const addNewChapter = (payload) => ({
  type: actionTypes.ADD_NEW_CHAPTER,
  payload
})

export const editChapter = (payload) => ({
  type: actionTypes.UPDATE_CHAPTER,
  payload
})