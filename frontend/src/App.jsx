import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
