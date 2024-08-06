// Home.js
import React from 'react';
import Layout from './components/Layout'; // Import the Layout component
import capagg from './assets/capagg.jpg';
import corn from './assets/corn.jpg';
import potato from './assets/potato.jpg';
import pum from './assets/pum.jpg';
import spinach from './assets/spinach.jpg';
import tomato from './assets/tomato.jpg';
import apple from './assets/apple.jpg';
import orange from './assets/orange.jpg';
import mango from './assets/mango.jpg';
import turmeric from './assets/turmeric.jpg';
import pepper from './assets/pepper.jpg';
import bchanna from './assets/bchanna.jpg';
import horsegram from './assets/horsegram.jpg';
import greenpeas from './assets/greenpeas.jpg';
import rice from './assets/rice.jpg';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
  };

  const headingStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const imagesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px', // Space between images
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(255, 223, 0, 0.5)',
    transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition for hover effect
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(255, 223, 0, 0.7)', // Enhanced shadow on hover
  };

  return (
    <div className="content">
      <Layout>
        <div style={containerStyle}>
          <h1 style={headingStyle}>Welcome to Our Supermarket!</h1>
          <p style={headingStyle}>
            Explore a variety of fresh products and unbeatable offers.
          </p>
          <div style={imagesContainerStyle}>
            {[capagg, corn, potato, pum, spinach, tomato, apple, orange, mango, turmeric, pepper, bchanna, horsegram, greenpeas, rice].map((image, index) => (
              <div 
                key={index} 
                style={{
                  ...imageStyle, 
                  position: 'relative', 
                  overflow: 'hidden'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = hoverStyle.transform; e.currentTarget.style.boxShadow = hoverStyle.boxShadow; }} 
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <img src={image} alt={`Fresh Produce ${index + 1}`} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
                {/* Optional: Add an overlay or title here */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '5px',
                  borderRadius: '5px',
                }}>
                  {/* Optionally add the name of the produce here */}
                  {/* Example: {`Produce ${index + 1}`} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
