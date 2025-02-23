import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import Category from "./Category";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import Data from "../Data/data";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInput = useRef();
  const navigate = useNavigate();

  const handleSearchOpen = () => {
    setSearchOpen(true);
    setTimeout(() => searchInput.current.focus(), 100);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (query.trim() === "") {
      alert("Please enter a search term");
      return;
    }

    // Filter products based on query
    const results = Data.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    // Navigate to the search page with query and results
    navigate("/search", { state: { query, results } });

    // Close the search box
    handleSearchClose();
  };

  return (
    <div className="sticky top-0 left-0 z-10">
      <nav className="w-full flex justify-between px-10 py-5 items-center text-black text-sm bg-white">
        <div className="links w-[25%] ps-10">
          <Category />
        </div>
        <div className="logo">
          <img src={Logo} className="w-23" alt="Logo" />
        </div>
        <div className="links w-[20%]">
          <ul className="flex capitalize justify-between">
            <li className="duration-500 transition-all hover:text-black text-[#7e6b6e] font-light">
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="duration-500 transition-all hover:text-black text-[#7e6b6e] font-light">
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className="font-light duration-500 transition-all hover:text-black text-[#7e6b6e]">
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="contact"
              >
                Contact
              </NavLink>
            </li>
            <div className="button">
              {searchOpen && (
                <div className="absolute top-0 left-0 w-full bg-[rgba(0,0,0,0.5)] h-screen flex justify-center items-center">
                  <div
                    className="absolute top-3 right-5 text-5xl text-gray-800"
                    onClick={handleSearchClose}
                  >
                    <IoIosClose />
                  </div>
                  <form onSubmit={handleSearchSubmit}>
                    <input
                      type="text"
                      placeholder="Search here"
                      value={query}
                      ref={searchInput}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-96 p-2 bg-transparent shadow-lg text-lg focus:outline-none"
                    />
                    <button type="submit" className="text-gray-300 text-2xl">
                      <IoSearchOutline/>
                    </button>
                  </form>
                </div>
              )}
              <button className="text-xl" onClick={handleSearchOpen}>
                <IoSearchOutline className="hover:scale-110 duration-500 transition-all hover:text-black text-[#7e6b6e]" />
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
