//Button.jsx
import { useNavigate } from 'react-router-dom';
import './ButtonStyle.css';

const Button = ({ text, destination }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(destination);
    };

    return (
        <button className="button1" onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;
