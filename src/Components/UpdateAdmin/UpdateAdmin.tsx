import axios from '@services/instance';
import { UpdateAdminProps, UserCreateInterface } from 'interface/global.interface';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Button from 'ui/atom/Buttons/Buttons';
import CheckboxGroup from 'ui/atom/CheckboxGroup/CheckboxGroup';
import InputField from 'ui/atom/InputField/InputField';
import SelectOption from 'ui/atom/SelectOption/SelectOption';
import { toast } from 'ui/atom/Toast/ToastManager';
import './UpdateAdmin.css';



const UpdateAdmin: React.FC<UpdateAdminProps> = ({ id, user, closeDialog, handleUserUpdate }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<UserCreateInterface>();
    const fetchAdmin = () => {
        try {
            const fetchedData = user;
            reset({
                email: fetchedData?.email,
                role: fetchedData?.role,
                allowedFeature: fetchedData?.allowedFeature,
                details: {
                    firstName: {
                        en: fetchedData?.details.firstName.en,
                        ne: fetchedData?.details.firstName.ne,
                    },
                    lastName: {
                        en: fetchedData?.details.lastName.en,
                        ne: fetchedData?.details.lastName.ne
                    },
                    phoneNumber: fetchedData?.details.phoneNumber
                }
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    const deepMerge = (target: any, source: any): any => {
        for (const key in source) {
            if (source[key] && typeof source[key] === 'object') {
                if (!target[key]) {
                    target[key] = {};
                }
                deepMerge(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
        return target;
    };


    const updateAdmin = async (data: UserCreateInterface) => {
        // handle form submission
        try {
            await axios.patch('/admin', {
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

            toast.show({
                title: 'Operation Successful',
                content: "Updated",
                duration: 5000,  // Duration in milliseconds,
                type: 'success'
            });
            try {
                const UpdatedUserData = deepMerge(user, data);
                // setSpecificUser(UpdatedUserData);
                handleUserUpdate(UpdatedUserData);
                closeDialog();
            } catch (error) {
                console.log(error)
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
                                placeholder="राम"
                                label="आफ्नो पहिलो नाम प्रविष्ट गर्नुहोस्"
                                name="details.firstName.ne"
                                register={register}
                            />
                            {errors?.details?.firstName?.ne?.message &&
                                <span className='red-text'>
                                    {errors?.details?.firstName?.ne?.message}
                                </span>}
                        </div>

                        <div>
                            <InputField
                                icon={<FaUser />}
                                placeholder="Bahadur"
                                label="Enter your middle name"
                                name="details.middleName.en"
                                register={register}
                            />
                            {errors?.details?.middleName?.en?.message &&
                                <span className='red-text'>
                                    {errors?.details?.middleName?.en?.message}
                                </span>}
                        </div>
                        <div>
                            <InputField
                                icon={<FaUser />}
                                placeholder="बहादुर"
                                label="आफ्नो बीचको नाम प्रविष्ट गर्नुहोस्"
                                name="details.middleName.ne"
                                register={register}
                            />
                            {errors?.details?.middleName?.en?.message &&
                                <span className='red-text'>
                                    {errors?.details?.middleName?.en?.message}
                                </span>}
                        </div>
                    </div>

                    <div className='name-field'>
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
                        <div>
                            <InputField
                                icon={<FaUser />}
                                placeholder="शर्मा"
                                label="आफ्नो थर प्रविष्ट गर्नुहोस्"
                                name="details.lastName.ne"
                                register={register}
                            />
                            {errors?.details?.lastName?.ne?.message &&
                                <span className='red-text'>
                                    {errors?.details?.lastName?.ne?.message}
                                </span>}
                        </div>
                        {/* </div> */}

                        {/* <div className='email-phone'> */}
                        <div>
                            <InputField
                                icon={<FaPhone style={{ rotate: '90deg' }} />}
                                placeholder="98XXXXXXXX"
                                label="Enter your phone number"
                                name="details.phoneNumber"
                                register={register}
                                type='tel'
                                options={{ required: "Phone number is required" }}
                            />
                            {errors?.details?.phoneNumber?.message &&

                                <span className='red-text'>
                                    {errors?.details?.phoneNumber?.message}
                                </span>}

                        </div>

                        <div className='update-admin-email-field'>
                            <InputField
                                icon={<MdEmail />}
                                placeholder="ram.sharma@gmail.com"
                                label="Enter your email address"
                                name="email"
                                register={register}
                                options={{ required: "Email address is required" }}
                                readOnly={true}
                            />

                            {errors?.email?.message &&
                                <span className='red-text'>
                                    {errors?.email?.message}
                                </span>}
                        </div>
                    </div>

                    <div className='password'>

                        {/* </div>
                    <div className='selectors'> */}
                        <div>
                            <SelectOption
                                label='Select Role '
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
                            <CheckboxGroup
                                label='Allowed Feature'
                                name='allowedFeature'
                                options={[
                                    { label: 'Setup', value: 'SETUP' },
                                    { label: 'Manage Admin', value: 'MANAGE_ADMIN' }
                                ]}
                                register={register}
                                validationOptions={{ required: 'At least one feature must be selected' }}
                            />

                            {errors.allowedFeature && (
                                <span className='red-text'>
                                    {errors.allowedFeature.message}
                                </span>
                            )}
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
