"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
interface NavItem {
  id: number;
  label: string;
}

const navItems: NavItem[] = [
  { id: 1, label: "Home" },
  { id: 2, label: "Communities" },
  { id: 3, label: "Speaker" },
  { id: 4, label: "Business" },
  { id: 5, label: "Events" },
  { id: 6, label: "Training" },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="relative">
        <div className="flex   bg-[#f6ede1] items-center justify-between">
          <div className="w-auto px-16 py-8 ">
            <Image
              className=" bg-[#f6ede1]"
              src={Logo}
              alt="Next.js Logo"
              width={180}
              height={100}
              priority
            />
          </div>
          <div className=" hidden  md:flex items-center justify-evenly space-x-6 ">
            {/* <div className="text-[#2e5c6f] hover:border-b-2 hover:border-b-[#2e5c6f]">
              Home
            </div> */}
            {navItems.map((item) => (
              <div className="text-[#2e5c6f] hover:border-b-2   hover:border-b-[#2e5c6f]">
                {item.label}
              </div>
            ))}

            <IoIosSearch className=" " color="#2aaae1" size={20} />
          </div>
          <div className="w-auto p-8 flex items-center ">
            {/* <div></div> */}
            <div className="w-36 h-12 flex justify-center rounded-3xl text-center items-center bg-[#f07443] text-white mx-4">
              Try for free <FaArrowRight className="m-2" />
            </div>

            <CgProfile className="" color="#2aaae1" size={30} />
            <RiMenuFill
              onClick={toggleMenu}
              className="m-2 md:hidden "
              size={30}
            />
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute w-full top-0 md:hidden bg-black`}
        >
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className=" px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white "
            >
              X
            </button>
          </div>
          <a
            href="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Home
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Services
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Blog
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Contact
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
