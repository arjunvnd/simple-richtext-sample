import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

import basic from "./reducers/basic";
import ebookData from "./reducers/ebook-data";
import editorState from "./reducers/editor-state";
import selectedChapter from "./reducers/selected-chapter";

const rootReducer = combineReducers({
  basic,
  ebookData,
  editorState,
  selectedChapter,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, ReduxThunk))
);
