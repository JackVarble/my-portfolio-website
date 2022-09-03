import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div id="wrapper">
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
