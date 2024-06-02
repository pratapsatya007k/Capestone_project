import React, { useState } from "react";
import axios from "axios";
import"../public/signup.css"
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3000/auth/signup", {
          username,
          password,
        });
        // Assuming successful signup will return some data
        // You can also check for specific status codes in response
        if (response.data) {
          // Redirect to home page
          window.location.href="/home"
          localStorage.setItem("username",username)
        } else {
          // Handle error case if needed
          console.error("Signup failed");
        }
      } catch (error) {
        console.error(error);
      }
    };


  return (
    <div>
      <section style={{ display: "flex" }}>
        <div id="sec-1S">
          <div id="logoS"></div>
          <h1 id="desS">Welcome to Neelima Jewellery</h1>
          <div id="signupS">
            <a href="/"  style={{fontSize:"24px",textDecoration:"none",color:"#0a2384"}}>
              Login
            </a>
          </div>
        </div>
        <div id="sec-2S">
          <h1 id="logS">SIGNUP</h1>
          <form onSubmit={handleSignup} method="post" id="form">
            <div>
              <input
                type="text"
                id="usernameS"
                size="25"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                id="emailS"
                size="25"
                name="email"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="passwordS"
                size="25"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* {error && <div style={{ color: "red" }}>{error}</div>} */}
            <button type="submit" id="submitS">
              Sign up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
export default Signup;
