import React from 'react'
import { useSelector } from 'react-redux'
import { selectCounter, selectStep } from '../../redux/counter/selectors';


//selectors - взяти з
const Counter = () => {
  const counter = useSelector(selectCounter); //take counter from the state -counter(object), counter(box)
  const step = useSelector(selectStep); // в селекторі визначили selectStep і додали йього сюди, зміни робимо в селекторі

  return <div>Counter</div>;
}

export default Counter