import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../Data/data";
import Quantity from "../Quantity";
import { addToCart } from "../../redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Cart from "../Cart";
import Review from "./Review";
function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetail = Data.find((product) => product.id === parseInt(id));

  const cartitem = useSelector((state) => state.cart.cart);
  const productquty = cartitem.find((item) => item.id === parseInt(id)); 
  const quantity = productquty ? productquty.qty : 1; 
  const [mainImage, setMainImage] = useState(productDetail.img);
  const relatedproduct = Data.filter(
    (item) =>
      item.category === productDetail.category && item.id !== productDetail.id
  );
  const handeltoast = (name) =>
    toast.success(`Your ${productDetail.name} is Added`);
  const handeladdtocart = () => {
    console.log("hello")
    dispatch(
      addToCart({
        id: productDetail.id,
        name: productDetail.name,
        regularprice: productDetail.regularprice,
        img: productDetail.img,
        qty: quantity,
      })
    );
    handeltoast(name);
  };

  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: "70%", y: "70%" });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setPosition({ x: `${x}%`, y: `${y}%` });
  };
  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => {
    setZoom(false);
    setPosition({ x: "70%", y: "70%" });
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {productDetail ? (
        <div className="main bg-white  px-6">
          <div className="parent flex gap-10">
            <div className="left w-[40vw] h-[70vh] flex gap-10">
              <div className="thumbnail">
                {productDetail.thumbnails &&
                  productDetail.thumbnails.map((thumb, index) => (
                    <div className="img-thumb mb-2" key={index}>
                      <img
                        src={thumb}
                        width={80}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setMainImage(thumb)}
                        className={`border ${
                          mainImage === thumb
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                      />
                    </div>
                  ))}
              </div>
              <div
                className="overflow-hidden relative main-img w-[30vw]"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={mainImage}
                  className={`zoom-image w-full h-full object-cover transition-transform duration-300 ${
                    zoom ? "scale-150" : "scale-100"
                  }`}
                  style={{
                    transformOrigin: `${position.x} ${position.y}`,
                  }}
                  alt={productDetail.name}
                />
              </div>
            </div>
            <div className="right w-[40vw] ml-5">
              <h6 className="text-sm capitalize">
                {productDetail.category || "Category"}
              </h6>
              <h1 className="text-5xl capitalize">{productDetail.name}</h1>
              <div className="price pt-7 mb-3">
                <p className="text-xl text-[#AB7341] font-semibold font-serif">
                  {productDetail.regularprice && (
                    <strike className="font-normal text-gray-500 text-sm">
                      ${productDetail.price}
                    </strike>
                  )}{" "}
                  ${productDetail.regularprice || productDetail.price}{" "}
                  <span className="font-normal text-sm text-black">
                    &free shipping
                  </span>
                </p>
              </div>
              <div className="decs">
                <p className="text-sm leading-7">{productDetail.dec}</p>
              </div>
              <Quantity qty={quantity} id={productDetail.id} />
              <button
                onClick={handeladdtocart}
                className="border-1 border px-2 py-1 text-[1vw] rounded-lg border-black capitalize hover:bg-black hover:text-white transition-all mt-5"
              >
                add to cart
              </button>
            </div>
          </div>

          <div className="description flex px-10 my-10">
            <div className="description-title text-4xl w-72">
              <h1 className="capitalize">description</h1>
            </div>
            <div className="description-text w-[80vw]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                quaerat libero accusamus hic iste tenetur perferendis
                perspiciatis sequi similique mollitia alias debitis doloribus
                numquam ipsum ipsam officia itaque distinctio, soluta nulla nam
                illum cumque. Possimus, asperiores sequi saepe exercitationem
                repellat aspernatur sed provident illum vitae molestias,
                veritatis eligendi architecto ducimus?
              </p>
            </div>
          </div>
          <div className="reviews h-96 bg-white flex justify-center">
            <div className="w-64">
              <h1 className="text-4xl">Reviews </h1>
            </div>
            <Review />
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}

      <div className="pt-20">
        <h1 className="text-4xl  ml-10">Related products</h1>
        <div className="grid grid-cols-4 grid-rows-2  col place-items-center mt-5">
          {relatedproduct.map((card) => {
            return (
              <Cart
                key={card.id}
                id={card.id}
                name={card.name}
                price={card.price}
                regularprice={card.regularprice}
                dec={card.dec}
                img={card.img}
                handeltoast={handeltoast}
              />
            );
          })}
        </div>{" "}
      </div>
    </>
  );
}

export default Details;
