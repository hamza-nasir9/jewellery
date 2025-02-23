import React from "react";
function Service({title , img , para}) {
  return (
    <div>
      <div className="service-cart w-72">
        <img src={img} alt="" />
        <h2 className="capitalize text-2xl">{title}</h2>
        <p className="text-sm">
          {para}
        </p>
      </div>
    </div>
  );
}

export default Service;
