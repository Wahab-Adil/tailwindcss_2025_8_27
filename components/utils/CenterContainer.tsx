import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
};
const CenterContainer = ({ title, children }: Props) => {
  return (
    <div className="w-[90vw] flex  flex-col justify-center border border-2 border-red-400 mx-auto my-5">
      <h1 className="text-4xl text-center mb-1 ">{title}</h1>
      <div className="mx-auto mb-4">{children}</div>
    </div>
  );
};

export default CenterContainer;
