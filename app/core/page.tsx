import React from "react";
import { Hover, Focus, FirstChild, Required } from "@/components";
import CenterContainer from "@/components/utils/CenterContainer";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Core Concepts</h1>
      <CenterContainer title="Hover Functionality" children={<Hover />} />
      <CenterContainer title="Focus Functionality" children={<Focus />} />
      <CenterContainer
        title="FirstChild Functionality"
        children={<FirstChild />}
      />
      <CenterContainer title="Required Functionality" children={<Required />} />
    </div>
  );
};

export default page;
