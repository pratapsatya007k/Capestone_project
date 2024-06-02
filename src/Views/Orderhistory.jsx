import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../public/wish.png";
import "../public/account.css";
import Header from './Header';
import axios from 'axios';

const Orderhistory = () => {
  const username = localStorage.getItem("username");
  const [data, setData] = useState([]);
  const key = "username";
  const value = username;
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/orders', {
        params: { key, value }
      });
      setData(response.data.reverse());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const viewDetails = (imagesrc, orderstatus, itemname, date, time, deliveryDate, id, weightitem, totalprice) => {
    const imgsrc = encodeURIComponent(imagesrc);
    const status = orderstatus;
    const itemName = itemname;
    const orderDate = date;
    const orderTime = time;
    const DeliveredDate = deliveryDate;
    const itemid = id;
    const weight = weightitem;
    const total = totalprice;
    navigate(`/orderdetails/${imgsrc}/${status}/${itemName}/${orderDate}/${orderTime}/${DeliveredDate}/${itemid}/${weight}/${total}`);
  };

  const account = () => {
    navigate("/account");
  }

  const showcart = () => {
    navigate("/cart");
  }

  return (
    <>
      <Header />
      <section id="accountbar">
        <img src={logo} alt="No image" className='imgsty' onClick={account}/>
        <img src="https://img.icons8.com/?size=80&id=8aHMCM4GMJHR&format=png" alt="" className='imgsty' onClick={showcart}  />
        <img src="https://icons.veryicon.com/128/Business/Pretty%20Office%203/Order%20history.png" alt="" className='imgsty' style={{ backgroundColor: "#C6C3C2", borderRadius: "20px", marginTop: "3px" }} />
        <img src="https://img.icons8.com/?size=80&id=Eidz314LhGsr&format=png" alt="" className='imgsty'  />
      </section>
      <ul id='wishlist'>
        {Array.isArray(data) && data.map(item => {
          return (
            <li key={item.id} className='wishitem'>
              <img src={item.imgsrc} className='wishimg' alt="Noimg" />
              <span className='itemname'>{item.item}</span>
              {item.status === "Cancelled" ? (
                <div style={{ width: "300px", fontSize: "22px", fontWeight: "600", color: "red", position: "absolute", right: "-65px", top: "37px", cursor: "pointer" }}>Cancelled</div>
              ) : (
                <div style={{ width: "300px", fontSize: "22px", fontWeight: "600", color: "green", position: "absolute", right: "-80px", top: "37px", cursor: "pointer" }}>{item.status}</div>
              )}
              <div id='details' onClick={() => viewDetails(item.imgsrc, item.status, item.item, item.orderDate, item.orderTime, item.DeliveryDate, item.itemid, item.weight, item.total)}>More details</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Orderhistory;
