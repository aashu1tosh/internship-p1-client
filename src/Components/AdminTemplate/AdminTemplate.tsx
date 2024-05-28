import UserNavbar from 'Components/UserNavbar/UserNavbar'
import { Outlet } from 'react-router-dom'

const AdminTemplate = () => {
    return (
        <>
            <UserNavbar />
            <Outlet />
        </>
    )
}

export default AdminTemplate