import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Auth from './Auth';
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Routes from './Routes';
import { AppContext } from './Pages/lib/contextLib';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.isAuthenticated())
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
                <LinkContainer to = "/Signup">
                  <Nav.Link>Signup</Nav.Link>
                </LinkContainer> <br></br>
                <LinkContainer to = "/Downloads">
                  <Nav.Link>Dataset Downloads</Nav.Link>
                </LinkContainer> <br></br>
                <LinkContainer to = "/api/logout">
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
              </LinkContainer> <br></br>
              <LinkContainer to = "/api/logout">
                <Nav.Link>Logout</Nav.Link>
              </LinkContainer>
              </>
            )}


          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value = {{isLoggedIn, setIsLoggedIn}}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
