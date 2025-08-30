import React from "react";

const placeholder = () => {
  return (
    <div className="flex flex-row justify-center align-center gap-2">
      <form className="flex flex-row gap-1">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="px-4 py-2 border rounded-md placeholder:bg-amber-100 placeholder:text-purple-500 placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-lg placeholder:text-red-500 placeholder:italic placeholder:text-xl focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </form>
    </div>
  );
};

export default placeholder;
