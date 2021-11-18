import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/contacts-action";

import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const { items, filter } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const filtedContacts = items.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.number.includes(filter)
  );

  return (
    <ul className={styles.contactList}>
      {filtedContacts.map((item) => (
        <li key={item.id} className={styles.contactItem}>
          <span className={styles.spanName}>{item.name}</span>
          <span className={styles.spanNumber}>{item.number}</span>
          <button
            type="submit"
            onClick={() => dispatch(deleteContact(item.id))}
            className={styles.contactButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contact;

Contact.propTypes = {
  filtedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
