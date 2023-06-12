import "./Header.css";
import profilePic from "../components/images/profile-pic.jpg"

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="image-container">
          <img className="profile-pic" src={profilePic} alt="profile-pic" />
        </div>
        <h1 className="heading">Morton Nicolaysen</h1>
        <h3 className="subheading">Web Developer</h3>
      </div>
    </div>
  );
}
