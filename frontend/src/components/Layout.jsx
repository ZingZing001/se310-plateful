import NavBar from "./Navbar";
import Footer from "./Footer";

// Global layout component that wraps around the main content with shared components like Navbar
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
