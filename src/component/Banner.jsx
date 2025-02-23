import React from "react";
function Banner({subheading , mainhead, mainheading,firstline,secline,btn}) {
  return (
    <div>
      <main className="h-screen w-full bg-[url('./assets/banner.jpg')] bg-cover">
       
        <div className="text  w-[600px] h-full flex justify-center flex-col text-zinc-900 px-9">
          <h5 className="capitalize text-[#7e6b6e] ">{subheading}</h5>
          <h1 className=" text-6xl capitalize font-thinlight">{mainhead}</h1>
          <h1 className=" text-6xl capitalize font-thin">{mainheading} </h1>
            <p className="font-extralight text-sm capitalize text-[#7e6b6e] leading-6">{firstline} </p>
            <p className="font-extralight text-sm capitalize text-[#7e6b6e] leading-6">{secline}</p>
          <button className=" w-40  py-2 mt-7 capitalize font-light text-sm border-1 border border-black">{btn} </button>
        </div>
      </main>
    </div>
  );
}

export default Banner;
