import React from "react";

const FirsChild = () => {
  return (
    <div className="flex flex-row justify-center align-center gap-2">
      <ul className="space-y-2 ">
        <li className="first:text-red-500 text-bold">item 1</li>
        <li>tiem 2</li>
        <li>item 3</li>
      </ul>
    </div>
  );
};

export default FirsChild;
