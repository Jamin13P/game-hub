import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";

const Account = (props) => {
  // const [userPosts, setUserPosts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`/api/userposts/`)
  //     .then((res) => {
  //       setUserPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return <div>Account.js</div>;
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { setUser })(Account);
