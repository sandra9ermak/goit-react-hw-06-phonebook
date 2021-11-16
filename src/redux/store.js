import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducerPhonebook from "./contacts/contacts-reducer";

const rootReducer = combineReducers({
  contacts: reducerPhonebook,
});

export const store = createStore(rootReducer, composeWithDevTools());
