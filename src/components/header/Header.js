// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-area">
                    <span className="logo-circle" />
                    <Link to="/" className="brand-name">
                        <strong className="logo-text">Ghazi</strong> Enterprises LTD
                    </Link>
                </div>

                <button className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-tooltip="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" data-tooltip="WhatsApp">
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:info@example.com" data-tooltip="Email">
                        <FaEnvelope />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-tooltip="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
