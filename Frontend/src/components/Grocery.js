import React, { useContext, useState } from 'react';
import Layout from './Layout';
import { CartContext } from './CartContext';
import rice from '../assets/rice.jpg';
import turmeric from '../assets/turmeric.jpg';
import cashew from '../assets/cashew.jpg';
import garam from '../assets/garam.jpg';
import Maggi from '../assets/Maggi.jpg';
import coconut from '../assets/coconut.jpg';
import briyani from '../assets/briyani.jpg';
import almonds from '../assets/almonds.jpg';
import masoor from '../assets/masoor dal.jpg';
import Toordal from '../assets/Toordal.jpg';
import white from '../assets/whitepeas.jpg';
import moong from '../assets/moongdal.jpg';
import salt from '../assets/salt.jpg';
import oil from '../assets/oil.jpg';
import channa from '../assets/chana .jpg';

const groceryContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
    overflowY: 'auto', // Make it scrollable
    maxHeight: 'calc(100vh - 150px)', // Adjust this value based on the height of your header and footer
};

const groceryCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
    textAlign: 'center',
};

const groceryImageStyle = {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
};

const groceryInfoStyle = {
    padding: '15px',
};

const groceryNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
};

const groceryPriceStyle = {
    fontSize: '16px',
    color: '#007bff',
};

const addToCartButtonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#343a40',
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

const Grocery = () => {
    const { addToCart, updateCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    const handleAddToCart = (grocery) => {
        const updatedQuantities = { ...quantities, [grocery.id]: (quantities[grocery.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        addToCart(grocery);
        updateCart(grocery.id, updatedQuantities[grocery.id]);
    };

    const handleIncrease = (grocery) => {
        const updatedQuantities = { ...quantities, [grocery.id]: (quantities[grocery.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        updateCart(grocery.id, updatedQuantities[grocery.id]);
    };

    const handleDecrease = (grocery) => {
        if (quantities[grocery.id] > 1) {
            const updatedQuantities = { ...quantities, [grocery.id]: quantities[grocery.id] - 1 };
            setQuantities(updatedQuantities);
            updateCart(grocery.id, updatedQuantities[grocery.id]);
        } else {
            const updatedQuantities = { ...quantities };
            delete updatedQuantities[grocery.id];
            setQuantities(updatedQuantities);
            updateCart(grocery.id, 0);
        }
    };

    const groceries = [
        { id: 1, name: 'Rice', price: 'RS.60', imgSrc: rice },
        { id: 2, name: 'Turmeric', price: 'RS.50', imgSrc: turmeric },
        { id: 3, name: 'Cashew nuts', price: 'RS.40', imgSrc: cashew },
        { id: 4, name: 'Garam Masala', price: 'RS.20', imgSrc: garam },
        { id: 5, name: 'Maggi', price: 'RS.100', imgSrc: Maggi },
        { id: 6, name: 'Coconut', price: 'RS.80', imgSrc: coconut },
        { id: 7, name: 'Briyani Masala', price: 'RS.90', imgSrc: briyani },
        { id: 8, name: 'Almonds', price: 'RS.150', imgSrc: almonds },
        { id: 9, name: 'Masoor Dal', price: 'RS.60', imgSrc: masoor },
        { id: 10, name: 'Toor dal', price: 'RS.30', imgSrc: Toordal },
        { id: 11, name: 'white peas', price: 'RS.50', imgSrc: white },
        { id: 12, name: 'Moong Dal', price: 'RS.70', imgSrc: moong },
        { id: 13, name: 'salt', price: 'RS.90', imgSrc: salt },
        { id: 14, name: 'Oil', price: 'RS.120', imgSrc: oil },
        { id: 15, name: 'Chana Dal', price: 'RS.120', imgSrc: channa},
    ];

    return (
        <Layout>
            <div style={groceryContainerStyle}>
                {groceries.map((grocery) => (
                    <div key={grocery.id} style={groceryCardStyle}>
                        <img src={grocery.imgSrc} alt={grocery.name} style={groceryImageStyle} />
                        <div style={groceryInfoStyle}>
                            <div style={groceryNameStyle}>{grocery.name}</div>
                            <div style={groceryPriceStyle}>{grocery.price}</div>
                            {quantities[grocery.id] ? (
                                <div style={quantityControlsStyle}>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleDecrease(grocery)}
                                    >
                                        -
                                    </button>
                                    <span style={quantityTextStyle}>{quantities[grocery.id]}</span>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleIncrease(grocery)}
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    style={addToCartButtonStyle}
                                    onClick={() => handleAddToCart(grocery)}
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

export default Grocery;
