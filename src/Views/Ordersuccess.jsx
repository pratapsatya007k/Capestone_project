import React, { useEffect, useState } from 'react';
import successimg from "../public/successimg.gif";

const Ordersuccess = () => {
    const [cnt, setCnt] = useState(5);
    const [redirect, setRedirect] = useState("none");

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate();
        }, 5000);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    const navigate = () => {
        setRedirect("inline");
        const interval = setInterval(() => {
            setCnt(prevCnt => {
                if (prevCnt === 1) {
                    clearInterval(interval);
                    window.location.href = "/home";
                }
                return prevCnt - 1;
            });
        }, 1000);
    };

    return (
        <>
            <img src={successimg} alt="" style={{ marginLeft: "650px", marginTop: "200px", width: "200px", height: "200px" }} />
            <h1 style={{ fontSize: "40px", fontWeight: "600", marginLeft: "580px", marginTop: "20px" }}>Placed Your Order</h1>
            <h2 style={{ fontSize: "35px", fontWeight: "600", marginLeft: "390px", marginTop: "20px" }}>Thank You For Choosing <span style={{ color: "#0a2384", fontWeight: "800" }}>Neelima</span> <span style={{ color: "#0a2384", fontWeight: "800" }}>jewellery</span></h2>
            <h2 style={{ fontSize: "35px", fontWeight: "300", marginLeft: "490px", marginTop: "15px", display: redirect }}>Redirecting to the Home in <span style={{ fontWeight: "800", fontSize: "40px", color: "red" }}>{cnt}</span> secs</h2>
        </>
    );
};

export default Ordersuccess;