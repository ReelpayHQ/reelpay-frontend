import React from "react";

const CustomTag = ({ text, onClick, value }) => {
  const isSelected = value.includes(text);
  return (
    <span
      className={`border text-xs cursor-pointer ${
        isSelected
          ? "border-brandPink bg-brandAsh-905 text-brandBlack"
          : "border-brandAsh-902 bg-transparent text-brandAsh"
      } rounded-size100 py-2 px-4`}
      onClick={onClick}
    >
      {text}
    </span>
  );
};

export default CustomTag;
