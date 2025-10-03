import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth-reducer";
import { topicReducer } from "./reducers/topic-reducer";
import { alertReducer } from "./reducers/alert-reducer";
import { itemReducer } from "./reducers/item-reducer";
import { rangeReducer } from "./reducers/range-reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    topics: topicReducer,
    items: itemReducer,
    range: rangeReducer,
    alert: alertReducer,
});