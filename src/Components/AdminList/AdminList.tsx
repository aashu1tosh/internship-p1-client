import axios from '@services/instance'
import AdminDetails from 'Components/AdminDetails/AdminDetails'
import UpdateAdmin from 'Components/UpdateAdmin/UpdateAdmin'
import { UserType } from 'interface/global.interface'
import { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { toast } from 'ui/atom/Toast/ToastManager'
import Dialog from 'ui/organism/Modal/Modal'
import './AdminList.css'

const AdminList = () => {
    const [userData, setUserData] = useState<UserType>([]);
    const [viewDialogOpen, setViewDialogOpen] = useState<boolean>(false);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const [id, setId] = useState<string>("");

    const closeViewDialog = () => {
        setViewDialogOpen(false);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('/admin');
            console.log(response.data.data.data);
            setUserData(response.data.data.data);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error);
            toast.show({
                title: 'Operation Failed',
                content: error?.response.data.message,
                duration: 5000,  // Duration in milliseconds,
                type: 'error'
            });
        }
    }

    const deleteUser = async (_id: string) => {
        try {
            const response = await axios.delete(`/admin/${_id}`)
            console.log(response)
            if (response?.data.status) {
                toast.show({
                    title: 'Success',
                    content: response?.data?.message,
                    duration: 5000,  // Duration in milliseconds,
                    type: 'success'
                });
                const updatedUserData = userData?.filter(data => data.id !== _id);
                setUserData(updatedUserData);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error);
            toast.show({
                title: 'Operation Failed',
                content: error?.response.data.message,
                duration: 5000,  // Duration in milliseconds,
                type: 'error'
            });
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    function handleRowClick(_id: string): void {
        // navigate(`/admin/${id}`);
        setViewDialogOpen(true);
        setId(_id);
    }
    function updateAdminClick(_id: string): void {
        setId(_id);
        setDialogOpen(true);
    }



    // Function to handle closing the dialog
    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <>
            <div className='admin-list'>
                <table className='admin-list-table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Username</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userData && userData?.map((user, index) => (
                            <tr key={index} onClick={() => handleRowClick(user?.id)}>
                                <td>{index + 1}</td>
                                <td>{user?.details.firstName.en}</td>
                                <td>{user?.details.lastName.en}</td>
                                <td>{user?.details.phoneNumber}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role.toString().replace('_', ' ').toLowerCase()}</td>
                                <td>{user?.username}</td>
                                {/* <Link to={`/admin/update-admin/${user?.id}`}> </Link>*/}
                                <td title='Edit' onClick={(e) => { e.stopPropagation(); updateAdminClick(user?.id) }}>  <FaEdit size={16} color='green' cursor={'pointer'} /></td>
                                <td onClick={(e) => { e.stopPropagation(); deleteUser(user?.id); }}><MdDelete size={21} color='red' /></td>
                            </tr>
                        ))
                        }
                    </tbody>

                </table>

                <Dialog open={viewDialogOpen} onClose={closeViewDialog}>
                    <AdminDetails id={id} />
                </Dialog>

                <Dialog open={dialogOpen} onClose={closeDialog}>
                    <UpdateAdmin
                        id={id}
                        closeDialog={closeDialog}
                        userData={userData}
                        setUserData={setUserData}
                    />

                </Dialog>

            </div >
        </>
    )
}

export default AdminList
