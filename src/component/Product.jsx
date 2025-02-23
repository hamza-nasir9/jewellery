import React from "react";
import Cart from "./Cart";
import Data from "../Data/data";
import toast, { Toaster } from "react-hot-toast";

function Product() {
  const handeltoast = (name)=> toast.success(`Your ${name} is Added`);
  
  const filter = (cart) => {
    return Data.filter(
      (Data) => Data.name.toLowerCase() === cart.toLowerCase()
    );
  };
  const earrings = filter("earrings");
  const itemToshow = earrings.slice(0, 4);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="heading text-center mt-40 items-center flex flex-col justify-center w-full">
        <h5 className="mb-3 text-xl font-semibold"> Popular products</h5>
        <h1 className="text-5xl capitalize">trending now </h1>
        <div className="bg-[#fcdb99] h-1 w-20 mt-8 rounded-lg"></div>
      </div>
      <div className="grid grid-cols-4 grid-rows-1  col place-items-center mt-12">
        {itemToshow.map((item, index) => {
          return (
            <Cart
              key={index}
              id={item.id}
              name={item.name}
              img={item.img}
              dec={item.dec}
              price={item.price}
              regularprice={item.regularprice}
              handeltoast={handeltoast}
            />
          );
        })}
      </div>
    </>
  );
}

export default Product;
