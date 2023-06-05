import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <button className="navbar-btn">
        <i className="fa-solid fa-house"></i>
        </button>
        <button className="navbar-btn">
          <i className="fa-solid fa-address-card"></i>
        </button>
        <button className="navbar-btn">
        <i className="fa-solid fa-gear"></i>
        </button>
        <button className="navbar-btn">
          <i className="fa-solid fa-diagram-project"></i>
        </button>
        <button className="navbar-btn">
          <i className="fa-solid fa-envelope"></i>
        </button>
      </div>
    </div>
  );
}
