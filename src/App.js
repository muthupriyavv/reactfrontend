import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginPage from './component/LoginPage/LoginPage'
import HomePage  from './component/HomePage/HomePage'
import RegisterPage from './component/RegisterPage/RegisterPage'


class App extends Component {
  constructor() {
    super();
  }

  render()
  {
    return (
        <Switch>
           <Route  path="/" component={HomePage}>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
           </Route>
        </Switch>
  );
  }
  
}

export default App;
