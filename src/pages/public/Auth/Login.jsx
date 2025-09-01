import CustomInputField from "../../../components/fields/CustomInputField";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import { object, string } from "yup";

const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const onLogin = (values) => {
    console.log(values);
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
        onSubmit={onLogin}
      >
        {({ values, handleChange, handleSubmit, errors, isSubmitting }) => {
          return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <CustomInputField
                label={"Email"}
                placeholder="johndoe@gmail.com"
                name="email"
                onChange={handleChange}
                value={values?.email}
                error={errors?.email}
              />
              <div>
                <CustomInputField
                  label={"Password"}
                  placeholder=""
                  type={"password"}
                  name="password"
                  onChange={handleChange}
                  error={errors?.password}
                  value={values?.password}
                />
                <div className="flex items-center justify-end mt-2">
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
              </div>
              <Button
                block={true}
                type="primary"
                className="!mt-8"
                htmlType="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
              >
                Continue
              </Button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
