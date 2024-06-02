import React from 'react'
  import { useState } from 'react'
  import "../public/gold.css"
  import Header from './Header'
  import img from "../public/wish.png"
  import  axios  from 'axios'
  import searchstyle from '../public/search.module.css'
  import Search from './search'
const Bracelets = () => {
  const user=localStorage.getItem("username");
  const [blur,setblur]=useState("0px");
  const [hide,sethide]=useState("none");
  function Searchopen(){
    sethide("inline");
    setblur("5px");
  }
  function wrongsearch(){
    sethide("none");
    setblur("0px")
  }
  const [src1,setSrc1]=useState("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
    const [src2,setSrc2]=useState("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
    const [src3,setSrc3]=useState("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
    const [src4,setSrc4]=useState("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg")
    const [src5,setSrc5]=useState("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
    const [src6,setSrc6]=useState("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
    const [src7,setSrc7]=useState("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
    const [src8,setSrc8]=useState("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
    const [src9,setSrc9]=useState("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
    let cnt1=0;
    let cnt2=0;
    let cnt3=0;
    let cnt4=0;
    let cnt5=0;
    let cnt6=0;
    let cnt7=0;
    let cnt8=0;
    let cnt9=0;
    function starFn1(weight,total){
      if(cnt1%2===0){
      setSrc1(img);
      cnt1++;
      axios.post('/wish/insert', {
        imgsrc : "https://www.lalithaajewellery.com/assets/img/bracelet/1.webp",
        itemName : "Gold Bracelets",
        itemid:"BR1",
        username:user,
        itemType:"Gold",
        weight:weight,
        total:total
      });

      }else{
        setSrc1("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
        cnt1++;
        const key="itemid";
        const value="BR1";
        try {
         axios.delete('/wish/delete', { data: { key, value,user} });
          // Handle successful deletion
          console.log('Data deleted successfully.');
        } catch (error) {
          // Handle error
          console.error('Error deleting data:', error);
        }
      }
    }
    function starFn2(weight,total){
      if(cnt2%2===0){
      setSrc2(img);
      cnt2++;
      axios.post('/wish/insert', {
        imgsrc : "https://www.lalithaajewellery.com/assets/img/bracelet/12.webp",
        itemName : "Gold Bracelets",
        itemid:"BR2",
        username:user,
        itemType:"Gold",
        weight:weight,
        total:total
      });
      }else{
        setSrc2("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
        cnt2++;
        const key="itemid";
        const value="BR2";
        try {
         axios.delete('/wish/delete', { data: { key, value,user} });
          // Handle successful deletion
          console.log('Data deleted successfully.');
        } catch (error) {
          // Handle error
          console.error('Error deleting data:', error);
        }
      }
    }
    function starFn3(weight,total){
      if(cnt3%2===0){
      setSrc3(img);
      cnt3++
      axios.post('/wish/insert', {
        imgsrc : "https://www.lalithaajewellery.com/assets/img/bracelet/4.webp",
        itemName : "Gold Bracelets",
        itemid:"BR3",
        username:user,
        itemType:"Gold",
        weight:weight,
        total:total
      });
      }else{
        setSrc3("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
        cnt3++
        const key="itemid";
        const value="BR3";
        try {
         axios.delete('/wish/delete', { data: { key, value,user} });
          // Handle successful deletion
          console.log('Data deleted successfully.');
        } catch (error) {
          // Handle error
          console.error('Error deleting data:', error);
        }
      }
    }
    function starFn4(weight,total){
      if(cnt4%2===0){
      setSrc4(img);
      cnt4++
      axios.post('/wish/insert', {
        imgsrc : "https://www.lalithaajewellery.com/assets/img/bracelet/7.webp",
        itemName : "Gold Bracelets",
        itemid:"BR4",
        username:user,
        itemType:"Gold",
        weight:weight,
        total:total
      });
      }else{
        setSrc4("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
        cnt4++
        const key="itemid";
        const value="BR4";
        try {
         axios.delete('/wish/delete', { data: { key, value,user} });
          // Handle successful deletion
          console.log('Data deleted successfully.');
        } catch (error) {
          // Handle error
          console.error('Error deleting data:', error);
        }
      }
    }
    function starFn5(weight,total){
      if(cnt5%2===0){
      setSrc5(img);
      cnt5++
      axios.post('/wish/insert', {
        imgsrc : "https://www.lalithaajewellery.com/assets/img/bracelet/6.webp",
        itemName : "Gold Bracelets",
        itemid:"BR5",
        username:user,
        itemType:"Gold",
        weight:weight,
        total:total
      });
      }else{
        setSrc5("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
        cnt5++
        const key="itemid";
        const value="BR5";
        try {
         axios.delete('/wish/delete', { data: { key, value,user} });
          // Handle successful deletion
          console.log('Data deleted successfully.');
        } catch (error) {
          // Handle error
          console.error('Error deleting data:', error);
        }
      }
    }
    function starFn6(weight,total){
      if(cnt6%2===0){
      setSrc6(img);
      cnt6++
      axios.post('/wish/insert', {
        imgsrc : "https://www.lalithaajewellery.com/assets/img/bracelet/2.webp",
        itemName : "Gold Bracelets",
        itemid:"BR6",
        username:user,
        itemType:"Gold",
        weight:weight,
        total:total
      });
      }else{
        setSrc6("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
        cnt6++
        const key="itemid";
        const value="BR6";
        try {
         axios.delete('/wish/delete', { data: { key, value,user} });
          // Handle successful deletion
          console.log('Data deleted successfully.');
        } catch (error) {
          // Handle error
          console.error('Error deleting data:', error);
        }
      }
    }
    function starFn7(weight,total){
      if(cnt7%2===0){
      setSrc7(img);
      cnt7++
      axios.post('/wish/insert', {
        imgsrc : "https://www.lalithaajewellery.com/assets/img/bracelet/11.webp",
        itemName : "Gold Bracelets",
        itemid:"BR7",
        username:user,
        itemType:"Gold",
        weight:weight,
        total:total
      });
      }else{
        setSrc7("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
        cnt7++
        const key="itemid";
        const value="BR7";
        try {
         axios.delete('/wish/delete', { data: { key, value,user} });
          // Handle successful deletion
          console.log('Data deleted successfully.');
        } catch (error) {
          // Handle error
          console.error('Error deleting data:', error);
        }
      }
    }
    function starFn8(weight,total){
      if(cnt8%2===0){
      setSrc8(img);
      cnt8++
      axios.post('/wish/insert', {
        imgsrc : "https://www.lalithaajewellery.com/assets/img/bracelet/9.webp",
        itemName : "Gold Bracelets",
        itemid:"BR8",
        username:user,
        itemType:"Gold",
        weight:weight,
        total:total
      });
      }else{
        setSrc8("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
        cnt8++
        const key="itemid";
        const value="BR8";
        try {
         axios.delete('/wish/delete', { data: { key, value,user} });
          // Handle successful deletion
          console.log('Data deleted successfully.');
        } catch (error) {
          // Handle error
          console.error('Error deleting data:', error);
        }
      }
    }
    function starFn9(weight,total){
      if(cnt9%2===0){
      setSrc9(img);
      cnt9++
      axios.post('/wish/insert', {
        imgsrc : "https://www.lalithaajewellery.com/assets/img/bracelet/8.webp",
        itemName : "Gold Bracelets",
        itemid:"BR9",
        username:user,
        itemType:"Gold",
        weight:weight,
        total:total
      });
      }else{
        setSrc9("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
        cnt9++
        const key="itemid";
        const value="BR9";
        try {
         axios.delete('/wish/delete', { data: { key, value,user} });
          // Handle successful deletion
          console.log('Data deleted successfully.');
        } catch (error) {
          // Handle error
          console.error('Error deleting data:', error);
        }
      }
    }
    //Details-Bar:
    function baropen(imagesrc,weightitem,totalbill,id){
      const imgsrc = encodeURIComponent(imagesrc);
      const weight = weightitem;
      const itemtype = "GOLD";
      const itemid=id;
      const itemname="Gold Bracelets"
      const total = totalbill;
      window.location.href=`/pricedetails/${imgsrc}/${weight}/${itemtype}/${total}/${itemname}/${itemid}`
    }
  return (
    <div>
      <Header/>
      <div className={searchstyle.search} onClick={Searchopen}>Search</div> 
        <div className={searchstyle.forsearch} style={{display:hide}}>
        <Search/>
        <img src="data:image/png;base64,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" id ="wrong" onClick={wrongsearch}/>
        </div> 
    <main style={{width:"100%",height:"550px", position:"absolute",top:"20px", filter:`blur(${blur})`}}>
    <div  className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/bracelet/1.webp" alt=""  style={{width: "300px",height: "300px",  borderRadius: "20px"}} id="img1" />
  <img src={src1} className="svg"alt="" onClick={()=>starFn1("26.3","143238")} id="star1"/></div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/bracelet/12.webp" alt="" style={{width: "300px",height: "300px",  borderRadius: "20px"}} id="img2" /> <img src={src2} className="svg"alt=""  onClick={()=>starFn2("22.4","122071")} id="star2"/></div>
  <div className="orn-img"><img src=" https://www.lalithaajewellery.com/assets/img/bracelet/4.webp" alt="" style={{width: "300px",height: "300px",  borderRadius: "20px"}} id="img3" /> <img src={src3} className="svg"alt="" onClick={()=>starFn3("24.3","132384")} id="star3"/></div>
  <div className="orn-txt">
    Rs:<span id="cost1" className="orn-cost">143238</span>/-<br/>
    <span className="cal" id="vd1" onClick={()=>baropen("https://www.lalithaajewellery.com/assets/img/bracelet/1.webp","26.3","143238","BR1")}>View Details</span>
  </div>
  <div className="orn-txt">
    Rs:<span id="cost2"  className="orn-cost">122071</span>/-<br/>
    <span  className="cal" id="vd2"  onClick={()=>baropen("https://www.lalithaajewellery.com/assets/img/bracelet/12.webp","22.4","122071","BR2")}>View Details</span>
  </div>
  <div className="orn-txt">
    Rs:<span id="cost3"  className="orn-cost">132384</span>/-<br/>
    <span  className="cal" id="vd3" onClick={()=>baropen("https://www.lalithaajewellery.com/assets/img/bracelet/4.webp","24.3","132384","BR3")}>View Details</span>
  </div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/bracelet/7.webp" alt="" style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img4"/> <img src={src4}  className="svg"alt="" onClick={()=>starFn4("24.8","135097")} id="star4"/></div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/bracelet/6.webp" alt=""   style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img5"/> <img src={src5} className="svg"alt="" onClick={()=>starFn5("23.9","130213")} id="star5"/></div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/bracelet/2.webp" alt="" style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img6"/> <img src={src6} className="svg"alt="" onClick={()=>starFn6("26.9","146495")} id="star6"/></div>
  <div className="orn-txt">
    Rs:<span id="cost4" className="orn-cost">135097</span>/- <br/>
    <span  className="cal" id="vd4" onClick={()=>baropen("https://www.lalithaajewellery.com/assets/img/bracelet/7.webp","24.8","135097","BR4")}>View Details</span>
  </div>
  <div className="orn-txt" >
    Rs:<span id="cost5"  className="orn-cost">130213</span>/- <br/>
    <span  className="cal" id="vd5" onClick={()=>baropen("https://www.lalithaajewellery.com/assets/img/bracelet/6.webp","23.9","130213","BR5")}>View Details</span>
  </div>
  <div className="orn-txt">
    Rs:<span id="cost6" className="orn-cost">146495</span>/-  <br/>
    <span  className="cal" id="vd6" onClick={()=>baropen("https://www.lalithaajewellery.com/assets/img/bracelet/2.webp","26.9","146495","BR6")}>View Details </span>
  </div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/bracelet/11.webp" alt=""  style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img7"/> <img src={src7} className="svg"alt="" onClick={()=>starFn7("21.4","116645")} id="star7"/></div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/bracelet/9.webp" alt=""  style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img8"/> <img src={src8} className="svg"alt="" onClick={()=>starFn8("19.6","106876")} id="star8"/></div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/bracelet/8.webp" alt="" style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img9"/> <img src={src9} className="svg"alt="" onClick={()=>starFn9("25.7","139982")} id="star9"/></div>
  <div className="orn-txt">
    Rs:<span id="cost7" className="orn-cost">116645</span>/-  <br/>
    <span  className="cal" id="vd7" onClick={()=>baropen("https://www.lalithaajewellery.com/assets/img/bracelet/11.webp","21.4","116645","BR7")}>View Details</span>
  </div>
  <div className="orn-txt" >
    Rs:<span id="cost8"  className="orn-cost">106876</span>/-  <br/>
    <span  className="cal" id="vd8" onClick={()=>baropen("https://www.lalithaajewellery.com/assets/img/bracelet/9.webp","19.6","106876","BR8")}>View Details</span>
  </div>
  <div className="orn-txt">
    Rs:<span id="cost9"  className="orn-cost">139982</span>/-           <br/>
    <span  className="cal" id="vd9" onClick={()=>baropen("https://www.lalithaajewellery.com/assets/img/bracelet/8.webp","25.7","139982","BR9")}>View Details</span>
  </div>
    </main>
    </div>
  )
}

export default Bracelets
