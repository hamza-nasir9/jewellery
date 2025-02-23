import React from "react";
import Banner from '../component/Banner'
import Slider from '../component/Slider'
import Product from '../component/Product'
import Trend from '../component/Trend'
import Shiping from '../component/Shiping'
import BestSellung from "../component/BestSellung";

function Home() {
  return (
    <div>
      <Banner subheading={"new collection"} mainhead={"THE NEW RING"} mainheading={"SENSATION"} firstline={"fizza Lorem, ipsum dolor sit amet consectetur adipisicing elit."} secline={"fizza hamza Lorem, ipsum dolor sit amet elit."} btn={"shop now"}/>
      <Slider />
      <Product  />
      <Trend />
      <BestSellung/>
      <Shiping />
    </div>
  );
}

export default Home;
