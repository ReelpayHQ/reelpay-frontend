import { Button, Col, Flex, Row, Steps } from "antd";
import { useState } from "react";
import CreateBriefStepone from "../../components/private/CreateBriefStepone";
import CreateBriefStepthree from "../../components/private/CreateBriefStepthree";
import CreateBriefSteptwo from "../../components/private/CreateBriefSteptwo";
import FormBlock from "../../components/FormBlock";
import { PiImage } from "react-icons/pi";

const items = [CreateBriefStepone, CreateBriefSteptwo, CreateBriefStepthree];
const stepItem = [
  {
    title: "Details",
  },
  {
    title: "Video brief",
  },
  {
    title: "Creator preference",
  },
];
const CreateBrief = () => {
  const [current, setCurrent] = useState(0);

  const RenderComponent = items[current];

  const isLastStep = items.length - 1;

  const goToNextStep = () => {
    if (current === isLastStep) {
      setCurrent(isLastStep);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-brandAsh-300">
      <div className="py-3 px-10 bg-white shadow-light">
        <Row>
          <Col span={9} offset={8}>
            <div className="stepwrapper">
              <Steps current={current} items={stepItem} />
            </div>
          </Col>
          <Col span={4} offset={3}>
            <div className="flex gap-5 justify-self-end place-self-end">
              <Button type="default" className="!h-8.5">
                Save & exit
              </Button>
              <Button
                type="primary"
                className="!w-18 !h-8.5"
                onClick={goToNextStep}
                disabled={isLastStep === current}
              >
                {isLastStep ? "Finish" : "Next"}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-40 py-10">
        <Row gutter={"40"}>
          <Col span={16}>
            <RenderComponent />
          </Col>
          <Col span={8}>
            <div className="flex flex-col gap-4">
              <FormBlock title={"What creators see"} style="pt-4 pb-0">
                <div className="px-4">
                  <div className="border-t-7 border-r-7 border-l-7 border-brandAshBold h-61 rounded-t-3xl px-5">
                    <div className="w-11.5 h-1.5 rounded-size100 bg-brandAsh-900 m-auto mt-3" />
                    <div className="h-35 rounded-lg bg-brandAsh-900 mt-3 p-3">
                      <Flex align="center" gap={3}>
                        <div className="w-5 h-3.5 rounded-xs bg-brandAshBold " />
                        <div className="w-5 h-3.5 rounded-xs bg-brandAshBold " />
                      </Flex>
                      <div className="w-12 h-12 m-auto mt-7">
                        <PiImage
                          className="w-full h-full"
                          color="var(--color-brandAsh-500)"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 mt-3">
                      <div className="h-3 rounded-lg bg-brandAsh-300" />
                      <div className="w-45 h-3 rounded-lg bg-brandAsh-300" />
                    </div>
                  </div>
                </div>
              </FormBlock>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateBrief;
