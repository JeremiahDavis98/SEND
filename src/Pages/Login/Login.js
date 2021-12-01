// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { useAppContext } from "../lib/contextLib";
import "./Login.css";

export default function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const {userHasAuthenticated} = useAppContext();
  // function validateForm() {
  //   return username.length > 0 && password.length > 0;
  // }
  //
  // function handleSubmit(event) {
  //   fetch('/api/login/')
  // }

  return (
    <div className="Login">
      <form method="POST" action="/api/login">
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br></br>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <br></br>
        <input type="submit" value="Log In" />
      </form>
    </div>

      // <Form onSubmit={handleSubmit}>
      //   <Form.Group size="lg" controlId="username">
      //     <Form.Label>Username</Form.Label>
      //     <Form.Control
      //       autoFocus
      //       value={username}
      //       onChange={(e) => setUsername(e.target.value)}
      //     />
      //   </Form.Group>
      //   <Form.Group size="lg" controlId="password">
      //     <Form.Label>Password</Form.Label>
      //     <Form.Control
      //       type="password"
      //       value={password}
      //       onChange={(e) => setPassword(e.target.value)}
      //     />
      //   </Form.Group>
      //   <Button block size="lg" type="submit" disabled={!validateForm()}>
      //     Login
      //   </Button>
      // </Form>
    //</div>
  );
}
