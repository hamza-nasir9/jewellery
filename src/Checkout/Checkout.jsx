import React from "react";
import Quantity from "../component/Quantity";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/Slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);

  const total = cartItems.reduce(
    (total, item) => total + item.qty * item.regularprice,
    0
  );
  const dispatch = useDispatch();

  const processtocheckout = () => {
    navigate("/proceedtocheckout");
  };

  return (
    <div className="bg-white">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="heading px-10">
        <h1 className="text-4xl">Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <h2 className="text-center text-3xl border py-3 w-[70%] m-auto mb-10 border-black">
          your cart is empty
        </h2>
      ) : (
        <div className="cart-main">
          {cartItems.map((item) => {
            const subtotal = item.qty * item.regularprice;
            return (
              <div
                className="cart-main-info items-center justify-around flex"
                key={item.id}
              >
                <div className="checkout border my-2 w-[70%] flex items-center justify-between p-5 border-black">
                  <div className="close-btn">
                    <button
                      onClick={() => {
                        dispatch(removeFromCart({ id: item.id }));
                        toast(`${item.name} Removed!`, {
                          icon: "😔",
                        });
                      }}
                    >
                      <IoIosClose className="border-[1px] rounded-full border-gray-300 w-5 h-5 text-center" />
                    </button>
                  </div>
                  <div className="product">
                    <div className="product-info flex items-center">
                      <div className="product-img">
                        <img src={item.img} width={50} alt="" />
                      </div>
                      <div className="product-name ml-3">
                        <h5 className="capitalize">{item.name}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h5>${item.regularprice}</h5>
                  </div>
                  <div className="quantity">
                    <Quantity qty={item.qty} id={item.id} />
                  </div>
                  <div className="subtotal">
                    <h5>${subtotal}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="cart-total w-[25%] h-52 border ml-10 border-gray-300 px-2 py-2">
        <h1 className="text-4xl capitalize">cart total</h1>
        <div className="total mt-5">
          <h2 className="text-xl capitalize border-y my-2 border-gray-700">
            total: <span>${total}</span>
          </h2>
        </div>
        <div className="checkout-proceed mt-10 text-center">
          <button
            className="capitalize border border-black w-72 h-10 hover:bg-black hover:text-white transition-all"
            onClick={processtocheckout}
          >
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
