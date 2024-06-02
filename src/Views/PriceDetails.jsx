import React, { useEffect, useState } from 'react'
import Header from './Header'
import "../public/pricedetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
const PriceDetails = () => {
  const username=localStorage.getItem("username");
  //USAGE OF URL PARAMS
  const { imgsrc, weight, itemtype, total,itemid,itemname } = useParams();
  const [Rate,setRate]=useState("");
  const [blur,setBlur]=useState("0px");
  useEffect(()=>{
    if(itemtype==="GOLD"){
      setRate("₹5427.3");
    }else if(itemtype==="SLIVER"){
      setRate("₹75")
    }else{
      setRate("₹3540")
    }
  },[])
  //Add Cart
  const [successmsg,setSuccessmsg]=useState("none");
  function addcart(imgsrc,id,name,type,itemweight,totalprice){
    axios.post('/add/cart', {
      imgsrc : imgsrc,
      itemName : name,
      itemid:id,
      username:username,
      itemType:type,
      weight:itemweight,
      total:totalprice
    });
    setSuccessmsg("inline");
    setBlur("10px")
  }
  function close(){
    setSuccessmsg("none");
    setBlur("0px");
  }
  //ORDER NOW DETAILS:
  function ordernow(imagesrc,weightitem,totalbill,item,id){
    const imgsrc = encodeURIComponent(imagesrc);
    const weight = weightitem;
    const itemOf = item
    const total = totalbill;
    const Name=itemname;
    const itemid=id
    window.location.href=`/buynow/${imgsrc}/${weight}/${itemOf}/${total}/${Name}/${itemid}`
  }
  return (   
  <>
    <Header/>
     <section style={{display:"flex" ,width:"100%",height:"600px", marginTop:"150px",position:"relative", filter:`blur(${blur})`}} >
     <img src={decodeURIComponent(imgsrc)} id='viewimg'/>
    <div style={{position:"relative",position: "absolute",top: "70px", right: "295px",width: "500px",height: "500px",borderRadius: "10px",paddingTop: "15px",paddingLeft: "50px", cursor:"pointer"}}>
      <h1 style={{fontWeight: "bold",fontSize: "40px",fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute",left: "125px",top:"15px" ,cursor:"pointer"}}>Price Details</h1>
      <div className="bill" style={{position: "absolute", top:"50px", left:"75px",cursor:"pointer"}}>Weight of item: <span id="gms2" className='highlight'>{weight}</span> Grams </div>
      <div className="bill" style={{position: "absolute", top:"105px",left: "132px",cursor:"pointer"}}>Item-type: <span  className='highlight'>{itemtype}</span></div>
      <div  className="bill" style={{position: "absolute", top: "160px", left: "120px",cursor:"pointer"}}>Gold-Rate: <span className='highlight'>{Rate}</span></div>
      <div className="bill" style={{position: "absolute", top:"210px",left: "54px",cursor:"pointer"}}>Making-charges: <span className='highlight'>₹500</span></div>
      <div  style={{paddingTop: "10px", textAlign:"center",borderTop:  "2px solid black", width: "250px",height: "50px",position: "absolute", top:"310px",left: "115px", fontSize: "30px",fontWeight:"700",cursor:"pointer"}} >Total = ₹<span id="fprice2">{total}</span></div>
    </div>
    <button className="cart-add" onClick={()=>addcart(imgsrc,itemid,itemname,itemtype,weight,total)}>Add To Cart</button>
    <button className="buy-now" onClick={()=>ordernow(imgsrc,weight,total,itemtype)}>Buy Now</button>
     </section>
     <section id="successnotify" style={{display:successmsg}}>
  <div id="successmsg">ADDED TO CART SUCCESSFULLY✔️</div>
  <a href='/account' id="showcart" onClick={()=>{
    window.location.href="/cart"
  }}>Show Cart</a>
  <button id='close' onClick={close}>Close</button>
  </section>
    </>
  )
}

export default PriceDetails
