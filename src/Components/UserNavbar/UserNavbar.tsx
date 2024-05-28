import { image } from '@config/constant/image';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserNavbar.css';

const UserNavbar: React.FC = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("accessToken");
        navigate('/signin')
    }
    return (
        <div id="unique-navbar">
            <div className="navbar-logo">
                <img src={image?.logo} alt="Logo" />
            </div>
            <div className="navbar-links">
                <li>Home</li>
                <li>Dashboard</li>
                <li onClick={logout}>Logout</li>
            </div>
        </div>
    );
};

export default UserNavbar;
