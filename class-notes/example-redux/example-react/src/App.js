import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { decreament, increment } from './redux/app/features/counter/counterSlice';


function App() {
  const dispatch = useDispatch()

  const { counter } = useSelector(state => state.counter)
  const { country } = useSelector(state => state.country)
  console.log(counter)


  return (
    <div className="App">
      <span onClick={() => dispatch(decreament())}>-</span>
      <span>{counter}</span>

      <span onClick={() => dispatch(increment())}>+</span>
    </div>
  );
}

export default App;
