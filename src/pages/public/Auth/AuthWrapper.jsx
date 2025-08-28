import { Button, Col, Divider, Flex, Row } from "antd";
import { Outlet } from "react-router";
import reelpayAuthBg from "../../../assets/images/img/reelpayauthbg.png";
import reelpayLogo from "../../../assets/images/svg/reelpaylogo.svg";
import AuthHeading from "../../../components/AuthHeading";
import Google from "../../../assets/images/svg/google.svg";

const AuthWrapper = () => {
  const isSignup = true;
  const isCreator = "creator";
  return (
    <Row className="h-screen min-h-screen">
      <Col xs={24} lg={16}>
        <div className="h-screen py-5 px-4 md:px-10 border-2">
          <Flex align="center" justify="space-between">
            <div>
              <img src={reelpayLogo} className="object-fit w-38" />
            </div>
            <Flex align="center">
              <div className="w-14 h-7">
                <Button
                  type="primary"
                  block={true}
                  className="!bg-brandAsh-300 !text-brandAsh !h-full"
                >
                  {isSignup ? "Log in" : "Sign up"}
                </Button>
              </div>
            </Flex>
          </Flex>
          <div className="mt-16 md:mt-32 h-8/10">
            <Flex justify="center" align="center">
              <div className="w-96 max-w-96 flex flex-col justify-between">
                <div>
                  <AuthHeading
                    heading={!isSignup ? "Welcome back" : "Sign up"}
                    ctaText={
                      !isSignup ? "" : isCreator ? "as a Creator" : "as a Brand"
                    }
                    title={
                      !isSignup
                        ? "Log in to your account to manage your campaigns"
                        : isCreator
                        ? "Gain access to a network of over 30+ Brands."
                        : "Gain access to a network of over 300+ creators."
                    }
                  />
                  <Flex className="flex-col gap-2 !mt-8">
                    <Outlet context={{ isCreator }} />
                  </Flex>
                  <div>
                    <Flex align="center">
                      <div className="w-5/10">
                        <Divider className="bg-brandAsh-300" />
                      </div>
                      <p className="px-3 text-brandAsh-500">or</p>
                      <div className="w-5/10">
                        <Divider className="bg-brandAsh-300" />
                      </div>
                      <div />
                    </Flex>

                    <Button
                      block={true}
                      className="!bg-brandAsh-600 !text-brandBlack !border !border-brandAsh-600"
                    >
                      <img src={Google} className="object-fit" />
                      Continue with Google
                    </Button>
                  </div>
                </div>
              </div>
            </Flex>
          </div>
        </div>
      </Col>

      <Col
        xs={0}
        lg={8}
        className="h-screen fixed right-0 top-0 w-full overflow-auto"
      >
        <div
          className={` h-screen bg-cover bg-no-repeat`}
          style={{
            backgroundImage: `url(${reelpayAuthBg})`,
            backgroundPosition: "right center",
          }}
        />
      </Col>
    </Row>
  );
};

export default AuthWrapper;
//  <div className="text-center">
//                   <p className="text-size13 capitalize text-brandAsh mt-4 md:mt-0">
//                     Are you a {isCreator}?{" "}
//                     <span className="text-brandPink">
//                       {!isSignup ? "Log in" : "Sign up"}here
//                     </span>
//                   </p>
//                 </div>
