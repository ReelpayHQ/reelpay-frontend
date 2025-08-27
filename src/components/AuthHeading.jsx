import React from "react";

const AuthHeading = ({ heading, title }) => {
  return (
    <div className="text-center">
      <h1 className="text-size32 font-semibold text-brandBlack">{heading}</h1>
      <p className="text-base text-brandAsh">{title}</p>
    </div>
  );
};

export default AuthHeading;
