import React from "react";

const required = () => {
  const isEmail: Boolean = true;
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

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded 
               hover:bg-blue-600 active:bg-blue-700"
        >
          Click Me
        </button>

        <a
          href="#"
          className="text-blue-600 underline 
                  hover:text-blue-800 active:text-red-500"
        >
          Visit Page
        </a>
        <input
          type="submit"
          value="Send"
          className=" bg-green-500 text-white px-4 py-2 rounded 
         hover:bg-green-600 active:bg-green-700"
        />

        <div
          className="bg-gray-200 p-4 rounded cursor-pointer 
         hover:bg-gray-300 active:bg-gray-400"
        >
          Clickable Box
        </div>
      </form>
    </div>
  );
};

export default required;
