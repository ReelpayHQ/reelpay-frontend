import { Button, Divider, Flex } from "antd";
import Google from "../../../assets/images/svg/google.svg";
import React from "react";

const GoogleAuthForm = ({ onClick }) => {
  return (
    <div className="mt-2">
      <Button
        block={true}
        className="!bg-brandAsh-600 !text-brandBlack !border !border-brandAsh-600"
        onClick={onClick}
      >
        <img src={Google} className="object-fit" />
        Continue with Google
      </Button>
      <Flex align="center">
        <div className="w-5/10">
          <Divider className="bg-brandAsh-300" />
        </div>
        <p className="px-3 text-brandAsh-500">or</p>
        <div className="w-5/10">
          <Divider className="bg-brandAsh-300" />
        </div>
        <div />
      </Flex>
    </div>
  );
};

export default GoogleAuthForm;
