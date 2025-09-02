import { Flex } from "antd";
import React from "react";

const TextIcon = ({ icon, text }) => {
  const IconComponent = icon;
  return (
    <Flex align="center" gap={5}>
      <IconComponent color={'var(--color-brandAsh)'} size={20} />
      <p className="text-brandBlack font-medium text-sm">{text}</p>
    </Flex>
  );
};

export default TextIcon;
