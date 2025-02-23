import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Addtocart from "./Addtocart";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Sidecart() {
  const [activeCart, setActiveCart] = useState(false);
  const cartitem = useSelector((state) => state.cart.cart);
  const totalitem = cartitem.reduce((totalqty, item) => totalqty + item.qty, 0);
  const totalprice = cartitem.reduce(
    (total, item) => total + item.qty * item.regularprice,
    0
  );
 const navigate =  useNavigate()
  const handelcheckout =()=>{
    navigate('Checkout')
  }

const handelproceedcheckout =()=>{
  navigate('proceedtocheckout')
}
  return (
    <div>
      <div
        className={`side w-[30vw] fixed top-0 right-0 bg-white h-screen z-50 transition-all duration-300 ease-linear   ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="    border-b-[1px] pb-2  border-gray-400">
          <div className="mx-3 mt-6 flex justify-between">
            <h1 className="text-xl font-semibold capitalize">shopping cart</h1>
            <button onClick={() => setActiveCart(!activeCart)}>
              <IoIosClose className="text-2xl hover:rotate-90 transition-all duration-500" />
            </button>
          </div>
        </div>

        <div className="overflow-scroll h-[60vh] scroll-smooth side-cart overflow-x-hidden">
          {cartitem.length > 0 ? (
            cartitem.map((itemcart) => {
              return (
                <Addtocart
                  key={itemcart.id}
                  id={itemcart.id}
                  name={itemcart.name}
                  price={itemcart.regularprice}
                  pic={itemcart.img}
                  qty={itemcart.qty}
                />
              );
            })
          ) : (
            <h2 className="capitalize flex items-center h-72 justify-center text-xl font-bold text-gray-500">
              {" "}
              your cart is empty
            </h2>
          )}
        </div>

        <div className="bottom absolute bottom-3 flex flex-col items-center w-full ">
          <div className="total self-start px-4 h-10 items-center mb-6 flex justify-between w-full border-y-[1px] border-gray-300">
            <h6 className="capitalize text-md ">sub total</h6>
            <p> ${totalprice}</p>
          </div>
          <div className="total self-start px-4 h-10 items-center mb-6 flex justify-between w-full border-y-[1px] border-gray-300">
            <h6 className="capitalize text-md ">Items</h6>
            <p> {totalitem}</p>
          </div>
          <button className="capitalize w-80 py-2 my-2 hover:bg-black transition-all duration-200 hover:text-white border border-1 border-black" onClick={handelcheckout}>
            view cart
          </button>
          <button className="capitalize w-80 py-2 hover:bg-black transition-all duration-200 hover:text-white border border-1 border-black" onClick={handelproceedcheckout}>
            check out
          </button>
        </div>
      </div>
      <div className=" fixed bottom-3 right-3 z-40">
        <HiShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className={`relative text-5xl bg-white p-3 rounded-full  hover:bg-black hover:text-white ${
            totalitem > 0 && "animate-bounce transition-all duration-75"
          } `}
        />
        <span
          className={`absolute top-[-5px] left-[-5px] bg-black text-white  text-sm z-10 w-5 h-5 text-center rounded-full `}
        >
          {totalitem}
        </span>
      </div>
    </div>
  );
}

export default Sidecart;
