import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import "../public/buynow.css";
import { format,addDays } from 'date-fns';
import axios from 'axios';
const Buynow = () => {
  const username=localStorage.getItem("username");
  const { imgsrc, weight, itemOf, total, Name,itemid } = useParams();
  const [Rate, setRate] = useState("");
  const [cnt, setCnt] = useState(1);
  const [finalTotal, setFinalTotal] = useState(parseInt(total));

  useEffect(() => {
    if (itemOf === "GOLD") {
      setRate("₹5427.3");
    } else if (itemOf === "SLIVER") {
      setRate("₹75");
    } else {
      setRate("₹3540");
    }
  }, [itemOf]);

  useEffect(() => {
    const newTotal = parseInt(total) * cnt;
    setFinalTotal(newTotal);
  }, [cnt, total]);

  const quantitydecrement = () => {
    if (cnt === 1) {
      alert('THE NEELIMA JEWELLERY REQUESTS YOU, SELECT AT LEAST ONE!! 🙂');
      return;
    }
    setCnt(cnt - 1);
  };

  const quantityincrement = () => {
    setCnt(cnt + 1);
  };
function PlaceOrder(){
  const currentDate = new Date();
  const formattedDate = format(currentDate, ' MMMM-do,yy');
  const formattedTime = format(currentDate, 'HH:mm');
  const deliveryDate = addDays(currentDate, 14);
  const formattedDeliveryDate = format(deliveryDate, 'MMMM do, yyyy');
  axios.post('/orders', {
    imgsrc : imgsrc,
    item : Name,
    status:"Ordered",
    username:username,
    orderDate:formattedDate,
    orderTime:formattedTime,
    DeliveryDate:formattedDeliveryDate,
    itemid:itemid,
    weight:weight,
    total:total
  });
  window.location.href="/ordered";
}
function CancelOrder(){
  const currentDate = new Date();
  const formattedDate = format(currentDate, ' MMMM-do,yy');
  const formattedTime = format(currentDate, 'HH:mm');
  const deliveryDate = addDays(currentDate, 14);
  const formattedDeliveryDate = format(deliveryDate, 'MMMM do, yyyy');
  axios.post('/orders', {
    imgsrc : imgsrc,
    item : Name,
    status:"Cancelled",
    username:username,
    orderDate:formattedDate,
    orderTime:formattedTime,
    DeliveryDate:formattedDeliveryDate,
    weight:weight,
    total:total,
    itemid:itemid
  });
  window.location.href="/cancelorder"
}
//placeorderbtnfn:
const [Hideorder,setHideorder]=useState("none");
const[hideDetails,setDetails]=useState("inline");
const [hidepayment,sethidePayment]=useState("none");
const [hideDetailstick,sethideDetailstick]=useState("none");
const [hideorderBar,sethideorderBar]=useState("none");
const [hidePaymentBar,sethidePaymentBar]=useState("none");
const [hideordertick,sethideordertick]=useState("none");
function showorder(e){
  e.preventDefault();
  setHideorder("inline");
  setDetails("none");
  sethideDetailstick("inline");
  sethideorderBar("inline");
}
function showPayment(){
  sethidePayment("inline");
  setHideorder("none");
  sethidePaymentBar("inline");
  sethideordertick("inline")
}

  return (
    <div>
      <Header />
      <main id="main">
        <div id="dev-add">
          <img
            src="https://imgs.search.brave.com/E28t4AoAE4xcSCZriyaI8qJ5g89o0gMgKUW3GnL7DGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhka2kucG5n"
            alt=""
            style={{display:hideDetailstick}}
            id="tick1"
          />
          <div className="sno">1</div>
          <div className="sty1">DELIVERY-ADDRESS</div>
        </div>
        <form onSubmit={showorder} id="fdevadd" style={{ display: hideDetails }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            size="20"
            className="form-sty"
            id="buyer"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="10-digit mobile number"
            className="form-sty"
            id="mb"
            required
          />
          <input
            type="text"
            name="pincode"
            placeholder="pincode"
            className="form-sty"
            id="pincode"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Complete address"
            className="form-sty"
            id="cadd"
            required
          />
          <input
            type="radio"
            id="dev1"
            className="radio"
            name="deliveryType"
            required
          />Home(All day delivery) <br />
          <input
            type="radio"
            name="deliveryType"
            id="dev2"
            className="radio"
            required
          />Work (delivery between 10AM-9PM) <br />
          <button type="submit" id="save">Save</button>
          <button type="reset" id="cancel">Reset</button>
        </form>
        <div id="od-sum" style={{display:hideorderBar}}>
          <img
            src="https://imgs.search.brave.com/E28t4AoAE4xcSCZriyaI8qJ5g89o0gMgKUW3GnL7DGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhka2kucG5n"
            alt=""
            id="tick2"
            style={{display:hideordertick}}
          />
          <div className="sno">2</div>
          <div className="sty1">ORDER-SUMMARY</div>
        </div>
        <div id="od-sumsec" style={{display:Hideorder}}>
          <img src={imgsrc} alt="" id="img" />
          <div id="counter">
            <div id="minus" className="sym" onClick={quantitydecrement}>-</div>
            <div id="count">{cnt}</div>
            <div id="plus" className="sym" onClick={quantityincrement}>+</div>
          </div>
          <div
            style={{
              position: "relative",
              position: "absolute",
              top: "10px",
              right: "20px",
              width: "330px",
              height: "350px",
              borderRadius: "10px",
              paddingTop: "15px",
              paddingLeft: "50px"}}
          >
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                fontFamily: "Arial, Helvetica, sans-serif",
                textDecoration: "underline",
                position: "absolute",
                left: "50px",
                top: "10px"}}
            >
              Price Details
            </h1>
            <div className="billorder" style={{position: "absolute",top:"40px",left: "20px", width:"320px"}}>Item-Name : <span id="pname" style={{fontWeight:"600"}}>{Name}</span></div>
            <div className="billorder" style={{position: "absolute",top: "75px",right:"40px",width:"300px"}}>
              Weight of item : <span id="gms" style={{fontWeight:"600"}}>{weight}</span> Grams
            </div>
            <div className="billorder" style={{position: "absolute", top: "110px", right: "138px"}}>
              Item-type : <span style={{fontWeight:"600"}}>{itemOf}</span>
            </div>
            <div className="billorder" style={{position: "absolute", top: "145px", right: "123px"}}>
              Rate : <span style={{fontWeight:"600"}}>{Rate}</span>
            </div>
            <div className="billorder" style={{position: "absolute", top: "180px", left: "-25px"}}>
              Making-charges : <span style={{fontWeight:"600"}}>₹500</span>
            </div>
            <div
              className="billorder"
              style={{
                paddingTop: "10px",
                textAlign: "center",
                borderTop: "2px solid black",
                width: "180px",
                height: "30px",
                position: "absolute",
                top: "220px",
                right: "120px",
                fontSize: "22px",
              fontWeight:"600"}}
            >
              Total = ₹<span id="fprice">{finalTotal}</span>
            </div>
          </div>
          <button id="odbtn" onClick={showPayment}>ORDER NOW</button>
          <button id="cancel1" onClick={CancelOrder}>Cancel order</button>
        </div>
        <div id="payment" style={{display:hidePaymentBar}}>
          <img
            src="https://imgs.search.brave.com/E28t4AoAE4xcSCZriyaI8qJ5g89o0gMgKUW3GnL7DGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhka2kucG5n"
            alt=""
            id="tick3"
          />
          <div className="sno">3</div>
          <div className="sty1">PAYMENT</div>
        </div>
        <div
          style={{
            width: "200px",
            height: "150px",
            backgroundColor: "rgb(232, 229, 229)",
            border: "2px solid black",
            boxShadow: "2px 2px 2px black",
            position: "relative",
            position: "absolute",
            top: "320px",
            left: "200px",
            padding: "10px",
            display:hidepayment
            }}
          id="paymentsec"

        >
          <input
            type="radio"
            name="pay"
            id="p3"
            style={{marginTop: "10px"}}
            required
          />Cash on delivery <br />
          <input
            type="radio"
            name="pay"
            id="p1"
           style={{marginTop: "10px"}}
            required
          />UPI
          <br />
          <input
            type="radio"
            name="pay"
            id="p2"
           style={{marginTop: "10px"}}
            required
          />CARD
          <br />
          <button id="porder" onClick={()=>PlaceOrder()}>Place an order</button>
        </div>
      </main>
      </div>
  );
};

export default Buynow;
