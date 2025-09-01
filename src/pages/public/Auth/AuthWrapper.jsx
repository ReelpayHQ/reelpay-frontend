import { Button, Col, Divider, Flex, Row } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router";
import reelpayAuthBg from "../../../assets/images/img/reelpayauthbg.png";
import AuthHeading from "../../../components/AuthHeading";
import Google from "../../../assets/images/svg/google.svg";
import CustomLogo from "../../../components/CustomLogo";

const AuthWrapper = () => {
  const user = "creator";
  const isCreator = user === "creator";

  const location = useLocation();
  const navigate = useNavigate();

  const isSignup = location?.pathname?.includes("signup");
  return (
    <Row className="h-screen min-h-screen">
      <Col xs={24} lg={16}>
        <div className="h-screen flex flex-col py-5 px-4 md:px-10">
          <Flex align="center" justify="space-between">
            <CustomLogo />
            <Flex align="center">
              <div className="w-15 h-7">
                <Button
                  type="primary"
                  block={true}
                  className="!bg-brandAsh-300 !text-brandAsh !h-full"
                  onClick={() => {
                    if (isSignup) {
                      navigate("/login");
                    } else {
                      navigate("/signup");
                    }
                  }}
                >
                  {isSignup ? "Log in" : "Sign up"}
                </Button>
              </div>
            </Flex>
          </Flex>
          <div className="mt-16 md:mt-20 flex flex-1 flex-col justify-between w-full md:w-96 max-w-96 m-auto">
            <div>
              <AuthHeading
                heading={isSignup ? "Sign up" : "Welcome back"}
                ctaText={
                  isSignup ? (isCreator ? "as a Creator" : "as a Brand") : ""
                }
                title={
                  isSignup
                    ? isCreator
                      ? "Gain access to a network of over 30+ Brands."
                      : "Gain access to a network of over 300+ creators."
                    : "Log in to your account to manage your campaigns"
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
            <div className="text-center py-2 md:p-0">
              <p className="text-size13 capitalize text-brandAsh mt-4 md:mt-0">
                Are you a {isCreator}?{" "}
                <span className="text-brandPink">
                  {isSignup ? "Sign up" : "Log in"} here
                </span>
              </p>
            </div>
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
