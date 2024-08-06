import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Box, User, Info, Phone } from 'lucide-react'; // Import necessary icons
import logo from '../assets/loogooo.png';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: '#343a40',
        color: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const topSectionStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        marginBottom: '20px',
    };

    const logoContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px', // Space between logo and app name
    };

    const logoStyle = {
        height: '60px',
    };

    const appNameStyle = {
        color: '#ffdd57',
        fontSize: '30px', // Increased font size
        fontWeight: 'bold',
    };

    const searchBarStyle = {
        display: 'flex',
        alignItems: 'center',
        flex: '1',
        maxWidth: '500px', // Adjusted max-width to accommodate dropdown
    };

    const inputStyle = {
        padding: '8px',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        flex: '1',
        fontSize: '14px',
        width: '100%', // Ensure the input takes up the available width
    };

    const buttonStyle = {
        padding: '10px 15px',
        backgroundColor: '#ffdd57',
        color: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#000000',
    };

    const dropdownStyle = {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        backgroundColor: '#fff',
        color: '#333',
        cursor: 'pointer',
        marginLeft: '20px', // Added margin to space out from the search button
    };

    const navContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    };

    const navStyle = {
        listStyle: 'none',
        display: 'flex',
        gap: '100px', // Space between navigation links
        margin: '0',
        padding: '0',
    };

    const linkStyle = {
        textDecoration: 'none',
        padding: '10px 20px', // Adjusted padding
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '16px',
        transition: 'color 0.3s',
        display: 'flex',
        alignItems: 'center',
    };

    const linkHoverStyle = {
        color: '#ffdd57',
    };

    const dropdownMenuStyle = {
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: '#343a40',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
    };

    const dropdownMenuItemStyle = {
        padding: '10px 20px',
        color: '#fff',
        textDecoration: 'none',
        display: 'block',
    };

    const dropdownMenuItemHoverStyle = {
        backgroundColor: '#ffdd57',
    };

    return (
        <header style={headerStyle}>
            <div style={topSectionStyle}>
                <div style={logoContainerStyle}>
                    <Link to="/"> {/* Wrap the logo image in a Link component */}
                        <img src={logo} alt="Supermarket Logo" style={logoStyle} />
                    </Link>
                    <div style={appNameStyle}>DOT-MART</div>
                </div>
                <div style={searchBarStyle}>
                    <input type="text" placeholder="Search products..." style={inputStyle} />
                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                    >
                        Search
                    </button>
                    <select style={dropdownStyle}>
                        <option value="">Select City</option>
                        <option value="city1">Mumbai</option>
                        <option value="city2">Delhi</option>
                        <option value="city3">Kolkata</option>
                        <option value="city4">Bangalore</option>
                        <option value="city5">Chennai</option>
                        <option value="city6">Ahmedabad</option>
                        <option value="city7">Hyderabad</option>
                    </select>
                </div>
            </div>
            <nav style={navContainerStyle}>
                <ul style={navStyle}>
                    <li
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        style={{ position: 'relative' }}
                    >
                        <Link
                            to="#"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                        >
                            <Box size={24} style={{ marginRight: '8px' }} /> {/* Product icon */}
                            Products
                        </Link>
                        {isDropdownOpen && (
                            <div style={dropdownMenuStyle}>
                                <Link
                                    to="/vegetables"
                                    style={dropdownMenuItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownMenuItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownMenuStyle.backgroundColor)}
                                >
                                    Vegetables
                                </Link>
                                <Link
                                    to="/fruits"
                                    style={dropdownMenuItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownMenuItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownMenuStyle.backgroundColor)}
                                >
                                    Fruits
                                </Link>
                                <Link
                                    to="/grocery"
                                    style={dropdownMenuItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownMenuItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownMenuStyle.backgroundColor)}
                                >
                                    Grocery
                                </Link>
                                <Link
                                    to="/dairy"
                                    style={dropdownMenuItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownMenuItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownMenuStyle.backgroundColor)}
                                >
                                    Dairy Products
                                </Link>
                                <Link
                                    to="/chocolates"
                                    style={dropdownMenuItemStyle}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = dropdownMenuItemHoverStyle.backgroundColor)}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = dropdownMenuStyle.backgroundColor)}
                                >
                                    Chocolates
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                        >
                            <Phone size={24} style={{ marginRight: '8px' }} /> {/* Contact Us icon */}
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                        >
                            <ShoppingCart size={24} style={{ marginRight: '8px' }} /> {/* Cart icon */}
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                        >
                            <Info size={24} style={{ marginRight: '8px' }} /> {/* About Us icon */}
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                        >
                            <User size={24} style={{ marginRight: '8px' }} /> {/* Login/Sign Up icon */}
                            Login/Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
