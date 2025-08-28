import React from "react";
import reelpayLogo from "../assets/images/svg/reelpaylogo.svg";

const CustomLogo = () => {
  return (
    <div>
      <img src={reelpayLogo} className="object-fit w-38" />
    </div>
  );
};

export default CustomLogo;
