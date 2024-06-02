import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../public/header.css";
import Search from './search';

const Header = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const location = useLocation(); // Hook to get the current location

  // State variables to manage the border-bottom style of each nav item
  const [borderBottomHome, setBorderBottomHome] = useState("none");
  const [borderBottomAboutUs, setBorderBottomAboutUs] = useState("none");
  const [borderBottomAccount, setBorderBottomAccount] = useState("none");

  // useEffect to update the styles based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setBorderBottomHome("3px solid #f3ef11");
        setBorderBottomAboutUs("none");
        setBorderBottomAccount("none");
        break;
      case "/account":
        setBorderBottomHome("none");
        setBorderBottomAboutUs("none");
        setBorderBottomAccount("3px solid #f3ef11");
        break;
      case "/aboutus":
        setBorderBottomHome("none");
        setBorderBottomAboutUs("3px solid #f3ef11");
        setBorderBottomAccount("none");
        break;
      default:
        setBorderBottomHome("none");
        setBorderBottomAboutUs("none");
        setBorderBottomAccount("none");
        break;
    }
  }, [location.pathname]); // Dependency array to run effect when location.pathname changes

  // Function to handle navigation and update styles
  const borderbottomfn = (url = "none") => {
    if (url === "account") {
      navigate("/account");
    } else if (url === "aboutus") {
      navigate("/aboutus");
    } else if (url === "home") {
      navigate("/home");
    } else {
      setBorderBottomHome("none");
      setBorderBottomAboutUs("none");
      setBorderBottomAccount("none");
    }
  };

  return (
    <div>
      <header id='header'>
        <div id="logo"></div>
        <div id="name">NEELIMA JEWELLERY</div>
        <nav id="nav-bar">
          <div id="home" onClick={() => borderbottomfn("home")} style={{ borderBottom: borderBottomHome }}>Home</div>
          <div id="account" onClick={() => borderbottomfn("account")} style={{ borderBottom: borderBottomAccount }}>Account</div>
          <div id="aboutus" onClick={() => borderbottomfn("aboutus")} style={{ borderBottom: borderBottomAboutUs }}>About us</div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
