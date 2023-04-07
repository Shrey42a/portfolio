import React from "react";
import { Link } from "react-scroll";

function Header() {
  (function () {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(x);
      elem.style.backgroundPosition = x;
    }

  })();
  return (
    <>
      <div className="flex bg1 h-screen w-full justify-center lg:items-center">
        <div id="parallax" className="min-w-fit justify-center items-center flex flex-col">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h1 className="font-mono text-white text-2xl lg:relative lg:right-96">Hello there, this is</h1>
            <div data-splitting="lines" className=" reflected">
              <h1 className="text-4xl fnt2 lg:text-9xl">Shrey kumar</h1>
              <h1 className="text-4xl fnt2 lg:text-9xl">Shrey kumar</h1>
            </div>
            <h1 className="font-mono text-white text-center p2">Front-End Web Developer</h1>
          </div>
          <div className="">
            <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}> <button className="custom-btn btn-13 hover:outline hover:outline-2  hover:outline-offset-4 hover:outline-rose-500">Explore</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;