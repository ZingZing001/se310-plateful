import "../styles/navbar.css";
import navLogo from "../assets/navlogo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="nav-logo">
          <img src={navLogo} alt="Logo" />
        </a>
      </div>
      
      <div className="nav-center">
        <a href="/location">Location</a>
      </div>
      
      <div className="nav-right">
        <a href="/about">About</a>
        <a href="/search">Search</a>
      </div>
    </nav>
  );
};

export default NavBar;