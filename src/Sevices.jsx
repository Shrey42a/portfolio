function Services(){
    return(
<>
<div className="flex bg20 h-screen w-full justify-center lg:items-center">
 <div className="inline-flex md:pt-8 pt-4 lg:pt-8 flex-col justify-start items-center gap-6">
  <div className="flex flex-col justify-start items-center gap-4">
    <h1 className="text-justify justify-start text-white text-5xl font-bold tracking-wide">Services</h1>
  </div>
  <div className="w-full  h-max flex justify-center items-center">
    <div className="p-2 h-full w-full flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:flex-wrap gap-2 md:gap-10 lg:gap-10 justify-center items-center">
      <div className="lg:h-80 md:h-80 h-max w-4/5 p-2 lg:w-1/4 bg-white/10 rounded-xl flex flex-col justify-start items-center gap-2">
        <div className="flex flex-col justify-start items-center">
          <div className="w-16 h-16 relative">
            <div className="w-14 h-14 bg-cover bg-[url(/cd2.svg)]" />
          </div>
          <h1 className="text-center text-orange-500 text-2xl font-bold">Frontend Development</h1>
        </div>
        <p className="text-center justify-center lg:font-medium md:font-medium text-zinc-300 lg:text-lg text-md">I build modern, responsive, and user-friendly web applications using React.js, Tailwind CSS, JavaScript, and TypeScript. My focus is on creating clean UI designs and delivering seamless user experiences.</p>
      </div>
      <div className="lg:h-80 md:h-80 h-max w-4/5 p-2 lg:w-1/4 bg-white/10 rounded-xl flex flex-col justify-start items-center gap-2">
        <div className="flex flex-col justify-start items-center">
          <div className="h-16 w-16 relative">
            <div className="w-14 h-14 bg-cover bg-[url(/cd.svg)]"></div>
          </div>
          <h1 className="text-center text-orange-500 text-2xl font-bold">Backend Development</h1>
        </div>
        <p className="text-center justify-center lg:font-medium md:font-medium text-zinc-300 lg:text-lg text-md">I develop scalable and secure backend systems using Node.js, Express.js, MongoDB, and MySQL. I specialize in RESTful API design and integration, ensuring smooth data flow and reliable server-side performance.</p>
      </div>
      <div className="lg:h-80 md:h-80 h-max w-4/5 p-2 lg:w-1/4 bg-white/10 rounded-xl flex flex-col justify-start items-center gap-2">
        <div className="flex flex-col justify-start items-center">
          <div className="h-16 w-16 relative">
            <div className="w-14 h-14 bg-cover bg-[url(/cd3.svg)]" />
          </div>
          <h1 className="text-center text-orange-500 text-2xl font-bold">UI/UX, SEO</h1>
        </div>
        <p className="text-center justify-center lg:font-medium md:font-medium text-zinc-300 lg:text-lg text-md">Apart from development, I also work on UI/UX design using Figma to create intuitive interfaces. I implement SEO strategies to improve website visibility and optimize performance.</p>
      </div>
    </div>
  </div>
</div>
</div>
</>
    )
}
export default Services;