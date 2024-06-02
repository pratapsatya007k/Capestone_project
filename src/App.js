import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Login from "../src/Views/Login";
import Home from "../src/Views/Home";
import SignUp from "../src/Views/Signup";
import Rings from "../src/Views/Rings";
import Earrings from "../src/Views/Earrings";
import Bangles from "../src/Views/Bangles";
import Bracelets from "../src/Views/Bracelets";
import Necklace from "../src/Views/Necklace";
import Platinum from "../src/Views/Platinum";
import Sliver from "../src/Views/Sliver";
import Buynow from "../src/Views/Buynow";
import Aboutus from "./Views/Aboutus";
import Account from "./Views/Account";
import PriceDetails from "./Views/PriceDetails";
import Ordersuccess from "./Views/Ordersuccess";
import buffer from "./public/buffer.gif";
import Cart from "./Views/Cart";
import Orderhistory from "./Views/Orderhistory";
import Orderdetails from "./Views/Orderdetails";
import Pagenotfound from "./Views/Pagenotfound";
import Cancelorder from "./Views/Cancelorder";
function App() {
  const [load, setLoad] = useState("none");
  const [close, setClose] = useState("inline");
  const [blurClass, setBlurClass] = useState("blurred");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoad("inline");
      show();
    }, 2300);

    function show() {
      const timer2 = setTimeout(() => {
        setClose("none");
        setBlurClass("clear");
      }, 800);
      
      return () => clearTimeout(timer2);
    }

    return () => clearTimeout(timer1);
  }, []);

  return (
    <>
      <img src={buffer} style={{display: close, width: "200px", height: "200px", position: "fixed", left: "640px", top: "250px", zIndex: "1"}} alt="Loading"/>
      <div style={{display: load}} className={blurClass}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/gold/rings' element={<Rings />} />
            <Route path='/gold/earrings' element={<Earrings />} />
            <Route path='/gold/bangles' element={<Bangles />} />
            <Route path='/gold/necklace' element={<Necklace />} />
            <Route path='/gold/bracelets' element={<Bracelets />} />
            <Route path='/sliver' element={<Sliver />} />
            <Route path='/platinum' element={<Platinum />} />
            <Route path='/buynow/:imgsrc/:weight/:itemOf/:total/:Name/:itemid' element={<Buynow />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/account' element={<Account />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path="/pricedetails/:imgsrc/:weight/:itemtype/:total/:itemname/:itemid" element={<PriceDetails/>}/>
            <Route path="/ordered" element={<Ordersuccess/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/orderhistory" element={<Orderhistory/>}/>
            <Route path="/orderdetails/:imgsrc/:status/:itemName/:orderDate/:orderTime/:DeliveryDate/:itemid/:weight/:total" element={<Orderdetails/>}/>
            <Route path="/cancelorder" element={<Cancelorder/>}/>
            <Route path="*" element={<Pagenotfound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
