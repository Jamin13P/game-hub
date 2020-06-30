import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";

const Account = (props) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/userposts/1`) // GET THE RIGHT PARAMETER VARIABLE NOT JUST 1
      .then((res) => {
        setUserPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  
  return (
    <div>
      {userPosts.map((elem) => {
        return (
          <div key={elem.post_id}>
            <h4>{elem.username}</h4>
            {!elem.picture ? null : <img className="picture" src={elem.picture} alt="IMG" />}
            <p>{elem.post}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { setUser })(Account);
