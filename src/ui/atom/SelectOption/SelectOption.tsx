import { FieldError, UseFormRegister } from 'react-hook-form';
import './SelectOption.css';

interface OptionInterface {
    label: string,
    value: string
}
interface SelectOptionProps {
    label?: string;
    name: string;
    option?: OptionInterface[];
    register: UseFormRegister<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options: any;
    error?: FieldError;
}

const SelectOption: React.FC<SelectOptionProps> = ({ label = "", name, option, register, options = {}, error }) => {
    return (
        <div className='select-option'>
            <label htmlFor={name}>{label}<span className='red-text'>{options?.required ? "*" : ""}</span></label>

            <select id={name} {...register(name, options)} className={error ? 'input-error' : ''} >
                {/* <option value="" disabled selected hidden>Please Choose...</option> */}
                {
                    option && option.map((data, index) => (
                        <option value={data?.value} key={index}>{data?.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectOption