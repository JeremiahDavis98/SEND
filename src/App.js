import './App.css';
import Login from './Pages/Login/Login';
import Auth from './Auth';
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
//import { LinkContainer } from "react-router-bootstrap";
//import Routes from './Routes';
//import { AppContext } from './Pages/lib/contextLib';
import HomePage from './Pages/HomePage/HomePage';
import Downloads from './Pages/Downloads/Downloads';
import Signup from './Pages/Signup/Signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();//useState(Auth.isAuthenticated()) 
  const [isAuth, setAuth] = useState();
  function requireAuth(component){
    <Redirect to = "/login" />;
  }
  function updateApp(){
    setAuth(!isAuth);
  }
  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth}
          updateApp={updateApp} />
        <Switch>
          <Route path= "/" exact component = {HomePage} />
          <Route path= "/Login" exact render = {() => <Login updateApp ={updateApp} />} />
          <Route path= "/Signup" exact render = {() => <Signup updateApp={updateApp}/>} />
          <Route path= "/" exact component = {Downloads} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
