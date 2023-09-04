import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import About from "./About/About";
// import Experience from "./Experience/Experience";
import Portfolio from "./Portfolio/Portfolio";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Experiences from "./Experiences/Experiences";

const Main = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <Experience /> */}
      <Experiences />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
