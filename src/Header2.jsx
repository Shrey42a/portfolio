import { Link } from "react-scroll";
import Icons from "./Icons";
import RotatingText from "./Rotate2";

function Header2() {
    return(
        <>
         <div className="hidden bg1 lg:flex overflow-hidden md:flex max-h-max min-h-screen items-center flex-row w-full justify-center lg:items-center">
            <div className="w-1/2 h-max flex justify-end items-end p-1">
             <div className="inline-flex flex-col justify-start items-start gap-4 px-4">
              <div className="flex flex-col justify-start items-start gap-5">
               <div className="flex w-full flex-col justify-start items-start">
                <div className="flex w-full flex-col justify-start items-start gap-4">
                 <div className="flex flex-col justify-start items-start gap-2.5">
                  <div className="justify-start text-neutral-500 text-lg font-semibold tracking-wide">Hi I am</div>
                  <h1 className="justify-start text-zinc-100 text-5xl font-bold tracking-wide">Shrey Kumar</h1>
                 </div>
                 <RotatingText 
                    texts={['SEO', 'Web-Design', 'Backend' , 'Frontend' , 'Api Design' , 'Database']}
                    className="glass fnt3 font-black text-xl md:text-3xl lg:text-4xl w-4/5 text-start items-start flex overflow-hidden py-0.5 justify-start rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden fnt4 pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000} />
                </div>
                <Icons />
               </div>
               <div className="inline-flex justify-start items-start gap-6">
                <div className="active:translate-y-0.5 px-8 py-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex justify-center items-center gap-2.5">
                 <Link to="contact" activeclass='active' smooth={true} spy={true} duration={500}><button className="text-justify justify-start text-white text-xl font-bold tracking-wide">Hire Me</button></Link>
                </div>
                <div className="active:translate-y-0.5 px-8 py-2 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-400 flex justify-center items-center gap-2.5">
                 <a href="/shreykrresume.pdf" download="Shrey resume"><button className="text-justify justify-start text-zinc-100 text-xl font-bold tracking-wide">Download CV </button></a>
                </div>
               </div>
              </div>
              <div className="p-6 bg-white/5 rounded-lg inline-flex justify-start items-center gap-7">
               <div className="pr-7 py-1.5 border-r border-neutral-400 inline-flex flex-col justify-start items-start gap-3">
                <div className="text-justify justify-start text-orange-500 text-lg font-extrabold tracking-wide">2+</div>
                <div className="text-justify justify-start text-neutral-200 text-xl font-bold tracking-wide">Experiences</div>
               </div>
               <div className="pr-7 py-1.5 border-neutral-400 inline-flex flex-col justify-start items-start gap-3">
                <div className="text-justify justify-start text-orange-500 text-lg font-extrabold tracking-wide">10+</div>
                <div className="text-justify justify-start text-neutral-200 text-xl font-bold tracking-wide">Projects done</div>
               </div>
              </div>
             </div>
            </div>
            <div className="w-1/2 h-max p-1">
              <div className="w-[418px] h-[581px] relative">
              <div className="w-[450px] h-[450px] left-[5px] top-[212px] absolute bg-gradient-to-b from-white/10 via-black/10 to-black backdrop-blur-sm rounded-full" />
               <img className="w-[330px] h-[501px] rounded-b-3xl left-[70px] top-[90px] absolute" src="/ak5.png" />
              </div>
            </div>
         </div>
         <div className="lg:hidden md:hidden flex flex-col p-1 glass">
            <div className="inline-flex flex-col justify-start items-center mt-4 gap-2">
             <div className="flex flex-col justify-start items-center gap-6">
              <div className="flex w-full flex-col justify-start items-center gap-2">
              <div className="flex w-full gap-4 flex-col justify-start items-center">
                <div className="flex gap-4 flex-col w-full justify-start items-center">
                  <div className="flex flex-col justify-start items-center">
                    <div className="justify-start text-neutral-300 text-lg font-semibold tracking-wide">Hi I am</div>
                    <div className="justify-start text-zinc-100 text-5xl font-bold tracking-wide">Shrey Kumar</div>
                  </div>
                  <div className="h-max w-full flex items-center justify-center">
                    <RotatingText 
                    texts={['SEO', 'Web-Design', 'Backend' , 'Frontend' , 'Api Design' , 'Database']}
                    className="px-2 sm:px-2 md:px-3 glass text-orange-500 font-black text-5xl w-full text-center items-center flex overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
                <Icons />
              </div>
                <div className="inline-flex justify-start items-start gap-6">
                  <div className="px-10 py-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex justify-center items-center gap-2.5">
                    <div className="text-justify justify-start text-white text-lg font-bold tracking-wide">Hire Me</div>
                  </div>
                  <div className="px-10 py-2 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-400 flex justify-center items-center gap-2.5">
                    <div className="text-justify justify-start text-zinc-100 text-lg font-medium tracking-wide">Download CV </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg inline-flex w-full justify-center items-center gap-3.5">
              <div className="py-1.5 border-r pr-2 border-neutral-400 inline-flex flex-col justify-start items-start gap-3">
                <div className="text-justify justify-start text-orange-500 text-xl font-extrabold tracking-wide">2+</div>
                <div className="text-justify justify-start text-neutral-200 text-base font-bold tracking-wide">Experiences</div>
              </div>
              <div className="py-1.5 border-neutral-400 inline-flex flex-col justify-start items-start gap-3">
                <div className="text-justify justify-start text-orange-500 text-xl font-extrabold tracking-wide">10+</div>
                <div className="text-justify justify-start text-neutral-200 text-base font-bold tracking-wide">Projects done</div>
              </div>
              </div>
            </div>
            <div className="w-96 h-[484px] relative overflow-hidden">
            <div className="w-96 h-96 left-0 top-[101.01px] absolute bg-gradient-to-b from-white/10 via-black/10 to-black backdrop-blur-sm rounded-t-full" />
              <img className="w-80 h-[484px] left-[30px] top-0 absolute bg-blend-luminosity" src="/ak5.png" />
            </div>
            </div>
         </div>
        </>
    )
}
export default Header2;