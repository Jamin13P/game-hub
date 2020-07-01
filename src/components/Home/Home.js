import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./Home.css";

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
            {elem.picture === null || elem.picture === "" ? null : (
              <img className="picture" src={elem.picture} alt="IMG" />
            )}
            <p>{elem.post}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Home);
