import { Select } from "antd";
import React from "react";
import ErrorText from "../ErrorText";
import CustomLabel from "./CustomLabel";

const CustomSelect = ({ options, label, labelProps, error, ...props }) => {
  return (
    <div>
      {label ? <CustomLabel label={label} {...labelProps} /> : null}
      <div className="mt-1">
        <Select
          className="!w-full"
          options={options}
          status={error ? "error" : status}
          {...props}
        />
      </div>
      <ErrorText error={error} />
    </div>
  );
};

export default CustomSelect;
