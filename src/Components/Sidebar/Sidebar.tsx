import React from 'react';
import { FaHome, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';


const Sidebar: React.FC = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("accessToken");
        navigate('/signin')
    }

    return (
        <>
            <div id="unique-sidebar" className={'sidebar open'}>
                <div className="sidebar-content">

                    <Link to='/admin'> <li><FaHome /> Home</li></Link>
                    <Link to='/admin/dashboard'>   <li><FaTachometerAlt /> Dashboard</li></Link>
                    <Link to='/admin/change-password'><li>Change Password</li></Link>
                    <li onClick={logout}><FaSignOutAlt /> Logout</li>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
