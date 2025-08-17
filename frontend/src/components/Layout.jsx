import NavBar from "./Navbar";
// import "../styles/layout.css";

// Global layout component that wraps around the main content with shared components like Navbar
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
