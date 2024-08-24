import React from "react";
import Header from "./_components/Header";
import HomePage from "./_components/HomePage";

const HomeScreen = () => {
  return (
    <div className="bg-[#1f242d] ">
      <div className="mx-1  md:mx-16">
        <Header />
        <HomePage />
        this is home
      </div>
    </div>
  );
};

export default HomeScreen;
