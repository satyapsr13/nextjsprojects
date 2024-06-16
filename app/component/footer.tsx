import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="w-full  mx-auto py-8 bg-[#0b1c23] grid md:grid-cols-3 gap-8  items-center justify-evenly">
        <div className="w-full  ">
          <h1 className="text-white md:text-4xl lg:text-6xl text-2xl">
            Styava Dev
          </h1>
          <h1 className="text-white text-md mt-4">2024@ all rights reserved</h1>
        </div>
        <div className="w-full flex  text-white items-center justify-evenly">
          <div>
            <h2>Home</h2>
            <h2>Contact</h2>
            <h2>Speakers</h2>
            <h2>Business</h2>
          </div>{" "}
          <div>
            <h2>Event </h2>
            <h2>Training</h2>
            <h2>Bonus</h2>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="w-full mx-auto grid grid-cols-4 gap-4  text-white bg-slate-500     ">
          <FaFacebookF size={30} />
          <FaFacebookMessenger size={30} />
          <FaInstagramSquare size={30} /> <FaFacebookF size={30} />
          <FaFacebookMessenger size={30} />
          <FaInstagramSquare size={30} />
        </div>
        {/* <div></div> */}
      </div>
    </>
  );
};

export default Footer;
