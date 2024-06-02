import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './AdminHome.css'

const AdminHome = () => {
    return (
        <div className='admin-home'>

            <Link to='/admin/create-admin'>
                <div className="admin-create">
                    <MdOutlineAdminPanelSettings />
                    <h3>Create Admin</h3>
                </div>
            </Link>
        </div>
    )
}

export default AdminHome