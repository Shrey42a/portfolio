import React from "react";
import { Link } from "react-scroll";

function Skills() {
  return (
    <div className="flex h-screen bg-transparent text-gray-300 w-full items-center justify-center px-2 py-2 lg:pt-10">
  <div className="flex h-max w-full flex-col space-y-4 items-center justify-center rounded-md px-2 py-2 lg:flex-row">
    <div className="flex h-1/2 w-full flex-col justify-center items-center space-y-3 rounded-lg lg:h-4/5 lg:w-2/5 lg:space-y-4">
      <h1 className="text-2xl font-medium lg:text-4xl">
        What are my programming <br />
        skills included?
      </h1>
      <p className="text-medium text-center font-normal">After graduating,I'hve been actively involved in the front-end web developing.Here are my some skills including technical skills.</p>
      <p className="text-center">Look what can i do<br />Front-end,Web design,Branding & Logo,Html/Css/JS/React/Redux,E-commerce,SEO etc.</p>
      <div className="lg:flex hidden items-center justify-center">
        <Link title="Projects" to="project" activeclass='active' smooth={true} spy={true} duration={500}>
          <button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent text-center">Projects</button>
        </Link>
      </div>
    </div>
    <div className="flex h-max flex-col items-center gap-4 rounded-md lg:h-4/5 justify-center lg:w-2/5">
    <h1 className="text-center text-2xl">My skills</h1>
      <div className="flex h-max w-full lg:w-3/4 flex-wrap justify-center gap-3 rounded-md">
        <div className="h-24 w-24 rounded-lg bg-cover bg-center bg-[url(/logo/html.png)] shadow-lg grayscale transition ease-in-out hover:grayscale-0 lg:h-24 lg:w-24"></div>
        <div className="h-24 w-24 rounded-lg bg-cover bg-center bg-[url(/logo/css.png)] shadow-lg grayscale transition ease-in-out hover:grayscale-0 lg:h-24 lg:w-24"></div>
        <div className="h-24 w-24 rounded-lg bg-cover bg-center bg-[url(/logo/javascript.png)] shadow-lg grayscale transition ease-in-out hover:grayscale-0 lg:h-24 lg:w-24"></div>
        <div className="h-24 w-24 rounded-lg bg-cover bg-center bg-[url(/logo/ts.png)] shadow-lg grayscale transition ease-in-out hover:grayscale-0 lg:h-24 lg:w-24"></div>
        <div className="h-24 w-24 rounded-lg bg-cover bg-center bg-[url(/logo/react.png)] shadow-lg grayscale transition ease-in-out hover:grayscale-0 lg:h-24 lg:w-24"></div>
        <div className="h-24 w-24 rounded-lg bg-cover bg-center bg-[url(/logo/AI.png)] shadow-lg grayscale transition ease-in-out hover:grayscale-0 lg:h-24 lg:w-24"></div>
        <div className="h-24 w-24 rounded-lg bg-contain bg-no-repeat bg-center bg-[url(/logo/tailwind.png)] shadow-lg grayscale transition ease-in-out hover:grayscale-0 lg:h-24 lg:w-24"></div>
      </div>
    </div>
  </div>
</div>

  );
}
export default Skills;