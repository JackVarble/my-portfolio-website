import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div id="wrapper">
      <Header />
      <Nav />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
