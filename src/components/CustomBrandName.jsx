import { Avatar, Flex } from "antd";
import React from "react";

export const CustomBrandName = ({ data, showMore }) => {
  return (
    <Flex align="center" gap={10}>
      <div className=" w-14 h-10.5 rounded-[5px]">
        <img
          src={data.brandImg}
          className="w-full h-full rounded-size5 object-conver"
        />
      </div>
      <div>
        <h1 className="font-medium text-size16 text-black">{data.briefName}</h1>
        {showMore ? (
          <Flex align="center" gap={7}>
            <p className="text-size13 text-brandAsh">{data.date}</p>
            <Avatar shape="circle" size={6} className="!bg-brandAsh-900" />
            <span className="font-medium text-size13 text-brandGreen-100">
              {data.status}
            </span>
          </Flex>
        ) : null}
      </div>
    </Flex>
  );
};
