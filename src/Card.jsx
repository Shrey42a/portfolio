import React from "react";

function Card(props) {
  return (
    <>
    <div className="card9 flex h-full w-full items-end overflow-hidden rounded-xl">
    <div className="text-content h-max w-full space-y-3 rounded-b-xl px-2 py-2">
      <h1 className="text-2xl tracking-widest">{props.title}</h1>
      <p className="text-sm">{props.para}</p>
      <div className="flex items-start space-x-4">
      <a href={props.href} target="blank"><button className="p-2 px-4 rounded-sm border border-emerald-600 text-emerald-400 bg-transparent">Preview</button></a>
      <a href={props.href2} target="blank"><button className="p-2 px-4 rounded-sm border border-emerald-600 text-emerald-400 bg-transparent">Code</button></a>
      </div>
    </div>
  </div>
    </>
  );
}
export default Card;