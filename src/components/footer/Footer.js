import React from 'react';

const Footer = () => (
    <footer style={{ padding: '1rem', backgroundColor: '#eee', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Enterprise Co. All rights reserved.</p>
    </footer>
);

export default Footer;
