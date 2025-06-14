import React from 'react';
import './style.css';

const MissionVisionValues = () => {
    return (
        <div className="mvv-container">
            {/* Left Side - Mission and Vision */}
            <div className="left-section">
                {/* Mission Section */}
                <div className="mission-section">
                    <div className="mission-content">
                        <h1 className="section-title mission-title">Our MISSION</h1>
                        <p className="section-text mission-text">
                            Our mission is to deliver superior
                            construction and contracting services
                            that exceed our clients' expectations.
                            We are dedicated to continuous
                            improvement and adopting the latest
                            technologies to enhance our service
                            delivery.
                        </p>
                    </div>
                    <div className="mission-blocks">
                        <div className="color-block block-red-1"></div>
                        <div className="color-block block-red-2"></div>
                        <div className="color-block block-red-3"></div>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="vision-section">
                    <div className="vision-content">
                        <h1 className="section-title vision-title">Our VISION</h1>
                        <p className="section-text vision-text">
                            At GEC, our vision is to be the leading provider of construction and contracting services in Saudi Arabia, recognized for our innovation, quality, and commitment to excellence.
                        </p>
                    </div>
                    <div className="vision-blocks">
                        <div className="color-block block-orange-1"></div>
                        <div className="color-block block-orange-2"></div>
                        <div className="color-block block-orange-3"></div>
                        <div className="color-block block-yellow-1"></div>
                        <div className="color-block block-yellow-2"></div>
                    </div>
                </div>
            </div>

            {/* Right Side - Core Values */}
            <div className="right-section">
                <div className="core-values-content">
                    <h1 className="section-title values-title">CORE VALUES</h1>
                    <p className="section-text values-text">
                        Our company is built on a foundation of integrity, ensuring transparency and honesty in all dealings, while our commitment to quality guarantees services that exceed industry standards. We embrace innovation, constantly improving our processes to stay ahead. Customer satisfaction is our top priority, fostering long-term relationships through trust and reliability. Together, we achieve excellence through teamwork, cultivating a collaborative environment that drives creativity and success.
                    </p>
                </div>
                <div className="values-blocks">
                    <div className="color-block block-gray-1"></div>
                    <div className="color-block block-gray-2"></div>
                    <div className="color-block block-gray-3"></div>
                    <div className="color-block block-white-1"></div>
                    <div className="color-block block-white-2"></div>
                </div>
            </div>
        </div>
    );
};

export default MissionVisionValues;