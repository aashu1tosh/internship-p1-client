import './Buttons.css'

interface ButtonProps {
    name: string
}
const Buttons: React.FC<ButtonProps> = ({ name }) => {
    return (
        <button className="btn">
            {name}
        </button>
    )
}

export default Buttons