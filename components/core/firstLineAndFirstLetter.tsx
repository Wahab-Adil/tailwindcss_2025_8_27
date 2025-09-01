import React from "react";

const FirstLineAndFirstLetter = () => {
  return (
    <div>
      <p className="     border first-letter:text-8xl first-letter:text-bold first-letter:text-rose-500 first-line:text-4xl first-line:text-bold first-line:text-gray-600 whitespace-break-spaces max-w-sm">
        Well, let me tell you something, funny boy. Y'know that little stamp,
        the one that says "New York Public Library"?
      </p>
      <div className="flex ...">
        <div className="flex-1 ...">01</div>
        <div className="contents">
          <div className="flex-1 ...">02</div>
          <div className="flex-1">03</div>
        </div>
        <div className="flex-1 ...">04</div>
      </div>
    </div>
  );
};

export default FirstLineAndFirstLetter;
