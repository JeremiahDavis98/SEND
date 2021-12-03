import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Auth from './Auth';
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.isAuthenticated())
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
