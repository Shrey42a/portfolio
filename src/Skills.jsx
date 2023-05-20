import React from "react";
import { Link } from "react-scroll";

function Skills() {
  return (
    <div className="min-h-screen max-h-max overflow-y-scroll lg:overflow-y-hidden w-full bg20 lg:px-8 lg:py-4 p-2">
      <div className="flex lg:space-x-1 lg:flex-row flex-col h-full py-2 px-2 lg:pt-6 w-full justify-center">
        <div className="lg:h-full glass lg:w-2/3 h-2/3 w-full lg:pt-2 flex justify-evenly flex-wrap overflow-hidden">
          <h1 className="text-zinc-700 font-bold text-lg mt-2">Skills matters</h1>
          <div className="flex flex-wrap justify-evenly">
            <div className="flex flex-col items-center">
              <h1 className="text-md text-gray-400 font-bold">HTML</h1>
              <img className="h-20 w-20 lg:h-36 lg:w-36 hover:scale-110" src="https://cdn.discordapp.com/attachments/1011518365459824660/1041980946297143326/HTML1.png" />
              <a className="hidden lg:block" href="https://www.w3schools.com/html/" target="blank"><button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">Explore</button></a>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-md text-gray-400 font-bold">CSS</h1>
              <img className="h-20 w-20 lg:h-36 lg:w-36 hover:scale-110" src="https://cdn.discordapp.com/attachments/1011518365459824660/1041980946620108830/CSS1.png" />
              <a className="hidden lg:block" href="https://www.w3schools.com/w3css/defaulT.asp" target="blank"><button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">Explore</button></a>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-md text-gray-400 font-bold">JavaScript</h1>
              <img className="h-20 w-20 lg:h-36 lg:w-36 hover:scale-110" src="https://cdn.discordapp.com/attachments/1011518365459824660/1041980945361813595/JS.png" />
              <a className="hidden lg:block" href="https://www.w3schools.com/js/" target="blank"><button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">Explore</button></a>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-md text-gray-400 font-bold">React</h1>
              <img className="h-20 w-20 lg:h-36 lg:w-36 hover:scale-110" src="https://cdn.discordapp.com/attachments/1011518365459824660/1041980945995149382/React.png" />
              <a className="hidden lg:block" href="https://reactjs.org/" target="blank"><button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">Explore</button></a>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-md text-gray-400 font-bold">TypeScript</h1>
              <img className="h-20 w-20 lg:h-36 lg:w-36 hover:scale-110" src="https://cdn.discordapp.com/attachments/1011518365459824660/1041998955388608532/TS-removebg-preview.png" />
              <a className="hidden lg:block" href="https://www.typescriptlang.org/" target="blank"><button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">Explore</button></a>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-md text-gray-400 font-bold">Redux</h1>
              <img className="h-20 w-20 lg:h-36 lg:w-36 hover:scale-110" src="https://cdn.discordapp.com/attachments/937199046211305514/1052577341701898311/st_small_507x507-pad_600x600_f8f8f8.u4-removebg-preview.png" />
              <a className="hidden lg:block" href="https://redux.js.org/" target="blank"><button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">Explore</button></a>
            </div>
          </div>
        </div>
        <div className="lg:h-full glass lg:w-1/3 mt-2 h-1/3 w-full">
          <div className="lg:h-1/2 h-1/3 flex flex-col lg:justify-center lg:items-center w-full p-1">
            <h1 className="text-sm lg:text-xl lg:text-start lg:leading-loose text-zinc-400 lg:tracking-widest text-center">After graduating,I'hve been actively involved in the front-end web developing.Here are my some skills including technical skills.</h1>
          </div>
          <div className="lg:h-1/2 h-2/3 w-full space-y-3">
            <h1 className="text-sm lg:text-2xl text-zinc-400 text-center">Look what can i do</h1>
            <ul className="space-x-2 items-center justify-evenly flex">
              <div className="text-left lg:leading-loose text-zinc-400 lg:tracking-wide">
                <li>Front-end</li>
                <li>Web design</li>
                <li>Branding & Logo</li>
              </div>
              <div className="text-right lg:leading-loose text-zinc-400 lg:tracking-wide">
                <li>Html/Css/JS/React/Redux</li>
                <li>E-commerce</li>
                <li>SEO</li>
              </div>
            </ul>
            <h1 className="text-sm lg:text-2xl text-zinc-400 text-center">Want to see some work...</h1>
            <div className="lg:flex hidden items-center justify-center"><Link title="Projects" to="project" activeClass='active' smooth={true} spy={true} duration={500}><button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent text-center">Projects</button></Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;