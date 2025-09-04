import { Button, Col, Flex, Row, Steps } from "antd";
import { useState } from "react";
import CreateBriefStepone from "../../components/private/CreateBriefStepone";
import CreateBriefStepthree from "../../components/private/CreateBriefStepthree";
import CreateBriefSteptwo from "../../components/private/CreateBriefSteptwo";
import FormBlock from "../../components/FormBlock";
import { PiImage, PiInfoFill, PiPlusBold } from "react-icons/pi";

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

  const lastStep = items.length - 1;
  const isLastStep = lastStep == current;

  const goToNextStep = () => {
    if (isLastStep) {
      setCurrent(lastStep);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-brandAsh-300">
      <div className="py-3 px-10 bg-white shadow-light">
        <Row>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            lg={{ span: 9, offset: 9 }}
          >
            <div className="stepwrapper">
              <Steps current={current} items={stepItem} />
            </div>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            lg={{ span: 4, offset: 2 }}
          >
            <div className="flex gap-2 justify-self-end place-self-end">
              <Button type="default" className="!h-8.5">
                Save & exit
              </Button>
              <Button
                type="primary"
                className="!w-18 !h-8.5"
                onClick={goToNextStep}
                disabled={isLastStep}
              >
                {isLastStep ? "Finish" : "Next"}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className=" px-3 md:px-5 lg:px-15 xl:px-40 py-10">
        <Row gutter={"40"}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 16 }}
          >
            <RenderComponent />
          </Col>
          <Col
            className="mt-4 md:mt-0"
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            <div className="flex flex-col gap-4">
              <FormBlock title={"What creators see"} style="pt-4 pb-0">
                <div className="px-3">
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

              <FormBlock title={""} style="pt-4 pb-0" childrenStyle="px-0">
                <div>
                  <div className="px-3">
                    <h1 className="font-semibold text-size16 text-black">
                      Order Summary
                    </h1>
                    <div className="py-3 border-b border-brandAsh-900 flex flex-col gap-2">
                      <Flex align="center" justify="space-between">
                        <p className="text-brandAsh text-sm">
                          15 - 30 sec video
                        </p>
                        <p className="text-brandBlack font-medium text-sm">
                          ₦50k - ₦100k
                        </p>
                      </Flex>
                      <div>
                        <Button
                          type="link"
                          className="!p-0 !text-brandAsh !h-0"
                          onClick={() => {}}
                          icon={<PiPlusBold />}
                        >
                          Add coupon code
                        </Button>
                      </div>
                    </div>
                    <div className="pt-3 pb-2">
                      <Flex align="center" justify="space-between">
                        <p className="text-sm text-brandBlack">Total</p>
                        <p className="text-size16 font-semibold text-brandPink">
                          ₦50k - ₦100k
                        </p>
                      </Flex>
                      <p className="mt-5 text-xs text-brandAsh-200">
                        Total price will depend on the chosen creator.
                      </p>
                    </div>
                  </div>
                  <div className="bg-brandOrange-100 rounded-lg px-3.5 py-3">
                    <Flex align="" gap={6}>
                      <PiInfoFill size={24} color="var(--color-brandPink)" />
                      <p className="text-xs font-medium leading-4 text-brandOrange max-w-50">
                        Funds will be auto deducted from your wallet after
                        approving a creator.
                      </p>
                    </Flex>
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
