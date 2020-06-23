import React, { useState } from "react";
import { setUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import axios from "axios";

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function register() {
    axios
      .post("/auth/register", { username, password })
      .then((res) => {
        props.setUser(res.data);
        props.history.push("/home");
      })
      .catch((err) => {
        alert(err.response.request.response);
      });
  }

  function login() {
    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        props.setUser(res.data);
        props.history.push("/home");
      })
      .catch((err) => {
        alert(err.response.request.response);
      });
  }

  return (
    <div>
      <input
        placeholder="Username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { setUser })(Auth);
