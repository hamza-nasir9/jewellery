import React from 'react'
import {  useDispatch } from "react-redux";
import { increment,derement } from "../redux/Slices/CartSlice";
import { LuMinus, LuPlus } from 'react-icons/lu';
function Quantity({qty , id}) {
    
const dispatch = useDispatch();
  return (
    <div>
         <div className="btn flex gap-1 items-center mt-3">
              <button className="w-7 flex items-center justify-center text-gray-400 h-7 border-1 border-gray-500 border">
                <LuMinus onClick={()=> qty > 1 ?  dispatch(derement({id})) : (qty = 0) }/>
              </button>
              <span className="w-7 flex items-center justify-center text-gray-400 h-7 border-1 border-gray-500 border">
                {qty}
              </span>
              <button className="w-7 flex items-center justify-center text-gray-400 h-7 border-1 border-gray-500  border">
                <LuPlus onClick={()=> qty >= 1 ? dispatch(increment({id})) : (qty = 0)}/>
              </button>
          </div>
    </div>
  )
}

export default Quantity