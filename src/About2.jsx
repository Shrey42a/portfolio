import React from "react";
import Vector from "./Vector";

function About2() {
  return (
    <>
      <div className="h-screen bg1 flex justify-center w-full items-center bg-fixed">
        <div className="lg:pt-1 p-4 flex lg:flex-row flex-col lg:space-y-0 space-y-2 justify-center items-center w-full h-full">
          <div className="w-full lg:w-1/3 flex items-center justify-center h-3/5 lg:h-full">
            <div className="w-full h-full lg:block md:block hidden relative overflow-hidden">
              <div className="w-full h-full left-[22px] top-[132px] absolute bg-white/5 rounded-tl-[261.50px] rounded-tr-[261.50px] rounded-bl-xl rounded-br-xl" />
             <img className="w-4/5 h-full left-[66px] top-0 absolute bg-blend-luminosity" src="/ak5.png" />
            </div>
            <div className="w-96 h-[484px] relative block lg:hidden md:hidden overflow-hidden">
            <div className="w-96 h-96 left-0 top-[101.01px] absolute bg-gradient-to-b from-white/10 via-black/10 to-black backdrop-blur-sm rounded-t-full" />
              <img className="w-80 h-[484px] left-[30px] top-0 absolute bg-blend-luminosity" src="/ak5.png" />
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex lg:items-center items-top justify-center h-2/5 lg:h-full">
            <div className="w-full lg:space-y-4 space-y-3 lg:mt-2 flex flex-col md:justify-center justify-start lg:justify-center lg:items-start items-center md:items-start lg:p-6 h-full lg:overflow-hidden">
              <p className="lg:text-start md:text-start lg:text-lg text-justify justify-start text-neutral-400 text-md">Hey there! I'm a MCA first year student at IGNOU, Delhi. Deeply interested in Web Development. I'm skilled in React.js and Frontend Development.My projects involve creating both functional and good-looking web applications.I am eager to contribute my expertise to impactful projects and collaborate with fellow professionals. Let's connect and explore opportunities in the world of technology.</p>
              <a href="/shreykrresume.pdf" download="Shrey resume">
              <div className="active:translate-y-0.5 px-7 py-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg inline-flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 relative overflow-hidden">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195" stroke="#ffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                  <div className="text-justify justify-start text-white text-xl font-bold tracking-wide">Download CV</div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About2;