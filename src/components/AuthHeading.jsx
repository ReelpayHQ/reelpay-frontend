import React from "react";

const AuthHeading = ({ heading, title, ctaText }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-size32 font-semibold text-brandBlack flex items-center gap-1">
        {heading}
        {ctaText ? <p className="text-brandPink">{ctaText}</p> : null}
      </h1>
      <p className="text-base text-brandAsh">{title}</p>
    </div>
  );
};

export default AuthHeading;
