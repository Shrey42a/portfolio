function Procard(props){
    return (
        <>
         <div className="h-max w-4/5 flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center glass ">
           <div className="lg:h-full md:h-full h-max flex flex-col md:items-start items-center lg:items-start justify-center w-full md:w-3/5 lg:w-3/5 lg:space-y-4 md:space-y-4 space-y-2 lg:p-4 p-2 z-10">
            <h1 className="text-2xl">{props.title}</h1>
            <div className="w-full h-max bg-black/20 backdrop-blur-lg rounded-lg p-2 ">
              <p className="text-md lg:text-start text-center text-white font-light">{props.para}</p>
            </div>
            <section className="space-x-2 flex">
              <a href={props.href} target="blank"><button className="mt-4 p-2 px-8 rounded-sm border border-amber-300 text-amber-300 bg-transparent">View</button></a>
              <a href={props.href2} target="blank"><button className="mt-4 p-2 px-8 rounded-sm border border-amber-300 text-amber-300 bg-transparent">Github</button></a>
            </section>
           </div>
           <div className="z-0 hover:z-20 transition-all cursor-pointer hover:scale-110 hover:shadow ease-in-out flex items-center justify-center h-max md:h-max lg:h-max w-full md:w-2/5 lg:w-2/5 md:p-2 lg:p-2 lg:relative lg:right-24">
            <img src={props.image} height="full" width="full" alt={props.alt} className="lg:rounded-lg rounded-lg" />
           </div>
          </div>
        </>
    )
}
export default Procard;