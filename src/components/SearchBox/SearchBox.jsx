import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox({ value, onFilter }) {
  const dispatch = useDispatch();
  return (
    <div className={s.searchWrapper}>
      <p className={s.lable}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value)) /* onFilter(e.target.value) */}
      />
    </div>
  );
}

//Щоб зробити input контрольованим елементом, потрібно виконати два кроки:
//Атрибуту value потрібно передати значення стану inputValue.
//При події onChange отримати значення поля і записати його в стан inputValue.
