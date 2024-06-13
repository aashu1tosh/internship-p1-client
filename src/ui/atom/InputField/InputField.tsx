import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import './InputField.css';

interface InputFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  name: string;
  label?: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
  readOnly?: boolean;
  error?: FieldError
}

const InputField: React.FC<InputFieldProps> = ({ icon, placeholder, name, label, type = "text", register, options = {}, readOnly = false, error }) => {

  return (
    <div className="input-field">
      {label && <label className="input-label">{label} <span className='red-text'>{options?.required ? "*" : ""}</span></label>}
      <div className={`input-wrapper ${error ? 'input-error' : ''}`}>
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

export default InputField


