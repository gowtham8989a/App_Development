// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Vegetable from './components/Vegetable';
import Fruits from './components/Fruits';
import Grocery from './components/Grocery';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart';
import LoginSignup from './components/LoginSignup';
import { CartProvider } from './components/CartContext';
import Chocolates from './components/Chocolates';
import DairyProducts from './components/DairyProducts';
import Payment from './components/Payment';

const RouterComponent = () => {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vegetables" element={<Vegetable />} />
                    <Route path="/fruits" element={<Fruits />} />
                    <Route path="/grocery" element={<Grocery />} />
                    <Route path="/chocolates" element={<Chocolates />} />
                    <Route path="/dairy" element={<DairyProducts />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/login" element={<LoginSignup />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default RouterComponent;
