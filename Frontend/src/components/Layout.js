    // Layout.js
    import React from 'react';
    import Header from './Header'; // Import the Header component
    import Footer from './Footer'; // Import the Footer component

    const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    };

    const mainStyle = {
    flex: '1',
    };

    const Layout = ({ children }) => {
    return (
        <div style={layoutStyle}>
        <Header /> {/* Render the Header component */}
        <main style={mainStyle}>
            {children} {/* Render child components */}
        </main>
        <Footer /> {/* Render the Footer component */}
        </div>
    );
    };

    export default Layout;
