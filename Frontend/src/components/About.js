import React from 'react';
import Layout from './Layout'; // Import the Layout component

const aboutContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
};

const sectionStyle = {
    marginBottom: '20px',
    maxWidth: '800px',
};

const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
};

const paragraphStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
};

const About = () => {
    return (
        <Layout>
            <div style={aboutContainerStyle}>
                <h2 style={headingStyle}>About Us</h2>
                <div style={sectionStyle}>
                    <p style={paragraphStyle}>
                        Welcome to Supermarket, your number one source for all things groceries. We're dedicated to providing you the very best of fresh produce, dairy products, and household essentials, with an emphasis on quality, customer service, and convenience.
                    </p>
    
                </div>
                <div style={sectionStyle}>
                    <h3 style={headingStyle}>Our Mission</h3>
                    <p style={paragraphStyle}>
                        Our mission is to deliver high-quality products at affordable prices while ensuring a pleasant shopping experience for our customers. We strive to be a trusted and reliable supermarket that caters to the needs of our diverse customer base.
                    </p>
                </div>
                <div style={sectionStyle}>
                    <h3 style={headingStyle}>Our Values</h3>
                    <p style={paragraphStyle}>
                        We believe in integrity, innovation, and customer satisfaction. Our team is committed to upholding these values in every aspect of our business, from sourcing products to serving our customers.
                    </p>
                </div>
                
            </div>
        </Layout>
    );
};

export default About;
