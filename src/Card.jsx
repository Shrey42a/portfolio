import React from "react";

function Card(props) {
  return (
    <>
      <div className="rounded-lg flex flex-col justify-end items-start  p-2 bg-transparent w-full lg:h-full lg:w-full">
        <div className="hover:border-1 hover:border-zinc-500 p-2 flex flex-col rounded-lg justify-end items-start space-y-2 glass">
          <h1 className="fnt2 text-xl p3 font-thin text-emerald-700">{props.title}</h1>
          <p className="text-gray-900 font-semibold text-start">{props.para}</p>
          <div className="flex space-x-2">
            <a href={props.href} target="blank"><button className="p-2 px-4 rounded-sm border border-emerald-600 text-emerald-400 bg-transparent">Preview</button></a>
            <a href={props.href2} target="blank"><button className="p-2 px-4 rounded-sm border border-emerald-600 text-emerald-400 bg-transparent">Code</button></a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;