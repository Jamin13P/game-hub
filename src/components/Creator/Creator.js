import React, { useState } from "react";
import axios from "axios";
import "../../styles/Creator.css"

const Creator = (props) => {
  const [newPost, setNewPost] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [addPicture, setAddPicture] = useState(false);

  function toggleAddPicture() {
    setAddPicture(!addPicture);
  }

  function resetNewPicture() {
    setNewPicture("");
  }

  function handleCancel() {
    toggleAddPicture();
    resetNewPicture();
  }

  function createPost() {
    console.log(newPicture, newPost)
    axios
      .post("/api/newpost", { newPicture, newPost })
      .then(() => {
        props.history.push("/account");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="Creator">
      {newPost === "" ? <button className="decoy-button" >Share</button> : <button className="real-button" onClick={createPost} >Share</button>}
      {!addPicture ? (
        <button onClick={toggleAddPicture}>Add Picture URL</button>
      ) : (
        <button onClick={handleCancel}>Cancel Picture</button>
      )}
      {addPicture ? (
        <input
          placeholder="Picture URL here."
          type="text"
          onChange={(e) => setNewPicture(e.target.value)}
        />
      ) : null}
      <input
        placeholder="What do you want to share?"
        type="text"
        onChange={(e) => setNewPost(e.target.value)}
      />
    </div>
  );
};

export default Creator;
