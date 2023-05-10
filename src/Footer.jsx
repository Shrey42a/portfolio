import React from "react";

function Footer() {
  return (
    <>
      <div className="bg20 h-60">
        <div className="w-full glass py-2">
          <ul className="flex w-full flex-col items-center justify-center space-y-2 py-2 lg:flex-row lg:space-x-10 lg:space-y-0">
            <img src="/shrey2.png" className="hidden lg:block h-64 w-60 -mt-24" />
            <h1 className="lg:hidden font-bold uppercase text-gray-400 font-mono transition ease-in-out hover:text-sky-400">Shrey Kumar Portfolio</h1>
          </ul>
          <h1 className="text-md text-center lg:absolute lg:top-20 lg:inset-x-96 font-semibold text-gray-400">Made by me At <a target="blank" href="https://codeyogi.io/" title="Visit Codeyogi" className="text-cyan-500 cursor-pointer">Codeyogi Labs</a></h1>
          <div className="flex flex-col items-center lg:absolute lg:top-24 lg:inset-x-96 justify-center space-y-2 py-2">
            <h1 className="text-center text-gray-400">
              Copyright &#169; 2022 <span className="text-cyan-500"><a href="#home">@Shreykumar</a></span>42
            </h1>
            <p className="text-center text-gray-400">Every item on this website has been made with very hard work.If you copy anything we will hunt you down.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;