import './Buttons.css'

interface ButtonProps {
    name: string,
    disabled?: boolean,
}
const Buttons: React.FC<ButtonProps> = ({ name, disabled}) => {
    return (
        <button className="btn" disabled={disabled}>
            {name}
        </button>
    )
}

export default Buttons