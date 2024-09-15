import { Link } from 'react-router-dom';
import './Header.css';
import { FaUser } from 'react-icons/fa';
import ImgLogo from '../assets/Logo_jc.jpeg';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src={ImgLogo} alt="Logo" className="logo" />
            </div>
            <nav className="nav">
                <Link to="/dashboard" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About us</Link>
                <Link to="/contact" className="nav-link">Contact us</Link>
            </nav>
            <div className="header-right">
                <FaUser className="user-icon" />
            </div>
        </header>
    );
}

export default Header;
