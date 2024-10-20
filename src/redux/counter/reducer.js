import { decrement, increment } from "./actions";

const initialState = {
    counter: 0,
    step: 1,
};


export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment.type: //якщо приїде якась машина інкремент, то ми маємо зробити якусь подію
      return {
        ...state,
        counter: state.counter + state.step,
      }; //! ми кожного разу повині повертати новий стейт
    case decrement.type: //якщо приїде якась машина інкремент, то ми маємо зробити якусь подію
      return {
        ...state,
        counter: state.counter - state.step,
      };
    default:
      return state;
  }
};