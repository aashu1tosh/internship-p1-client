import axios from '@services/instance'
import AdminDetails from 'Components/AdminDetails/AdminDetails'
import Pagination from 'Components/Pagination/Pagination'
import UpdateAdmin from 'Components/UpdateAdmin/UpdateAdmin'
import { PaginationInterface, SearchObject, UserInterface, UserType, defaultPagination } from 'interface/global.interface'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaCaretDown, FaCaretUp, FaEdit, FaSearch } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { TbCaretUpDownFilled } from 'react-icons/tb'
import InputField from 'ui/atom/InputField/InputField'
import { toast } from 'ui/atom/Toast/ToastManager'
import Dialog from 'ui/organism/Modal/Modal'
import './AdminList.css'

const AdminList = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { register, handleSubmit } = useForm<any>();

    const [userData, setUserData] = useState<UserType>([]);
    const [viewDialogOpen, setViewDialogOpen] = useState<boolean>(false);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    const [id, setId] = useState<string>("");
    const [sortStatus, setSortStatus] = useState<0 | 1 | 2>(0);

    const [specificUser, setSpecificUser] = useState<UserInterface>();

    const [totalPages, setTotalPages] = useState<PaginationInterface | undefined>();
    const [refresh, setRefresh] = useState<boolean>(false);

    const closeViewDialog = () => {
        setViewDialogOpen(false);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`/admin?search=${search}&page=${totalPages?.currentPage || 1}`);
            console.log(response.data.data.data);
            setUserData(response.data.data.data);
            console.log(response.data.data.pagination)
            if (response.data.data.pagination.totalPages > 1) {
                console.log("Show more pages")
            }
            setTotalPages(response.data.data.pagination);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error);
            toast.show({
                title: 'Operation Failed',
                content: error?.response?.data?.message,
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
    }, [refresh]);

    function handleRowClick(_id: string): void {
        // navigate(`/admin/${id}`);
        setViewDialogOpen(true);
        setId(_id);
    }
    function updateAdminClick(_id: string, user: UserInterface): void {
        setId(_id);
        setSpecificUser(user);
        setDialogOpen(true);
    }



    // Function to handle closing the dialog
    const closeDialog = () => {
        setDialogOpen(false);
    };

    const sort = () => {
        setSortStatus(prevStatus => {
            const newStatus = prevStatus === 0 ? 1 : prevStatus === 1 ? 2 : 0;
            const sortedList = [...userData].sort((a, b) => {
                const firstNameA = a.details.firstName.en.toUpperCase() || "";
                const firstNameB = b.details.firstName.en.toUpperCase() || "";

                if (newStatus === 1) {
                    return firstNameA.localeCompare(firstNameB);

                } else if (newStatus === 2) {
                    return firstNameB.localeCompare(firstNameA);
                } else
                    return 0;
            });
            setUserData(sortedList)
            return newStatus;
        });
    }

    const handleUserUpdate = (updatedUser: UserInterface) => {
        setUserData((prevUserData) =>
            prevUserData.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
        closeDialog();
    };

    const searchFn = (data: SearchObject) => {
        try {
            console.log(data)
            setSearch(data.search);
            setRefresh(prev => !prev)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='search-box'>
                <form onSubmit={handleSubmit(searchFn)}>
                    <InputField
                        icon={<FaSearch />}
                        placeholder="Search Here"
                        label=""
                        name='search'
                        register={register}
                    />
                </form>
            </div>
            <div className='admin-list'>

                <table className='admin-list-table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th onClick={sort} className='first-name'>
                                First Name
                                <div className='arrow-icons'>
                                    {sortStatus === 0 && <TbCaretUpDownFilled />}
                                    {sortStatus === 1 && <FaCaretDown />}
                                    {sortStatus === 2 && <FaCaretUp />}
                                </div>
                            </th>
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
                                <td title='Update' onClick={(e) => { e.stopPropagation(); updateAdminClick(user?.id, user) }}>  <FaEdit size={16} color='green' cursor={'pointer'} /></td>
                                <td onClick={(e) => { e.stopPropagation(); deleteUser(user?.id); }}><MdDelete size={21} color='red' /></td>
                            </tr>
                        ))
                        }
                    </tbody>

                </table>

                {
                    totalPages?.totalPages || 0 > 1 ?
                        <Pagination
                            setTotalPages={setTotalPages as React.Dispatch<React.SetStateAction<PaginationInterface>>}
                            pagination={totalPages ?? defaultPagination}
                            setRefresh={setRefresh}
                        /> : <></>
                }

                <Dialog open={viewDialogOpen} onClose={closeViewDialog}>
                    <AdminDetails id={id} />
                </Dialog>

                <Dialog open={dialogOpen} onClose={closeDialog}>

                    <UpdateAdmin
                        id={id}
                        closeDialog={closeDialog}
                        user={specificUser}
                        handleUserUpdate={handleUserUpdate}
                    />

                </Dialog>

            </div >
        </>
    )
}

export default AdminList
