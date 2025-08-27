import { Link } from "react-scroll";

function Navbar2 (){
    return(
        <>
         <div className="lg:w-4/5 md:w-full rounded-xl hidden p-2 navbar3 md:px-4 px-10 md:inline-flex lg:inline-flex justify-evenly items-center">
          <a href="/" className="text-justify justify-start text-orange-500 text-3xl font-bold tracking-wide"><img className="hover:scale-105 transition ease-in-out" src="/logo.png" height="44" width="44" alt="logo" /></a>
           <div className="flex cursor-pointer justify-center items-center md:gap-8 lg:gap-14 gap-14">
            <Link to="home" activeclass='disable' smooth={true} spy={true} duration={500} className="text-justify focus:text-orange-500 justify-start text-gray-400 text-xl font-bold tracking-wide">Home</Link>
            <Link to="services" activeclass='active' smooth={true} spy={true} duration={500} className="text-justify focus:text-orange-500 justify-start text-neutral-400 text-xl font-medium tracking-wide">Services</Link>
            <Link to="about" activeclass='active' smooth={true} spy={true} duration={500} className="text-justify focus:text-orange-500  justify-start text-neutral-400 text-xl font-medium tracking-wide">About me</Link>
            <Link to="skills" activeclass='active' smooth={true} spy={true} duration={500} className="text-justify focus:text-orange-500 justify-start text-neutral-400 text-xl font-medium tracking-wide">Skills</Link>
            <Link to="project" activeclass='active' smooth={true} spy={true} duration={500} className="text-justify focus:text-orange-500 focus:bg-orange-500 justify-start text-neutral-400 text-xl font-medium tracking-wide">Projects</Link>
           </div>
           <div className="px-10 py-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex justify-center items-center gap-2.5">
           <Link to="contact" activeclass='disable' smooth={true} spy={true} duration={500}><div className="text-justify cursor-pointer justify-start text-white text-base font-bold tracking-wide">Hire Me</div></Link>
          </div>
         </div>
        </>
    )
}
export default Navbar2;