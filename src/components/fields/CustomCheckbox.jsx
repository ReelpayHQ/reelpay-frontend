import { Checkbox } from "antd";
import React from "react";
import { TitleHeading } from "../TitleHeading";

export const CustomCheckbox = ({ label, title, ...props }) => {
  return (
    <>
      {title ? <TitleHeading text={title} /> : null}
      <div className="customcheckboxstyle">
        <Checkbox {...props}>
          <p className="text-sm text-brandAsh">{label}</p>
        </Checkbox>
      </div>
    </>
  );
};
