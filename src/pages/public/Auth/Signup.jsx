import CustomInputField from "../../../components/fields/CustomInputField";
import { Button, Checkbox, Flex } from "antd";
import { Formik } from "formik";
import { useNavigate, useOutletContext } from "react-router";
import { object, string } from "yup";

const initialValue = {
  email: "",
  password: "",
  checked: null,
};

const AgreementText = ({ text }) => {
  return <span className="text-brandBlack">{text}</span>;
};
const Signup = () => {
  const contextValue = useOutletContext();

  const navigate  = useNavigate()

  const onSignup = (values) => {
    console.log(values);
    navigate('/onboarding')
  };

  const validationSchema = object({
    email: string()
      .email("Value should be an email format")
      .required("Please enter your email"),
    password: string().required("Please enter your password"),
  });

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={onSignup}
      >
        {({ values, handleChange, handleSubmit, errors, isSubmitting }) => {
          return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <CustomInputField
                label={"Business email"}
                name="email"
                onChange={handleChange}
                value={values?.email}
                error={errors?.email}
              />
              <div>
                <CustomInputField
                  label={"Set password"}
                  placeholder=""
                  type={"password"}
                  name="password"
                  onChange={handleChange}
                  error={errors?.password}
                  value={values?.password}
                />
                <Checkbox
                  className="!mt-2"
                  name="checked"
                  onChange={handleChange}
                >
                  <p className="text-xs text-brandAsh">
                    You agree to our <AgreementText text={"Terms of Service"} />{" "}
                    and <AgreementText text={"Privacy Policy."} />
                  </p>
                </Checkbox>
              </div>
              <Button
                type="primary"
                className="!mt-8"
                htmlType="submit"
                disabled={!values?.checked || isSubmitting}
                loading={isSubmitting}
              >
                Continue as {contextValue?.isCreator ? "Creator" : "Brand"}
              </Button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default Signup;
