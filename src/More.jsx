import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function More() {
    return (
        <>
            <div className="h-max bg20">
                <Navbar />
                <div className="pt-14 lg:pt-16 h-full w-full lg:px-8 lg:py-4 flex flex-col justify-center items-center">
                    <div className="flex h-full flex-wrap justify-evenly gap-2 bg-white/10 rounded-lg">
                        <div class="h-[24rem] w-[24rem] rounded-lg bg-white/10 p-2 shadow-lg shadow-zinc-800"></div>
                        <div class="h-[24rem] w-[24rem] rounded-lg bg-white/10 p-2 shadow-lg shadow-zinc-800"></div>
                        <div class="h-[24rem] w-[24rem] rounded-lg bg-white/10 p-2 shadow-lg shadow-zinc-800"></div>
                        <div class="h-[24rem] w-[24rem] rounded-lg bg-white/10 p-2 shadow-lg shadow-zinc-800"></div>
                        <div class="h-[24rem] w-[24rem] rounded-lg bg-white/10 p-2 shadow-lg shadow-zinc-800"></div>
                        <div class="h-[24rem] w-[24rem] rounded-lg bg-white/10 p-2 shadow-lg shadow-zinc-800"></div>
                        <div class="h-[24rem] w-[24rem] rounded-lg bg-white/10 p-2 shadow-lg shadow-zinc-800"></div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default More;