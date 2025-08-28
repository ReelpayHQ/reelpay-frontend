import CustomInputField from "../../../components/fields/CustomInputField";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <CustomInputField label={"Email"} placeholder="johndoe@gmail.com" />
      <CustomInputField label={"Password"} placeholder="" type={"password"} />
      <div className="flex items-center justify-end">
        <Button
          type="link"
          className="!p-1 !text-brandPink !h-0"
          onClick={() => {
            navigate("/reset-password");
          }}
        >
          Forgot password?
        </Button>
      </div>
      <Button type="primary" className="!mt-8">
        Continue
      </Button>
    </>
  );
};

export default Login;
