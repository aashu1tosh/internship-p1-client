import EncryptDecrypt from '@functions/EncryptDecrypt'
import axios from '@services/instance'
import { UserType } from 'interface/global.interface'
import { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'ui/atom/Toast/ToastManager'
import './AdminList.css'

const AdminList = () => {
    const [userData, setUserData] = useState<UserType>();
    const [refresh, setRefresh] = useState<boolean>(false);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get('/admin', {
                headers: {
                    Authorization: `Bearer ${EncryptDecrypt.decrypt(localStorage.getItem("accessToken") as string)}`
                }
            });
            console.log(response.data.data.data);
            setUserData(response.data.data.data);
            // toast.show({
            //     title: 'Operation Successful',
            //     content: response.data.data.message,
            //     duration: 5000,  // Duration in milliseconds,
            //     type: 'success'
            // });
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
            const response = await axios.delete(`/admin/${_id}`, {
                headers: {
                    Authorization: `Bearer ${EncryptDecrypt.decrypt(localStorage.getItem("accessToken") as string)}`
                }
            })
            console.log(response)
            if (response?.data.status) {
                toast.show({
                    title: 'Success',
                    content: response?.data?.message,
                    duration: 5000,  // Duration in milliseconds,
                    type: 'success'
                });
                setRefresh(prev => !prev);
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
    }, [refresh]);

    function handleRowClick(id: string): void {
        navigate(`/admin/${id}`);
    }

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
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData && userData?.map((user, index) => (
                            <tr key={user?.id} onClick={() => handleRowClick(user?.id)}>
                                <th>{index + 1}</th>
                                <th>{user?.details.firstName.en}</th>
                                <th>{user?.details.lastName.en}</th>
                                <th>{user?.details.phoneNumber}</th>
                                <th>{user?.email}</th>
                                <th>{user?.role.toString().replace('_', ' ').toLowerCase()}</th>
                                <th>{user?.username}</th>
                                <th onClick={(e) => e.stopPropagation()}><FaEdit size={16} color='green' cursor={'pointer'} /></th>
                                <th onClick={(e) => { e.stopPropagation(); deleteUser(user?.id); }}><MdDelete size={21} color='red' /></th>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default AdminList
