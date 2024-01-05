import React from "react";
import Navbar from "./portfolio/Navbar";
import Home from "./portfolio/Home";
import SocialLinks from "./portfolio/SocialLinks";
import About from "./portfolio/About";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./portfolio/Contact";
import Footer from "./portfolio/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <SocialLinks />
    </>
  );
}

export default App;
