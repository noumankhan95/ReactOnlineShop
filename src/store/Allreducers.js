import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userState"
const rootreducer = combineReducers({
    user: userReducer
})

export default rootreducer