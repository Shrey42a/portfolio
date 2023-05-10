import React from "react";

function Card2(props) {
  return (
    <>
      <div className="rounded-lg flex flex-col justify-end items-start  p-2 bg-transparent h-full w-full">
        <div className="border border-zinc-300 p-2 flex flex-col rounded-lg justify-end items-start space-y-2 glass">
          <h1 className="fnt2 text-xl font-bold text-zinc-700">{props.title}</h1>
          <p className="text-gray-900 font-semibold text-start">{props.para}</p>
          <a href={props.href} target="blank"><button className="font-bold bg-gray-400 rounded-lg p-2 px-4 shadow-lg shadow-zinc-700">View</button></a>
        </div>
      </div>
    </>
  );
}
export default Card2;