import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() =>
              onDelete(contact.id)
            } /* Передаємо id контакту для видалення */
          />
        </li>
      ))}
    </ul>
  );
}
