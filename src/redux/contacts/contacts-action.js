import { v4 as uuidv4 } from "uuid";

const addContact = (name, number) => ({
  type: "contact/add",
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = (id) => ({
  type: "contact/delete",
  payload: id,
});

const filteredContacts = (value) => ({
  type: "contact/filter",
  payload: value,
});

export { addContact, deleteContact, filteredContacts };
