import React, { Component } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './actions';
function App () {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <h3>isLogged: {isLogged.toString()}</h3> */}
      {isLogged ? 
        <h3>something that can not be seen if it is not logged.</h3>
        :<h3>you are not logged in</h3>
      }
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(increment(10))}>+</button>
    </div>
  )
}
export default App;
