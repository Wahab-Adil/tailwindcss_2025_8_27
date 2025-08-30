import React from "react";

const required = () => {
  return (
    <div className="flex flex-row justify-center align-center gap-2">
      <form className="space-y-4 max-w-sm mx-auto">
        <label className="block">
          <input
            type="text"
            required
            placeholder="Enter Your Name..."
            className="mt-1 block w-full px-3 py-4 border rounded-md shadow-xs  border-gray-300 focus:outline-none focus-within:ring-2 required:placeholder-shown:ring-red-500 required:placeholder-shown:border-red-500 transition-all duration-200 ease-in-out"
          />
        </label>
      </form>
      ;
    </div>
  );
};

export default required;
