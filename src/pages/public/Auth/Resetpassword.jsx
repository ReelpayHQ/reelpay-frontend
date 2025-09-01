import CustomLogo from "../../../components/CustomLogo";
import AuthHeading from "../../../components/AuthHeading";
import CustomInputField from "../../../components/fields/CustomInputField";
import { Button } from "antd";
import { PiKey, PiLockKeyLight, PiCheck } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigate } from "react-router";

const Resetpassword = () => {
  const showEmailSent = false;
  const showResetField = false;
  const done = !true;
  const navigate = useNavigate();
  return (
    <div className="h-screen py-5 px-7 md:px-10 flex flex-col">
      <CustomLogo />
      <div className="flex-1 flex justify-center mt-10">
        <div className="w-full md:w-96 max-w-96 mt-10">
          {showEmailSent ? (
            <>
              <AuthHeading
                heading={"Check your mail"}
                Icon={CiLocationArrow1}
                title={
                  "Remember to check your spam folder if you don't receive the email."
                }
                subtext={
                  <p className="text-brandAsh text-sm my-2">
                    We sent an email to{" "}
                    <span className="font-medium text-brandBlack">
                      abdulrazk@reelpay.co
                    </span>
                  </p>
                }
              />
              <Button block={true} type="primary" className="!mt-8">
                Back to login
              </Button>
            </>
          ) : showResetField ? (
            <>
              <AuthHeading
                heading={"Reset your password"}
                Icon={PiLockKeyLight}
                title={"This will reset your password and it cannot be undone"}
                subtext={
                  <p className="text-brandAsh text-sm my-2">
                    We sent an email to{" "}
                    <span className="font-medium text-brandBlack">
                      abdulrazk@reelpay.co
                    </span>
                  </p>
                }
              />
              <div className="mt-8">
                <div>
                  <CustomInputField
                    label={"New password"}
                    placeholder=""
                    type={"password"}
                  />
                  <span className="text-brandAsh text-xs">
                    Password must contain a letter and a number, and be minimum
                    of 6 characters.
                  </span>
                </div>
                <div className="mt-2">
                  <CustomInputField
                    label={"Confirm password"}
                    placeholder=""
                    type={"password"}
                  />
                </div>
              </div>
              <Button block={true} type="primary" className="!mt-8">
                Confirm
              </Button>
            </>
          ) : done ? (
            <>
              <AuthHeading
                heading={"Password updated"}
                Icon={PiCheck}
                iconWrapperBg="bg-brandGreen"
                iconProps={{
                  color: "white",
                }}
                title={"Now head on to log into your account."}
              />
              <div className="mt-8">
                <Button
                  block={true}
                  type="primary"
                  className="!mt-8"
                  onClick={() => navigate("/login")}
                >
                  Continue to login
                </Button>
              </div>
            </>
          ) : (
            <>
              <AuthHeading
                heading={"Reset Password"}
                Icon={PiKey}
                title={
                  "Enter the email address you registered with and we will send you a link to reset your password"
                }
              />
              <div className="mt-8">
                <CustomInputField
                  label={"Email address"}
                  placeholder="johndoe@gmail.com"
                />
                <Button block={true} type="primary" className="!mt-8">
                  Send password reset link
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
