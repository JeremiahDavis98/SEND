import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Downloads from './Pages/Downloads/Downloads'
/*
              {<Signup />}
              {<Login />}
*/
import HomePage from './Pages/HomePage/HomePage'
import NoPage from './Pages/NoPage404/NoPage';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/HomePage">
                <HomePage />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/Signup">
                <Signup />
            </Route>
            <Route path="/Downloads">
                <Downloads />
            </Route>
        </Switch>
    );
}
