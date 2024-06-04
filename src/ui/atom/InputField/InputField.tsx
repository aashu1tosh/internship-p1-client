import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import './InputField.css';

interface InputFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  name: string;
  label?: string;
  type?: string;
  register: UseFormRegister<any>;
  options: any;
  readOnly?: boolean;

}

const InputField: React.FC<InputFieldProps> = ({ icon, placeholder, name, label, type = "text", register, options = {}, readOnly = false }) => {
  return (
    <div className="input-field">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          className="input"
          readOnly={readOnly}
          placeholder={placeholder}
          {...register(name, options)}
        />
      </div>
    </div>
  );
};

export default InputField;
