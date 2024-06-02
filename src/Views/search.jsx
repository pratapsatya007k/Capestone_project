import React, { useState } from 'react';
import "../public/search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  function onSubmit() {
    let val = searchValue.toLowerCase();
    console.log(val);
    const arr = ["fingerrings", "gold", "silver", "platinum", "earrings", "bangles", "necklace", "bracelets"];
    let redirectURL = "/home"; // Default redirection URL
    let found = false;
    if (val!=""){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(val)) {
        found = true;
        if (arr[i] === "gold" || arr[i] === "fingerrings") {
          redirectURL = "/gold/rings";
          break; // Exit loop once redirect URL is set
        } else if (arr[i] === "silver" || arr[i] === "platinum") {
          redirectURL = `/${arr[i]}`;
          break; // Exit loop once redirect URL is set
        } else if (["fingerrings", "earrings", "bangles", "necklace", "bracelets"].includes(arr[i])) {
          redirectURL = `/gold/${arr[i]}`;
          break; // Exit loop once redirect URL is set
        }
      }
    }
  }else{
    alert("Please Enter Something")
  }
    if (found) {
      window.location.href = redirectURL;
    }
  }
  function navigation(url){
    window.location.href=`/${url}`
  }

  return (
    <>
      <div id="searchbox">
        <input 
          type='search' 
          id="searchbar" 
          placeholder='Search' 
          value={searchValue} 
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button id="searchbtn" htmlFor="searchbar" onClick={onSubmit}></button>
        <div id='hints'>
          <div className="hint" onClick={()=>navigation("gold/rings")}>Gold Rings</div>
          <div className="hint" onClick={()=>navigation("sliver")}>Silver</div>
          <div className="hint" onClick={()=>navigation("platinum")}>Platinum</div>
          <div className="hint"onClick={()=>navigation("gold/earrings")}>Earrings</div>
          <div className="hint" onClick={()=>navigation("gold/bangles")}>Bangles</div>
          <div className="hint" onClick={()=>navigation("gold/bracelets")}>Bracelets</div>
          <div className="hint"onClick={()=>navigation("gold/necklace")}>Necklace</div>
          {/* <div className="hint"></div> */}
        </div>
      </div>
    </>
  );
};

export default Search;
