import React from "react";
import { Link } from "react-scroll";

function Skills() {
  return (
  <div className="flex min-h-screen max-h-max glass bg-transparent w-full items-center justify-center px-2">
  <div className="flex h-full w-full flex-col lg:space-y-0 items-center justify-center rounded-md px-2 lg:px-20 lg:flex-row">
    <div className="lg:flex hidden h-1/3 w-full flex-col justify-start text-center items-center space-y-3 rounded-lg lg:h-4/5 lg:w-1/3 lg:space-y-4">
      <h1 className="text-2xl font-medium">
        What are my programming <br />
        skills included ?
      </h1>
      <p className="text-medium text-center font-normal">After graduating,I'hve been actively involved in the front-end web developing.Here are my some skills including technical skills.</p>
      <p className="text-center">Look what can i do<br />Front-end,Web design,Branding & Logo,Html/Css/JS/React/Redux,E-commerce,SEO etc.</p>
      <div className="lg:flex hidden items-center justify-center">
        <Link title="Projects" to="project" activeclass='active' smooth={true} spy={true} duration={500}>
          <button className="p-2 px-8 rounded-sm border border-amber-300 text-amber-300 bg-transparent text-center">Projects</button>
        </Link>
      </div>
    </div>
    <div className="flex h-full flex-col items-center gap-2 space-y-4 rounded-md lg:h-4/5 justify-start lg:w-2/3">
    <h1 className="text-center text-2xl">My skills</h1>
      <div className="flex shadow-sm shadow-amber-200 hover:shadow-md hover:shadow-amber-300 transition ease-in-out cursor-pointer p-1 h-max w-full lg:w-3/4 flex-col justify-center items-center rounded-md">
        <h1 className="font-bold">Front-End</h1>
        <div className="w-full h-max flex flex-wrap items-center gap-2 justify-center">
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/js.png" height="52" width="52" alt="JS Logo"/><h1 className="text-xs font-light">Javascript</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/css.png" height="52" width="52" alt="CSS Logo"/><h1 className="text-xs font-light">CSS</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/tailwind.png" height="52" width="52" alt="Tailwind Logo"/><h1 className="text-xs font-light">Tailwind</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/react.png" height="52" width="52" alt="React Logo"/><h1 className="text-xs font-light">React</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/typescript.png" height="52" width="52" alt="Ts Logo"/><h1 className="text-xs font-light">Typescript</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/react.png" height="52" width="52" alt="Electron Logo"/><h1 className="text-xs font-light">Electron</h1></div>
        </div>
      </div>
      <div className="flex shadow-sm shadow-amber-200 hover:shadow-md hover:shadow-amber-300 transition ease-in-out cursor-pointer p-1 h-max w-full lg:w-3/4 flex-col justify-center items-center rounded-md">
        <h1 className="font-bold">Back-End</h1>
        <div className="w-full h-max flex flex-wrap items-center gap-2 justify-center">
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/node.png" height="52" width="52" alt="Node Logo"/><h1 className="text-xs font-light">Node Js</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/express.png" height="52" width="52" alt="Express Logo"/><h1 className="text-xs font-light">Express Js</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1 overflow-hidden"><img src="/social/mongo.png" height="28" width="28" alt="MongoDb Logo"/><h1 className="text-xs font-light">Mongo Db</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/mysql.png" height="52" width="52" alt="My Sql Logo"/><h1 className="text-xs font-light">My Sql</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/api.png" height="52" width="52" alt="Api Logo"/><h1 className="text-xs font-light">API Design</h1></div>
        </div>
      </div>
      <div className="flex h-max w-full lg:w-3/4 flex-col justify-center items-center  rounded-lg p-1 shadow-sm shadow-amber-200 hover:shadow-md hover:shadow-amber-300 transition ease-in-out cursor-pointer">
        <h1 className="font-bold">Others</h1>
        <div className="w-full h-max flex flex-wrap items-center gap-2 justify-center">
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/git.png" height="52" width="52" alt="Git Logo"/><h1 className="text-xs font-light">Git</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/github.png" height="52" width="52" alt="Github Logo"/><h1 className="text-xs font-light">Github</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/ui.png" height="52" width="52" alt="UI Logo"/><h1 className="text-xs font-light">UI/UX</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/seo.png" height="52" width="52" alt="SEO Logo"/><h1 className="text-xs font-light">SEO</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/figma.png" height="52" width="52" alt="Figma Logo"/><h1 className="text-xs font-light">Figma</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/docker.png" height="52" width="52" alt="Docker Logo"/><h1 className="text-xs font-light">Docker</h1></div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
export default Skills;