import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filteredContacts } from "./contacts-action";

const contacts = {
  filter: "",
  items: JSON.parse(window.localStorage.getItem("contacts")) ?? [],
};

const reducerContacts = createReducer(contacts.items, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const reducerFilter = createReducer(contacts.filter, {
  [filteredContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items: reducerContacts,
  filter: reducerFilter,
});
