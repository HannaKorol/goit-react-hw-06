import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectStep } from "../../redux/counter/selectors";
import { decrement, increment } from "../../redux/counter/actions";

//selectors - взяти з
const Counter = () => {
  const counter = useSelector(selectCounter); //take counter from the state -counter(object), counter(box)
  const step = useSelector(selectStep); // в селекторі визначили selectStep і додали йього сюди, зміни робимо в селекторі

  //Це функція яка повертається і ми маємо право робити запити до редакса (лек.1 1.09.31)
  const dispatch = useDispatch();

  const handleAddContactClick = () => {
    dispatch(increment()); //if you would like to do increase, then go to "reducer" and do it
  };

  const handleDeleteContactClick = () => {
    dispatch(decrement());
  };


  return <div>Counter</div>;
};

export default Counter;
