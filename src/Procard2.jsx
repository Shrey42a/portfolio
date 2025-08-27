function Procard2(props){
    return (
        <>
         <div className="h-max w-4/5 flex lg:flex-row-reverse md:flex-row-reverse flex-col-reverse items-center justify-center bg-white/10 rounded-md lg:bg-transparent md:bg-transparent">
           <div className="lg:h-full md:h-full h-max flex flex-col md:items-end items-center lg:items-end justify-center w-full md:w-3/5 lg:w-3/5 lg:space-y-4 md:space-y-4 space-y-2 lg:p-4 p-2 z-10">
            <h1 className="text-2xl">{props.title}</h1>
            <div className="w-full h-max backdrop-blur-lg bg-transparent md:bg-black/50 lg:bg-black/50  rounded-lg p-2 ">
              <p className="text-sm text-justify justify-start lg:text-md md:text-md lg:text-start text-white font-light">{props.para}</p>
            </div>
            <section className="space-x-2 flex w-full items-center lg:justify-end md:justify-end justify-evenly">
              <div className="active:translate-y-0.5 px-10 py-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex justify-center items-center gap-2.5">
                <a href={props.href} target="blank" className="text-justify justify-start text-white text-xl font-bold tracking-wide">View</a>
              </div>
              <div className="active:translate-y-0.5 px-10 py-3 rounded-lg outline outline-2 outline-offset-[-2px] outline-neutral-400 flex justify-center items-center gap-2.5">
                <a href={props.href2} target="blank" className="text-justify justify-start text-neutral-400 text-xl font-bold tracking-wide">Github</a>
              </div>
            </section>
           </div>
           <div className="z-0 hover:z-20 transition-all cursor-pointer hover:scale-105 hover:shadow ease-in-out flex items-center justify-center h-max md:h-max lg:h-max w-full md:w-2/5 lg:w-2/5 md:p-2 lg:p-2 lg:relative lg:left-24">
            <img src={props.image} height="full" width="full" alt={props.alt} className="lg:rounded-lg md:rounded-lg rounded-t-lg" />
           </div>
          </div>
        </>
    )
}
export default Procard2;