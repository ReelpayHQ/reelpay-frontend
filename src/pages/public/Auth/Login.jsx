import React from "react";
import CustomInputField from "../../../components/fields/CustomInputField";
import { Button, Flex } from "antd";

const Login = () => {
  return (
    <>
      <CustomInputField label={"Email"} />
      <CustomInputField label={"Password"} placeholder="" type={"password"} />
      <div className="flex items-center justify-end">
        <Button type="link" className="!p-1 !text-brandPink !h-0">
          Forgot password?
        </Button>
      </div>
      <Button type="primary" className="!mt-8">
        Continue
      </Button>
    </>
  );
};

export default Login;
