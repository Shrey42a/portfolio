import React, {useState} from "react";

function ReadMore({children}) {
  
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  
  return(
    <p className="lg:text-xl fnt text-md tracking-wide text-center lg:text-start font-semibold text-zinc-400">
      { isReadMore ? text.slice(0, 150) : text }
      <span className="cursor-pointer text-slate-800 p-0.5 text-sm" onClick={toggleReadMore}>
       { isReadMore ? "...Read More" : "Show less"}
      </span>
     
    </p>
  );
}
export default ReadMore;