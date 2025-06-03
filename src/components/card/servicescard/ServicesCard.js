// src/components/ServiceCard.js
import React from 'react';
import './style.css';

const ServiceCard = ({ image, title, description, link }) => {
    return (
        <div className="service-card">
            <div className="service-image">
                <img src={image} alt={title} />
            </div>
            <div className="service-content">
                <div className='title-description'>
                    <h3 className="service-title">{title}</h3>
                    <p className="service-description">{description}</p>
                </div>
                <div >
                    <a href={link} className="contact-btn">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
