import Sidebar from 'Components/Sidebar/Sidebar'
import UserNavbar from 'Components/UserNavbar/UserNavbar'
import { Outlet } from 'react-router-dom'
import './AdminTemplate.css'


const AdminTemplate = () => {
    return (
        <div>
            <UserNavbar />
            <Sidebar />
            <div className='main-content'>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminTemplate