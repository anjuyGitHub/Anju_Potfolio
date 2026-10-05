import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectPage";
import Footer from "./components/Footer";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Agar URL me hash nahi hai
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // "#skills" -> "skills"
    const id = location.hash.substring(1);

    // React ko section render karne ka time dena
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <div className="app">
      {/* URL hash ke according section par scroll karega */}
      <ScrollToHash />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
