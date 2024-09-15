// src/AboutUs.jsx
import './Aboutus.css';
import juitImage from '../../assets/Logo_jc.jpeg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Aboutus() {
  return (
    <div className="about-container">
      <Header />
      <div className="about-content">
        <img
          src={juitImage} // Replace with actual image URL
          alt="About Us"
          className="about-image"
        />
        <div className="about-text">
          <h1>About Us</h1>
          <p >
          At JUITConnect, our mission is to create a platform that fosters communication, collaboration, and connection among the students, alumni, and faculty of Jaypee University of Information Technology. We aim to build a vibrant community where knowledge, opportunities, and resources can be easily shared.
          </p>
          <p>
          JUITConnect was founded by a group of passionate JUIT alumni who recognized the need for a dedicated platform to keep the university community connected. Since our inception, we have grown into a comprehensive network that helps bridge the gap between past and present students, providing them with tools to stay informed, engaged, and supportive of one another.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutus
