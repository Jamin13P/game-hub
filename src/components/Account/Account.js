import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import UserPost from "../UserPost/UserPost";

const Account = (props) => {
  const [userPosts, setUserPosts] = useState([]);
  const [editing, setEditing] = useState(false);

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

  function editPost(post_id, post, picture) {
    axios
      .put(`/api/post/${post_id}`, { post, picture })
      .then(() => {
        console.log("Post was edited");
        getUserPosts();
      })
      .catch((err) => {
        console.log(err);
      });
      toggleEditing()
  }

  function toggleEditing() {
    setEditing(!editing);
  }

  function deletePost(post_id) {
    axios
      .delete(`/api/post/${post_id}`)
      .then(() => {
        console.log("Post was deleted");
        getUserPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      {userPosts.map((elem) => {
        return (
          <UserPost
            key={elem.post_id}
            editing={editing}
            toggleEditing={toggleEditing}
            editPost={editPost}
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
