import { useState } from 'react';
import './ChangePassword.css';

import axios from '@services/instance';
import { notification } from 'antd';
import { AxiosError, AxiosResponse } from 'axios';
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface updatePasswordInterface {
  "oldPassword": string,
  "newPassword": string
}

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [api, contextHolder] = notification.useNotification();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const openNotificationWithIcon = (type: NotificationType, propsMessage: string, propsDescription: string) => {
    api[type]({
      message: propsMessage,
      description: propsDescription,
    });
  };


  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  }

  const changePassword = (data: updatePasswordInterface) => {
    axios({
      method: 'patch',
      url: '/auth/update-password',
      data: {
        oldPassword: data?.oldPassword,
        newPassword: data?.newPassword
      }
    }).then((response: AxiosResponse) => {
      console.log(response);
      localStorage.removeItem("accessToken")
      navigate('/signin')
    }).catch((error: AxiosError) => {
      console.log(error);
      openNotificationWithIcon('error', "Operation Failed", error.response?.data.message);
    })
  }

  return (

    <div className='change-password'>
      {contextHolder}

      <div className='change-password-welcome'>
        <h3 className='welcome'>Change Password</h3>
      </div>

      <div>
        <form onSubmit={handleSubmit(changePassword)}>

          <div className="input-box">
            <input type={showPassword ? 'text' : 'password'}
              placeholder='Old Password' {...register("oldPassword", {
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
          {errors.oldPassword && typeof errors.oldPassword.message === 'string' && (
            <div className='red-text'>{errors.oldPassword.message}</div>
          )}


          <div className="input-box">
            <input type={showPassword ? 'text' : 'password'}
              placeholder='New Password' {...register("newPassword", {
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
          {errors.newPassword && typeof errors.newPassword.message === 'string' && (
            <div className='red-text'>{errors.newPassword.message}</div>
          )}


          <div className="button">
            <button className='' type='submit'>Change Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword