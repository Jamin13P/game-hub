import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/randomposts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {posts.map((elem) => {
        return (
          <div key={elem.post_id}>
            <h4>{elem.username}</h4>
            <img alt="IMG" src={`${elem.picture}`} />
            <p>{elem.post}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
