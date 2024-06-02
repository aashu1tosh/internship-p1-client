import { image } from '@config/constant/image';
import EncryptDecrypt from '@functions/EncryptDecrypt';
import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
// import Toast from 'ui/atom/Toast/Toast';
import { toast } from 'ui/atom/Toast/ToastManager';
import axios from '../../services/instance';
import './Signin.css';

interface FormData {
    email: string;
    password: string;
}


const Signin = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    }

    const onSubmit: SubmitHandler<FormData> = (data) => {
        axios.post('/auth', {
            username: data.email,
            password: data.password
        })
            .then((response: AxiosResponse) => {
                console.log(response.data.data);
                const token = EncryptDecrypt.encrypt(response.data.data.tokens.accessToken);
                localStorage.setItem("decryptedToken", response.data.data.tokens.accessToken);
                localStorage.setItem("accessToken", token as string);
                toast.show({
                    title: 'Success',
                    content: 'You have successfully Logged in!',
                    duration: 5000,  // Duration in milliseconds,
                    type: 'success'
                });
                navigate('/admin');
            })
            .catch((error: AxiosError) => {
                toast.show({
                    title: 'Failed',
                    content: error?.response.data.message,
                    duration: 5000,  // Duration in milliseconds,
                    type: 'error'
                });
                console.error('Error fetching data:', error);
            });
    }

    return (
        <>
            <div className='signin'>
                <div className='signin-welcome'>
                    <p className='welcome'>Welcome</p>
                    <Link to='/'><img src={image?.logo} alt="logo" /></Link>
                </div>

                <div className='signin-input'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-box">
                            <input type="text" placeholder='Email/Username'
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid Email Format"
                                    }
                                })} />
                        </div>

                        {errors.email && <div className='red-text'>{errors.email.message}</div>}

                        <div className="input-box">
                            <input type={showPassword ? 'text' : 'password'}
                                placeholder='Password' {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "8 Characters Minimum"
                                    }
                                })} />
                            <span onClick={togglePasswordVisibility} style={{ float: 'right' }}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>

                        {errors.password && <div className='red-text'>{errors.password.message}</div>}

                        <div className="button">
                            <button className='signin-button' type='submit'>Sign In</button>
                        </div>
                    </form>
                </div>

                <div>
                    <p>Forget Password?</p>
                    <p>Don't have an account <span className='blue-text'>Sign up</span></p>
                </div>
            </div>
        </>
    );
}

export default Signin;
