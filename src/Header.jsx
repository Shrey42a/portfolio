import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <>
      <div className="flex bg1 max-h-max min-h-screen w-full justify-center lg:items-center">
        <div className="min-w-fit lg:justify-center justify-between lg:py-0 py-10 items-center flex flex-col">
          <div className="flex flex-col items-center lg:space-y-0 space-y-20 justify-center">
            <h1 className="font-mono text-neutral-500 text-2xl lg:relative lg:right-96">Hello there, this is</h1>
            <div data-splitting="lines" className="lg:block hidden reflected">
              <h1 className="text-4xl fnt2 lg:text-9xl">Shrey kumar</h1>
              <h1 className="text-4xl fnt2 lg:text-9xl">Shrey kumar</h1>
            </div>
            <h1 className="lg:hidden text-center text-7xl fnt2">Shrey kumar</h1>
            <h1 className="font-mono text-white text-center p2">Front-End Web Developer</h1>
          </div>
          <div className="">
            <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}> <button className="custom-btn btn-13 hover:outline hover:outline-2  hover:outline-offset-4 hover:outline-rose-500">Get in touch</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;