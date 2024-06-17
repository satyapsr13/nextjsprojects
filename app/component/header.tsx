"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import Link from "next/link";
interface NavItem {
  id: number;
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "Projects", link: "#project" },
  { id: 2, label: "Experiance", link: "/#" },
  { id: 3, label: "Impossible List", link: "/#" },
  // { id: 4, label: "Contact", link: "/#" },
  // { id: 5, label: "Social Work", link: "" },
  { id: 6, label: "CV", link: "/" },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="relative shadow-xl">
        <div className="flex  sticky w-full px-8 md:px-16  bg-secondary items-center justify-between">
          <div className="w-auto hover:text-primary cursor-pointer text-2xl py-8 text-white font-bold ">
            Satyapsr13
          </div>
          <div className=" hidden  lg:flex items-center justify-evenly space-x-6 ">
            {/* <div className="text-[#2e5c6f] hover:border-b-2 hover:border-b-[#2e5c6f]">
              Home
            </div> */}
            {navItems.map((item) => (
              <Link href={item.link}>
                <div className="text-white hover:text-primary hover:border-b-2   hover:border-b-[#2e5c6f]">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
          {/* <div className="w-auto p-8 flex items-center ">
            
            <div className="w-36 h-12 flex justify-center rounded-3xl text-center items-center bg-[#f07443] text-white mx-4">
              Try for free <FaArrowRight className="m-2" />
            </div>

            <CgProfile className="" color="#2aaae1" size={30} />
            <RiMenuFill
              onClick={toggleMenu}
              className="m-2 md:hidden "
              size={30}
            />
          </div> */}
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute w-full top-0 bloc  bg-black`}
        >
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className=" px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white "
            >
              X
            </button>
          </div>
          {navItems.map((item) => (
            <Link href={item.link}>
              <div className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
// https://forward.digital/
