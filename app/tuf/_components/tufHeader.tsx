import React from 'react'
import Image from "next/image";
// import React from "react";
import devImg from "../../../public/images/dev.png";
import { FaMoon } from "react-icons/fa";

const tufHeader = () => {
  return (
    <div className="flex bg-black justify-between w-full fixed  top-0 z-10">
      <h1 className="text-red-700 m-4 font-bold">TUF</h1>

      <div className="flex h-16 ">
        <button className="my-4   hidden md:block  px-1 py-1 border border-gray-400 text-white rounded">
          Get 1:1 Membership
        </button>
        <div className="border-gray-400 border  rounded px-2 my-4 text-lg mx-2 flex items-center">
          <FaMoon className="text-white " />
        </div>
        <Image
          className="my-4 rounded-full"
          src={devImg}
          alt="Picture of the author"
          // layout="responsive"
          height={50}
          width={50}
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </div>
  );
}

export default tufHeader
