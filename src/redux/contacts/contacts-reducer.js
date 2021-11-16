import { combineReducers } from "redux";

const contacts = {
  filter: "",
  items: JSON.parse(window.localStorage.getItem("contacts")) ?? [],
};

const reducerContacts = (state = contacts.items, { type, payload }) => {
  switch (type) {
    case "contact/add":
      return [...state, payload];
    case "contact/delete":
      console.log("payload" + payload);
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

const reducerFilter = (state = contacts.filter, { type, payload }) => {
  switch (type) {
    case "contact/filter":
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: reducerContacts,
  filter: reducerFilter,
});
