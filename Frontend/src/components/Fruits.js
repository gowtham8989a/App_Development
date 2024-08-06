import React, { useContext, useState } from 'react';
import Layout from './Layout';
import { CartContext } from './CartContext';
import apple from '../assets/apple.jpg';
import mango from '../assets/mango.jpg';
import orange from '../assets/orange.jpg';
import blue from '../assets/blue.jpg';
import gauva from '../assets/guava.jpg';
import lichi from '../assets/lichi.jpg';
import dragon from '../assets/dragon.jpg';
import pine from '../assets/pine.jpg';
import cherry from '../assets/cherry.jpg';
import banana from '../assets/banana.jpg';
import pomogranate from '../assets/pomogranate.jpg';
import jack from '../assets/jack.jpg';
import watermelon from '../assets/watermelon.jpg';
import papaya from '../assets/papaya.jpg';
import redbanana from '../assets/redbanana.jpg';

const fruitContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
    overflowY: 'auto', // Make it scrollable
    maxHeight: 'calc(100vh - 150px)', // Adjust this value based on the height of your header and footer
};

const fruitCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
    textAlign: 'center',
};

const fruitImageStyle = {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
};

const fruitInfoStyle = {
    padding: '15px',
};

const fruitNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
};

const fruitPriceStyle = {
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

const Fruits = () => {
    const { addToCart, updateCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    const handleAddToCart = (fruit) => {
        const updatedQuantities = { ...quantities, [fruit.id]: (quantities[fruit.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        addToCart(fruit);
        updateCart(fruit.id, updatedQuantities[fruit.id]);
    };

    const handleIncrease = (fruit) => {
        const updatedQuantities = { ...quantities, [fruit.id]: (quantities[fruit.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        updateCart(fruit.id, updatedQuantities[fruit.id]);
    };

    const handleDecrease = (fruit) => {
        if (quantities[fruit.id] > 1) {
            const updatedQuantities = { ...quantities, [fruit.id]: quantities[fruit.id] - 1 };
            setQuantities(updatedQuantities);
            updateCart(fruit.id, updatedQuantities[fruit.id]);
        } else {
            const updatedQuantities = { ...quantities };
            delete updatedQuantities[fruit.id];
            setQuantities(updatedQuantities);
            updateCart(fruit.id, 0);
        }
    };

    const fruits = [
        { id: 1, name: 'Apple', price: '₹120', imgSrc: apple },
        { id: 2, name: 'Blueberry', price: '₹40', imgSrc: blue },
        { id: 3, name: 'Guava', price: '₹80', imgSrc: gauva },
        { id: 4, name: 'Mango', price: '₹150', imgSrc: mango },
        { id: 5, name: 'Orange', price: '₹60', imgSrc: orange },
        { id: 6, name: 'Lichi', price: '₹200', imgSrc: lichi },
        { id: 7, name: 'Dragon Fruit', price: '₹150', imgSrc: dragon },
        { id: 8, name: 'Pineapple', price: '₹70', imgSrc: pine },
        { id: 9, name: 'Cherry', price: '₹300', imgSrc: cherry },
        { id: 10, name: 'Banana', price: '₹50', imgSrc: banana },
        { id: 11, name: 'Pomegranate', price: '₹150', imgSrc: pomogranate },
        { id: 12, name: 'Jackfruit', price: '₹120', imgSrc: jack },
        { id: 13, name: 'Watermelon', price: '₹30', imgSrc: watermelon },
        { id: 14, name: 'Papaya', price: '₹40', imgSrc: papaya },
        { id: 15, name: 'Red Banana', price: '₹60', imgSrc: redbanana },
    ];

    return (
        <Layout>
            <div style={fruitContainerStyle}>
                {fruits.map((fruit) => (
                    <div key={fruit.id} style={fruitCardStyle}>
                        <img src={fruit.imgSrc} alt={fruit.name} style={fruitImageStyle} />
                        <div style={fruitInfoStyle}>
                            <div style={fruitNameStyle}>{fruit.name}</div>
                            <div style={fruitPriceStyle}>{fruit.price}</div>
                            {quantities[fruit.id] ? (
                                <div style={quantityControlsStyle}>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleDecrease(fruit)}
                                    >
                                        -
                                    </button>
                                    <span style={quantityTextStyle}>{quantities[fruit.id]}</span>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleIncrease(fruit)}
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    style={addToCartButtonStyle}
                                    onClick={() => handleAddToCart(fruit)}
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

export default Fruits;
