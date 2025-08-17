import NavBar from "./Navbar";

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
