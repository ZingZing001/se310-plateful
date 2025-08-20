import { Link } from "react-router-dom";
import "../styles/navbar.css";
import navLogo from "../assets/navlogo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <img src={navLogo} alt="Logo" />
        </Link>
      </div>

      <div className="nav-center">
        <Link to="/location">Location</Link>
      </div>

      <div className="nav-right">
        <Link to="/about">About</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default NavBar;
