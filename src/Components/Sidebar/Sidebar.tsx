import React, { useState } from 'react';
import { FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'ui/atom/Toast/ToastManager';
import ConfirmationModal from 'ui/organism/ConfirmationModal/ConfiramtionModal';
import './Sidebar.css';


const Sidebar: React.FC = () => {

    const navigate = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const logout = () => {
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("accessToken");
        toast.show({
            title: 'Success',
            content: 'Successfully Logged Out',
            duration: 5000,  // Duration in milliseconds,
            type: 'success'
        });
        navigate('/signin')
    }

    const confirmLogout = () => {
        setShowConfirmation(true);
    };

    const handleDeleteConfirmed = () => {
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("accessToken");
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    return (
        <>
            <div id="unique-sidebar" className={'sidebar open'}>
                <div className="sidebar-content">
                    {/* <Link to='/admin'> <li><FaHome /> Home</li></Link> */}
                    <Link to='/admin'>   <li><FaTachometerAlt /> Dashboard</li></Link>
                    <Link to='/admin/admin-list'><li> <MdAdminPanelSettings /> Admin List</li></Link>
                    <Link to='/admin/change-password'><li>Change Password</li></Link>
                    <li onClick={confirmLogout}><FaSignOutAlt /> Logout</li>
                </div>
            </div>

            <ConfirmationModal
                isOpen={showConfirmation}
                onCancel={handleCancel}
                onConfirm={handleDeleteConfirmed}
            />
        </>
    );
};

export default Sidebar;
