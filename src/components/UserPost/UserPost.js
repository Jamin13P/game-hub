import React, { useState } from "react";

const UserPost = (props) => {
    const {editing, toggleEditing, editPost, deletePost, elem} = props

    const [post, setPost] = useState(elem.post);
  const [picture, setPicture] = useState(elem.picture);

  return (
    <div>
      <h4>{elem.username}</h4>
      {editing ? (
        <input
          value={picture}
          type="text"
          onChange={(e) => setPicture(e.target.value)}
        />
      ) : (
        <img className="picture" src={elem.picture} alt="IMG" />
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
      {editing ? <button onClick={() => editPost(elem.post_id, post, picture)} >Save</button> : <button onClick={toggleEditing}>Edit</button>}
      <button onClick={() => deletePost(elem.post_id)}>Delete</button>
    </div>
  );
};

export default UserPost
