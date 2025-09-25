import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth-reducer";
import { topicReducer } from "./reducers/topic-reducer";
import { alertReducer } from "./reducers/alert-reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    topics: topicReducer,
    alert: alertReducer,
});