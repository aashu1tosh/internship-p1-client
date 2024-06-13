import { image } from '@config/constant/image';
import EncryptDecrypt from '@functions/EncryptDecrypt';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'ui/atom/Toast/ToastManager';
import axios from '../../services/instance';

import './Signin.css';

interface FormData {
    email: string;
    password: string;
}


const Signin = () => {
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<FormData>();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);


    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    }

    const onSubmit: SubmitHandler<FormData> = (data) => {
        axios.post('/auth', {
            username: data.email,
            password: data.password
        })
            .then((response: AxiosResponse) => {
                const token = EncryptDecrypt.encrypt(response.data.data.tokens.accessToken);
                if (rememberMe)
                    localStorage.setItem("accessToken", token as string);
                else
                    sessionStorage.setItem("accessToken", token as string);

                localStorage.setItem("role", response?.data?.data?.admin?.role.replace('_', " ").toLowerCase());
                localStorage.setItem("username", response?.data?.data?.admin?.username)

                toast.show({
                    title: 'Success',
                    content: response?.data?.message,
                    duration: 5000,  // Duration in milliseconds,
                    type: 'success'
                });
                navigate('/admin', { replace: true });
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

    const signinWithGoogle = async (credentialResponse: CredentialResponse) => {
        try {
            const response = await axios.post('/auth/google', {
                googleId: credentialResponse?.credential
            })

            console.log(response);
            const token = EncryptDecrypt.encrypt(response?.data?.data?.tokens?.accessToken);
            localStorage.setItem("accessToken", token as string);
            localStorage.setItem("role", response?.data?.data?.admin?.role.replace('_', " ").toLowerCase());
            localStorage.setItem("username", response?.data?.data?.admin?.username);
            toast.show({
                title: 'Success',
                content: response?.data?.message,
                duration: 5000,  // Duration in milliseconds,
                type: 'success'
            });
            navigate('/admin', { replace: true });
        } catch (error) {
            console.log(error, 'error in auth google')
        }
    }


    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.target.checked);
    };

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

                        <div className='remember'>
                            <label htmlFor="remember-me"> Remember Me: </label>
                            <input
                                type="checkbox"
                                id="remember-me"
                                name="rememberMe"
                                checked={rememberMe}
                                onChange={handleCheckboxChange}
                            />
                        </div>

                        <div className="button">
                            <button className='signin-button' type='submit' disabled={isSubmitting}>Sign In</button>

                        </div>

                    </form>
                </div>

                <div className='signin-end'>
                    <div className='google-login'>
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log(credentialResponse);
                                signinWithGoogle(credentialResponse)
                            }}
                        />
                    </div>


                    <p>Don't have an account <span className='blue-text'>Sign up</span></p>
                    <p style={{ textAlign: 'center' }}>Forget Password?</p>
                </div>
            </div>
        </>
    );
}

export default Signin;
