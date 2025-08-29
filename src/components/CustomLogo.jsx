import React from "react";
import reelpayLogo from "../assets/images/svg/reelpaylogo.svg";
import transparentlogo from "../assets/images/svg/transparentlogo.svg";

const CustomLogo = ({ transparent }) => {
  return (
    <div>
      <img
        src={transparent ? transparentlogo : reelpayLogo}
        className="object-fit w-38"
      />
    </div>
  );
};

export default CustomLogo;
