import React, { useState, useEffect } from "react";
import axios from "axios"

const Auth = (props) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  useEffect( () => {
    console.log("Test")
    // axios
    // .post("/auth/register")
    // .then(res => {
    //   setUsername(res.data.results)
    //   setPassword(res.data.results)
    //   props.history.push("/home")
    // })
  }, [])

  return (
  <div>
    <input placeholder="Username" type="text" onChange={e => setUsername(e.target.value)} />
    <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
    <button>Login</button>
    <button>Register</button>
  </div>)
};

export default Auth;
