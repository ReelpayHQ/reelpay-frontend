import React from "react";

const FormBlock = ({ title, style = "py-4", children,childrenStyle='px-5 mt-2' }) => {
  return (
    <div className={`rounded-lg bg-white shadow-formblock ${style}`}>
     {title? <h1 className="font-semibold text-size16 text-brandBlack border-b border-brandAsh-900 px-5 pb-2">
        {title}
      </h1>:null}
      <div className={`${childrenStyle}`}>{children}</div>
    </div>
  );
};

export default FormBlock;
