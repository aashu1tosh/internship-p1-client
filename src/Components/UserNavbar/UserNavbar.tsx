import { image } from '@config/constant/image';
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from 'ui/atom/ThemeToggleButton/ThemeToggleButton';
import './UserNavbar.css';

const UserNavbar: React.FC = () => {

    return (
        <div id="unique-navbar">
            <div><p>Welcome {localStorage.getItem("username")}</p></div>
            <Link to='/'>
                <div className="navbar-logo">
                    <img src={image?.logo} alt="Logo" />
                </div>
            </Link>

            <div className="navbar-links">
                <li>{localStorage.getItem("role")}</li>
                <li><ThemeToggleButton /></li>
            </div>
        </div>
    );
};

export default UserNavbar;
