import React from "react";

function About2() {
  return (
    <>
      <div className="h-screen lg:pt-2 bg20 flex justify-center w-full items-center bg-fixed">
        <div className="lg:pt-1 flex lg:flex-row flex-col space-y-2 justify-center items-center w-full h-full">
          <div className="w-full glass lg:w-1/3 p-1 flex items-center justify-center h-1/2 lg:h-full">
            <div className="w-4/5 overflow-hidden h-4/5 flex lg:mt-0 mt-2 items-center justify-center">
              <div className="w-4/5 dp rounded-lg scale-125 hover:scale-100 transition ease-in-out h-4/5">
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 p-1 flex lg:items-center items-top justify-center h-1/2 lg:h-full">
            <div className="w-4/5 glass lg:space-y-4 space-y-3 lg:mt-2 flex flex-col justify-center p-4 lg:p-6 h-full lg:overflow-hidden">
              <h2 className="lg:text-2xl text-md text-emerald-600 font-bold">SHREY KUMAR</h2>
              <h1 className="lg:text-7xl text-2xl text-gray-300 font-thin tracking-wide">I'm a Web</h1>
              <h1 className="lg:text-7xl text-2xl text-emerald-600 tracking-wide font-thin">Developer</h1>
              <p className="text-gray-300 font-thin text-xs lg:text-lg">Hey there! I'm a MCA first year student at IGNOU, Delhi. Deeply interested in Web Development. I'm skilled in React.js and Frontend Development.<br />My projects involve creating both functional and good-looking web applications.<br />I am eager to contribute my expertise to impactful projects and collaborate with fellow professionals. Let's connect and explore opportunities in the world of technology.</p>
              <a href="/shreyresume.pdf" download="Shrey resume"><button className="mt-4 p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">Download CV</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About2;