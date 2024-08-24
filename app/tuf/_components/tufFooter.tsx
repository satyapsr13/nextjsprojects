import React from "react";

const TufFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black ">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center gap-4 ">
          <div className=" m-4 md:col-span-2">
            <h1 className="text-bold text-2xl  text-red-700">takeUforward</h1>
            <h2 className="text-gray-500 text-sm max-w-[150px] ">
              The best place to learn data Structures, algorithms, most asked
              coding interview questions. real interview experiences free of
              cost.
            </h2>
            <div className="flex"> </div>
          </div>
          <div className="m-4">
            <h1 className="text-bold text-2xl text-red-700">Company</h1>
            <h2 className="text-gray-500 text-lg ">About Us</h2>
            <h2 className="text-gray-500 text-lg ">Contact Us</h2>
            <h2 className="text-gray-500 text-lg ">Pricing </h2>
            <h2 className="text-gray-500 text-lg ">Privary Policy</h2>
          </div>{" "}
          <div className="m-4">
            <h1 className="text-bold text-2xl text-red-700">Company</h1>
            <h2 className="text-gray-500 text-lg ">About Us</h2>
            <h2 className="text-gray-500 text-lg ">Contact Us</h2>
            <h2 className="text-gray-500 text-lg ">Pricing </h2>
            <h2 className="text-gray-500 text-lg ">Privary Policy</h2>
          </div>
          <div className="m-4">
            <h1 className="text-bold text-2xl text-red-700">Company</h1>
            <h2 className="text-gray-500 text-lg ">About Us</h2>
            <h2 className="text-gray-500 text-lg ">Contact Us</h2>
            <h2 className="text-gray-500 text-lg ">Pricing </h2>
            <h2 className="text-gray-500 text-lg ">Privary Policy</h2>
          </div>
          <div className=" m-4">
            <h1 className="text-bold text-2xl text-red-700">Quick Access</h1>
          </div>{" "}
        </div>

        <div className="my-4">
          <hr className="border-gray-300 my-2" />
        </div>
      </div>
      <p className="text-white text-center py-4">
        Copyright © {currentYear} takeuforward | All rights reserved
      </p>
    </div>
  );
};

export default TufFooter;
