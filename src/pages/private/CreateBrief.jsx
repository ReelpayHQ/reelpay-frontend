import { Button, Col, Row, Steps } from "antd";
import React, { useState } from "react";
import CreateBriefStepone from "../../components/private/CreateBriefStepone";
import CreateBriefStepthree from "../../components/private/CreateBriefStepthree";
import CreateBriefSteptwo from "../../components/private/CreateBriefSteptwo";

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
  const isFirstStep = current === 0;

  const goToNextStep = () => {
    if (current === isLastStep) {
      setCurrent(isLastStep);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (isFirstStep) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev - 1);
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
              <Button type="default" className="!h-8.5">Save & exit</Button>
              <Button
                type="primary"
                className="!w-18 !h-8.5"
                onClick={goToNextStep}
                disabled={isLastStep === current}
              >
                {isLastStep?'Finish':'Next'}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-30 py-10">
        <Row gutter={'40'}>
            <Col span={16} className="border border-green-500">
            <RenderComponent />
            </Col>
            <Col span={8} className="border border-amber-500">
            creator
            </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateBrief;
