import React from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigator = useNavigate()

  const handelTab = (category)=>{
    navigator(`/product/${category}`)
  }
  return (
    <div>
      <ul className=" flex capitalize  justify-between ">
       
     
                <li className=" duration-500 transition-all hover:text-black  text-[#7e6b6e] font-light">
                <button onClick={()=>handelTab("earrings")} className="capitalize">earrings</button>
              </li>
                <li className=" duration-500 transition-all hover:text-black  text-[#7e6b6e] font-light">
                <button onClick={()=>handelTab('rings')} className="capitalize">rings</button>
              </li>
                <li className=" duration-500 transition-all hover:text-black  text-[#7e6b6e] font-light">
                <button onClick={()=>handelTab('necklace')} className="capitalize">naceklace</button>
              </li>
                <li className=" duration-500 transition-all hover:text-black  text-[#7e6b6e] font-light">
                <button onClick={()=>handelTab('barcelet')} className="capitalize" >bracelet</button>
              </li>
         
       
      </ul>
    </div>
  );
}

export default Category;
