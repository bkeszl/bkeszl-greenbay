import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import ErrorPage from './components/ErrorPage'
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <div>
        <Nav />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <ErrorPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
