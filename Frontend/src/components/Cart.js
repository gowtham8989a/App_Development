import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from './CartContext';
import Layout from './Layout';

const cartContainerStyle = {
    padding: '60px',
    textAlign: 'center', // Center the text
};

const cartItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
};

const cartItemImageStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    marginRight: '10px',
};

const cartItemDetailsStyle = {       
    display: 'flex',
    alignItems: 'center',
    flex: 1,
};

const cartItemNameStyle = {
    marginRight: '10px',
    fontWeight: 'bold',
};
0
const cartItemPriceStyle = {
    color: '#007bff',
};

const cartItemQuantityStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
};

const quantityButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#433a40',
    color: '#ffdd47',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    margin: '0 5px',
};

const removeButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#433a40',
    color: '#ffdd47',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const proceedButtonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#433a40',
    color: '#ffdd57',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const emptyBoxStyle = {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
};

const selectButtonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const Cart = () => {
    const { cart, removeFromCart, updateCart } = useContext(CartContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleQuantityChange = (item, change) => {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0) {
            updateCart(item.id, newQuantity);
        }
    };

    const handleProceedToPay = () => {
        navigate('/payment');
    };

    const handleSelectItems = () => {
        navigate('/vegetables'); // Navigate to the vegetable page
    };

    return (
        <Layout>
            <div style={cartContainerStyle}>
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <div style={emptyBoxStyle}>
                        <p>Your cart is empty.</p>
                        <button style={selectButtonStyle} onClick={handleSelectItems}>
                            Select Some Items
                        </button>
                    </div>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} style={cartItemStyle}>
                            <div style={cartItemDetailsStyle}>
                                <img src={item.imgSrc} alt={item.name} style={cartItemImageStyle} />
                                <div>
                                    <div style={cartItemNameStyle}>{item.name}</div>
                                    <div style={cartItemPriceStyle}>{item.price}</div>
                                    <div style={cartItemQuantityStyle}>
                                        <button
                                            style={quantityButtonStyle}
                                            onClick={() => handleQuantityChange(item, -1)}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            style={quantityButtonStyle}
                                            onClick={() => handleQuantityChange(item, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                style={removeButtonStyle}
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
                {cart.length > 0 && (
                    <button style={proceedButtonStyle} onClick={handleProceedToPay}>
                        Proceed to Pay
                    </button>
                )}
            </div>
        </Layout>
    );
};

export default Cart;
