import { Button } from "antd";
import { Link } from "react-router";

const Landingpage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl text-brandPink font-bold">
        Landingpage coming soon
      </h1>
      <Link to={"/login"}>
        <Button type="primary" className="!mt-5 !w-30">
          Login
        </Button>
      </Link>
      {/* <Button type="primary">Button</Button>
      <Button type="primary" color="red">
        Button
      </Button>
      <Button type="primary" disabled={true}>
        Button
      </Button>
      <Button type="default">Button</Button> */}
    </div>
  );
};

export default Landingpage;
