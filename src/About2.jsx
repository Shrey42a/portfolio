import React from "react";

function About2() {
  return (
    <>
      <div className="h-screen bg20 flex justify-center w-full items-center bg-fixed">
        <div className="lg:pt-1 flex lg:flex-row flex-col lg:space-y-0 space-y-2 justify-center items-center w-full h-full">
          <div className="w-full glass lg:w-1/3 p-1 flex items-center justify-center h-2/5 lg:h-full">
            <div className="w-full overflow-hidden h-full flex items-center justify-center">
              <div className="w-full dp rounded-lg scale-110 hover:scale-125 transition ease-in-out h-full">
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 p-1 flex lg:items-center items-top justify-center h-3/5 lg:h-full">
            <div className="w-4/5 glass lg:space-y-4 space-y-3 lg:mt-2 flex flex-col lg:justify-center md:justify-center justify-start lg:items-start items-center md:items-start lg:p-6 h-full lg:overflow-hidden">
              <h1 className="lg:text-2xl text-white/80 text-sm font-bold">Hi, I am</h1>
              <h1 className="lg:text-7xl text-4xl font-extrabold tracking-wide">Shrey Kumar</h1>
              <h1 className="lg:text-4xl text-white/80 text-md tracking-wide font-thin">I do web-development</h1>
              <p className="text-center lg:text-start md:text-start text-xs lg:text-lg">Hey there! I'm a MCA first year student at IGNOU, Delhi. Deeply interested in Web Development. I'm skilled in React.js and Frontend Development.<br />My projects involve creating both functional and good-looking web applications.<br />I am eager to contribute my expertise to impactful projects and collaborate with fellow professionals. Let's connect and explore opportunities in the world of technology.</p>
              <a href="/shreykrresume.pdf" download="Shrey resume"><button className="mt-4 p-2 px-8 rounded-sm border border-amber-300 text-amber-300 bg-transparent">Check Resume</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About2;