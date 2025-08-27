import React from "react";
import { Link } from "react-scroll";

function Skills() {
  return (
  <div className="flex min-h-screen max-h-max bg20 w-full items-start justify-center px-2">
  <div className="flex h-full w-full flex-col lg:space-y-0 items-center justify-center rounded-md px-2 lg:px-20 lg:flex-row">
    <div className="lg:flex hidden h-1/3 w-full flex-col justify-start text-center items-center space-y-3 rounded-lg lg:h-4/5 lg:w-1/3 lg:space-y-4">
      <h1 className="text-2xl font-medium">
        What are my programming <br />
        skills included ?
      </h1>
      <p className="text-medium text-justify text-zinc-400 font-normal">After graduating,I'hve been actively involved in the front-end web developing.Here are my some skills including technical skills.</p>
      <p className="text-center text-zinc-400">Look what can i do<br />Front-end,Web design,Branding & Logo,Html/Css/JS/React/Redux,E-commerce,SEO etc.</p>
      <div className="lg:flex hidden items-center justify-center">
        <Link title="Projects" to="project" activeclass='active' smooth={true} spy={true} duration={500}>
          <div className="active:translate-y-0.5 px-10 py-3 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-400 flex justify-center items-center gap-2.5">
            <button className="text-justify justify-start text-neutral-400 text-xl font-bold tracking-wide">Projects</button>
          </div>
        </Link>
      </div>
    </div>
    <div className="flex h-full flex-col items-center gap-2 space-y-4 rounded-md lg:h-4/5 justify-start lg:w-2/3">
    <h1 className="text-center text-2xl">My skills</h1>
      <div className="flex shadow-sm shadow-amber-200 hover:shadow-md hover:shadow-amber-300 transition ease-in-out cursor-pointer p-1 h-max w-full lg:w-3/4 flex-col justify-center items-center rounded-md">
        <h1 className="font-bold">Front-End</h1>
        <div className="w-full h-max flex flex-wrap items-center gap-2 justify-center">
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/js.png" height="52" width="52" alt="JS Logo"/><h1 className="text-xs text-zinc-300 font-light">Javascript</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/css.png" height="52" width="52" alt="CSS Logo"/><h1 className="text-xs text-zinc-300 font-light">CSS</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/tailwind.png" height="52" width="52" alt="Tailwind Logo"/><h1 className="text-xs text-zinc-300 font-light">Tailwind</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/react.png" height="52" width="52" alt="React Logo"/><h1 className="text-xs text-zinc-300 font-light">React</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/typescript.png" height="52" width="52" alt="Ts Logo"/><h1 className="text-xs font-light text-zinc-300">Typescript</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/react.png" height="52" width="52" alt="Electron Logo"/><h1 className="text-xs font-light text-zinc-300">Electron</h1></div>
        </div>
      </div>
      <div className="flex shadow-sm shadow-amber-200 hover:shadow-md hover:shadow-amber-300 transition ease-in-out cursor-pointer p-1 h-max w-full lg:w-3/4 flex-col justify-center items-center rounded-md">
        <h1 className="font-bold">Back-End</h1>
        <div className="w-full h-max flex flex-wrap items-center gap-2 justify-center">
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/node.png" height="52" width="52" alt="Node Logo"/><h1 className="text-xs font-light text-zinc-300">Node Js</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/express.png" height="52" width="52" alt="Express Logo"/><h1 className="text-xs font-light text-zinc-300">Express Js</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1 overflow-hidden"><img src="/social/mongo.png" height="28" width="28" alt="MongoDb Logo"/><h1 className="text-xs font-light text-zinc-300">Mongo Db</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/mysql.png" height="52" width="52" alt="My Sql Logo"/><h1 className="text-xs font-light text-zinc-300">My Sql</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/api.png" height="52" width="52" alt="Api Logo"/><h1 className="text-xs font-light text-zinc-300">API Design</h1></div>
        </div>
      </div>
      <div className="flex h-max w-full lg:w-3/4 flex-col justify-center items-center  rounded-lg p-1 shadow-sm shadow-amber-200 hover:shadow-md hover:shadow-amber-300 transition ease-in-out cursor-pointer">
        <h1 className="font-bold">Others</h1>
        <div className="w-full h-max flex flex-wrap items-center gap-2 justify-center">
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/git.png" height="52" width="52" alt="Git Logo"/><h1 className="text-xs font-light text-zinc-300">Git</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/github.png" height="52" width="52" alt="Github Logo"/><h1 className="text-xs font-light text-zinc-300">Github</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/ui.png" height="52" width="52" alt="UI Logo"/><h1 className="text-xs font-light text-zinc-300">UI/UX</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/seo.png" height="52" width="52" alt="SEO Logo"/><h1 className="text-xs font-light text-zinc-300">SEO</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/figma.png" height="52" width="52" alt="Figma Logo"/><h1 className="text-xs font-light text-zinc-300">Figma</h1></div>
         <div className="flex flex-col items-center justify-center h-20 w-20 space-y-1"><img src="/social/docker.png" height="52" width="52" alt="Docker Logo"/><h1 className="text-xs font-light text-zinc-300">Docker</h1></div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
export default Skills;