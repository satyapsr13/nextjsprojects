"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

interface NavLink {
  title: String;
  link: String;
  id: Number;
}

const navLinks: NavLink[] = [
  { title: "Home", link: "#", id: 1 },
  { title: "Contact", link: "#", id: 2 },
  { title: "About", link: "#", id: 3 },
  { title: "Services", link: "#", id: 4 },
  { title: "Lets have fun!", link: "#", id: 5 },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full  bg-[#1f242d] ">
      <div className="fixed  w-full bg-[#1f242d] flex justify-between">
        <h1 className="text-xl  p-2 md:p-4 text-bold text-white hover:text-[#00eeff] cursor-pointer">
          Satyapsr13
        </h1>
        <div className=" hidden md:flex pr-4">
          {navLinks.map((e) => (
            <h1 className="text-lg p-4 text-bold text-white hover:text-[#00eeff] cursor-pointer">
              {e.title}
            </h1>
          ))}
        </div>

        {isOpen ? (
          <MdCancel
            onClick={handleButton}
            className="text-white m-4"
            size={15}
          />
        ) : (
          <IoMenu onClick={handleButton} className="text-white m-4" size={15} />
        )}
      </div>
      <div>
        <div
          className={
            " md:hidden  pr-4 fixed top-16 left-0 bg-[#1f242d] w-full " +
            ` ${isOpen ? "block" : "hidden"} `
          }
        >
          {navLinks.map((e) => (
            <h1 className="text-lg p-4 text-bold text-white hover:text-[#00eeff] cursor-pointer">
              {e.title}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
