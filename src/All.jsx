import React from "react";
import Navbar from "./Navbar";
import About2 from "./About2";
import Contact from "./Contact";
import Header from "./Header";
import Skills from "./Skills";
import Project from "./Project";
import Footer from "./Footer";
import { Element } from "react-scroll";

function All() {
  return (
    <>
      <div>
        <Navbar />
        <Element name="home"><Header /></Element>
        <Element name="about"><About2 /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="project"><Project /></Element>
        <Element name="contact"><Contact /></Element>
        <Footer />
      </div>
    </>
  );
}
export default All;