import React from 'react'
import Data from "../Data/data.js";
import { useParams } from "react-router-dom";
import Cart from "../component/Cart.jsx";
import toast, { Toaster } from "react-hot-toast";


function ShowProduct() {
    const handeltoast = (name)=> toast.success(`Your ${name} is Added`);
    const { category } = useParams();
  
    const FilterData = Data.filter((item) => item.category === category);
    return (
        <>
         <Toaster position="top-center" reverseOrder={false} />
          <div className="w-[90vw] mx-auto my-10">
            <h1 className="text-6xl capitalize">{category}</h1>
            <div className="grid grid-cols-4 grid-rows-1  col place-items-center mt-12" >
              {FilterData.length > 0 ? (
                FilterData.map((data, index) => (
                  <Cart
                  key={index}
                  id={data.id}
                  name={data.name}
                  img={data.img}
                  dec={data.dec}
                  price={data.price}
                  regularprice={data.regularprice}
                  handeltoast={handeltoast}
                  /> 
                ))
              ) : (
                <p>No data found</p>
              )}
            </div>
          </div>
        </>
      );
}

export default ShowProduct