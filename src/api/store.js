import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "../features/userlist/userlist.slice";

export const store = configureStore({
    reducer:UserReducer
})