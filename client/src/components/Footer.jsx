import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for styling
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaTelegramPlane, FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaTwitter className="footer-icon" />
        <FaInstagram className="footer-icon" />
        <FaGithub className="footer-icon" />
        <FaLinkedin className="footer-icon" />
        <FaTelegramPlane className="footer-icon" />
        <FaFacebookF className="footer-icon" />
      </div>
      <div className="footer-links">
        <Link to="/about" className="footer-link">About us</Link>
        <Link to="/contact" className="footer-link">Contact us</Link>
        <Link to="/dashboard/post" className="footer-link">Ask us</Link>
      </div>
      <div className="footer-copy">
        &copy; JUITConnect 2024
      </div>
    </div>
  );
}

export default Footer;
