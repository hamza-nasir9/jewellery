import React from 'react'
import Service from './Service'
import discount from "../icon/icon-01.png";
import shipping from "../icon/icon-02.png";
import payment from "../icon/icon-03.png";
import order from "../icon/icon-04.png";

function Shiping() {
  return (
    <div>
      <div className="business text-center mt-20">
        <h5 className='text-lg'>BEST IN BUSINESS</h5>
        <h1 className='text-4xl'>WHY CHOOSE US</h1>
        <h3 className='text-xl text-[#7e6b6e]'>Experience the perfect blend of trust,  quality, and innovation with our <br /> services—crafted to exceed your expectations every time.</h3>
      </div>

    <div className="flex mx-10 justify-between my-20">
    <Service  img={discount} title="free shipping" para = " Big Discount Alert!  It's the perfect time to shop your favorite jewelry Enjoy a flat 20% off on all designs  Offer valid for a limited time only Hurry up."/>
    <Service  img={shipping} title="SECURE PAYMENTS" para = " Big Discount Alert!  It's the perfect time to shop your favorite jewelry Enjoy a flat 20% off on all designs  Offer valid for a limited time only Hurry up."/>
    <Service  img={payment} title="ORDER TRACKING" para = " Big Discount Alert!  It's the perfect time to shop your favorite jewelry Enjoy a flat 20% off on all designs  Offer valid for a limited time only Hurry up."/>
    <Service  img={order} title="big discount" para = " Big Discount Alert!  It's the perfect time to shop your favorite jewelry Enjoy a flat 20% off on all designs  Offer valid for a limited time only Hurry up."/>
    
    </div>


    </div>
  )
}

export default Shiping