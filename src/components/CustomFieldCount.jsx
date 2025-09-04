import { Flex } from "antd";
import React from "react";

const CustomFieldCount = ({ title, children, description }) => {
  return (
    <Flex align="center" justify="space-between" className="!mt-1">
      {title ? <p className="text-xs text-brandAsh">{title}</p> : null}
      {children}
      <p className="text-xs text-brandAsh-500">{description}</p>
    </Flex>
  );
};

export default CustomFieldCount;
