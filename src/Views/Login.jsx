import React from 'react'
import "../public/style.css";
import axios from 'axios';
import { useState } from 'react';
const Login = () => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invaildmsg,setinvaildmsg]=useState("none")
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/index', {
                username,
                password
            });
           // Assuming successful signup will return some data
        // You can also check for specific status codes in response
        if (response.data) {
          // Redirect to home page
          window.location.href="/home"
          localStorage.setItem("username",username);
        } else {
          // Handle error case if needed
          setinvaildmsg("inline");
        }
        } catch (error) {
          setinvaildmsg("inline");
        }
    };
  return (
    <div>
      <section style={{display: "flex"}}>
      <div id="sec-1">
        <div id="logol"></div>
        <h1 id="des">Welcome to Neelima Jewellery</h1>
        <div id="signupl" style={{fontSize:"24px",textDecoration:"none",color:"#0a2384"}}>
          <a href="/signup"  style={{textDecoration:"none"}} >New to NJ?Signup</a>
        </div>
      </div>
      <div id="sec-2">
        <h1 id="log">LOGIN</h1>
        <div id='invaildnote' style={{display:invaildmsg}}>Invaild Credentials</div>
        <form
          onSubmit={handleLogin}
          id="form"
          method="post"
        >
          <div>
            <input
              type="text"
              name="username"
              id="email"
              size="25"
              placeholder="Enter your username  "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              size="25"
              placeholder="Enter your password"
              value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="LOGIN" id="submit" />
        </form>
      </div>
    </section>
    </div>
  )
}

export default Login
