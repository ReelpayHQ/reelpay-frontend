import bgimage from "../../../assets/images/img/onboardingbg.png";
import CustomLogo from "../../../components/CustomLogo";
import AuthHeading from "../../../components/AuthHeading";
import { Button, Col, Row } from "antd";
import CustomInputField from "../../../components/fields/CustomInputField";
import CustomSelect from "../../../components/fields/CustomSelect";
import { Formik } from "formik";
import { object, string, mixed } from "yup";
import { fileSizeValidation } from "../../../utils/fileSizeValidation";
import {
  countriesOptions,
  industryOptions,
  positionOptions,
} from "../../../data/optiondropdowns";
import OnboardingForms from "./OnboardingForms";

const initialValue = {
  file: null,
  firstName: "",
  lastName: "",
  position: "",
  brandName: "",
  industry: "",
  website: "",
  country: "",
};

const validationSchema = object({
  file: mixed()
    .required("An image is required")
    .test(
      "fileSize",
      "File size can't be more than 2MB",
      (value) => !value || (value && fileSizeValidation(value))
    ),
  firstName: string().required("Please enter your first name"),
  lastName: string().required("Please enter your last name"),
  position: string().required("Please select a position"),
  brandName: string().required("Please  enter your brand name"),
  industry: string().required("Please select your industry"),
  website: string().required("Please  enter your website url"),
  country: string().required("Please  enter your country"),
});

const onCompleteOnboarding = (values) => {
  console.log(values);
};

const Onboarding = () => {
  return (
    <div className="h-screen">
      <div className="relative w-full h-screen overflow-auto xl:overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute w-full top-0 h-[200vh] animate-scrollLoop"
            style={{
              backgroundImage: `linear-gradient(to right, hsla(311, 95%, 15%, 0.9), hsla(258, 92%, 14%, 0.9)),url(${bgimage})`,
            }}
          />

          <div
            className="absolute w-full top-[100vh] h-[200vh] animate-scrollLoop"
            style={{
              backgroundImage: `linear-gradient(to right, hsla(311, 95%, 15%, 0.9), hsla(258, 92%, 14%, 0.9)),url(${bgimage})`,
            }}
          />
        </div>

        <div className="relative z-10 h-full text-white overflow-auto">
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

              <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={true}
                onSubmit={onCompleteOnboarding}
              >
                {({
                  values,
                  setFieldValue,
                  handleSubmit,
                  handleChange,
                  errors,
                }) => {
                  const {
                    file,
                    firstName,
                    lastName,
                    position,
                    brandName,
                    industry,
                    website,
                    country,
                  } = values;
                  const disabled = !(
                    file &&
                    firstName &&
                    lastName &&
                    position &&
                    brandName &&
                    industry &&
                    website &&
                    country
                  );
                  return (
                    <form onSubmit={handleSubmit}>
                      <OnboardingForms />

                      <div className="flex flex-col gap-1 mt-5">
                        <Row gutter={10}>
                          <Col span={12}>
                            <CustomInputField
                              label={"First name"}
                              placeholder="John"
                              name="firstName"
                              value={values?.firstName}
                              error={errors?.firstName}
                              onChange={handleChange}
                            />
                          </Col>
                          <Col span={12}>
                            <CustomInputField
                              label={"Last name"}
                              placeholder="Doe"
                              name="lastName"
                              value={values?.lastName}
                              error={errors?.lastName}
                              onChange={handleChange}
                            />
                          </Col>
                        </Row>

                        <CustomSelect
                          label="Position"
                          options={positionOptions}
                          onChange={(e) => setFieldValue("position", e)}
                          error={errors?.position}
                        />
                        <CustomInputField
                          label={"Brand name"}
                          placeholder="e.g Acme Corp"
                          name="brandName"
                          value={values?.brandName}
                          error={errors?.brandName}
                          onChange={handleChange}
                        />

                        <CustomSelect
                          label="Industry"
                          options={industryOptions}
                          onChange={(e) => setFieldValue("industry", e)}
                          error={errors?.industry}
                        />
                        <CustomInputField
                          label={"Website"}
                          placeholder="URL"
                          name="website"
                          onChange={handleChange}
                          value={values?.website}
                          error={errors?.website}
                        />
                        <CustomSelect
                          label="Country"
                          options={countriesOptions}
                          error={errors?.country}
                          onChange={(e) => setFieldValue("country", e)}
                        />
                        <Button
                          type="primary"
                          className="!mt-3"
                          htmlType="submit"
                          disabled={disabled}
                        >
                          Finish
                        </Button>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
