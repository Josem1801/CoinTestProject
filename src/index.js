import Detail from 'pages/Detail';
import Home from 'pages/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path="/:cripto" component={Detail}/>
        <Route path='/'>
          <Redirect to='home'/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

