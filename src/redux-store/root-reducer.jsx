import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth-reducer";

export const rootReducer = combineReducers({
    auth: authReducer
});