import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const deleteContact = createAction("contact/delete");
const filteredContacts = createAction("contact/filter");

export { addContact, deleteContact, filteredContacts };
