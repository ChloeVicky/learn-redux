import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './actions';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App () {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" component={Shop}></Route>
        </Switch>
        {/* <h3>isLogged: {isLogged.toString()}</h3> */}
        {isLogged ? 
          <h3>something that can not be seen if it is not logged.</h3>
          :<h3>you are not logged in</h3>
        }
        <button onClick={() => dispatch(decrement())}>-</button>
        <h1>counter {counter}</h1>
        <button onClick={() => dispatch(increment(10))}>+</button>
      </div>
    </Router>
  )
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

export default App;
