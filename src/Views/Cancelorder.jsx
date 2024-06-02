import React, { useEffect, useState } from 'react';
import cancel from "../public/Cancel.gif";
import '../public/Cancelorder.css';

const Cancelorder = () => {
    const [cnt, setCnt] = useState(5);
    const [redirect, setRedirect] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (redirect && cnt > 0) {
            const interval = setInterval(() => {
                setCnt(prevCnt => {
                    if (prevCnt === 1) {
                        clearInterval(interval);
                        window.location.href = "/home";
                    }
                    return prevCnt - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [redirect, cnt]);

    const handleFeedbackSubmit = (selectedOption) => {
        setSubmitted(true);
        console.log("Feedback submitted:", selectedOption);
        setRedirect(true);
    };

    const feedbackOptions = [
        { label: "Too expensive", icon: "💰" },
        { label: "Not what I expected", icon: "😞" },
        { label: "Changed my mind", icon: "🔄" },
        { label: "Other", icon: "❓" }
    ];

    return (
        <div className="cancel-order">
            <div className="header">
                <img src={cancel} alt="Cancel" />
                <h1>Cancelled!!</h1>
            </div>
            <div className="content">
                {!submitted ? (
                    <>
                        <h2>Please select a reason for cancelling:</h2>
                        <ul className="feedback-options">
                            {feedbackOptions.map((option, index) => (
                                <li key={index} onClick={() => handleFeedbackSubmit(option.label)}>
                                    <div className="option">
                                        <span className="option-icon">{option.icon}</span>
                                        <span className="option-label">{option.label}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <h2 className="feedback-thankyou" style={{color:"#0a2384"}}>Thank you for your feedback!</h2>
                )}
                {redirect && (
                    <h2 className="redirect-message">
                        Redirecting to Home in <span style={{ fontWeight: "800", fontSize: "40px", color: "red" }}>{cnt}</span> secs
                    </h2>
                )}
            </div>
        </div>
    );
};

export default Cancelorder;
