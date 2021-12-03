import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAppContext } from "../lib/contextLib";
import "./Login.css";
import Auth from "./../../Auth"

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  // const {userHasAuthenticated} = useAppContext();
  function validateForm() {
    return user.length > 0 && pass.length > 0;
  }

  function handleSubmit(event) {
    Auth.login(user, pass);
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>

    // <div className="Login">
    //   <form method="POST" action="/api/login">
    //     <label>
    //       Username:
    //       <input type="text" name="username" />
    //     </label>
    //     <br></br>
    //     <label>
    //       Password:
    //       <input type="text" name="password" />
    //     </label>
    //     <br></br>
    //     <input type="submit" value="Log In" />
    //   </form>
    // </div>

  );
}
