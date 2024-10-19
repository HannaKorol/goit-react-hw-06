import React from 'react'
import { useSelector } from 'react-redux'


//selectors - взяти з
const Counter = () => {

const counter = useSelector(state => state.counter.counter) //take counter from the state -counter(object), counter(box)
const step = useSelector(state => state.counter.step)



  return (
    <div>Counter</div>
  )
}

export default Counter