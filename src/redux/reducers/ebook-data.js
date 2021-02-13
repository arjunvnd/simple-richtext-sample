import * as actionTypes from "../actions/actionTypes";

const initialState = []

const ebookData = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case actionTypes.ADD_NEW_CHAPTER:
            return [
                ...state, payload
            ]

        default:
            return state
    }
}

export default ebookData