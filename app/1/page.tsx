import React from "react";
import Footer from "../component/footer";

const Page1 = () => {
  return (
    <div className=" p-8  ">
      <button className=" px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white ">
        Click
      </button>
      <button className=" px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white ">
        Click
      </button>

      <div className="relative">
        <input
          type="text"
          placeholder="Write something"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Page1;
