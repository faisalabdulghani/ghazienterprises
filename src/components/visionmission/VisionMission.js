import React from 'react';
import './style.css';

const VisionMissionSection = ({ heading, text }) => {
    return (
        <section className="vm-section">
            <div className="vm-container">
                <div className="vm-card">
                    <h2 className="vm-heading">{heading}</h2>
                    <p className="vm-text">
                        {text}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VisionMissionSection;
