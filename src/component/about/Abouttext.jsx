import React from "react";

function Abouttext() {
  return (
    <>
      <div className="about-text w-full h-screen flex items-center justify-around overflow-hidden">
        <div className="left w-96">
          <div className="text-heading">
            <h6>About Us</h6>
            <h1 className="text-6xl">About the</h1>
            <h1 className="text-6xl">founder</h1>
            <h3 className="text-lg">
            "FiZaHam was founded by Hamza and Fiiza, a passionate couple dedicated to creating timeless jewelry that reflects love, elegance, and special moments
            </h3>
            <div className="w-14 h-[1px] bg-[#A86E3B] my-5"></div>
            <p className="text-sm leading-6">
              FiZaHam is a jewelry brand that blends timeless elegance with
              modern design. Our collection is crafted with the finest
              materials, ensuring each piece tells a story of beauty and
              sophistication. We believe that jewelry is not just an accessory,
              but a reflection of life's most cherished moments.
            </p>
            <h6>
              "Hamza and Fiiza, united by love, create jewelry that captures the
              essence of their journey together."
            </h6>
          </div>
        </div>
        <div className="right w-[50vw] ">
          <img className="w-full h-auto object-cover" src="https://img.freepik.com/free-photo/woman-choosing-necklace-jewelry-store_1303-30670.jpg?ga=GA1.1.128158671.1732275270&semt=ais_hybrid" alt="" />
        </div>
      </div>
      <div className="image w-[95vw] m-auto">
        <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bg-03.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className=" px-10 my-20 flex items-start justify-center">
        <div className="left w-[50vw] mt-10">
        <h6 className="text-md capitalize">about us</h6>
        <h1 className="text-6xl capitalize">how it all</h1>
        <h1 className="text-6xl capitalize">started</h1>
        </div>
        <div className="rigt w-[50vw]">
          <h1 className="text-5xl mb-8">Our Journey Through Time</h1>
          <p className="mb-5">"FiZaHam started its journey in 1984 when Hamza and Fiiza, driven by their shared passion for fine jewelry and craftsmanship, decided to turn their dream into a reality. Over the years, the brand has evolved, blending timeless designs with modern elegance. From humble beginnings to becoming a symbol of luxury, FiZaHam continues to create stunning jewelry that celebrates love, beauty, and life’s precious moments."</p>
          <h6 className="text-lg text-[#A86E3B] mb-2">1924 - Established</h6>
          <p>In 1924, FiZaHam laid its foundation with a commitment to creating timeless jewelry that embodies elegance and craftsmanship. What started as a small venture quickly grew into a trusted name in the jewelry industry, known for quality and innovation.</p>
          <h6 className="text-lg text-[#A86E3B] mb-2">Embracing Our Essence</h6>
          <p className="mb-5">In 1950, FiZaHam embraced its core essence with the introduction of designs that celebrated individuality and timeless beauty. This marked a turning point in our journey, as we began to redefine elegance with innovation and tradition.</p>
          <h6 className="text-lg text-[#A86E3B] mb-2">A New Era of Innovation</h6>
          <p className="mb-5">In 1975, FiZaHam reached new heights, giving life to bold and innovative jewelry designs that captured the imagination of our customers. This era marked the beginning of our global presence, setting the stage for greatness and unparalleled craftsmanship.</p>
          <h6 className="text-lg text-[#A86E3B] mb-2">Redefining Tradition with Modernity</h6>
          <p>In 2010, FiZaHam ventured into uncharted territories, introducing contemporary collections that seamlessly blended tradition with modernity. This period was defined by bold experimentation and a renewed focus on customer-centric innovation.</p>
        </div>
      </div>
    </>
  );
}

export default Abouttext;
