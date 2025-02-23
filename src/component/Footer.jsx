import React from "react";
import Flogo from "../assets/logo.png";
function Footer() {
  return (
    <div>
      <footer className="mx-10 h-72 items-center border border-y-1 border-gray-400 border-x-0 bg-white flex justify-around">
        <div className="f-logo">
          <img src={Flogo} className="w-40" alt="" />
        </div>
        <div className="f-about">
          <h1 className="text-2xl mb-4">About Us</h1>
          <ul>
            <li className="leading-8 capitalize">Home</li>
            <li className="leading-8 capitalize">About </li>
            <li className="leading-8 capitalize">Shop</li>
            <li className="leading-8 capitalize">Contact</li>
          </ul>
        </div>
        <div className="f-shop">
            <h1 className="text-2xl capitalize mb-4">Shop</h1>
            <ul>
                <li className="leading-8 capitalize">rings</li>
                <li className="leading-8 capitalize">Bracelets</li>
                <li className="leading-8 capitalize">Earrings</li>
                <li className="leading-8 capitalize">Necklaces</li>
            </ul>
        </div>
        <div className="f-address">
            <h1 className="text-2xl capitalize mb-4">Address</h1>
            <ul>
                <li className="capitalize leading-8">123 Fifth Avenue, New York,</li>
                <li className="capitalize leading-8">NY 10160</li>
                <li className="capitalize leading-8">Email: contact@info.com</li>
                <li className="capitalize leading-8">Tell:929-242-6868</li>
            </ul>
        </div>
        <div className="f-instagramfeed">
            <h1 className="text-2xl capitalize mb-4">instagram feed</h1>
            <div className="insta">
            </div>
        </div>
      </footer>
      <div className="lastline text-center h-20 flex items-center justify-center">
        <h1 className="text-lg">Copyright © 2024 Blingg Jewelry | Powered by Hamza Nasir 🖤..</h1>
      </div>
    </div>
  );
}

export default Footer;
