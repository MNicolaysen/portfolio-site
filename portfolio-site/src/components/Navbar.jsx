import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <button className="navbar-btn">Home</button>
        <button className="navbar-btn">About</button>
        <button className="navbar-btn">Skills</button>
        <button className="navbar-btn">Projects</button>
        <button className="navbar-btn">Contact</button>
      </div>
    </div>
  );
}
