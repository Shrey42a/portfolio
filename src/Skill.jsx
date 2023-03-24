import React from "react";

function Skill() {
  return (
    <>
      <div className="h-full flex flex-col w-full">
        <div className="flex h-2/5 lg:h-1/2 w-full">
         <div className="hidden lg:flex flex-col items-center h-full w-1/2">
          <h1 className="fnt text-3xl font-thin text-slate-300">HTML</h1>
           <p className="fnt text-md text-center text-slate-300 tracking-wide">HTML is the standard markup language for Web pages.
With HTML you can create your own Website.
HTML is easy to learn - You will enjoy it!</p>
         </div>
          <div className="h-full lg:h-full w-full lg:w-1/2">
          <img className="h-full w-full" src="https://media.discordapp.net/attachments/1011518365459824660/1041980946297143326/HTML1.png?width=492&height=492"></img>
          </div>
        </div>
        <div className="h-3/5 lg:h-1/2 px-2 lg:px-1 flex flex-col items-center justify-center w-full">
          <ul className="fnt text-sm lg:text-md text-slate-300">
          <li>HTML stands for Hyper Text Markup Language</li>
            <li>HTML is the standard markup language for creating Web pages</li>
            <li>HTML describes the structure of a Web page</li>
            <li>HTML consists of a series of elements</li>
            <li>HTML elements tell the browser how to display the content</li>
          </ul>
          <button className="custom-btn btn-13"><a href="https://www.w3schools.com/html/default.asp">Learn More</a></button>
        </div>
      </div>
    </>
  );
}
export default Skill;