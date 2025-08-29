import { Input } from "antd";
import React from "react";
import ErrorText from "../ErrorText";
import CustomLabel from "./CustomLabel";

const { Password, TextArea, OTP, Search } = Input;
const CustomInputField = ({
  label,
  type,
  labelProps,
  error,
  status,
  ...props
}) => {
  const InputComponent =
    type === "password"
      ? Password
      : type === "textArea"
      ? TextArea
      : type === "otp"
      ? OTP
      : Input;
  return (
    <div>
      {label ? <CustomLabel label={label} {...labelProps} /> : null}
      <div className="mt-1">
        <InputComponent status={error ? "error" : status} {...props} />
      </div>
      <ErrorText error={error} />
    </div>
  );
};

export default CustomInputField;
