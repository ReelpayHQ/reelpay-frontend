import { Col, Flex, Row } from "antd";
import reelpayAuthBg from "../../assets/images/img/reelpayauthbg.png";

const Authpage = () => {
  return (
    <Row className="h-screen min-h-screen border border-amber-900">
      <Col xs={24} lg={16}>
        <div className="h-screen">
          <div>lkll</div>
          <Flex justify="center" align="center" className="border">
            <div className="border border-amber-600 w-95 max-w-95">hjhjh</div>
          </Flex>
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
