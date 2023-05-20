import React from "react";
import Icons from "./Icons";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar p-2 lg:overflow-hidden">
          <div className="navbar-container container">
            <input type="checkbox" name="" id="" />

            <div className="hamburger-lines">
              <div>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
            </div>
            <ul className="menu-items lg:space-y-0 space-y-10">
              <div className="-z-10">
                <img src="/shrey2.png" className="lg:hidden h-60 absolute -top-6 left-10 right-0 w-4/5"></img>
              </div>
              <li className="z-10">
                <Link to="home" activeClass='disable' smooth={true} spy={true} duration={500}> Home</Link>

              </li>
              <li>
                <Link to="about" activeClass='active' smooth={true} spy={true} duration={500} >About</Link>
              </li>
              <li>
                <Link to="skills" activeClass='active' smooth={true} spy={true} duration={500}>Skills</Link>
              </li>
              <li>
                <Link to="project" activeClass='active' smooth={true} spy={true} duration={500}>Project</Link>
              </li>
              <li>
                <Link to="contact" activeClass='active' smooth={true} spy={true} duration={500}>Contact</Link>
              </li>
              <div className="lg:hidden md:hidden flex flex-col h-max -ml-2.5">
                <h1 className="text-center text-white font-semibold">Hello there</h1>
                <h2 className="text-white text-center">Thanx for visit this portfolio...!</h2>
              </div>
              <div className="p-1 rounded-lg flex justify-evenly h-max lg:hidden md:hidden -ml-2.5">
                <Icons />
              </div>
              <div className="lg:hidden md:hidden flex flex-col h-max -ml-2.5">
                <h1 className="text-center text-gray-400">Copyright &#169; 2022</h1>
                <h2 className="font-thin text-center text-gray-400">@shreykumar42</h2>
              </div>
            </ul>
            <div className="h-60 w-52">
              <a href="/"><img className="hover:scale-105 hover:transition hover:ease-in-out mt-2 h-full w-full cursor-pointer" src="/shrey2.png" /></a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;