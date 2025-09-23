import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth-reducer";
import { topicReducer } from "./reducers/topic-reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    topics: topicReducer
});