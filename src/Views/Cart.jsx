import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../public/wish.png";
import "../public/account.css";
import Header from './Header';
import axios from 'axios';

const Cart = () => {
  const username = localStorage.getItem("username");
  const [data, setData] = useState([]);
  const key = "username";
  const value = username;
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/add/cart', {
        params: { key, value }
      });
      const uniqueData = removeDuplicates(response.data.reverse());
      setData(uniqueData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeDuplicates = (dataArray) => {
    const seen = new Set();
    return dataArray.filter(item => {
      const isDuplicate = seen.has(item.itemid);
      seen.add(item.itemid);
      return !isDuplicate;
    });
  };

  const buynow = (imagesrc, weightitem, item, totalbill, itemname, id) => {
    const imgsrc = encodeURIComponent(imagesrc);
    const weight = weightitem;
    const itemOf = item;
    const total = totalbill;
    const Name = itemname;
    const itemid = id;
    navigate(`/buynow/${imgsrc}/${weight}/${itemOf}/${total}/${Name}/${itemid}`);
  };

  const cartdeletefn = async (itemId,user) => {
    try {
      await axios.delete('http://localhost:3000/add/cart', {
        data: { key: "itemid", value: itemId,username:user }
      });
      fetchData(); // Re-fetch data to update the UI
      console.log("deleted");
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const Orderhistoryopen = () => {
    navigate("/orderhistory");
  };

  const account = () => {
    navigate("/account");
  };

  return (
    <>
      <Header />
      <section id="accountbar">
        <img src={logo} alt="No image" className='imgsty' onClick={account} />
        <img src="https://img.icons8.com/?size=80&id=8aHMCM4GMJHR&format=png" alt="" className='imgsty' style={{ backgroundColor: "#C6C3C2", borderRadius: "20px", marginTop: "3px" }} />
        <img src="https://icons.veryicon.com/128/Business/Pretty%20Office%203/Order%20history.png" alt="" className='imgsty' onClick={Orderhistoryopen} />
        <img src="https://img.icons8.com/?size=80&id=Eidz314LhGsr&format=png" alt="" className='imgsty' />
      </section>
      <ul id='wishlist'>
        {Array.isArray(data) && data.map(item => (
          <li className='wishitem' key={item.itemid}> 
            <img src={item.imgsrc} className='wishimg' alt={item.item} />
            <span className='itemname'>{item.itemName}</span>
            <img 
              src="https://img.icons8.com/?size=80&id=Cxni9dN1eDq0&format=png" 
              className='add' 
              alt="Buy Now"
              onClick={() => buynow(item.imgsrc, item.weight, item.itemType, item.total, item.itemName, item.itemid)}
            />
            <img 
              src="https://img.icons8.com/?size=48&id=isPYXsxrQrzW&format=png" 
              className='delete' 
              alt="Delete"
              onClick={() => cartdeletefn(item.itemid,item.username)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
