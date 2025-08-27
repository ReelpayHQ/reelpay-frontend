import { Button, Col, Flex, Row } from "antd";
import reelpayAuthBg from "../../assets/images/img/reelpayauthbg.png";
import reelpayLogo from "../../assets/images/svg/reelpaylogo.svg";
import AuthHeading from "../../components/AuthHeading";

const Authpage = () => {
  return (
    <Row className="h-screen min-h-screen border border-amber-900">
      <Col xs={24} lg={16}>
        <div className="h-screen py-5 px-4 md:px-10">
          <Flex align="center" justify="space-between">
            <div>
              <img src={reelpayLogo} className="object-fit w-38" />
            </div>
            <Flex align="center">
              <p className="hidden md:block text-sm text-brandAsh">Already have an account?</p>
              <Button type="link" className="!p-1 !text-brandPink">
                Log in
              </Button>
            </Flex>
          </Flex>
         <div className="mt-16 md:mt-36">
           <Flex justify="center" align="center">
            <div className="w-96 max-w-96">
              <AuthHeading heading={'Create an account'} title={'Gain access to a growing network of over 300+ creators and 20+ brands.'}/>
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

export default Authpage;
