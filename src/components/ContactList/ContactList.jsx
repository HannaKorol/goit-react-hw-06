import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList(
  {
    /* contacts */
    /* onDelete */
  }
) {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts); // Select contacts from Redux state
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() =>
              dispatch(deleteContact(contact.id))
            } /* Передаємо id контакту для видалення */
          />
        </li>
      ))}
    </ul>
  );
}
