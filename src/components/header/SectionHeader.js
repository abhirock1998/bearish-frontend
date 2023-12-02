import React from "react";

const SectionHeader = ({ isMiddle, isBlock, children }) => {
  return (
    <header
      className={`${
        !isBlock ? "flex" : ""
      } gap-2 items-center p-3 h-full  max-h-[60px] ${
        isMiddle
          ? "border-r-[1px] border-r-gray_color border-l-[1px] border-l-gray_color"
          : ""
      }`}
    >
      {children}
    </header>
  );
};

export default SectionHeader;
