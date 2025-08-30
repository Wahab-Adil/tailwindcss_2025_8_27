import React from "react";

const selection = () => {
  return (
    <div className="flex flex-col justify-center align-center gap-2">
      <p className="font-bold text-2xl text-amber-200 selection:bg-gray-50 selection:text-amber-600">
        This is a sample text. Try selecting it to see the effect.
      </p>
      <h2 className="selection:bg-green-300 selection:text-black selection:font-bold selection:underline">
        This is a header with custom selection style.
      </h2>
    </div>
  );
};

export default selection;
