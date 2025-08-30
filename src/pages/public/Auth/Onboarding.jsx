import bgimage from "../../../assets/images/img/onboardingbg.png";
import CustomLogo from "../../../components/CustomLogo";
import AuthHeading from "../../../components/AuthHeading";
import { Button, Col, Flex, Row, Upload } from "antd";
import CustomInputField from "../../../components/fields/CustomInputField";
import CustomSelect from "../../../components/fields/CustomSelect";
import { PiUploadSimpleBold } from "react-icons/pi";
import bgTest from "../../../assets/images/img/bg-test.jpg";
import { Formik } from "formik";
import { object, string } from "yup";
import { useState } from "react";

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
  // email: string()
  //   .email("Value should be an email format")
  //   .required("Please enter your email"),
  // password: string().required("Please enter your password"),
});

const onCompleteOnboarding = (values) => {
  console.log(values);
};

const Onboarding = () => {
  const [imgUrl, setImgUrl] = useState("");
  // const isImg = !true;
  return (
    <div className="relative w-full h-screen overflow-auto xl:overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute w-full top-0 h-[200vh] animate-scrollLoop"
          style={{
            // height: '200vh',
            // top: '0%',
            backgroundImage: `linear-gradient(to right, hsla(311, 95%, 15%, 0.9), hsla(258, 92%, 14%, 0.9)),url(${bgimage})`,
            // backgroundImage: `repeating-linear-gradient(
            //   0deg,
            //   #ff6b6b 0px,
            //   #4ecdc4 100px,
            //   #45b7d1 200px,
            //   #96ceb4 300px,
            //   #feca57 400px,
            //   #ff6b6b 500px
            // )`,
            animation: "scrollVertical 50s linear infinite",
          }}
        />

        <div
          className="absolute w-full top-[100vh] h-[200vh] animate-scrollLoop"
          style={{
            // height: '200vh',
            // top: '100vh',
            backgroundImage: `linear-gradient(to right, hsla(311, 95%, 15%, 0.9), hsla(258, 92%, 14%, 0.9)),url(${bgimage})`,
            // backgroundImage: `repeating-linear-gradient(
            //   0deg,
            //   #ff6b6b 0px,
            //   #4ecdc4 100px,
            //   #45b7d1 200px,
            //   #96ceb4 300px,
            //   #feca57 400px,
            //   #ff6b6b 500px
            // )`,
            // animation: 'scrollVertical 50s linear infinite'
          }}
        />
      </div>

      <div className="relative z-10 h-full text-white">
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
              {({ values, setFieldValue }) => {
                console.log(values);
                // let imgUrl = "";
                // window.URL.createObjectURL(values?.file)

                return (
                  <form>
                    <div className="mt-5">
                      <p className="font-medium text-sm text-brandAsh">
                        Brand logo{" "}
                        <span className="text-brandAsh-500">
                          (1:1 png or jpeg)
                        </span>
                      </p>
                      <Flex align="center" gap={10}>
                        <div
                          className={`w-16 h-16 rounded-full ${
                            imgUrl ? "" : "bg-brandAsh-800"
                          }`}
                        >
                          {imgUrl ? (
                            <img
                              src={imgUrl}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : null}
                        </div>
                        <div className="flex items-center gap-2">
                          <div>
                            <Upload
                              showUploadList={false}
                              name=""
                              accept="/image*"
                              onChange={(e) => {
                                console.log(e);
                                const file = e?.fileList[0];
                                const imgUrl = window.URL.createObjectURL(
                                  file?.originFileObj
                                );
                                setImgUrl(imgUrl);
                                setFieldValue("file", file?.originFileObj);
                              }}
                            >
                              <Button
                                type="link"
                                className="!p-1 !text-brandAsh !h-0 !flex !gap-1 !items-center "
                                icon={<PiUploadSimpleBold />}
                              >
                                {imgUrl ? "Replace" : "Upload"}
                              </Button>
                            </Upload>
                          </div>
                          <div>
                            <Button
                              type="link"
                              className="!p-1 !text-brandRed-100 !h-0"
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </Flex>
                    </div>
                    <div className="flex flex-col gap-1 mt-5">
                      <Row gutter={10}>
                        <Col span={12}>
                          <CustomInputField
                            label={"First name"}
                            placeholder="John"
                          />
                        </Col>
                        <Col span={12}>
                          <CustomInputField
                            label={"Last name"}
                            placeholder="Deo"
                          />
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
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>

    // <div className=" relative h-screen overflow-auto xl:overflow-hidden">
    //   <div
    //     className="absolute top-0 left-0 w-full h-[200%] bg-cover bg-repeat-y animate-none md:animate-scrollLoop -z-10"
    //     style={{
    //       backgroundImage: `linear-gradient(to right, hsla(311, 95%, 15%, 0.9), hsla(258, 92%, 14%, 0.9)),url(${bgimage})`,
    //     }}
    //   />

    //   <div className="w-9/10 md:w-100 m-auto mt-0 md:mt-20 lg:mt-0 py-5">
    //     <div className="flex items-center justify-center mb-4">
    //       <CustomLogo transparent={true} />
    //     </div>

    //     <div className="rounded-2xl bg-white shadow-sm px-4 py-5">
    //       <AuthHeading
    //         headingSize="text-xl"
    //         heading={"Complete your brand profile"}
    //         title={"Provide your brand details"}
    //       />

    //       <Formik
    //         initialValues={initialValue}
    //         validationSchema={validationSchema}
    //         validateOnChange={false}
    //         validateOnBlur={true}
    //         onSubmit={onCompleteOnboarding}
    //       >
    //         {({values, setFieldValue }) => {
    //           console.log(values)
    //           let imgUrl = window.URL.createObjectURL(values?.file)

    //           return (
    //             <form>
    //               <div className="mt-5">
    //                 <p className="font-medium text-sm text-brandAsh">
    //                   Brand logo{" "}
    //                   <span className="text-brandAsh-500">
    //                     (1:1 png or jpeg)
    //                   </span>
    //                 </p>
    //                 <Flex align="center" gap={10}>
    //                   <div
    //                     className={`w-16 h-16 rounded-full ${
    //                       imgUrl ? "" : "bg-brandAsh-800"
    //                     }`}
    //                   >
    //                     {imgUrl ? (
    //                       <img
    //                         src={imgUrl}
    //                         className="w-full h-full rounded-full object-cover"
    //                       />
    //                     ) : null}
    //                   </div>
    //                   <div className="flex items-center gap-2">
    //                     <div>
    //                       <Upload
    //                         showUploadList={false}
    //                         name=""
    //                         accept="/image*"
    //                         onChange={(e) => {
    //                           console.log(e);
    //                           const file = e?.fileList[0]
    //                           setFieldValue("file", file?.originFileObj);

    //                         }}
    //                       >
    //                         <Button
    //                           type="link"
    //                           className="!p-1 !text-brandAsh !h-0 !flex !gap-1 !items-center "
    //                           icon={<PiUploadSimpleBold />}
    //                         >
    //                           {imgUrl ? "Replace" : "Upload"}
    //                         </Button>
    //                       </Upload>
    //                     </div>
    //                     <div>
    //                       <Button
    //                         type="link"
    //                         className="!p-1 !text-brandRed-100 !h-0"
    //                       >
    //                         Remove
    //                       </Button>
    //                     </div>
    //                   </div>
    //                 </Flex>
    //               </div>
    //               <div className="flex flex-col gap-1 mt-5">
    //                 <Row gutter={10}>
    //                   <Col span={12}>
    //                     <CustomInputField
    //                       label={"First name"}
    //                       placeholder="John"
    //                     />
    //                   </Col>
    //                   <Col span={12}>
    //                     <CustomInputField
    //                       label={"Last name"}
    //                       placeholder="Deo"
    //                     />
    //                   </Col>
    //                 </Row>

    //                 <CustomSelect
    //                   label="Position"
    //                   options={[
    //                     { value: "jack", label: "Jack" },
    //                     { value: "lucy", label: "Lucy" },
    //                     { value: "Yiminghe", label: "yiminghe" },
    //                   ]}
    //                 />
    //                 <CustomSelect
    //                   label="Brand name"
    //                   options={[
    //                     { value: "jack", label: "Jack" },
    //                     { value: "lucy", label: "Lucy" },
    //                     { value: "Yiminghe", label: "yiminghe" },
    //                   ]}
    //                 />

    //                 <CustomSelect
    //                   label="Industry"
    //                   options={[
    //                     { value: "jack", label: "Jack" },
    //                     { value: "lucy", label: "Lucy" },
    //                     { value: "Yiminghe", label: "yiminghe" },
    //                   ]}
    //                 />
    //                 <CustomInputField label={"Website"} placeholder="URL" />
    //                 <CustomSelect
    //                   label="Country"
    //                   options={[
    //                     { value: "jack", label: "Jack" },
    //                     { value: "lucy", label: "Lucy" },
    //                     { value: "Yiminghe", label: "yiminghe" },
    //                   ]}
    //                 />
    //                 <Button type="primary" className="!mt-3">
    //                   Finish
    //                 </Button>
    //               </div>
    //             </form>
    //           );
    //         }}
    //       </Formik>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Onboarding;

// const imgUrl = window.URL.createObjectURL('')
// URL.createObjectURL(values?.file)
// if(values?.file){
//  imgUrl = window.URL.createObjectURL(values?.file)
//                   console.log(imgUrl)
// }
// //  const imgUrl = ''
