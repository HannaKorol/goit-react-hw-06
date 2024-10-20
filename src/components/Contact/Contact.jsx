import nameLogo from "./user.svg";
import phoneNumberLogo from "./phone.svg";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ name, number, onDelete }) {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.textWrapper}>
        <div className={s.imageWrapper}>
          <img src={nameLogo} alt="user-logo" className={s.contactLogo} />
          <p className={s.nameP}>{name}</p>
        </div>
        <div className={s.imageWrapper}>
          <img
            src={phoneNumberLogo}
            alt="phone-logo"
            className={s.contactLogo}
          />
          <p>{number}</p>
        </div>
      </div>
      <button
        onClick={() => dispatch(deleteContact(item.id))}
        className={s.deleteButton}
      >
        Delete
      </button>
    </div>
  );
}
