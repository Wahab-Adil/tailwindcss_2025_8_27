import React from "react";
import { Hover } from "@/components";
import CenterContainer from "@/components/utils/CenterContainer";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Core Concepts</h1>
      <CenterContainer title="Hover Functionality" children={<Hover />} />
    </div>
  );
};

export default page;
