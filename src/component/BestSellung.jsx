import React from "react";
import Cart from "./Cart";
import Data from "../Data/data";
import toast , {Toaster} from "react-hot-toast";
function BestSellung() {
  const handeltoast = (name)=> toast.success(`Your ${name} is Added`);
  
  const cartfilter = (item) => {
    return Data.filter(
      (Data) => Data.name.toLowerCase() === item.toLowerCase()
    );
  };
  const braclet = cartfilter("necklace");

  const newbar = braclet.slice(0,4)

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="heading text-center mt-40 items-center flex flex-col justify-center w-full">
        <h5 className="mb-3 text-xl font-semibold">shop</h5>
        <h1 className="text-5xl capitalize">Best selling</h1>
        <div className="bg-[#fcdb99] h-1 w-20 mt-8 rounded-lg"></div>
      </div>
      <div className="grid grid-cols-4 grid-rows-1  col place-items-center mt-12">

        {
            newbar.map((card)=>{
                
                return <Cart key={card.id} id={card.id} name={card.name} price={card.price} regularprice={card.regularprice} dec={card.dec} img={card.img} handeltoast={handeltoast}/>  
            })
        }
      
      </div>
    </div>
  );
}

export default BestSellung;
