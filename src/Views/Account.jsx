import React, { useEffect, useState } from 'react';
import logo from "../public/wish.png";
import "../public/account.css";
import Header from './Header';
import axios from 'axios';

const Account = () => {
  const [data, setData] = useState([]);
  const username = localStorage.getItem("username");
  const [blur,setBlur]=useState("0px");
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/wish/fetch', {
        params: { key: 'username', value: username }
      });
      console.log(response.data); // Log response data to console
      const uniqueData = removeDuplicates(response.data.reverse());
      setData(uniqueData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //Add Cart
  const [successmsg,setSuccessmsg]=useState("none");
  function close(){
    setSuccessmsg("none");
    setBlur("0px");
  }
  const removeDuplicates = (dataArray) => {
    const seen = new Set();
    return dataArray.filter(item => {
      const isDuplicate = seen.has(item.itemid);
      seen.add(item.itemid);
      return !isDuplicate;
    });
  };

  const wishdeletefn = async (itemId,user) => {
    try {
      await axios.delete('http://localhost:3000/wish/delete', {
        data: { key: "itemid", value: itemId,username:user }
      });
      fetchData(); // Re-fetch data to update the UI
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const addToCart = async (id,itemweight,imgSrc,user,Name,type,pricetotal) => {
    try {
      await axios.post('http://localhost:3000/add/cart', {
        itemid: id,  
      imgsrc: imgSrc, 
        username:user,
        itemName:Name,
        weight:itemweight,
        total:pricetotal,
        itemType:type
      });
      setSuccessmsg("inline");
    setBlur("10px")
      fetchData(); // Optionally re-fetch data to update the UI
    } catch (error) {
      console.error('Error adding to cart:', error);
      setSuccessmsg("inline");
    setBlur("10px")
    }
  };
  const showCart = () => {
    window.location.href = "/cart";
  };

  const orderHistoryOpen = () => {
    window.location.href = "/orderhistory";
  };

  return (
    <>
      <Header />
      <section id="accountbar" style={{filter:`blur(${blur})`}} >
        <img src={logo} alt="No image" className='imgsty' style={{ backgroundColor: "#C6C3C2", borderRadius: "20px", marginTop: "3px" }} />
        <img src="https://img.icons8.com/?size=80&id=8aHMCM4GMJHR&format=png" alt="" className='imgsty' onClick={showCart} />
        <img src="https://icons.veryicon.com/128/Business/Pretty%20Office%203/Order%20history.png" alt="" className='imgsty' onClick={orderHistoryOpen} />
        <img src="https://img.icons8.com/?size=80&id=Eidz314LhGsr&format=png" alt="" className='imgsty' />
      </section>
      <ul id='wishlist' style={{filter:`blur(${blur})`}}>
        {Array.isArray(data) && data.map(item => (
          <li key={item.itemid} className='wishitem'>
            <img src={item.imgsrc} className='wishimg' alt={item.item} />
            <span className='itemname'>{item.itemName}</span>
            <img
              src="https://img.icons8.com/?size=80&id=fP1wKLeDNr9s&format=png"
              className='add'
              alt="Add"
              onClick={() => addToCart(item.itemid,item.weight,item.imgsrc,item.username,item.itemName,item.itemType,item.total)}
            />
            <img
              src="https://img.icons8.com/?size=48&id=isPYXsxrQrzW&format=png"
              className='delete'
              alt="Delete"
              onClick={() => wishdeletefn(item.itemid,item.username)}
            />
          </li>
        ))}
      </ul>
      <section id="successnotify" style={{display:successmsg}}>
  <div id="successmsg">ADDED TO CART SUCCESSFULLY✔️</div>
  <a href='/account' id="showcart" onClick={showCart}>Show Cart</a>
  <button id='close' onClick={close}>Close</button>
  </section>
    </>
  );
};

export default Account;
