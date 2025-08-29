import bgimage from "../../../assets/images/img/onboardingbg.png";
import CustomLogo from "../../../components/CustomLogo";
import AuthHeading from "../../../components/AuthHeading";
import { Button, Col, Flex, Row} from "antd";
import CustomInputField from "../../../components/fields/CustomInputField";
import CustomSelect from "../../../components/fields/CustomSelect";
import { PiUploadSimpleBold } from "react-icons/pi";
import bgTest from "../../../assets/images/img/bg-test.jpg";

const Onboarding = () => {
  const isImg = !true;
  return (
    <div className=" relative h-screen overflow-auto xl:overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-[200%] bg-cover bg-repeat-y animate-none md:animate-scrollLoop -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, hsla(311, 95%, 15%, 0.9), hsla(258, 92%, 14%, 0.9)),url(${bgimage})`,
        }}
      />

      <div className="w-9/10 md:w-100 m-auto mt-0 md:mt-20 lg:mt-0 py-5">
        <div className="flex items-center justify-center mb-4">
          <CustomLogo transparent={true} />
        </div>

        <div className="rounded-2xl bg-white shadow-sm px-4 py-5">
          <AuthHeading
            headingSize="text-xl"
            heading={"Complete your brand profile"}
            title={"Provide your brand details"}
          />
          <div className="mt-5">
            <p className="font-medium text-sm text-brandAsh">
              Brand logo{" "}
              <span className="text-brandAsh-500">(1:1 png or jpeg)</span>
            </p>
            <Flex align="center" gap={10}>
              <div
                className={`w-16 h-16 rounded-full ${
                  isImg ? "" : "bg-brandAsh-800"
                }`}
              >
                {isImg ? (
                  <img
                    src={bgTest}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : null}
              </div>
              <div className="flex items-center">
                <div>
                  <Button
                    type="link"
                    className="!p-1 !text-brandAsh !h-0"
                    icon={<PiUploadSimpleBold />}
                  >
                    {isImg ? "Replace" : "Upload"}
                  </Button>
                </div>
                <div>
                  <Button type="link" className="!p-1 !text-brandRed-100 !h-0">
                    Remove
                  </Button>
                </div>
              </div>
            </Flex>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <Row gutter={10}>
              <Col span={12}>
                <CustomInputField label={"First name"} placeholder="John" />
              </Col>
              <Col span={12}>
                <CustomInputField label={"Last name"} placeholder="Deo" />
              </Col>
            </Row>

            <CustomSelect
              label="Position"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <CustomSelect
              label="Brand name"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />

            <CustomSelect
              label="Industry"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <CustomInputField label={"Website"} placeholder="URL" />
            <CustomSelect
              label="Country"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Button type="primary" className="!mt-3">
              Finish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
