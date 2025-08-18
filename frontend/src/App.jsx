import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./styles/global.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
