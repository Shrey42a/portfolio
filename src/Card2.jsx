import React from "react";

function Card2(props) {
  return (
    <>
      <div className="rounded-lg flex flex-col justify-end items-start  p-2 bg-transparent h-full w-full">
        <div className="p-2 flex flex-col rounded-lg justify-end items-start space-y-2 glass">
          <h1 className="text-xl text-zinc-900">{props.title}</h1>
          <a href={props.href} target="blank"><button className="bg-white/20 font-thin rounded-lg p-2 px-4">View</button></a>
        </div>
      </div>
    </>
  );
}
export default Card2;