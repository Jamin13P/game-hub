import React, { useState, useEffect } from "react";

const Creator = (props) => {

  const [newPost, setNewPost] = useState("")

  return (
    <div>
      <button>Share</button>
      <input
        placeholder="Share a thought you have about a video game or an experience you've had about a video game."
        type="text"
        onChange={(e) => setNewPost(e.target.value)}
      />
    </div>
  );
};

export default Creator;
