import Link from "next/link";
import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Project = () => {
  return (
    <section className="px-16 bg-sec2">
      <div className="h-screen bg-sec2       justify-evenly " id="project">
        <h1 className="text-4xl text-white py-4 font-bold   ">Projects</h1>
        <div>
          <div className="border-2 border-white  w-64 p-4 rounded-lg shadow-lg  gap-4 hover:border-primary flex flex-col items-center justify-center  ">
            <h1 className="text-white"> Rishteyy Mobile App</h1>
            <h1 className="text-white py-2">
              {" "}
              It is a post maker and post editor application & live in
              playstore. In this app user can select their image edit images and
              share to their social media plateform.
            </h1>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.aeonian.rishteyy"
              }
            >
              <IoLogoGooglePlaystore
                className="text-white hover:text-primary text-xl"
                color=" white"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
