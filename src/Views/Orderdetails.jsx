import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import "../public/buynow.css";
import axios from 'axios';

const Orderdetails = () => {
    const username=localStorage.getItem("username");
    const { imgsrc, status, itemName, orderDate, orderTime, DeliveryDate, weight, total, itemid } = useParams();
    const [colour, setColour] = useState("green");
    const [successmsg, setSuccessmsg] = useState("none");
    const [blur, setBlur] = useState("0px");
    const [itemtype, setItemtype] = useState('');

    useEffect(() => {
        if (status === "Cancelled") {
            setColour("red");
        }
        if (itemName.includes("Gold")) {
            setItemtype("Gold");
        } else if (itemName.includes("Silver")) {
            setItemtype("Silver");
        } else {
            setItemtype("Platinum");
        }
    }, [status, itemName]);

    const Cartadd = (type) => {
        axios.post('/add/cart', {
            imgsrc: imgsrc,
            itemName: itemName,
            itemid: itemid,
            username: "pratap",
            itemType: type,
            weight: weight,
            total: total
        }).then(() => {
            setSuccessmsg("inline");
            setBlur("10px");
        });
    }

    const close = () => {
        setSuccessmsg("none");
        setBlur("0px");
    }

    const buyagain = () => {
        const encodedImgSrc = encodeURIComponent(imgsrc);
        window.location.href = `/buynow/${encodedImgSrc}/${weight}/${itemtype}/${total}/${itemName}/${itemid}`;
    }
    const Cancelorder=()=>{
  axios.post('/orders', {
    imgsrc : imgsrc,
    item : itemName,
    status:"Cancelled",
    username:username,
    orderDate:orderDate,
    orderTime:orderTime,
    DeliveryDate:DeliveryDate,
    weight:weight,
    total:total,
    itemid:itemid
  });
  window.location.href="/cancelorder"
    }
    return (
        <>
            <Header />
            <section style={{ display: "flex", width: "100%", height: "600px", marginTop: "150px", position: "relative", filter: `blur(${blur})` }}>
                <img src={decodeURIComponent(imgsrc)} id='viewimg' style={{ position: "absolute", left: "230px" }} />
                <div style={{ position: "absolute", top: "70px", right: "295px", width: "500px", height: "500px", borderRadius: "10px", paddingTop: "15px", paddingLeft: "50px", cursor: "pointer" }}>
                    <h1 style={{ fontWeight: "bold", fontSize: "40px", fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute", left: "125px", top: "15px", cursor: "pointer" }}>Order Details</h1>
                    <div className="bill" style={{ position: "absolute", top: "50px", left: "95px", cursor: "pointer" }}>Status Of Order: <span id="gms2" className='highlight' style={{ color: colour }}>{status}</span></div>
                    <div className="bill" style={{ position: "absolute", top: "105px", left: "149px", cursor: "pointer" }}>Item-Name: <span className='highlight'>{itemName}</span></div>
                    <div className="bill" style={{ position: "absolute", top: "160px", left: "120px", cursor: "pointer" }}>Ordered-Date: <span className='highlight'>{orderDate}</span></div>
                    <div className="bill" style={{ position: "absolute", top: "210px", left: "118px", cursor: "pointer" }}>Ordered-Time: <span className='highlight'>{orderTime}</span></div>
                    <div className="bill" style={{ position: "absolute", top: "258px", left: "120px", cursor: "pointer" }}>Delivery-Date: <span className='highlight'>{status === "Cancelled" ? "Cancelled" : DeliveryDate}</span></div>
                </div>
                {status==="Cancelled" ? (<button className="cart-add" style={{ position: "absolute", bottom: "128px", right: "515px" }} onClick={() => Cartadd(itemtype)}>Addcart</button>):(<button style={{ position: "absolute", bottom: "128px", right: "515px", width:"150px",height:"40px",backgroundColor:"rgb(214, 203, 203",borderRadius:"20px",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"700",padding:"2px",color:"rgb(40, 39, 39)"}} onClick={() => Cancelorder(itemtype)}>Cancel Order</button>)}
               
                <button className="buy-now" style={{ position: "absolute", bottom: "129px", right: "385px" }} onClick={buyagain}>Buy Again</button>
            </section>
            <section id="successnotify" style={{ display: successmsg }}>
                <div id="successmsg">ADDED TO CART SUCCESSFULLY✔️</div>
                <a href='/account' id="showcart">Show Cart</a>
                <button id='close' onClick={close}>Close</button>
            </section>
        </>
    )
}

export default Orderdetails;