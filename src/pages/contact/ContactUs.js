import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Navigation, ExternalLink } from 'lucide-react';
import './style.css';

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
    name: "Top Ten Building",
    address: "Sari Branch Road, Between Roundabout Park, Top Ten Building, 2nd Floor, Office #009,Jeddah Ksa",
    coordinates: { lat: 21.58485661473355, lng: 39.18900981035269 }
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <div className="head-content">
        <h1 className="head-title">Get In Touch</h1>
        <p className="head-subtitle">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="main-container">
        <div className="grid-container">
          {/* Contact Information */}
          <div>
            <div className="card">
              <h2 className="card-title">Contact Information</h2>

              {/* Location */}
              <div className="contact-item">
                <div className="icon-container blue-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">Our Location</h3>
                  <p className="contact-text">{companyLocation.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="icon-container green-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">Phone Number</h3>
                  <p className="contact-text">+966-53-969-4945</p>
                  <p className="contact-subtext">Sat-Thur 9AM-6PM </p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="icon-container purple-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">Email Address</h3>
                  <p className="contact-text">contact@ghaziksa.com</p>
                  <p className="contact-subtext">We'll reply within 24 hours</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="contact-item">
                <div className="icon-container orange-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">Business Hours</h3>
                  <div className="contact-text">
                    <p>Saturday - Wednesday: 9:00 AM - 6:00 PM</p>
                    <p>Thursday: 90:00 AM - 4:00 PM</p>
                    <p>Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 className="card-title">Send us a Message</h2>

            <form className="form-container" onSubmit={handleSubmit}>
              <div className="input-grid">
                <div className="input-container">
                  <User className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="form-input"
                    required
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
                    className="form-input"
                    required
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
                  className="form-input"
                  required
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                className="form-textarea"
                required
              />

              <button type="submit" className="submit-button">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-header">
            <div className="map-header-content">
              <div>
                <h2 className="map-title">Find Us Here</h2>
                <p className="map-subtitle">Visit our office or get directions</p>
              </div>
              <Navigation size={48} className="nav-icon" />
            </div>
          </div>

          <div className="map-content">
            <div className="map-grid">
              {/* Location Details */}
              <div className="location-details">
                <div>
                  <h3 className="section-title">Location Details</h3>
                  <div className="location-item">
                    <MapPin size={20} className="location-icon" />
                    <div className="location-item-content">
                      <p className="location-name">{companyLocation.name}</p>
                      <p className="location-address">{companyLocation.address}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h4 className="quick-actions-title">Quick Actions</h4>
                  <div className="action-buttons">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyLocation.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button google-maps-btn"
                    >
                      <ExternalLink size={16} />
                      <span>Open in Google Maps</span>
                    </a>
                    <a
                      href={`https://maps.apple.com/?q=${encodeURIComponent(companyLocation.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button apple-maps-btn"
                    >
                      <ExternalLink size={16} />
                      <span>Open in Apple Maps</span>
                    </a>
                    <button className="action-button directions-btn">
                      <Navigation size={16} />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="info-box">
                  <h4 className="info-title">Parking Information</h4>
                  <p className="info-text">
                    Free parking available in our building garage. Entrance on the side street.
                  </p>
                </div>
              </div>

              {/* Interactive Map */}
              <div>
                <div className="map-container">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15!2d-74.119763!3d40.6974034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus`}
                    className="map-iframe"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location Map"
                  />
                </div>

                <div className="map-fallback">
                  <p className="fallback-text">
                    Can't see the map? <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyLocation.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fallback-link"
                    >
                      Open in a new window
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;