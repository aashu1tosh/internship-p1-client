import { image } from '@config/constant/image';
import { AxiosResponse } from 'axios';
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

import EncryptDecrypt from '@functions/EncryptDecrypt';
import { notification } from 'antd';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from '../../services/instance';
import './Signin.css';

interface formData {
    email: string,
    password: string
}

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Signin = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [api, contextHolder] = notification.useNotification();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    }

    const openNotificationWithIcon = (type: NotificationType, propsMessage: string, propsDescription: string) => {
        api[type]({
            message: propsMessage,
            description: propsDescription,
        });
    };

    const onSubmit: SubmitHandler<formData> = (data) => {
        axios({
            method: 'post',
            url: '/auth',
            data: {
                username: data?.email,
                password: data?.password
            }
        }).then((response: AxiosResponse) => {
            console.log(response.data.data);
            if (response.status === 200) {
                const token = EncryptDecrypt.encrypt(response.data.data.tokens.accessToken)
                localStorage.setItem("accessToken", token as string);
                openNotificationWithIcon('success', "Login Successful", response.data.message);
                navigate('/admin')
            }
        })
            .catch((error: AxiosResponse) => {
                openNotificationWithIcon('error', "Login Failed", error.response?.data.message);
                console.log(error);
            })
    }
    return (
        <>
            {contextHolder}
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

    )
}

export default Signin