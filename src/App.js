import React from "react";
import Header from "./components/header/header";
import Navigation from "./components/nav/Navigation";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div id="wrapper">
      <Header />
      <Navigation />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
