import React from "react";
import {  useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice";
import { useNavigate } from "react-router-dom";
function Cart({ id, name, img, dec, price, regularprice,handeltoast }) {
  const navigate =  useNavigate()
  const dispatch = useDispatch(); 
  const handelClick = ()=>{
    navigate(`/productdetails/${id}`)
  }
  return (
    <div>
      <div className="cart w-72  p-4 hover:shadow-xl transition-all ease-linear shadow-slate-900 ">
        <div className="overflow-hidden">
          <img src={img} alt={name} className="" onClick={()=> handelClick(id)}/>
        </div>
        <div className="desc px-3 bg-white py-4">
          <h1 className="capitalize text-3xl ">{name}</h1>
          <div className="price flex w-full gap-5 mt-2">
            <p className="line-through text-gray-600 text-sm"> ${price}</p>
            <p className="text-lg font-semibold"> ${regularprice}</p>
          </div>
          <div className="cart-text">
            <p className="diss mt-2">{dec}</p>
          </div>
          <div className="btn mt-3">
            <button
              onClick={()=>{
                dispatch(addToCart({ id, name, regularprice, img, qty: 1 }))
                handeltoast(name)
              }}
              className="border-1 border px-2 py-1 text-[1vw] rounded-lg border-black capitalize hover:bg-black hover:text-white transition-all hover:translate-y-1"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;




