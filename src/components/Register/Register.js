import React, { useState } from "react";
import { setUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import axios from "axios";
import "./Register.css";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toAuth = () => {
    props.history.push("/");
  };

  function register() {
    axios
      .post("/auth/register", { username, password, confirmPassword })
      .then((res) => {
        props.setUser(res.data);
        props.history.push("/home");
      })
      .catch((err) => {
        alert(err.response.request.response);
      });
  }

  return (
    <div className="Register">
      <div className="registerField">
        <h1>Register!</h1>
        <div className="registerMessageContainer">
          <p className="registerMessage">
            If you would like to join in the Game Hub community, please
            register. We would LOVE to have you!
          </p>
        </div>
        <form className="registration">
          <input placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}/>
          <input placeholder="Password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}/>
          <input placeholder="Confirm Password"
          type="text"
          onChange={(e) => setConfirmPassword(e.target.value)}/>
          <button onClick={register}>Register</button>
        </form>
        <button onClick={toAuth}>Back</button>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { setUser })(Register);
