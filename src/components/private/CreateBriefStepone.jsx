import { useState } from "react";
import FormBlock from "../FormBlock";
import { Radio } from "antd";
import { PiStopFill } from "react-icons/pi";
import ServiceItem, { RoundedItem } from "./ServiceItem";
import CustomButtonRadio from "../fields/CustomButtonRadio";
import {
  aspectRatioOptions,
  durationOptions,
  editingOptions,
  platformOptions,
  serviceOptions,
} from "../../data/radioOptions";

const CreateBriefStepone = () => {
  const [radioState, setRadioState] = useState({
    service: "",
    platform: "",
    duration: "",
    aspect: "",
    editing: "",
  });

  const { service, platform, duration, aspect, editing } = radioState;

  return (
    <div className="flex flex-col gap-4">
      <FormBlock title={"Service type"}>
        <CustomButtonRadio
          value={service}
          onChange={(e) =>
            setRadioState((prev) => ({ ...prev, service: e.target.value }))
          }
          label={"What type of service do you want?"}
        >
          {serviceOptions?.map((option, index) => {
            const isSelected = option.value === service;
            return (
              <Radio value={option.value}>
                <ServiceItem
                  data={option}
                  value={service}
                  iconWrapperBg={
                    index === 0 ? "bg-brandPink-100" : "bg-brandPurple-100"
                  }
                  iconColor={
                    index === 0
                      ? "var(--color-brandPink)"
                      : "var(--color-brandPurple)"
                  }
                />
              </Radio>
            );
          })}
        </CustomButtonRadio>
      </FormBlock>

      <FormBlock title={"Customize your order"}>
        <div className="flex flex-col gap-4 mt-3">
          <div className="w-4/9 flex flex-col gap-4">
            <CustomButtonRadio
              value={platform}
              onChange={(e) =>
                setRadioState((prev) => ({ ...prev, platform: e.target.value }))
              }
              label={"Platform"}
            >
              {platformOptions?.map((option) => {
                return (
                  <Radio value={option.value}>
                    <ServiceItem
                      data={option}
                      value={platform}
                      textStyle="text-sm"
                    />
                  </Radio>
                );
              })}
            </CustomButtonRadio>

            <CustomButtonRadio
              className="test"
              value={duration}
              onChange={(e) =>
                setRadioState((prev) => ({ ...prev, duration: e.target.value }))
              }
              label={"Duration"}
            >
              {durationOptions?.map((option) => {
                return (
                  <Radio value={option.value}>
                    <RoundedItem data={option} value={duration} />
                  </Radio>
                );
              })}
            </CustomButtonRadio>

            <CustomButtonRadio
              className="test"
              value={aspect}
              onChange={(e) =>
                setRadioState((prev) => ({ ...prev, aspect: e.target.value }))
              }
              label={"Size  aspect ratio"}
            >
              {aspectRatioOptions?.map((option, index) => {
                return (
                  <Radio value={option.value}>
                    <RoundedItem
                      data={
                        index == 1
                          ? {
                              ...option,
                              icon:
                                option.value === "4:5"
                                  ? PiStopFill
                                  : option.icon,
                            }
                          : option
                      }
                      value={aspect}
                    />
                  </Radio>
                );
              })}
            </CustomButtonRadio>
          </div>

          <div className="w-8/10">
            <CustomButtonRadio
              value={editing}
              onChange={(e) =>
                setRadioState((prev) => ({ ...prev, editing: e.target.value }))
              }
              label={"Editing"}
            >
              {editingOptions?.map((option, index) => {
                const isSelected = option.value === editing;
                return (
                  <Radio value={option.value}>
                    <ServiceItem
                      data={option}
                      value={"basic"}
                      iconWrapperBg={
                        index == 0 ? "bg-brandPink-100" : "bg-brandPurple-100"
                      }
                      iconColor={
                        index == 0
                          ? "var(--color-brandPink)"
                          : "var(--color-brandPurple)"
                      }
                      showdefault={index == 0 ? true : false}
                      price={index == 1 ? true : false}
                    />
                  </Radio>
                );
              })}
            </CustomButtonRadio>
          </div>
        </div>
      </FormBlock>

      <FormBlock title={"Additional services"}>
        <div className="text-center py-9">
          <p className="text-xs text-brandAsh">Coming soon</p>
        </div>
      </FormBlock>
    </div>
  );
};

export default CreateBriefStepone;
