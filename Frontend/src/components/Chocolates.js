import React, { useContext, useState } from 'react';
import Layout from './Layout';
import { CartContext } from './CartContext';
import choco from '../assets/choco.jpg';
import lotus from '../assets/Lotus.jpg';
import nutri from '../assets/nutri.jpg';
import goodday from '../assets/goodday.jpg';
import oreo from '../assets/oreo.jpg';
import lays from '../assets/lays.jpg';
import ferrorocher from '../assets/ferrorocher.jpg';
import milkbikis from '../assets/milkbikis.jpg';
import kitkat from '../assets/kitkat.jpg';
import happy from '../assets/happy.jpg';
import twix from '../assets/twix.jpg';
import galaxy from '../assets/galaxy.jpg';
import gems from '../assets/gems.jpg';
import milkybar from '../assets/milkybar.jpg';
import dairymilk from '../assets/dairymilk.jpg';
const chocolateContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
    overflowY: 'auto', // Make it scrollable
    maxHeight: 'calc(100vh - 150px)', // Adjust this value based on the height of your header and footer
};

const chocolateCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
    textAlign: 'center',
};

const chocolateImageStyle = {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
};

const chocolateInfoStyle = {
    padding: '15px',
};

const chocolateNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
};

const chocolatePriceStyle = {
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
    color: '#ffdd47',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const quantityTextStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
};

const Chocolates = () => {
    const { addToCart, updateCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    const handleAddToCart = (chocolate) => {
        const updatedQuantities = { ...quantities, [chocolate.id]: (quantities[chocolate.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        addToCart(chocolate);
        updateCart(chocolate.id, updatedQuantities[chocolate.id]);
    };

    const handleIncrease = (chocolate) => {
        const updatedQuantities = { ...quantities, [chocolate.id]: (quantities[chocolate.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        updateCart(chocolate.id, updatedQuantities[chocolate.id]);
    };

    const handleDecrease = (chocolate) => {
        if (quantities[chocolate.id] > 1) {
            const updatedQuantities = { ...quantities, [chocolate.id]: quantities[chocolate.id] - 1 };
            setQuantities(updatedQuantities);
            updateCart(chocolate.id, updatedQuantities[chocolate.id]);
        } else {
            const updatedQuantities = { ...quantities };
            delete updatedQuantities[chocolate.id];
            setQuantities(updatedQuantities);
            updateCart(chocolate.id, 0);
        }
    };

    const chocolates = [
        { id: 1, name: 'Choco Chips', price: 'RS.40', imgSrc: choco },
        { id: 2, name: 'Lotus biscoff', price: 'RS.50', imgSrc: lotus },
        { id: 3, name: 'Nutri choice', price: 'RS.60', imgSrc: nutri },
        { id: 4, name: 'Ferrero Rocher', price: 'RS.150', imgSrc: ferrorocher },
        { id: 5, name: 'Good Day', price: 'RS.120', imgSrc: goodday},
        { id: 6, name: 'Oreo', price: 'RS.200', imgSrc: oreo },
        { id: 7, name: 'Lays', price: 'RS.180', imgSrc: lays },
        { id: 8, name: 'Milk Bikis', price: 'RS.250', imgSrc: milkbikis },
        { id: 9, name: 'KitKat', price: 'RS.90', imgSrc: kitkat },
        { id: 10, name: 'Happy Happy', price: 'RS.70', imgSrc: happy },
        { id: 11, name: 'Twix', price: 'RS.100', imgSrc: twix},
        { id: 12, name: 'Galaxy', price: 'RS.50', imgSrc: galaxy },
        { id: 13, name: 'Gems', price: 'RS.120', imgSrc: gems},
        { id: 14, name: 'Milkybar', price: 'RS.140', imgSrc: milkybar },
        { id: 14, name: 'Dairy Milk', price: 'RS.140', imgSrc: dairymilk },
    ];

    return (
        <Layout>
            <div style={chocolateContainerStyle}>
                {chocolates.map((chocolate) => (
                    <div key={chocolate.id} style={chocolateCardStyle}>
                        <img src={chocolate.imgSrc} alt={chocolate.name} style={chocolateImageStyle} />
                        <div style={chocolateInfoStyle}>
                            <div style={chocolateNameStyle}>{chocolate.name}</div>
                            <div style={chocolatePriceStyle}>{chocolate.price}</div>
                            {quantities[chocolate.id] ? (
                                <div style={quantityControlsStyle}>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleDecrease(chocolate)}
                                    >
                                        -
                                    </button>
                                    <span style={quantityTextStyle}>{quantities[chocolate.id]}</span>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleIncrease(chocolate)}
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    style={addToCartButtonStyle}
                                    onClick={() => handleAddToCart(chocolate)}
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

export default Chocolates;
