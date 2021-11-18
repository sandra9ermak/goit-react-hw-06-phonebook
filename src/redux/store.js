import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducerPhonebook from "./contacts/contacts-reducer";

const rootReducer = combineReducers({
  contacts: reducerPhonebook,
});

export const store = configureStore({
  reducer: rootReducer,
});
