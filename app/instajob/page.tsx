import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
interface Job {
  title: String;
  desc: String | null;
}
const InstaJob = () => {
  const jobs: Job[] = [
    {
      title: "Software Engineer",
      desc: "Develop and maintain software applications.",
    },
    {
      title: "Project Manager",
      desc: "Oversee project timelines and deliverables.",
    },
    {
      title: "Data Analyst",
      desc: "Analyze data to provide business insights.",
    },
  ];

  return (
    <div className="bg-[#090c1a] mx-auto flex justify-center">
      <div className="bg-[#090c1a] px-16 max-w-7xl">
        <header>
          <div className=" flex py-8 pl-4  ">
            <AiFillThunderbolt color="#49beff" size={30} />
            <h1 className="text-white font-bold">InstaJob</h1>
          </div>
        </header>
        <div className=" text-2xl text-center text-white font-bold pb-4">
          InstaJob FullStack Engineer
        </div>
        <div className=" text-[#9ca3af] text-center">You Know</div>
        <div className="grid md:grid-cols-3 text-white gap-4 mx-auto my-8  ">
          {jobs.map((e) => (
            <div className=" border-[0.5px] border-[#9ca3af] flex p-4">
              <div>
                <AiFillThunderbolt color="#49beff" size={30} />
              </div>
              <div className="pl-4">
                <div className=" text-lg font-bold">{e.title}</div>
                <div className=" text-md  ">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-64 w-64">s</div>
      </div>
    </div>
  );
};

export default InstaJob;
