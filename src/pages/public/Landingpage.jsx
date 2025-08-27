import { Button } from "antd";

const Landingpage = () => {
  return (
    <div style={{ color: "red", fontSize: "50px" }}>
      Landingpage
      <Button type="primary">Button</Button>
      <Button type="primary" color="red">
        Button
      </Button>
      <Button type="primary" disabled={true}>
        Button
      </Button>
      <Button type="default">Button</Button>
    </div>
  );
};

export default Landingpage;
