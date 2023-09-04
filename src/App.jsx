import React from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";
// import About from "./components/About/About";
// import Experience from "./components/Experience/Experience";
// import Services from "./components/Services/Services";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import { Route, RouterProvider } from "react-router-dom";
import FirstModal from "./components/ProjectsModal/Modal_1";
import Main from "./components/Main";
import SecondModal from "./components/ProjectsModal/Modal_2";
import ThirdModal from "./components/ProjectsModal/Modal_3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/FirstModal" element={<FirstModal />} />
        <Route path="/SecondModal" element={<SecondModal />} />
        <Route path="/ThirdModal" element={<ThirdModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
