import React from "react";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className=" bg-slate-600 w-1/2 hidden  sm:flex items-center justify-center">
        1
      </div>
      <div className=" bg-green-400 md:w-1/2 w-full  flex flex-col items-center justify-center">
        <h1>Login</h1>
        <input
          type="text"
          placeholder=""
          className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Login;
// https://www.sql-practice.com/