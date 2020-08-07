import React, { useState } from "react";
import axios from "axios";
import "./Creator.css";

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
    console.log(newPicture, newPost);
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
      <div className="bigCreator">
        <div className="bigCreatorInteract">
          <div className="button">
            {newPost === "" ? (
              <button className="decoy-button">
                <p>Share</p>
              </button>
            ) : (
              <button className="real-button" onClick={createPost}>
                <p>Share</p>
              </button>
            )}
            {!addPicture ? (
              <button onClick={toggleAddPicture}>
                <p>Add Picture</p>
              </button>
            ) : (
              <button onClick={handleCancel}>
                <p>Cancel Picture</p>
              </button>
            )}
          </div>
          {addPicture ? (
            <input
              className="picture"
              placeholder="Picture URL here."
              type="text"
              onChange={(e) => setNewPicture(e.target.value)}
            />
          ) : null}
          <textarea
            className="post"
            placeholder="What do you want to share?"
            type="text"
            onChange={(e) => setNewPost(e.target.value)}
          />
        </div>
      </div>
      <div className="smallCreatorInteract">
        <div className="button">
          {newPost === "" ? (
            <button className="decoy-button">
              <p>Share</p>
            </button>
          ) : (
            <button className="real-button" onClick={createPost}>
              <p>Share</p>
            </button>
          )}
          {!addPicture ? (
            <button onClick={toggleAddPicture}>
              <p>Add Picture</p>
            </button>
          ) : (
            <button onClick={handleCancel}>
              <p>Cancel Picture</p>
            </button>
          )}
        </div>
        {addPicture ? (
          <input
            className="picture"
            placeholder="Picture URL here."
            type="text"
            onChange={(e) => setNewPicture(e.target.value)}
          />
        ) : null}
        <textarea
          className="post"
          placeholder="What do you want to share?"
          type="text"
          onChange={(e) => setNewPost(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Creator;
