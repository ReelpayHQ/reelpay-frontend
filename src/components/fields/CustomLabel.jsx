import React from "react";

const CustomLabel = ({ label, ...props }) => {
  return (
    <label className="font-medium text-sm text-brandAsh" {...props}>
      {label}
    </label>
  );
};

export default CustomLabel;
