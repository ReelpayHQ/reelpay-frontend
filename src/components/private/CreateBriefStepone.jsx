import React, { useState } from "react";
import FormBlock from "../FormBlock";
import { Radio } from "antd";
import { PiUsersFill, PiVideoCameraFill } from "react-icons/pi";
import ServiceItem from "./ServiceItem";

const CreateBriefStepone = () => {

    const [service,setService]= useState('video')
  const options = [
    {
      label: "Video",
      value: "video",

      title: "UGC Video",
      icon: PiVideoCameraFill,
      description:
        "Includes trimming, cropping and caption, delivered to you for immediate use in your campaigns.",
    },
    {
      label: "Social",
      value: "social",
      title: "UGC + Social posting",
      icon: PiUsersFill,
      description:
        "Videos are done by the creators and posted directly to their feed.",
    },
  ];
  return (
    <div>
      <FormBlock title={"Service type"}>
        <div className="radioWrapper">
          <Radio.Group
            block
            // defaultValue="Pear"
            onChange={(e)=>{
                console.log(e)
                setService(e.target.value)
            }}
            value={service}
            optionType="button"
            className="!gap-2"
          >
            {options?.map((option) => {
              return <Radio value={option.value}>
                <ServiceItem data={option}/>
              </Radio>;
            })}
          </Radio.Group>
        </div>
      </FormBlock>
    </div>
  );
};

export default CreateBriefStepone;
