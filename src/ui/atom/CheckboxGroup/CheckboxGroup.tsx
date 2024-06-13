import React from 'react';
import './CheckboxGroup.css';
import { UseFormRegister } from 'react-hook-form';

interface CheckboxProps {
    label: string;
    name: string;
    options: { label: string; value: string }[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validationOptions?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, options, register, validationOptions={} }) => {
    return (
        <div className='checkbox'>
            <label><h4>{label}<span className='red-text'>{validationOptions?.required ? " *" : ""}</span></h4></label>
            <div className='checkbox-type'>
                {options.map((option) => (
                    <div key={option.value} >
                        <label className='checkbox-container'>
                            <input
                                type="checkbox"
                                value={option.value}
                                {...register(name, validationOptions)}
                            />

                            {option.label}
                        </label>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Checkbox;
