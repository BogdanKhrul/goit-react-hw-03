import styles from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      {contact.name}: {contact.number}
      <button
        onClick={() => onDeleteContact(contact.id)}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
