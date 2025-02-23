import React from "react";
import { useSelector } from "react-redux";

function ProceedCheckout() {
  const cartproduct = useSelector((state) => state.cart.cart);
  const total = cartproduct.reduce(
    (total, item) => total + item.qty * item.regularprice,
    0
  );

  return (
    <div>
      <div className="main py-10 bg-white flex justify-evenly">
        <div className="left ml-10 w-[50%] ">
          <div className="checkout-heading mt-5 mb-10">
            <h1 className="text-5xl">Checkout</h1>
          </div>
          <div className="form px-5">
            <form action="">
              <h3 className="uppercase text-xl font-bold">
                customer information
              </h3>
              <div className="email-input my-3">
                <input
                  type="email"
                  name=""
                  className="border border-gray-300 w-full p-2"
                  placeholder="Username or Email Address*"
                  id=""
                />
              </div>
              <h3 className="uppercase text-xl font-bold">Billing Details</h3>
              <div className="details">
                <div className="name flex my-5">
                  <input
                    type="text"
                    placeholder="first name*"
                    className="w-full mr-3 capitalize border border-gray-300 p-2"
                  />
                  <input
                    type="text"
                    placeholder="last name*"
                    className="capitalize ml-3 w-full border border-gray-300 p-2"
                  />
                </div>
                <div className="company-name">
                  <input
                    type="text"
                    name=""
                    placeholder="Company Name*"
                    className="border border-gry-300 w-full p-2"
                    id=""
                  />
                </div>
                <div className="house flex my-5">
                  <input
                    type="text"
                    placeholder="house number and street name"
                    className="w-full mr-3 capitalize border border-gray-300 p-2"
                  />
                  <input
                    type="text"
                    placeholder="apartment,suit,unit,etc(optional)"
                    className="capitalize ml-3 w-full border border-gray-300 p-2"
                  />
                </div>
                <div className="town-state flex">
                  <input
                    type="text"
                    placeholder="town / city *"
                    className="w-full mr-3 capitalize border border-gray-300 p-2"
                  />
                  <input
                    type="text"
                    placeholder="state *"
                    className="w-full mr-3 capitalize border border-gray-300 p-2"
                  />
                  <input
                    type="text"
                    placeholder="zIP code *"
                    className="capitalize ml-3 w-full border border-gray-300 p-2"
                  />
                </div>
                <div className="Phone-number my-5">
                  <input
                    type="text"
                    name=""
                    placeholder="phone number*"
                    className="border border-gry-300 w-full p-2"
                    id=""
                  />
                </div>
              </div>
              <h3 className="uppercase text-xl font-bold">
                additional information
              </h3>
              <div className="additional-info my-5">
                <div className="Phone-number">
                  <input
                    type="text"
                    name=""
                    placeholder="note about your order, e.g special notes for delivery"
                    className="border border-gry-300 w-full p-2 capitalize"
                    id=""
                  />
                </div>
              </div>
              <div className="payment my-5">
                <h3 className="uppercase text-xl font-bold">payment</h3>
                <div className="bank my-5">
                  <input type="checkbox" name="" id="bank" />
                  <label
                    htmlFor="bank"
                    className="capitalize pl-4 text-gray-500"
                  >
                    direct bank transfer
                  </label>
                </div>
                <div className="bank my-5">
                  <input type="checkbox" name="" id="cash" />
                  <label
                    htmlFor="cash"
                    className="pl-4 capitalize text-gray-500"
                  >
                    cash on delivery
                  </label>
                </div>
              </div>
              <button className="w-full text-center p-2 border border-black hover:bg-black transition-all hover:text-white my-5 capitalize font-bold">
                place order
              </button>
            </form>
          </div>
        </div>
        {cartproduct.length === 0 ? (
          <div className="right w-[40%] h-fit sticky top-36 ">
            <h1 className="text-3xl uppercase">your order </h1>
            <div className="order border border-gray-300 rounded-sm">
              <div className="product-total flex justify-between border border-gray-300 px-2 py-5 text-gray-500 font-bold">
                <h5 className="capitalize">product</h5>
                <h5 className="capitalize">subtotal</h5>
              </div>
              <div className="product item px-2 py-5">
                <div className="product-img">
                  <img src="" alt="" />
                  <span> </span>
                </div>
                <div className="product-pr">
                  <h6>empty</h6>
                </div>
              </div>
              <div className="subtotal border border-gray-300 px-2 py-5 flex justify-between">
                <h5 className="capitalize">subtotal</h5>
                <h5></h5>
              </div>
              <div className="subtotal border border-gray-300 px-2 py-5 flex justify-between">
                <h5 className="capitalize font-bold text-xl">total</h5>
                <h1 className="font-bold text-xl font-serif"></h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="right w-[40%] h-96 sticky top-36 overflow-scroll overflow-x-hidden scroll-smooth">
            <h1 className="text-3xl uppercase">your order </h1>
            <div className="order border border-gray-300 rounded-sm">
              <div className="product-total flex justify-between border border-gray-300 px-2 py-5 text-gray-500 font-bold">
                <h5 className="capitalize">product</h5>
                <h5 className="capitalize">subtotal</h5>
              </div>
              {cartproduct.map((item) => {
               const subtotal = item.qty * item.regularprice
                return (
                  <div>
                    <div className="product item px-2 py-5 flex justify-between items-center">
                      <div className="product-img flex items-center gap-6">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 object-cover"
                        />
                        <span className="capitalize">
                          {" "}
                          {item.name} X {item.qty}{" "}
                        </span>
                      </div>
                      <div className="product-pr">
                        <h6>{subtotal}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="subtotal border border-gray-300 px-2 py-5 flex justify-between">
                <h5 className="capitalize">subtotal</h5>
                <h5> ${total} </h5>
              </div>
              <div className="subtotal border border-gray-300 px-2 py-5 flex justify-between">
                <h5 className="capitalize font-bold text-xl">total</h5>
                <h1 className="font-bold text-xl font-serif"> ${total}  </h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProceedCheckout;
