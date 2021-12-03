import logo from './logo.svg';
import './App.css';
import Page from './Page';
import Auth from './Auth';
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.isAuthenticated())
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
