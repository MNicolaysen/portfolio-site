import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      <img className="profile-pic" src="./src/images/db099441-213f-46a9-81c0-97d76adb2c6f.JPG" alt="profile-pic" />
      <h1 className="heading">Morton Nicolaysen</h1>
      <h3 className="subheading">Web Developer</h3>
        <button className="btn">Download CV</button>
    </div>
  );
}
