import React, { useEffect } from "react";
import { setUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  useEffect(() => {
    axios
      .get("/auth/user")
      .then((res) => {
        props.setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  function logout() {
    axios
      .post("/auth/logout")
      .then((res) => {
        props.setUser(res.data);
        props.history.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="Nav">
      <header className="bigNav">
        <div>
          <h2 className="navGameHub">Game Hub</h2>
        </div>
        <button onClick={() => props.history.push("/home")}>
          <p>Home</p>
        </button>
        <button onClick={() => props.history.push("/creator")}>
          <p>Create Post</p>
        </button>
        <button onClick={() => props.history.push("/account")}>
          <p>Account</p>
        </button>
        <button onClick={logout}>
          <p>Logout</p>
        </button>
      </header>
      <header className="smallNav">
        <div>
          <h2 className="navGameHub">Game Hub</h2>
        </div>
        <button onClick={() => props.history.push("/home")}>
          <p>Home</p>
        </button>
        <button onClick={() => props.history.push("/creator")}>
          <p>Create Post</p>
        </button>
        <button onClick={() => props.history.push("/account")}>
          <p>Account</p>
        </button>
        <button onClick={logout}>
          <p>Logout</p>
        </button>
      </header>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { setUser })(withRouter(Nav));
