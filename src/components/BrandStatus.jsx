import { Flex } from "antd";
import React from "react";
import { PiCheckBold } from "react-icons/pi";

const BrandStatus = ({ img, name, active }) => {
  return (
    <Flex align="center" justify="space-between">
      <Flex align="center" gap={7}>
        <div className="w-7 h-7 rounded-full">
          <img
            src={img}
            className="w-full h-full rounded-full object-contain"
          />
        </div>
        <p className="text-brandBlack text-sm">{name}</p>
      </Flex>

      {active ? (
        <div className="w-4.5 h-4.5 rounded-full bg-brandPink flex items-center justify-center">
          <PiCheckBold color="white" />
        </div>
      ) : null}
    </Flex>
  );
};

export default BrandStatus;
