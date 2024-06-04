import axios from '@services/instance'
import { UserCreateInterface } from '@type/global.types'
import { useForm } from 'react-hook-form'
import { FaLock, FaPhone, FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Button from 'ui/atom/Buttons/Buttons'
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
            console.log("create admin called");
            const response = await axios.post('/admin', {
                email: data.email,
                password: data.password,
                role: data.role,
                allowedFeature: [
                    data.allowedFeature
                ],
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
                console.log(response);
                toast.show({
                    title: 'Operation Successful',
                    content: "Admin created successfully",
                    duration: 5000,  // Duration in milliseconds,
                    type: 'success'
                });
                reset();
            }
            console.log(response)
        } catch (error) {
            console.log(error);
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
                            name="Create Admin"
                        />
                    </div>

                </form>
            </div>
        </div>
    )
}


export default CreateAdmin