import { Link } from "react-scroll";
import RotatingText from "./Rotate2";

function Header() {
  return (
    <>
      <div className="flex bg1 max-h-max min-h-screen w-full justify-center lg:items-center">
        <div className="min-w-fit lg:justify-center justify-evenly lg:py-0 py-10 items-center flex flex-col">
          <div className="flex flex-col items-center lg:space-y-0 space-y-20 justify-center">
            <h1 className="text-2xl lg:relative lg:right-96">Hello there, this is</h1>
            <div data-splitting="lines" className="lg:block hidden reflected">
              <h1 className="text-4xl fnt2 lg:text-9xl">Shrey kumar</h1>
              <h1 className="text-4xl fnt2 lg:text-9xl">Shrey kumar</h1>
            </div>
            <h1 className="lg:hidden text-center text-6xl fnt2">Shrey kumar</h1>
            <div className="flex flex-col lg:flex-row md:flex-row justify-center lg:space-x-2 items-center space-y-2 md:w-1/2 w-4/5 lg:w-1/2">
            <h1 className="text-center lg:text-start text-2xl text-amber-200 font-medium">I do</h1>
             <RotatingText 
                texts={['Web-Development', 'SEO', 'Web-Design', 'Backend' , 'Frontend']}
                className="px-2 sm:px-2 md:px-3 glass fnt3 font-black text-xl md:text-3xl lg:text-4xl w-4/5 text-center items-center flex overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden fnt4 pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000} />
            </div>
          </div>
          <div className="">
            <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}> <button className="custom-btn btn-13 hover:outline hover:outline-2  hover:outline-offset-4 hover:outline-rose-500">Explore</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;