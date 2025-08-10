import "../styles/navbar.css";
import navLogo from "../assets/navlogo.png";

const NavBar = () =>{
    return(
        <div className="navbar-wrapper">
            <div className="navLeft">
                <img src={navLogo}/>
            </div>
            <div className="navCenter">
                <a href="/location">Location</a>
            </div>
             <nav className="links">
                <a href="/about">About</a>
                <a href="/search">Search</a>
            </nav>
        </div>
    );
};

export default NavBar;