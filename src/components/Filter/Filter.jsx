import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { filteredContacts } from "../../redux/contacts/contacts-action";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const { filter } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <label>
      <input
        className={styles.inputSearch}
        type="text"
        name="filter"
        value={filter}
        onChange={(event) => dispatch(filteredContacts(event.target.value))}
        placeholder="Search contact"
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};
