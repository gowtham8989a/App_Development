import React, { useState } from 'react';
import Layout from './Layout';

// You can use any image for the checkmark or completion icon
import checkmarkImage from '../assets/checkmark.png'; // Add your own checkmark image here

const paymentContainerStyle = {
    padding: '20px',
    textAlign: 'center', // Center-align the content
};

const paymentFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    margin: 'auto',
};

const inputStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
};

const submitButtonStyle = {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const messageContainerStyle = {
    marginTop: '20px',
    textAlign: 'center',
};

const messageStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#28a745',
};

const imageStyle = {
    width: '100px', // Adjust size as needed
    height: '100px', // Adjust size as needed
    marginBottom: '10px',
};

const Payment = () => {
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle payment submission logic here
        setPaymentCompleted(true); // Update state to show the payment completed message
    };

    return (
        <Layout>
            <div style={paymentContainerStyle}>
                <h2>Payment</h2>
                {paymentCompleted ? (
                    <div style={messageContainerStyle}>
                        <img src={checkmarkImage} alt="Payment Completed" style={imageStyle} />
                        <div style={messageStyle}>Payment Completed!</div>
                    </div>
                ) : (
                    <form style={paymentFormStyle} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Card Number" style={inputStyle} required />
                        <input type="text" placeholder="Card Holder Name" style={inputStyle} required />
                        <input type="text" placeholder="Expiration Date (MM/YY)" style={inputStyle} required />
                        <input type="text" placeholder="CVV" style={inputStyle} required />
                        <button type="submit" style={submitButtonStyle}>Submit Payment</button>
                    </form>
                )}
            </div>
        </Layout>
    );
};

export default Payment;
