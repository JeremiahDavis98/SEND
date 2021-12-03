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
<<<<<<< HEAD
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
=======
  const [isLoggedIn, setIsLoggedIn] = useState();//Auth.isAuthenticated());
  return (
    <div className="App">
      <Navbar collapseOnSelect bg = "light" expand = "md" className = "mb-3">
        <LinkContainer to = "/HomePage">
          <Navbar.Brand className = "Page Select">
            EE461L - Team SEND Project
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav activeKey = {window.location.pathname}>
            {isLoggedIn ? (
              <>
                <LinkContainer to = "/Downloads">
                  <Nav.Link>Dataset Downloads</Nav.Link>
                </LinkContainer> <br></br>
                <LinkContainer to = "/Login">
                  <Nav.Link>Logout</Nav.Link>
                </LinkContainer>
              </>
            )
            : (
              <>
              <LinkContainer to = "/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer> <br></br>
              <LinkContainer to = "/Signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer> <br></br>
              <LinkContainer to = "/Downloads">
                <Nav.Link>Dataset Downloads</Nav.Link>
              </LinkContainer>
              </>
            )}


          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value = {{isLoggedIn, setIsLoggedIn}}>
        <Routes />
      </AppContext.Provider>
>>>>>>> 3c5f76a76a436e31b63eb9f023d5463f51bc9231
    </div>
  );
}

export default App;
