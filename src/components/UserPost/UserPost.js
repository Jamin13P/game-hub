import React, { useState } from "react";
import axios from "axios";
import "../../styles/UserPost.css";

const UserPost = (props) => {
  const { getUserPosts, deletePost, elem } = props;

  const [post, setPost] = useState(elem.post);
  const [picture, setPicture] = useState(elem.picture);
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing(!editing);
  }

  function editPost(post_id, post, picture) {
    axios
      .put(`/api/post/${post_id}`, { post, picture })
      .then(() => {
        getUserPosts();
      })
      .catch((err) => {
        console.log(err);
      });
    toggleEditing();
  }

  return (
    <div className="UserPost">
      <h4>{elem.username}</h4>
      {editing ? (
        <input
          value={picture}
          type="text"
          onChange={(e) => setPicture(e.target.value)}
        />
      ) : (
        <img className="userPicture" src={elem.picture} alt="" />
      )}
      {editing ? (
        <input
          value={post}
          type="text"
          onChange={(e) => setPost(e.target.value)}
        />
      ) : (
        <p>{elem.post}</p>
      )}
      {editing ? (
        <button onClick={() => editPost(elem.post_id, post, picture)}>
          <p>Save</p>
        </button>
      ) : (
        <button onClick={toggleEditing}>
          <p>Edit</p>
        </button>
      )}
      {editing ? (
        <button onClick={toggleEditing}><p>Cancel</p></button>
      ) : (
        <button onClick={() => deletePost(elem.post_id)}><p>Delete</p></button>
      )}
    </div>
  );
};

export default UserPost;
