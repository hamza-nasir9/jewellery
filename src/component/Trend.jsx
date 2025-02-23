import React from "react";
import image from "../assets/bg-01.jpg"
import bgimage from "../assets/bg-02.jpg"
function Trend() {
  return (
    <div className=" mt-32 w-full flex justify-between px-8 relative bg-white">
      <div className="left w-[25vw] self-center">
        <h5>UNIQUE PIECES</h5>
        <h1 className="text-5xl capitalize">be <br /> always <br /> on <br /> trend</h1>
        <p className="mt-3">
          "Discover timeless elegance and modern trends with our exquisite
          jewelry collections—always on trend, always dazzling."
        </p>
        <p>"Elevate your style with our exclusive, trend-setting jewelry designs—where elegance meets innovation."</p>
        <button className=" w-32  py-2 mt-7 hover:bg-black hover:text-white capitalize font-light text-sm border-1 border border-black">shop now </button>

      </div>
      <div className="right w-[50vw] flex justify-end">
        <img src={image} alt="" className="self-end"/>
      </div>
      <div className="top-img absolute right-[33vw] top-32">
        <img src={bgimage} alt="" />
      </div>
    </div>
  );
}

export default Trend;
