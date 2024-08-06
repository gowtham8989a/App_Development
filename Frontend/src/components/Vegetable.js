import React, { useContext, useState } from 'react';
import Layout from './Layout';
import { CartContext } from './CartContext';
import capagg from '../assets/capagg.jpg';
import corn from '../assets/corn.jpg';
import potato from '../assets/potato.jpg';
import tomato from '../assets/tomato.jpg';
import spinach from '../assets/spinach.jpg';
import pum from '../assets/pum.jpg';
import carrot from '../assets/carrot.jpg';
import raddish from '../assets/raddish.jpg';
import capsicum from '../assets/capsicum.jpg';
import beetroot from '../assets/beetroot.jpg';
import onion from '../assets/onion.jpg';
import chili from '../assets/chili.jpg';
import bittergaurd from '../assets/bittergaurd.jpg';
import ginger from '../assets/ginger.jpg';
import bottlegaurd from '../assets/bottlegaurd.jpg';

const vegetableContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
    overflowY: 'auto', // Make it scrollable
    maxHeight: 'calc(100vh - 150px)', // Adjust this value based on the height of your header and footer
};

const vegetableCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
    textAlign: 'center',
};

const vegetableImageStyle = {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
};

const vegetableInfoStyle = {
    padding: '15px',
};

const vegetableNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
};

const vegetablePriceStyle = {
    fontSize: '16px',
    color: '#007bff',
};

const addToCartButtonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#433a40',
    color: '#ffdd57',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const quantityControlsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
};

const quantityButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#433a40',
    color: '#ffdd57',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const quantityTextStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
};

const Vegetable = () => {
    const { addToCart, updateCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    const handleAddToCart = (vegetable) => {
        const updatedQuantities = { ...quantities, [vegetable.id]: (quantities[vegetable.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        addToCart(vegetable);
        updateCart(vegetable.id, updatedQuantities[vegetable.id]);
    };

    const handleIncrease = (vegetable) => {
        const updatedQuantities = { ...quantities, [vegetable.id]: (quantities[vegetable.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        updateCart(vegetable.id, updatedQuantities[vegetable.id]);
    };

    const handleDecrease = (vegetable) => {
        if (quantities[vegetable.id] > 1) {
            const updatedQuantities = { ...quantities, [vegetable.id]: quantities[vegetable.id] - 1 };
            setQuantities(updatedQuantities);
            updateCart(vegetable.id, updatedQuantities[vegetable.id]);
        } else {
            const updatedQuantities = { ...quantities };
            delete updatedQuantities[vegetable.id];
            setQuantities(updatedQuantities);
            updateCart(vegetable.id, 0);
        }
    };

    const vegetables = [
        { id: 1, name: 'Cabbage', price: '₹40', imgSrc: capagg },
        { id: 2, name: 'Corn', price: '₹60', imgSrc: corn },
        { id: 3, name: 'Potato', price: '₹30', imgSrc: potato },
        { id: 4, name: 'Tomato', price: '₹25', imgSrc: tomato },
        { id: 5, name: 'Spinach', price: '₹20', imgSrc: spinach },
        { id: 6, name: 'Pumpkin', price: '₹35', imgSrc: pum },
        { id: 7, name: 'Carrot', price: '₹40', imgSrc: carrot },
        { id: 8, name: 'Raddish', price: '₹15', imgSrc: raddish },
        { id: 9, name: 'Capsicum', price: '₹50', imgSrc: capsicum },
        { id: 10, name: 'Beetroot', price: '₹20', imgSrc: beetroot },
        { id: 11, name: 'Onion', price: '₹25', imgSrc: onion },
        { id: 12, name: 'Chili', price: '₹15', imgSrc: chili },
        { id: 13, name: 'Bittergourd', price: '₹20', imgSrc: bittergaurd },
        { id: 14, name: 'Ginger', price: '₹100', imgSrc: ginger },
        { id: 15, name: 'Bottlegourd', price: '₹30', imgSrc: bottlegaurd },
    ];

    return (
        <Layout>
            <div style={vegetableContainerStyle}>
                {vegetables.map((vegetable) => (
                    <div key={vegetable.id} style={vegetableCardStyle}>
                        <img src={vegetable.imgSrc} alt={vegetable.name} style={vegetableImageStyle} />
                        <div style={vegetableInfoStyle}>
                            <div style={vegetableNameStyle}>{vegetable.name}</div>
                            <div style={vegetablePriceStyle}>{vegetable.price}</div>
                            {quantities[vegetable.id] ? (
                                <div style={quantityControlsStyle}>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleDecrease(vegetable)}
                                    >
                                        -
                                    </button>
                                    <span style={quantityTextStyle}>{quantities[vegetable.id]}</span>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleIncrease(vegetable)}
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    style={addToCartButtonStyle}
                                    onClick={() => handleAddToCart(vegetable)}
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Vegetable;
