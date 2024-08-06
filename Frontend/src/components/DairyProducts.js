import React, { useContext, useState } from 'react';
import Layout from './Layout';
import { CartContext } from './CartContext';
import milk from '../assets/milk.jpg';
import freshcream from '../assets/freshcream.jpg';
import butter from '../assets/butter.jpg';
import curd from '../assets/curd.jpg';
import panner from '../assets/panner.jpg';
import chocolate from '../assets/chocolate magic.jpg';
import ice from '../assets/ice.jpg';
import cheese from '../assets/cheese.jpg';
import milkshakes from '../assets/milkshakes.jpg';
import condensedmilk from '../assets/condensedmilk.jpeg';
import buttermilk from '../assets/buttermilk.jpeg';
import lassi from '../assets/lassi.jpg';
import sourcream from '../assets/sourcream.jpg';
import ghee from '../assets/ghee.jpg';
const dairyContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
    overflowY: 'auto', // Make it scrollable
    maxHeight: 'calc(100vh - 150px)', // Adjust this value based on the height of your header and footer
};

const dairyCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
    textAlign: 'center',
};

const dairyImageStyle = {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
};

const dairyInfoStyle = {
    padding: '15px',
};

const dairyNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
};

const dairyPriceStyle = {
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

const DairyProducts = () => {
    const { addToCart, updateCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    const handleAddToCart = (dairy) => {
        const updatedQuantities = { ...quantities, [dairy.id]: (quantities[dairy.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        addToCart(dairy);
        updateCart(dairy.id, updatedQuantities[dairy.id]);
    };

    const handleIncrease = (dairy) => {
        const updatedQuantities = { ...quantities, [dairy.id]: (quantities[dairy.id] || 0) + 1 };
        setQuantities(updatedQuantities);
        updateCart(dairy.id, updatedQuantities[dairy.id]);
    };

    const handleDecrease = (dairy) => {
        if (quantities[dairy.id] > 1) {
            const updatedQuantities = { ...quantities, [dairy.id]: quantities[dairy.id] - 1 };
            setQuantities(updatedQuantities);
            updateCart(dairy.id, updatedQuantities[dairy.id]);
        } else {
            const updatedQuantities = { ...quantities };
            delete updatedQuantities[dairy.id];
            setQuantities(updatedQuantities);
            updateCart(dairy.id, 0);
        }
    };

    const dairyProducts = [
        { id: 1, name: 'Milk', price: 'RS.40', imgSrc: milk },
        { id: 2, name: 'Fresh Cream', price: 'RS.50', imgSrc: freshcream },
        { id: 3, name: 'Butter', price: 'RS.60', imgSrc: butter },
        { id: 4, name: 'curd', price: 'RS.20', imgSrc: curd },
        { id: 5, name: 'Chocolate Magic', price: 'RS.30', imgSrc: chocolate},
        { id: 6, name: 'Paneer', price: 'RS.70', imgSrc: panner},
        { id: 7, name: 'Ice Cream', price: 'RS.150', imgSrc: ice },
        { id: 8, name: 'Lassi', price: 'RS.25', imgSrc: lassi },
        { id: 9, name: 'Curd', price: 'RS.20', imgSrc: curd },
        { id: 10, name: 'Cheese', price: 'RS.50', imgSrc: cheese },
        { id: 11, name: 'Milk shake', price: 'RS.100', imgSrc: milkshakes},
        { id: 12, name: 'Condensed Milk', price: 'RS.70', imgSrc: condensedmilk },
        { id: 13, name: 'Buttermilk', price: 'RS.15', imgSrc: buttermilk },
        { id: 14, name: 'Sour Cream', price: 'RS.35', imgSrc: sourcream },
        { id: 15, name: 'Ghee', price: 'RS.35', imgSrc: ghee },
    ];

    return (
        <Layout>
            <div style={dairyContainerStyle}>
                {dairyProducts.map((dairy) => (
                    <div key={dairy.id} style={dairyCardStyle}>
                        <img src={dairy.imgSrc} alt={dairy.name} style={dairyImageStyle} />
                        <div style={dairyInfoStyle}>
                            <div style={dairyNameStyle}>{dairy.name}</div>
                            <div style={dairyPriceStyle}>{dairy.price}</div>
                            {quantities[dairy.id] ? (
                                <div style={quantityControlsStyle}>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleDecrease(dairy)}
                                    >
                                        -
                                    </button>
                                    <span style={quantityTextStyle}>{quantities[dairy.id]}</span>
                                    <button
                                        style={quantityButtonStyle}
                                        onClick={() => handleIncrease(dairy)}
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    style={addToCartButtonStyle}
                                    onClick={() => handleAddToCart(dairy)}
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

export default DairyProducts;
