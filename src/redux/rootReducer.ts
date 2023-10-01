import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import menuSlice from "./menu/menuSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    menu: menuSlice
})

export default rootReducer