import { useState, useEffect } from 'react';
import ContactLinks from '../components/ContactLinks';
import "./Header.css";
import profilePic from "../components/images/profile-pic.jpg";

export default function Header() {
  const [isBigScreen, setIsBigScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth >= 1000);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header-container">
      <meta name="theme-color" content="beige"/>
      <div className="header">
        <div className="image-container">
          <img className="profile-pic" src={profilePic} alt="profile-pic" />
        </div>
        <div>
          <h1 className="heading">Morton Nicolaysen</h1>
          <h3 className="subheading">Web Developer</h3>
        </div>
        {isBigScreen && <ContactLinks />}
        {!isBigScreen &&
          <a href="./src/components/CV_compressed.pdf" download>
            <button className='cv-btn'>Download CV</button>
          </a>
        }
      </div>
    </div>
  );
}
