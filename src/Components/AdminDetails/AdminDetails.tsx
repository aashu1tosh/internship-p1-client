import axios from '@services/instance';
import { UserInterface } from '@type/global.types';
import { useEffect, useState } from 'react';
import { toast } from 'ui/atom/Toast/ToastManager';
import './AdminDetails.css';

const AdminDetails = ({ id }: { id: string }) => {

    const [userData, setUserData] = useState<UserInterface>();

    const fetchData = async () => {
        try {
            const response = await axios.get(`/admin/${id}`);
            setUserData(response.data.data);
            toast.show({
                title: 'Operation Successful',
                content: response.data.message,
                duration: 5000,
                type: 'success'
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error);
            toast.show({
                title: 'Operation Failed',
                content: error?.response.data.message,
                duration: 5000,
                type: 'error'
            });
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="admin-details-container">
            <h1 className='underline-site-color'>Admin Details</h1>
            <div className='admin-details underline-site-color'>
                <p>First Name: {userData?.details?.firstName?.en}</p>
                <p>Middle Name: {userData?.details?.middleName?.en ?? 'n/a'}</p>
                <p>Last Name: {userData?.details?.lastName?.en}</p>
                <p>Role: {userData?.role?.toLowerCase().split('_').join(' ')}</p>
                <p>Email: {userData?.email}</p>
                <p>Username: {userData?.username}</p>
                <p>Phone: {userData?.details?.phoneNumber}</p>
                <p>OTP Verified: {userData?.otpVerified}</p>
                <p>Created At: {userData?.createdAt ?? 'false'}</p>
                <p></p>
            </div>
        </div>
    )
}

export default AdminDetails