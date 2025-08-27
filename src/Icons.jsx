import React from "react";

function Icons() {
    return (
        <>
         <div className="rounded-lg space-x-6 flex flex-row items-center justify-evenly p-2">
            <div className="flex space-x-10">
              <a className="wrapper scale-125" href="https://facebook.com/Akku.athlete" target="_blank" title="Shrey.fb">
                <i className="fa fa-3x fa-facebook-square"></i>
              </a>
              <a className="wrapper2 scale-125" href="https://twitter.com/@ShreyKr42" target="_blank" title="Shrey.tw">
                <i className="fa fa-3x fa-twitter-square"></i>
              </a>
              <a className="wrapper3 scale-125" href="https://github.com/Shrey42a" title="Akku42n" target="_blank">
                <i className="fa fa-3x fa-github-square"></i>
              </a>
              <a className="wrapper4 scale-125" href="https://linkedin.com/in/shrey-kumar-090914242" target="_blank" title="Shrey.In">
                <i className="fa fa-3x fa-linkedin-square"></i>
              </a>
            </div>
          </div>
        </>
    )
}
export default Icons;