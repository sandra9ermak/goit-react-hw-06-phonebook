import PropTypes from 'prop-types';
import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";
import { addContact } from "../../redux/contacts/contacts-action";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const { items } = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const formSubmit = (event) => {
    event.preventDefault();
    
    if (
      items.some(
        (item) => name.toLowerCase() === item.name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.warning(
        `${name} is already in contacts`
      );
    } else if (
      items.some(
        (item) => number.toLowerCase() === item.number.toLowerCase()
      )
    ) {
      return Notiflix.Notify.warning(
        `${number} is already in contacts`
      );
    } else {
      dispatch(addContact(name, number));
    }
    
    reset();
  };

  return (
    <form onSubmit={formSubmit} className={styles.form}>
      <label className={styles.labelInput}>
        <h3 className={styles.title}>Name</h3>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Name"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.labelInput}>
        <h3 className={styles.title}>Number</h3>
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={styles.buttonForm} type="submit">
        Add name
      </button>
    </form>
  );
};

export default Form;

Form.propTypes = {
    value: PropTypes.string
}