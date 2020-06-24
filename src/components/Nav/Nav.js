import React, { useState, useEffect } from "react";
import { setUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Nav = (props) => {

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
    <div>
      <button onClick={() => props.history.push("/home")} >Home</button>
      <button onClick={() => props.history.push("/creator")} >Create Post</button>
      <button onClick={() => props.history.push("/account")} >Account</button>
      <button onClick={logout} >Logout</button>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { setUser })(withRouter(Nav));
