import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Card2 from "./Card2";

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
              <div className=" p-2 lg:block hidden h-3/4">
                <div className=" rounded-lg grayscale hover:grayscale-0 hover:ease-in-out flex flex-col items-start space-y-2 p-2 justify-end bgc h-full w-full outline outline-offset-2 outline-2 outline-orange-600">
                  <div className="flex border-2 border-zinc-500 flex-col items-start space-y-2 justify-end p-2 glass">
                    <h1 className="fnt2 text-xl font-bold text-zinc-800">E-Commerce</h1>
                    <p className="text-gray-900 font-semibold">This app was made in HTML,CSS and Javascript. It is very simple app to start with.</p>
                    <div className="flex space-x-2">
                      <button className="p-2 px-4 rounded-sm border border-emerald-600 text-emerald-400 bg-transparent">Preview</button>
                      <button className="p-2 px-4 rounded-sm border border-emerald-600 text-emerald-400 bg-transparent">Code</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden h-4/5 w-full flex flex-col space-y-2 p-2 overflow-y-scroll">
              <div className="bgc shrink-0 rounded-lg h-60 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 title="Ecommerce" para="Build in VScode" /></div>
              <div className="bgc2 shrink-0 rounded-lg h-60 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 title="Todo App" para="Build in VScode" /></div>
              <div className="bgc4 shrink-0 rounded-lg h-60 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 title="Todo TS" para="Build in VScode" /></div>
              <div className="bgc3 shrink-0 rounded-lg h-60 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 title="Table" para="Build in VScode" /></div>
              <div className="bgc7 shrink-0 rounded-lg h-60 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 title="Tic Tac Toe" para="Build in VScode" /></div>
              <div className="bgc5 shrink-0 rounded-lg h-60 w-full outline outline-offset-2 outline-1 outline-orange-600"><Card2 title="Calc" para="Build in VScode" /></div>
              <button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">View More</button>
            </div>

            <div className="hidden lg:pt-8 rounded-lg lg:flex lg:items-end h-full w-4/5">
              <div className="flex flex-wrap justify-evenly ph2 w-full">

                <div className="ph trs rounded-xl grayscale hover:grayscale-0 bgc2"><Card title="Todo App" para="This app was made in HTML,CSS and Javascript. It is very simple app to start with." /></div>

                <div className="ph trs rounded-xl grayscale hover:grayscale-0 bgc3"><Card title="Table" para="This app was made in HTML,CSS and Javascript. It is very simple app to start with." /></div>

                <div className="ph trs rounded-xl  bgc4 grayscale hover:grayscale-0"><Card title="Todo TS" para="This app was made in HTML,CSS and Javascript. It is very simple app to start with." /></div>

                <div className="ph trs bgc5 rounded-xl grayscale hover:grayscale-0"><Card title="Calc" para="This app was made in HTML,CSS and Javascript. It is very simple app to start with." /></div>

                <div className="ph trs  wide bgc6 rounded-xl grayscale hover:grayscale-0"><Card title="Mood Tracker" para="This app was made in HTML,CSS and Javascript. It is very simple app to start with." /></div>

                <div className="flex ph items-center justify-center">
                  <button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;