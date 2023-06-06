import './Navbar.css';
import { Link, useMatch, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul>
          <CustomLink to="/" className="navbar-btn"><i className="fa-solid fa-house"></i></CustomLink>
          <CustomLink to="/about" className="navbar-btn"><i className="fa-solid fa-address-card"></i></CustomLink>
          <CustomLink to="/skills" className="navbar-btn"><i className="fa-solid fa-gear"></i></CustomLink>
          <CustomLink to="/projects" className="navbar-btn"><i className="fa-solid fa-diagram-project"></i></CustomLink>
          <CustomLink to="/contact" className="navbar-btn"><i className="fa-solid fa-envelope"></i></CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const { pathname } = useLocation();
  const isActive = useMatch(to)?.pathname === pathname;

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
