import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png.webp";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex items-center justify-between h-24">
        <img src={logo} alt="echo" />
        <ul className="hidden w-full text-sm lg:flex lg:justify-end">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">Dropdown</li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/services">Services</Link>
          </li>
          <li className="p-4">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="p-4">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        {/* <Button
          color="#FBB244"
          bgColor="#081158"
          text="Download Now"
          size="sm"
          hBgColor="white"
          hColor="#081158"
        /> */}
        <button className="hidden lg:block text-sm rounded-full p-2 w-40 border-2 border-[#081158] bg-[#081158] text-[#FBB244] hover:bg-white hover:text-black hover:border-gray-400 transition duration-300">
          Download Now
        </button>
        {/* Mobile view */}
        <div onClick={handleNav} className="block lg:hidden">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r  bg-white ease-in-out duration-500 drop-shadow-2xl z-50"
                : "fixed left-[-100%]"
            }
          >
            <img src={logo} alt="echo" className="p-4" />

            <ul className="w-full text-sm uppercase lg:flex lg:justify-end">
              <li className="p-4 border-b">
                <Link to="/">Home</Link>
              </li>
              <li className="p-4 border-b">Dropdown</li>
              <li className="p-4 border-b">
                <Link to="/about">About</Link>
              </li>
              <li className="p-4 border-b">
                <Link to="/services">Services</Link>
              </li>
              <li className="p-4 border-b">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="p-4 border-b">
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
            <div className="flex justify-center mt-2">
              <button className="text-sm rounded-full p-2 w-40 border-2 border-[#081158] bg-[#081158] text-[#FBB244] hover:bg-white hover:text-black hover:border-gray-400 transition duration-300">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
