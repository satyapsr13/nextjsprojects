import React from "react";
import { SiLinkedin } from "react-icons/si";

const HomePage = () => {
  return (
    <div className="flex justify-center pt-16 w-full">
      <div className="grid w-full   justify-between items-center bg-slate-600 grid-cols-1 md:grid-cols-3">
        <div className="w-full md:w-2/3 p-4 text-xl text-white  col-span-2">
          Hello, It's Me
          <div className="text-white text-3xl font-bold">Satya Prakash</div>
          <div className="text-white">
            I'm <span className="text-[#00eeff]">Software Engineer</span>{" "}
          </div>
          <div className="flex">
            <div className="h-8 w-8 flex items-center justify-center p-2  rounded-full border border-white hover:border-[#00eeff]">
              <SiLinkedin />
            </div>
          </div>
        </div>
        <div className="text-white w-full md:w-1/3">s</div>
      </div>
    </div>
  );
};

export default HomePage;
