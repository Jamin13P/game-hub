import React, { useState, useEffect } from "react";

const Auth = (props) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
  <div>
    <input placeholder="Username" type="text" onChange={e => setUsername(e.target.value)} />
    <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
    <button>Login</button>
    <button>Register</button>
  </div>)
};

export default Auth;
