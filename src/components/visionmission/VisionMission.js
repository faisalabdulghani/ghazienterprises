// Vission.js
import React from "react";
import "./style.css";

const Vission = ({ icon, title, text, color }) => {
    return (
        <div className="vission-wrapper">
            <div className="vission-card" style={{ "--main-color": color }}>
                <div className="icon-circle">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Vission;
