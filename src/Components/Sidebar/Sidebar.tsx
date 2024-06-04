import React from 'react';
import { FaHome, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'ui/atom/Toast/ToastManager';
import './Sidebar.css';


const Sidebar: React.FC = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("accessToken");
        toast.show({
            title: 'Success',
            content: 'Successfully Logged Out',
            duration: 5000,  // Duration in milliseconds,
            type: 'success'
        });
        navigate('/signin')
    }

    return (
        <>
            <div id="unique-sidebar" className={'sidebar open'}>
                <div className="sidebar-content">

                    <Link to='/admin'> <li><FaHome /> Home</li></Link>
                    <Link to='/admin/dashboard'>   <li><FaTachometerAlt /> Dashboard</li></Link>
                    <Link to='/admin/change-password'><li>Change Password</li></Link>
                    <Link to='/admin/admin-list'><li> <MdAdminPanelSettings /> Admin List</li></Link>
                    <li onClick={logout}><FaSignOutAlt /> Logout</li>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
