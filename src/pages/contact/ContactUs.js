// ContactUsPage.js
import React, { useState } from 'react';
import './style.css';
import {
  MapPin, Phone, Mail, Clock, Send, User, MessageSquare
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const companyLocation = {
    name: "TechHub Plaza",
    address: "Sari Branch Road, Between Roundabout Park, Top Ten Building,",
    coordinates: { lat: 40.7128, lng: -74.0060 }
  };

  return (
    <div className="page-container">
      <div className="header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1 className="header-title">Get In Touch</h1>
          <p className="header-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="header-gradient"></div>
      </div>

      <div className="main-container">
        <div className="grid-container">
          <div>
            <div className="card">
              <h2 className="card-title">Contact Information</h2>
              <div className="contact-item hover">
                <div className="icon-container blue">
                  <MapPin size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">Our Location</h3>
                  <p className="contact-text">{companyLocation.address}</p>
                  <p className="contact-subtext blue">See map below ↓</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-container green">
                  <Phone size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">Phone Number</h3>
                  <p className="contact-text">+1 (555) 123-4567</p>
                  <p className="contact-subtext">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-container purple">
                  <Mail size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">Email Address</h3>
                  <p className="contact-text">contact@company.com</p>
                  <p className="contact-subtext">We'll reply within 24 hours</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-container orange">
                  <Clock size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">Business Hours</h3>
                  <div className="contact-text">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">Send us a Message</h2>
            <div className="form-container">
              <div className="input-grid">
                <div className="input-container">
                  <User className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="input"
                  />
                </div>
                <div className="input-container">
                  <Mail className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="input"
                  />
                </div>
              </div>
              <div className="input-container">
                <MessageSquare className="input-icon" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="input"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                className="textarea"
              />
              <button onClick={handleSubmit} className="submit-button">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.141190298692!2d-122.41941608468379!3d37.774929779759095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814e3d7ddbcf%3A0x7c007ae37cfcc2f!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1624554637637!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default ContactUs;
