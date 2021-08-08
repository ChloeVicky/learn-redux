import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

// First try
// ACTION INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }

// }

// const store = createStore(counter);

// once the state change, store.subscribe() will execute immediately
// store.subscribe(() => console.log(store.getState()));

// DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
