import React from "react";
import TufSidebar from "./_components/tufSidebar";
import TufFooter from "./_components/tufFooter";
import TufHeader from "./_components/tufHeader";
import { FaArrowRight, FaBook } from "react-icons/fa";
let cards: string[] = ["1", "1", "1", "1", "1", "1", "1"];
const HomeScreen = () => {
  return (
    <div className="">
      <TufHeader />
      {/* <div className="h-96"></div> */}
      <section className="bg-[#0F0F0F]">
        <p className="text-white text-xl px-4 mt-16 text-center py-8">
          Gear Up for{" "}
          <h1 className="text-red-600 text-xl inline-block">Success</h1> : Your
          Ultimate Preparation Hub!
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   ">
            {cards.map((e) => (
              <div className="h-64 shadow-lg shadow-gray-900 w-64 border flex flex-col justify-evenly border-gray-500 rounded-xl p-4 ">
                <FaBook className="text-white py-4" size={50} />
                <h1 className="text-white font-bold text-xl">
                  Striver DSA Sheet{" "}
                </h1>
                <h1 className="text-gray-400  text-sm">
                  Boost Your DSA with our handy cheat sheet
                </h1>
                <button className="flex items-center px-4 py-2 border border-gray-400 text-gray-400 rounded-3xl hover:text-white ">
                  Try for free
                  <FaArrowRight className="mx-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TufFooter />
    </div>
  );
};

export default HomeScreen;
