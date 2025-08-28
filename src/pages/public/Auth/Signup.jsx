import CustomInputField from "../../../components/fields/CustomInputField";
import { Button, Checkbox, Flex } from "antd";
import { useOutletContext } from "react-router";

const AgreementText = ({ text }) => {
  return <span className="text-brandBlack">{text}</span>;
};
const Signup = () => {
  const contextValue = useOutletContext();
  return (
    <>
      <CustomInputField label={"Business email"} />
      <CustomInputField
        label={"Set password"}
        placeholder=""
        type={"password"}
      />
      <Checkbox>
        <p className="text-xs text-brandAsh">
          You agree to our <AgreementText text={"Terms of Service"} /> and{" "}
          <AgreementText text={"Privacy Policy."} />
        </p>
      </Checkbox>
      <Button type="primary" className="!mt-8">
        Continue as {contextValue?.isCreator ? "Creator" : "Brand"}
      </Button>
    </>
  );
};

export default Signup;
