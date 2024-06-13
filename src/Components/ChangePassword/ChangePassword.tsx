import axios from '@services/instance';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'ui/atom/Toast/ToastManager';
import './ChangePassword.css';


interface updatePasswordInterface {
  oldPassword: string;
  newPassword: string
}

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm();
  const navigate = useNavigate();


  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  }

  const changePassword = async (data: updatePasswordInterface) => {
    try {
      const response = await axios({
        method: 'patch',
        url: '/auth/update-password',

        data: {
          oldPassword: data?.oldPassword,
          newPassword: data?.newPassword
        }
      })
      toast.show({
        title: 'Operation Successful',
        content: response?.data?.message,
        duration: 5000,  // Duration in milliseconds,
        type: 'success'
      });
      localStorage.removeItem("accessToken")
      navigate('/signin')
    } catch (error) {
      toast.show({
        title: 'Operation Failed',
        content: error?.response?.data?.message,
        duration: 5000,  // Duration in milliseconds,
        type: 'error'
      });
    }
  }

  return (
    <>
      <div className='change-password'>
        <div className='change-password-welcome'>
          <h3 className='welcome underline-site-color'>Change Password</h3>
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
              <button className='' type='submit' disabled={isSubmitting}>Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangePassword