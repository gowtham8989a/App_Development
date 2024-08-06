import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let formErrors = {};

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === "") {
            formErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            formErrors.email = "Enter a valid email address";
        }

        // Password validation
        if (password.trim() === "") {
            formErrors.password = "Password is required";
        }

        // Name validation for Sign Up
        if (action === "Sign Up" && name.trim() === "") {
            formErrors.name = "Name is required";
        }

        return formErrors;
    };

    const handleLogin = () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');
            if (email === storedEmail && password === storedPassword) {
                // On successful login, navigate to the home page
                navigate('/');
            } else {
                setErrors({ ...errors, login: "Invalid email or password" });
            }
        } else {
            setErrors(formErrors);
        }
    };

    const handleSignup = () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Store the credentials in local storage
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            // On successful sign-up, navigate to the home page
            navigate('/');
        } else {
            setErrors(formErrors);
        }
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        marginTop: '150px', // Adjusted to move the component upwards
        width: '600px',
        background: '#fff',
        paddingBottom: '30px',
    };

    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '9px',
        width: '100%',
        marginTop: '30px',
    };

    const textStyle = {
        color: '#3c009d',
        fontSize: '48px',
        fontWeight: '700',
    };

    const underlineStyle = {
        width: '61px',
        height: '6px',
        background: '#3c009d',
        borderRadius: '9px',
    };

    const inputsStyle = {
        marginTop: '55px',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
    };

    const inputStyle = {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        width: '480px',
        height: '80px',
        background: '#eaeaea',
        borderRadius: '6px',
    };

    const inputImgStyle = {
        margin: '0px 30px',
    };

    const inputFieldStyle = {
        height: '50px',
        width: '400px',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: '#797979',
        fontSize: '19px',
    };

    const errorTextStyle = {
        color: 'red',
        fontSize: '14px',
        marginTop: '5px',
    };

    const forgotPasswordStyle = {
        paddingLeft: '62px',
        marginTop: '27px',
        color: '#797979',
        fontSize: '18px',
    };

    const forgotPasswordSpanStyle = {
        color: '#4c00b4',
        cursor: 'pointer',
    };

    const submitContainerStyle = {
        display: 'flex',
        gap: '30px',
        margin: '60px auto',
    };

    const submitStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '220px',
        height: '59px',
        color: '#fff',
        background: '#4c00b4',
        borderRadius: '50px',
        fontSize: '19px',
        fontWeight: '700',
        cursor: 'pointer',
    };

    const grayStyle = {
        background: '#EAEAEA',
        color: '#676767',
    };

    return (
        <Layout>
            <div style={containerStyle}>
                <div style={headerStyle}>
                    <div style={textStyle}>{action}</div>
                    <div style={underlineStyle}></div>
                </div>
                <div style={inputsStyle}>
                    {action === "Login" ? null : (
                        <div style={inputStyle}>
                            <img src={user_icon} alt='' style={inputImgStyle} />
                            <input
                                type="text"
                                placeholder='Name'
                                style={inputFieldStyle}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}
                    {errors.name && <div style={errorTextStyle}>{errors.name}</div>}
                    <div style={inputStyle}>
                        <img src={email_icon} alt='' style={inputImgStyle} />
                        <input
                            type="email"
                            placeholder='Email Id'
                            style={inputFieldStyle}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {errors.email && <div style={errorTextStyle}>{errors.email}</div>}
                    <div style={inputStyle}>
                        <img src={password_icon} alt='' style={inputImgStyle} />
                        <input
                            type="password"
                            placeholder='Password'
                            style={inputFieldStyle}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errors.password && <div style={errorTextStyle}>{errors.password}</div>}
                    {errors.login && <div style={errorTextStyle}>{errors.login}</div>}
                    {action === "Sign Up" ? null : (
                        <div style={forgotPasswordStyle}>
                            forgot Password?<span style={forgotPasswordSpanStyle}>Click Here!</span>
                        </div>
                    )}
                </div>
                <div style={submitContainerStyle}>
                    <div
                        style={action === "Login" ? { ...submitStyle, ...grayStyle } : submitStyle}
                        onClick={() => { setAction("Sign Up") }}
                    >
                        Sign Up
                    </div>
                    <div
                        style={action === "Sign Up" ? { ...submitStyle, ...grayStyle } : submitStyle}
                        onClick={() => {
                            if (action === "Login") {
                                handleLogin();
                            } else {
                                handleSignup();
                            }
                        }}
                    >
                        {action === "Login" ? "Login" : "Sign Up"}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LoginSignup;
