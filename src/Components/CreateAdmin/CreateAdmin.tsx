import axios from '@services/instance'
import { UserCreateInterface } from 'interface/global.interface'
import { useForm } from 'react-hook-form'
import { FaLock, FaPhone, FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Button from 'ui/atom/Buttons/Buttons'
import CheckboxGroup from 'ui/atom/CheckboxGroup/CheckboxGroup'
import InputField from 'ui/atom/InputField/InputField'
import SelectOption from 'ui/atom/SelectOption/SelectOption'
import { toast } from 'ui/atom/Toast/ToastManager'
import './CreateAdmin.css'

const CreateAdmin = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<UserCreateInterface>({
        defaultValues: {
            email: "",
            password: "",
            role: "",
            allowedFeature: [],
            details: {
                firstName: {
                    en: "",
                    ne: "",
                },
                middleName: {
                    en: "",
                    ne: "",
                },
                lastName: {
                    en: '',
                    ne: ""
                },
                phoneNumber: ""
            }
        }
    });

    const password = watch('password', '');

    const createAdmin = async (data: UserCreateInterface) => {
        try {
            const response = await axios.post('/admin', {
                email: data.email,
                password: data.password,
                role: data.role,
                allowedFeature: data.allowedFeature,
                details: {
                    firstName: {
                        en: data.details.firstName.en,
                        ne: data.details.firstName.ne,
                    },
                    lastName: {
                        en: data.details.lastName.en,
                        ne: data.details.lastName.ne,
                    },
                    phoneNumber: data.details.phoneNumber

                }
            })
            if (response.data.status) {
                toast.show({
                    title: 'Operation Successful',
                    content: "Admin created successfully",
                    duration: 5000,  // Duration in milliseconds,
                    type: 'success'
                });
                reset();
            }
        } catch (error) {
            const errorMessage = error?.response?.data?.message || 'An unexpected error occurred';
            toast.show({
                title: 'Operation Failed',
                content: errorMessage,
                duration: 5000,  // Duration in milliseconds,
                type: 'error'
            });
        }
    }

    return (
        <div className='create-admin'>
            <h1 className='underline-site-color'>Create Account</h1>
            <div className="create-admin-content">

                <form onSubmit={handleSubmit(createAdmin)}>
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

                        <div>
                            <InputField
                                icon={<MdEmail />}
                                placeholder="ram.sharma@gmail.com"
                                label="Enter your email address"
                                name="email"
                                register={register}
                                options={{ required: "Email address is required" }}
                            />

                            {errors?.email?.message &&
                                <span className='red-text'>
                                    {errors?.email?.message}
                                </span>}
                        </div>
                    </div>

                    <div className='password'>
                        <div>
                            <InputField
                                icon={<FaLock />}
                                placeholder="************"
                                label="Enter your password"
                                type='password'
                                name="password"
                                register={register}
                                options={{
                                    required: "Password is required.",
                                    minLength: {
                                        value: 8,
                                        message: "Minimum Length of 8 required."
                                    }
                                }}
                            />
                            {errors?.password?.message &&
                                <span className='red-text'>
                                    {errors?.password?.message}
                                </span>}
                        </div>

                        <div>
                            <InputField
                                icon={<FaLock />}
                                type='password'
                                placeholder="************"
                                label="Confirm your password"
                                name="confirmPassword"
                                register={register}
                                options={{
                                    required: "Confirm your password.",
                                    minLength: {
                                        value: 8,
                                        message: "Minimum Length of 8 required."
                                    },
                                    validate: (value: string) =>
                                        value === password || "The passwords do not match"
                                }}

                            />
                            {errors?.confirmPassword?.message &&
                                <span className='red-text'>
                                    {errors?.confirmPassword?.message}
                                </span>}
                        </div>
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
                            {errors?.role?.message &&
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
                            name="Create Admin"
                        />
                    </div>

                </form>
            </div>
        </div>
    )
}


export default CreateAdmin