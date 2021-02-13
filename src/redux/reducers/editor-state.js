import {
    EDITOR_STATES
} from "../../config/constants"
import * as actionTypes from "../actions/actionTypes";

const initialState = EDITOR_STATES.IDLE

const editorState = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case actionTypes.SET_EDIT_STATE:
            return EDITOR_STATES.EDITING
        case actionTypes.SET_IDLE_STATE:
            return EDITOR_STATES.IDLE
        case actionTypes.SET_ADD_STATE:
            return EDITOR_STATES.ADD
        default:
            return state
    }
}

export default editorState