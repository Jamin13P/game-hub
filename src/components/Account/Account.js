import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import UserPost from "../UserPost/UserPost";
import "../../styles/Account.css";

const Account = (props) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    if (props.user) {
      getUserPosts();
    }
  }, [props.user]);

  function getUserPosts() {
    axios
      .get(`/api/userposts/${props.user.userId}`)
      .then((res) => {
        setUserPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deletePost(post_id) {
    axios
      .delete(`/api/post/${post_id}`)
      .then(() => {
        getUserPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="Account">
      {userPosts.map((elem) => {
        return (
          <UserPost
            key={elem.post_id}
            getUserPosts={getUserPosts}
            deletePost={deletePost}
            elem={elem}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { setUser })(Account);
