import { UseFormRegister } from 'react-hook-form';
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
    options: any;
}

const SelectOption: React.FC<SelectOptionProps> = ({ label, name, option, register, options = {} }) => {
    return (
        <div className='select-option'>
            <label htmlFor={name}>{label}</label>

            <select id={name} {...register(name, options)} >
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