import Header from './components/Header';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Detail from './pages/detail/index';
import Home from './pages/home/index';
ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Router>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path="/currencies/:currency" component={Detail}/>
        <Route path='/'>
          <Redirect to='/home'/>
        </Route>
        <Route path="/home/:letters" >
          <Redirect to='/home'/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

