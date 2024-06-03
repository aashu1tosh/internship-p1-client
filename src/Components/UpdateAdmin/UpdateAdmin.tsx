import axios from '@services/instance';
import { UserCreateInterface } from '@type/global.types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'ui/atom/Buttons/Buttons';
import InputField from 'ui/atom/InputField/InputField';
import SelectOption from 'ui/atom/SelectOption/SelectOption';
import { toast } from 'ui/atom/Toast/ToastManager';
import './UpdateAdmin.css';

const UpdateAdmin = () => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<UserCreateInterface>();
    const navigate = useNavigate();
    const fetchAdmin = async () => {
        try {
            const response = await axios.get(`/admin/${id}`);
            const fetchedData = response.data.data;

            reset({
                email: fetchedData.email,
                role: fetchedData.role,
                allowedFeature: fetchedData.allowedFeature,
                details: {
                    firstName: {
                        en: fetchedData.details.firstName.en,
                        ne: fetchedData.details.firstName.ne,
                    },
                    lastName: {
                        en: fetchedData.details.lastName.en,
                        ne: fetchedData.details.lastName.ne
                    },
                    phoneNumber: fetchedData.details.phoneNumber
                }
            });

        } catch (error: any) {
            console.error(error);
            toast.show({
                title: 'Operation Failed hehe',
                content: error?.response.data.message,
                duration: 5000,
                type: 'error'
            });
        }
    }

    const updateAdmin = async (data: UserCreateInterface) => {
        // handle form submission
        console.log(data);
        try {
            const response = await axios.patch('/admin', {
                id: id,
                role: data.role,
                allowedFeature: data.allowedFeature,
                firstName: {
                    en: data.details.firstName.en,
                    ne: data.details.firstName.ne
                },
                lastName: {
                    en: data.details.lastName.en,
                    ne: data.details.lastName.ne
                },
                phoneNumber: data.details.phoneNumber
            })
            if (response.data.status) {
                console.log(response);
                toast.show({
                    title: 'Operation Successful',
                    content: "Updated",
                    duration: 5000,  // Duration in milliseconds,
                    type: 'success'
                });
                navigate('/admin/admin-list')
            }
        } catch (error) {
            toast.show({
                title: 'Operation Failed',
                content: error?.response?.data?.message,
                duration: 5000,  // Duration in milliseconds,
                type: 'error'
            });
        }
    }

    useEffect(() => {
        fetchAdmin();
    }, []);

    return (
        <div className='update-admin'>
            <h1 className='underline-site-color' >Update Admin</h1>
            <div className='update-admin-content'>
                <form onSubmit={handleSubmit(updateAdmin)}>
                    <div className='name-field'>
                        <div>
                            <InputField
                                icon={<FaUser />}
                                placeholder="Ram"
                                label="Enter your first name"
                                name="details.firstName.en"
                                register={register}
                                options={{ required: "First name is required" }}
                            />
                            {errors?.details?.firstName?.en?.message &&
                                <span className='red-text'>
                                    {errors?.details?.firstName?.en?.message}
                                </span>}
                        </div>
                        <div>
                            <InputField
                                icon={<FaUser />}
                                placeholder="Sharma"
                                label="Enter your last name"
                                name="details.lastName.en"
                                register={register}
                                options={{ required: "Last name is required" }}
                            />
                            {errors?.details?.lastName?.en?.message &&
                                <span className='red-text'>
                                    {errors?.details?.lastName?.en?.message}
                                </span>}
                        </div>
                    </div>

                    <div className='email-phone'>
                        <div>
                            <InputField
                                icon={<FaPhone style={{ rotate: '90deg' }} />}
                                placeholder="98XXXXXXXX"
                                label="Enter your phone number"
                                name="details.phoneNumber"
                                register={register}
                                type='number'
                                options={{ required: "Phone number is required" }}
                            />
                            {errors?.details?.phoneNumber?.message &&
                                <span className='red-text'>
                                    {errors?.details?.phoneNumber?.message}
                                </span>}
                        </div>

                        <div>
                            <InputField
                                icon={<MdEmail />}
                                placeholder="ram.sharma@gmail.com"
                                label="Enter your email address"
                                name="email"
                                readOnly={true}
                                register={register}
                                options={{ required: "Email address is required" }}
                            />
                            {errors?.email?.message &&
                                <span className='red-text'>
                                    {errors?.email?.message}
                                </span>}
                        </div>
                    </div>
                    <div className='selectors'>
                        <div>
                            <SelectOption
                                label='Select Role:'
                                name='role'
                                option={[
                                    { label: 'User', value: 'USER' },
                                    { label: 'Admin', value: 'ADMIN' },
                                    { label: 'Super Admin', value: 'SUPER_ADMIN' },
                                ]}
                                register={register}
                                options={{ required: 'Role is required' }}
                            />
                            {errors?.password?.message &&
                                <span className='red-text'>
                                    {errors?.role?.message}
                                </span>}
                        </div>

                        <div>
                            <SelectOption
                                label='Allowed Feature:'
                                name='allowedFeature'
                                option={[
                                    { label: 'Setup', value: 'SETUP' },
                                    { label: 'Manage Admin', value: 'MANAGE_ADMIN' },
                                ]}
                                register={register}
                                options={{ required: 'Allowed Feature is required' }}
                            />
                            {errors?.password?.message &&
                                <span className='red-text'>
                                    {errors?.allowedFeature?.message}
                                </span>}
                        </div>
                    </div>

                    <div className='btn-container'>
                        <Button
                            name="Update Admin"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateAdmin;