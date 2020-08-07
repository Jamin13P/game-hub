import React, { useState } from "react";
import { setUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import axios from "axios";
import "./Auth.css";

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
    <div className="Auth">
      <div className="smallAuth">
        <div className="smallInteract">
          <h2 className="smallGameHub">Game Hub</h2>
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
          <div className="smallAuthBtns">
            <button className="smallLoginBtn" onClick={login}>
              <p>Login</p>
            </button>
            <button className="smallRegisterBtn" onClick={register}>
              <p>Register</p>
            </button>
          </div>
        </div>
      </div>
      <div className="bigAuth">
        <header className="bigAuthHeader">
          <div className="bigGameHubContainer">
            <h2 className="bigGameHub">Game Hub</h2>
          </div>
          <div className="bigAuthInputs">
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
          </div>
          <div className="bigAuthBtns">
            <button className="bigLoginBtn" onClick={login}>
              <p>Login</p>
            </button>
            <button className="bigRegisterBtn" onClick={register}>
              <p>Register</p>
            </button>
          </div>
        </header>
        <div className="about">
          <div className="text">
            <p>
              Welcome to Game Hub! Game Hub is an environment where gamers across
              the world can share their opinions as well as their experiences of video games.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { setUser })(Auth);
