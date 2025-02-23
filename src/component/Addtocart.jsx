import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import {  useDispatch } from "react-redux";
import { removeFromCart  } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";
import Quantity from "./Quantity";
function Addtocart({id , name , pic , price , qty}) {

const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between mx-3 mt-3 items-center shadow-md p-2">
        <div className="img flex justify-center gap-3 items-center">
          <img
            src={pic}
            className="w-20 h-20 object-cover"
            alt={name}
          />
            
           <div className="price leading-tight">
            <h6>{name}</h6>
          <Quantity qty={qty} id={id}/>
           </div>
        </div>

        <div className="cancel flex justify-between items-end flex-col">
        <button onClick={()=> {dispatch(removeFromCart({id }))
        toast(`${name} Removed!` ,{
          icon:"😔"
        })
      }}>
        <MdOutlineCancel   className="text-lg"/>
        </button>
          <h6 className="text-md mt-3">${price}</h6>
        </div>
      </div>

      
    </div>
  );
}

export default Addtocart;
