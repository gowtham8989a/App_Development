import React from 'react';
import youtube from '../assets/youtube.jpg';
import insta from '../assets/insta.png';
import linked from '../assets/linked.jpeg';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.jpg';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#343a40',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '90%'
            }}>
                <div style={{ flex: 1, margin: '0 10px' }}>
                    <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: 'white' }}>All Categories</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, color: 'white' }}>
                        {['Grocery', 'Electronics', 'Fashion',].map((item, index) => (
                            <li key={index} style={{ marginBottom: '5px', color: 'white' }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 10px' }}>
                    <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: 'white' }}>Popular Categories</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, color: 'white' }}>
                        {['Staples', 'Beverages', 'Personal Care', 'Home Care'].map((item, index) => (
                            <li key={index} style={{ marginBottom: '5px', color: 'white' }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 10px' }}>
                    <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: 'white' }}>Customer Account</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, color: 'white' }}>
                        {['My Account', 'My Orders', 'Wishlist', 'Payment Methods', 'Delivery Addresses', 'Wallet'].map((item, index) => (
                            <li key={index} style={{ marginBottom: '5px', color: 'white' }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 10px' }}>
                    <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: 'white' }}>Help & Support</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, color: 'white' }}>
                        {['About Us', 'FAQ', 'Terms & Conditions', 'Privacy Policy', 'E-waste Policy', 'Cancellation & Return Policy', 'Shipping & Delivery Policy'].map((item, index) => (
                            <li key={index} style={{ marginBottom: '5px', color: 'white' }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, margin: '0 10px' }}>
                    <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: 'white' }}>Contact Us</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, color: 'white' }}>
                        <li style={{ marginBottom: '5px', color: 'white' }}>
                            Follow us on:
                            <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    <img src={facebook} alt="Facebook" style={{ width: '30px' }} />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    <img src={insta} alt="Instagram" style={{ width: '30px' }} />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    <img src={twitter} alt="Twitter" style={{ width: '30px' }} />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    <img src={linked} alt="LinkedIn" style={{ width: '30px' }} />
                                </a>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    <img src={youtube} alt="YouTube" style={{ width: '30px' }} />
                                </a>
                            </div>
                        </li>
                        <li style={{ marginBottom: '5px', color: 'white' }}>Call us: <a href="tel:18008901222" style={{ color: 'white', textDecoration: 'none' }}>1800 890 1222</a></li>
                        <li style={{ marginBottom: '5px', color: 'white' }}>8:00 AM to 8:00 PM, 365 days</li>
                        <li style={{ marginBottom: '5px', color: 'white' }}>For issues, email us at <a href="mailto:freshbasket@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>DotMart@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
