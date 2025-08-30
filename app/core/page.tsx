import React from "react";
import {
  Hover,
  Focus,
  FirstChild,
  Required,
  BeforeAndAfter,
  Placeholder,
  Selection,
  OddEven,
  Has,
} from "@/components";
import CenterContainer from "@/components/utils/CenterContainer";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Core Concepts</h1>
      <CenterContainer title="Has Functionality" children={<Has />} />
      <CenterContainer
        title="Odd And Even Functionality"
        children={<OddEven />}
      />
      <CenterContainer
        title="Before And After Functionality"
        children={<BeforeAndAfter />}
      />
      <CenterContainer
        title="Placeholder Functionality"
        children={<Placeholder />}
      />
      <CenterContainer
        title="Selection Functionality"
        children={<Selection />}
      />
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
