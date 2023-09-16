import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <div className="overflow-y-scroll lg:overflow-hidden h-screen w-full lg:pt-2 p-3 lg:p-2 bg20 flex justify-center items-center bg-fixed">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex lg:flex-row flex-col h-full w-full">
            <div className="space-y-2 lg:pt-20 items-end p-2 h-1/5 w-full lg:h-full lg:w-1/4">
              <div className=" h-full lg:h-1/4 p-2 flex flex-col justify-center items-center">
                <h1 className="fnt text-xl lg:text-xl text-neutral-400">My Work</h1>
                <h2 className="text-sm lg:text-lg text-center text-neutral-400">Here are some of my completed projects as a beginner...</h2>
                <h3 className="text-sm text-center text-neutral-300">These projects are build in VScode some in replit.</h3>
              </div>
              <div className="p-2 lg:block hidden h-3/4">
                <div className=" rounded-lg grayscale hover:grayscale-0 hover:ease-in-out flex flex-col items-start space-y-2 p-2 justify-end bgc h-full w-full outline outline-offset-2 outline-2 outline-orange-600">
                  <div className="flex flex-col items-start space-y-2 justify-end p-2 glass">
                    <h1 className="text-xl text-zinc-100">E-Commerce</h1>
                    <p className="text-gray-100 font-semibold">This app was made in Reactjs. It is very simple app to start with.</p>
                    <div className="flex space-x-2">
                      <a href="https://42shop.netlify.app/" target="blank"><button className="p-2 px-4 rounded-sm border border-emerald-600 text-emerald-400 bg-transparent">Preview</button></a>
                      <a href="https://github.com/Shrey42a/E-commerce" target="blank"><button className="p-2 px-4 rounded-sm border border-emerald-600 text-emerald-400 bg-transparent">Code</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden h-4/5 w-full flex flex-col items-center space-y-8 p-2 overflow-y-scroll">
              <div className="bgc shrink-0 rounded-lg h-72 lg:w-full md:w-3/5 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 href="https://42shop.netlify.app/" title="Ecommerce" para="Build in VScode" /></div>
              <div className="bgc2 shrink-0 rounded-lg h-72 lg:w-full md:w-3/5 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 href="https://42todo2.netlify.app/" title="Todo App" para="Build in VScode" /></div>
              <div className="bgc4 shrink-0 rounded-lg h-72 lg:w-full md:w-3/5 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 href="https://42todots.netlify.app/" title="Todo TS" para="Build in VScode" /></div>
              <div className="bgc3 shrink-0 rounded-lg h-72 lg:w-full md:w-3/5 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 href="https://42flix.netlify.app/" title="TV" para="Build in VScode" /></div>
              <div className="bgc6 shrink-0 rounded-lg h-72 lg:w-full md:w-3/5 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 href="https://42weather.netlify.app/" title="Weather" para="Build in VScode" /></div>
              <div className="bgc5 shrink-0 rounded-lg h-72 lg:w-full md:w-3/5 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 href="https://42amp.netlify.app/" title="player" para="Build in VScode" /></div>
              <Link to="/more" className="p-2 px-8 text-center rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">View More</Link>
            </div>

            <div className="hidden lg:pt-8 rounded-lg lg:flex lg:items-end h-full w-4/5">
              <div className="flex flex-wrap justify-evenly ph2 w-full">

                <div className="ph trs rounded-xl grayscale hover:grayscale-0 bgc2"><Card href="https://42todo2.netlify.app/" href2="https://github.com/Shrey42a/TodoApp" title="Todo App" para="This app was made in Reactjs. It is very simple app to start with." /></div>

                <div className="ph trs rounded-xl grayscale hover:grayscale-0 bgc3"><Card href="https://42flix.netlify.app/" href2="https://github.com/Shrey42a/TV" title="TV shows" para="This app was made in Reactjs. It is very simple app to start with." /></div>

                <div className="ph trs rounded-xl  bgc4 grayscale hover:grayscale-0"><Card href="https://42todots.netlify.app/" href2="https://github.com/Shrey42a/TodoAppTS" title="Todo TS" para="This app was made in Reactjs. It is very simple app to start with." /></div>

                <div className="ph trs bgc5 rounded-xl grayscale hover:grayscale-0"><Card href="https://42amp.netlify.app/" href2="https://github.com/Shrey42a/Music-player" title="Player" para="This app was made in Reactjs. It is very simple app to start with." /></div>

                <div className="ph trs  wide bgc6 rounded-xl grayscale hover:grayscale-0"><Card href="https://42weather.netlify.app/" href2="https://github.com/Shrey42a/42weather" title="Weather" para="This app was made in React Redux. It is very simple app to start with." /></div>

                <div className="ph trs  wide bgc7 rounded-xl grayscale hover:grayscale-0"><Card href="https://google.com" href2="google.com" title="Grocery store" para="This app was made in Reactjs." /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;